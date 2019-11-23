import React from 'react';
import PropTypes from 'prop-types';
import find from 'lodash.find';
import s from './infoBar.css';
import msToDays from '../../utils/scripts/msToDays';

function InfoBar({ repoData, bundleData, githubBundleData, jsdelivrBundleData }) {
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
    <div className={s.infoBar}>
      <div className={s.infoItem}>
        <img className={s.icon} alt="Stars"/>
        {repoData.stargazers_count}
      </div>
      <div className={s.infoItem}>
        <img className={s.icon} alt="Stars"/>
        {daysAgoUpdated} days ago
      </div>
      <div className={s.infoItem}>
        <a href={repoData.stargazers_url}>
          <span role="img" aria-label="link">
            Issues:
          </span>
          {repoData.open_issues_count}
        </a>
      </div>
      {bundleFileSize && (
        <div className={s.infoItem}>
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">
              Bundle size
            </span>
            {Math.round(bundleFileSize / 1000)}kb
          </a>
        </div>
      )}
    </div>
  );
}

InfoBar.propTypes = {
  repoData: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
    pushed_at: PropTypes.string.isRequired,
    open_issues_count: PropTypes.number.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    stargazers_url: PropTypes.string.isRequired,
  }).isRequired]).isRequired
};

export default InfoBar;
