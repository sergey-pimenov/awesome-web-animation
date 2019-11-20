import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import find from 'lodash.find';
import msToDays from '../../utils/scripts/msToDays';
import styles from './item.css';

const API = 'https://api.github.com/repos/';
const token = `token ${process.env.TOKEN}`;

function Item({ repo, bundleData }) {
  const s = classnames.bind(styles);
  const [repoData, setRepoData] = useState(false);
  const [githubBundleData, setGithubBundleData] = useState(false);

  function fetchData(callback, additional = '') {
    fetch(`${API}${repo}${additional}`, {
      headers: new Headers({
        Authorization: token,
      }),
    })
      .then(response => response.json())
      .then(data => callback(data));
  }

  useEffect(() => {
    fetchData(setRepoData);

    if (bundleData && bundleData.github) {
      fetchData(setGithubBundleData, `/contents/${bundleData.github.directory}`);
    }
  }, [0]);

  let bundleFile;

  if (githubBundleData) {
    // Don't get file directly because return all file content. For example see to
    // property "content" at https://api.github.com/repos/maxwellito/vivus/contents/dist/vivus.min.js
    // I just need to get bundle size and I don't want download full content of bundle
    bundleFile = find(githubBundleData, { name: bundleData.github.fileName });
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
        {bundleFile && (
          <div className={s('infoItem')}>
            <a href={repoData.stargazers_url}>
              <span role="img" aria-label="link">
                Bundle size{' '}
              </span>
              { Math.round(bundleFile.size / 1000)}kb
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
