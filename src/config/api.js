export function githubRepoUrl(repo) {
  return `/api/github/repos/${repo}`;
}

export function jsdelivrPackageUrl(libName, version) {
  if (version) {
    return `/api/jsdelivr/v1/package/npm/${libName}@${version}`;
  }

  return `/api/jsdelivr/v1/package/npm/${libName}`;
}
