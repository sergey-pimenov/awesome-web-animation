import React from 'react';
import PropTypes from 'prop-types';
import useCachedFetch from '../../hooks/useCachedFetch';
import { CardSkeleton } from '../cardStatus';
import { githubRepoUrl } from '../../config/api';
import Item from './item';

function fallbackRepoData(repo) {
  return {
    name: repo.split('/').pop(),
    html_url: `https://github.com/${repo}`,
  };
}

function ItemContainer({ repo, bundleData }) {
  const { data: repoData, isLoading: isRepoLoading } = useCachedFetch(
    `repo:${repo}`,
    githubRepoUrl(repo),
  );

  if (isRepoLoading) {
    return <CardSkeleton variant="item" />;
  }

  return (
    <Item
      repoData={repoData && repoData.name ? repoData : fallbackRepoData(repo)}
      bundleData={bundleData}
    />
  );
}

ItemContainer.propTypes = {
  repo: PropTypes.string.isRequired,
  bundleData: PropTypes.shape({
    github: PropTypes.shape({
      directory: PropTypes.string,
      fileName: PropTypes.string,
    }),
    jsdelivr: PropTypes.shape({
      libName: PropTypes.string,
      fileName: PropTypes.string,
    }),
  }),
};

ItemContainer.defaultProps = {
  bundleData: null,
};

export default ItemContainer;
