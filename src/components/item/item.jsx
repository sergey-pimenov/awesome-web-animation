import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis/lib/loose';
import InfoBar from '../infoBar';
import s from './item.module.css';

function Item({ repoData, bundleData }) {
  return (
    <div className={s.item} itemType="https://schema.org/CreativeWork" itemScope data-testid="library-card">
      <div className={s.itemContent}>
        <a
          itemProp="url"
          content={repoData.html_url}
          href={repoData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          Link to {repoData.name}
        </a>
        <div className={s.itemHeader}>
          <h3 itemProp="name" className={s.name}>
            {repoData.name}
          </h3>
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
        <InfoBar repoData={repoData} bundleData={bundleData} />
      </div>
      {repoData.owner && (
        <>
          <meta itemProp="author" content={repoData.owner.login} />
          <meta itemProp="about" content="Web-animation tool" />
          <meta itemProp="dateCreated" content={repoData.created_at} />
          <meta itemProp="dateModified" content={repoData.pushed_at} />
          <meta itemProp="genre" content={repoData.language} />
          {repoData.license && <meta itemProp="license" content={repoData.license.name} />}
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
    created_at: PropTypes.string,
    pushed_at: PropTypes.string,
    language: PropTypes.string,
    license: PropTypes.shape({
      name: PropTypes.string,
    }),
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }),
  }).isRequired,
  bundleData: PropTypes.shape({
    jsdelivr: PropTypes.shape({
      libName: PropTypes.string,
      fileName: PropTypes.string,
    }),
  }),
};

Item.defaultProps = {
  bundleData: null,
};

export default Item;
