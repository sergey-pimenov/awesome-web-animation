import React from 'react';
import useFetch from "react-fetch-hook";
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis/lib/loose';
import endpoint from '../../endpoints.json';
import InfoBar from '../infoBar';
import s from './item.css';

function Item({ repo, bundleData }) {
  const { isLoading, data: repoData } = useFetch(`${endpoint.github}repos/${repo}`, {headers: new Headers({
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  })});

  return (
    <div className={s.item}>
      {!isLoading && repoData && (
        <div className={s.itemContent}>
          <a
            href={repoData.homepage || repoData.html_url}
            target="_blank"
            rel="noopener noreferrer"
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
            <LinesEllipsis
              text={repoData.description}
              maxLine="3"
              lineHeight="20"
              component="p"
              className={s.description}
            />
          )}
          <InfoBar repoData={repoData} bundleData={bundleData} repo={repo} />
        </div>
      )}
    </div>
  );
}

Item.propTypes = {
  repo: PropTypes.string.isRequired,
};

export default Item;
