import React from 'react';
import useFetch from "react-fetch-hook";
import PropTypes from 'prop-types';
import Item from './item';
import endpoint from '../../endpoints.json';

function Container({ repo, bundleData }) {
  const { isLoading, data: repoData } = useFetch(`${endpoint.github}repos/${repo}`, {
    headers: new Headers({
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    })
  });

  const userAPIUrl = repoData && repoData.owner && repoData.owner.url; 

  const { isLoading: isUserDataLoading, data: userData } = useFetch(repoData ? repoData.owner.url : '', {
    headers: new Headers({
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
    }),
    depends: [userAPIUrl] // users request will not be called until repoData not loaded
  });

  const isAllDataLoaded = !isLoading && !isUserDataLoading && userData;

  return isAllDataLoaded ? <Item repoData={repoData} bundleData={bundleData} userData={userData} repo={repo}/> : <></>;
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
  })
};

export default Container;
