import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import find from 'lodash.find';
import msToDays from '../../utils/scripts/msToDays';
import fetchDataToHook from '../../utils/scripts/fetchDataToHook';
import styles from './item.css';

const githubAPI = 'https://api.github.com/';
const jsdelivrAPI = 'https://data.jsdelivr.com/v1';
const githubToken = `token ${process.env.TOKEN}`;

function Item({ repo, bundleData }) {
  const s = classnames.bind(styles);
  const [repoData, setRepoData] = useState(false);
  const [githubBundleData, setGithubBundleData] = useState(false);
  const [jsdelivrBundleData, setJsdelivrBundleData] = useState(false);

  useEffect(() => {
    fetchDataToHook({
      api: githubAPI,
      callback: setRepoData,
      path: `repos/${repo}`,
      headers: {
        Authorization: githubToken,
      },
    });

    if (bundleData && bundleData.github) {
      console.log(`fetch: ${  bundleData.github.fileName}`);
  
      fetchDataToHook({
        api: githubAPI,
        callback: setGithubBundleData,
        path: `repos/${repo}/contents/${bundleData.github.directory}`,
        headers: {
          Authorization: githubToken,
        },
      });
    }

    if (bundleData && bundleData.jsdelivr) {
      const apiURL = `${jsdelivrAPI}/package/npm/${bundleData.jsdelivr.libName}`;

      fetch(apiURL)
        .then(response => response.json())
        .then(versions => {
          const lastLibVersion = versions.tags.latest;

          fetchDataToHook({
            api: apiURL,
            callback: setJsdelivrBundleData,
            path: `@${lastLibVersion}`,
          });
        });
    }
  }, [0]);

  let bundleFileSize = null;

  if (githubBundleData) {
    // Don't get file directly because return all file content. For example see to
    // property "content" at https://api.github.com/repos/maxwellito/vivus/contents/dist/vivus.min.js
    // I just need to get bundle size and I don't want download full content of bundle
    const bundle = find(githubBundleData, { name: bundleData.github.fileName });
    bundleFileSize = bundle ? bundle.size : null;
  }

  if (jsdelivrBundleData) {
    let distDirectory;
    let bundle = find(jsdelivrBundleData.files, { name: bundleData.jsdelivr.fileName });

    if (!bundle) {
      distDirectory = find(jsdelivrBundleData.files, { name: 'dist' });
      bundle = find(distDirectory.files, { name: bundleData.jsdelivr.fileName });
    }

    bundleFileSize = bundle ? bundle.size : null;
  }

  let daysAgoUpdated;

  if (repoData.pushed_at) {
    const updateDate = Date.parse(repoData.pushed_at);
    const timeElapsed = Date.now() - updateDate;
    daysAgoUpdated = Math.round(msToDays(timeElapsed));
  }

  return (
    <div className={s('item')}>
      <a
        href={repoData.homepage || repoData.homepage}
        aria-label={`Link to ${repoData.name}`}
        className={s('itemLink')}
      >
        {' '}
      </a>
      <div className={s('itemHeader')}>
        {repoData && (
          <img
            className={s('repoOwnerLogo')}
            src={repoData.owner.avatar_url}
            alt={repoData.owner.login}
          />
        )}
        <h3 className={s('name')}> {repoData.name} </h3>
      </div>
      <p className={s('description')}> {repoData.description} </p>
      <div className={s('info')}>
        <div className={s('infoItem')}>
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">
              Issues:
            </span>
            {repoData.open_issues_count}
          </a>
        </div>
        <div className={s('infoItem')}>
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">
              ⭐
            </span>
            {repoData.stargazers_count}
          </a>
        </div>
        <div className={s('infoItem')}>
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">
              🔥 updated{' '}
            </span>
            {daysAgoUpdated} days ago
          </a>
        </div>
        {bundleFileSize && (
          <div className={s('infoItem')}>
            <a href={repoData.stargazers_url}>
              <span role="img" aria-label="link">
                Bundle size{' '}
              </span>
              {Math.round(bundleFileSize / 1000)}kb
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

Item.propTypes = {
  repo: PropTypes.string.isRequired,
};

export default Item;
