import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash.find';
import endpoint from '../../endpoints.json';
import fetchDataToHook from '../../utils/scripts/fetchDataToHook';
import s from './infoBar.css';
import msToDays from '../../utils/scripts/msToDays';
import star from './img/star.svg';
import download from './img/download.svg';
import error from './img/error.svg';

function InfoBar({ repoData, bundleData, repo }) {
  let bundleFileSize = null;
  const [githubBundleData, setGithubBundleData] = useState(false);
  const [jsdelivrBundleData, setJsdelivrBundleData] = useState(false);
  const openIssuesCount = repoData ? repoData.open_issues_count.toString() : null;

  useEffect(() => {
    if (bundleData && bundleData.github) {
      fetchDataToHook({
        api: endpoint.github,
        callback: setGithubBundleData,
        path: `repos/${repo}/contents/${bundleData.github.directory}`,
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      });
    }

    if (bundleData && bundleData.jsdelivr) {
      const apiURL = `${endpoint.jsdelivr}/package/npm/${bundleData.jsdelivr.libName}`;

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
      distDirectory = find(jsdelivrBundleData.files, { name: 'dist' }) ||
                      find(jsdelivrBundleData.files, { name: 'bundled' });
  

      if (distDirectory) {
        bundle = find(distDirectory.files, { name: bundleData.jsdelivr.fileName });
      } else {
        console.warn(`Not correct "distDirectory" at jsdelivr for ${repo}`);
      }
    }

    bundleFileSize = bundle ? bundle.size : null;
  }

  let daysAgoUpdated;

  if (repoData.pushed_at) {
    const updateDate = Date.parse(repoData.pushed_at);
    const timeElapsed = Date.now() - updateDate;
    daysAgoUpdated = Math.round(msToDays(timeElapsed)).toString();
  }

  return (
    <div className={s.infoBar}>
      <div className={s.row}>
        {repoData.stargazers_count && (
          <div className={`${s.infoItem} ${s.primary}`}>
            <img className={s.icon} src={star} alt="Total stars on gitgub" />
            {repoData.stargazers_count}
          </div>
        )}
        {bundleFileSize && (
          <div className={`${s.infoItem} ${s.primary}`}>
            <img style={{height: '9px',}} className={s.icon} src={download} alt="Stars" />
            {Math.round(bundleFileSize / 1000)} kb
          </div>
        )}
        {daysAgoUpdated && (
          <div className={s.infoItem}>
            {daysAgoUpdated !== '0' && (<>Updated {daysAgoUpdated} days ago</>)}
            {daysAgoUpdated === '0' && (<>Updated today</>)}
          </div>
        )}
      </div>
      <div className={s.row}>
        {openIssuesCount && (
          <div className={`${s.infoItem} ${s.issues}`} title="Issues on Github">
            <img className={s.icon} src={error} alt="Issues" />
            {openIssuesCount !== '0' && (<>{openIssuesCount} issues</>)}
            {openIssuesCount === '0' && (<>No issues</>)}
          </div>
        )}
      </div>
    </div>
  );
}

InfoBar.propTypes = {
  repoData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      pushed_at: PropTypes.string.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      stargazers_count: PropTypes.number.isRequired,
      stargazers_url: PropTypes.string.isRequired,
    }).isRequired,
  ]).isRequired,
};

export default InfoBar;
