import React from 'react';
import useFetch from 'react-fetch-hook';
import PropTypes from 'prop-types';
import Item from './item';
import endpoint from '../../endpoints.json';

function Container({ repo, bundleData }) {
  const alreadyAtLocalStorage = localStorage.getItem(repo) && localStorage.getItem(repo) !== 'undefined';
  const repoDataLocalStorage = alreadyAtLocalStorage && JSON.parse(localStorage.getItem(repo));

  const { isLoading, data: repoData } = useFetch(`${endpoint.github}repos/${repo}`, {
    headers: new Headers({
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    }),
    depends: [!alreadyAtLocalStorage],
  });

  const userAPIUrl =
    (repoDataLocalStorage && repoDataLocalStorage.owner && repoDataLocalStorage.owner.url) ||
    (repoData && repoData.owner && repoData.owner.url);

  const { isLoading: isUserDataLoading, data: userData } = useFetch(
    (repoData || alreadyAtLocalStorage) ? userAPIUrl : '',
    {
      headers: new Headers({
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      }),
      depends: [userAPIUrl],
    },
  );

  const isAllDataLoaded = (!isLoading || alreadyAtLocalStorage) && !isUserDataLoading && userData;

  if (!alreadyAtLocalStorage) {
    localStorage.setItem(repo, JSON.stringify(repoData));
  }

  return isAllDataLoaded || alreadyAtLocalStorage ? (
    <Item
      repoData={repoDataLocalStorage || repoData}
      bundleData={bundleData}
      userData={userData}
      repo={repo}
    />
  ) : (<></>);
}

Item.propTypes = {
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

export default Container;
