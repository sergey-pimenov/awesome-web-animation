import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import endpoint from '../../endpoints.json';
import fetchDataToHook from '../../utils/scripts/fetchDataToHook';
import InfoBar from '../infoBar';
import s from './item.css';

function Item({ repo, bundleData }) {
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetchDataToHook({
      api: endpoint.github,
      callback: setRepoData,
      path: `repos/${repo}`,
      headers: {
        Authorization: `token ${process.env.TOKEN}`,
      },
    });
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
            {repoData.description && (
              <p className={s.description}> {repoData.description} </p>
            )}
            <InfoBar
              repoData={repoData}
              bundleData={bundleData}
              repo={repo}
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
