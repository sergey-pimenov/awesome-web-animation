import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import yaml from '@rollup/plugin-yaml';
import fs from 'fs';
import path from 'path';

function serveDir(urlBase, diskDir) {
  const absoluteDir = path.resolve(diskDir);
  const types = {
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
  };

  return {
    name: `serve-${urlBase}`,
    configureServer(server) {
      server.middlewares.use(urlBase, (req, res, next) => {
        if ((req.url || '').includes('?import')) {
          next();
          return;
        }

        const relative = decodeURIComponent((req.url || '').split('?')[0]).replace(/^\/+/, '');
        const filePath = path.resolve(absoluteDir, relative);
        if (!filePath.startsWith(absoluteDir)) {
          next();
          return;
        }

        const type = types[path.extname(filePath).toLowerCase()];
        if (!type || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          next();
          return;
        }

        res.setHeader('Content-Type', type);
        fs.createReadStream(filePath).pipe(res);
      });
    },
    closeBundle() {
      const dest = path.resolve('dist', urlBase.replace(/^\/+/, ''));
      fs.cpSync(absoluteDir, dest, { recursive: true });
    },
  };
}

function apiProxy() {
  return {
    '/api/jsdelivr': {
      target: 'https://data.jsdelivr.com',
      changeOrigin: true,
      rewrite: requestPath => requestPath.replace(/^\/api\/jsdelivr/, '') || '/',
    },
  };
}

function githubApiPlugin(env) {
  const token = env.GITHUB_TOKEN || process.env.GITHUB_TOKEN || '';
  const cache = new Map();

  function githubPath(req) {
    const raw = req.originalUrl || req.url || '';
    return raw.split('?')[0].replace(/^\/api\/github/, '') || '/';
  }

  async function handle(req, res) {
    const apiPath = githubPath(req);
    const cached = cache.get(apiPath);
    if (cached) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('X-Proxy-Cache', 'HIT');
      res.end(cached);
      return;
    }

    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'awesome-web-animation',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const upstream = await fetch(`https://api.github.com${apiPath}`, { headers });
    const body = await upstream.text();
    if (upstream.ok) {
      cache.set(apiPath, body);
    }

    res.statusCode = upstream.status;
    res.setHeader('Content-Type', 'application/json');
    res.end(body);
  }

  function middleware(req, res, next) {
    if (req.method !== 'GET') {
      next();
      return;
    }

    handle(req, res).catch(next);
  }

  return {
    name: 'github-api-proxy',
    configureServer(server) {
      server.middlewares.use('/api/github', middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/github', middleware);
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react({ jsxRuntime: 'classic' }),
      {
        ...yaml(),
        enforce: 'pre',
      },
      serveDir('/data', 'data'),
      githubApiPlugin(env),
    ],
    publicDir: fs.existsSync(path.resolve('static')) ? 'static' : false,
    server: {
      port: 1234,
      strictPort: true,
      proxy: apiProxy(),
    },
    preview: {
      port: 1234,
      strictPort: true,
      proxy: apiProxy(),
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
  };
});
