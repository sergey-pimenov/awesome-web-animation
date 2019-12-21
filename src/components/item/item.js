import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis/lib/loose';
import InfoBar from '../infoBar';
import s from './item.css';

function Item({ repoData, bundleData = null, userData = null, repo }) {
  return (
    <div className={s.item} itemType="https://schema.org/CreativeWork" itemScope>
      <div className={s.itemContent}>
        <a
          itemProp="url"
          content={repoData.html_url}
          href={repoData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        > Link to {repoData.name} </a>
        <div className={s.itemHeader}>
          {/* <img
            itemProp="image"
            className={s.repoOwnerLogo}
            src={repoData.owner.avatar_url}
            alt={repoData.owner.login}
          /> */}
          <h3 itemProp="name" className={s.name}> {repoData.name} </h3>
        </div>
        {repoData.description && (
          <LinesEllipsis
            text={repoData.description}
            maxLine="3"
            lineHeight="20"
            component="p"
            className={s.description}
            itemProp="about"
          />
        )}
        <InfoBar repoData={repoData} bundleData={bundleData} repo={repo} />
      </div>
      {/* Additional scheme data */}
      {userData && (
        <>
          <meta itemProp="author" content={userData.name}/>
          <meta itemProp="about" content="Web-animation tool"/>
          <meta itemProp="dateCreated" content={repoData.created_at}/>
          <meta itemProp="dateModified" content={repoData.pushed_at}/>
          <meta itemProp="genre" content={repoData.language}/>
          {repoData.licence && (
            <meta itemProp="license" content={repoData.licence.name}/>
          )}
        </>
      )}
    </div>
  );
}

Item.propTypes = {
  repoData: PropTypes.shape({
    html_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    })
  }).isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
  }),
};

Item.defaultProps = {
  userData: null,
}

export default Item;
