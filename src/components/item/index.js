import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchDataToHook from '../../utils/scripts/fetchDataToHook';
import InfoBar from '../infoBar';
import s from './item.css';

const githubAPI = 'https://api.github.com/';
const jsdelivrAPI = 'https://data.jsdelivr.com/v1';
const githubToken = `token ${process.env.TOKEN}`;

function Item({ repo, bundleData }) {
  const [repoData, setRepoData] = useState(null);
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

  return (
    <div className={s.item}>
      {
        repoData && (
          <div className={s.itemContent}>
            <a
              href={repoData.homepage || repoData.homepage}
              aria-label={`Link to ${repoData.name}`}
              className={s.itemLink}
            > </a>
            <div className={s.itemHeader}>
                <img
                  className={s.repoOwnerLogo}
                  src={repoData.owner.avatar_url}
                  alt={repoData.owner.login}
                />
              <h3 className={s.name}> {repoData.name} </h3>
            </div>
            <p className={s.description}> {repoData.description} </p>
            <InfoBar
              repoData={repoData}
              bundleData={bundleData}
              githubBundleData={githubBundleData}
              jsdelivrBundleData={jsdelivrBundleData}
            />
          </div>
        )
      }
    </div>
  );
}

Item.propTypes = {
  repo: PropTypes.string.isRequired,
};

export default Item;
