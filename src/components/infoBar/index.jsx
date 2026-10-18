import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useBundleSize from '../../hooks/useBundleSize';
import s from './infoBar.module.css';
import msToDays from '../../utils/msToDays';
import star from './img/star.svg';
import download from './img/download.svg';
import error from './img/error.svg';

function InfoBar({ repoData, bundleData }) {
  const bundleFileSize = useBundleSize(bundleData);
  const openIssuesCount =
    repoData && typeof repoData.open_issues_count === 'number' ? repoData.open_issues_count : null;

  let daysAgoUpdated = null;
  if (repoData && repoData.pushed_at) {
    daysAgoUpdated = Math.round(msToDays(Date.now() - Date.parse(repoData.pushed_at)));
  }

  return (
    <div className={s.infoBar} data-testid="info-bar">
      <div className={s.row}>
        {repoData && typeof repoData.stargazers_count === 'number' && (
          <div className={classNames(s.infoItem, s.primary)} data-testid="star-count">
            <img className={s.icon} src={star} alt="Total stars on GitHub" />
            {repoData.stargazers_count}
          </div>
        )}
        {bundleFileSize != null && (
          <div className={classNames(s.infoItem, s.primary)} data-testid="bundle-size">
            <img className={s.icon} src={download} alt="Bundle size" />
            {Math.round(bundleFileSize / 1000)} kb
          </div>
        )}
        {daysAgoUpdated != null && (
          <div className={s.infoItem} data-testid="updated-at">
            {daysAgoUpdated === 0 && <>Updated today</>}
            {daysAgoUpdated !== 0 && <>Updated {daysAgoUpdated} days ago</>}
          </div>
        )}
      </div>
      <div className={s.row}>
        {openIssuesCount != null && (
          <div className={classNames(s.infoItem, s.issues)} title="Issues on GitHub" data-testid="issue-count">
            <img className={s.icon} src={error} alt="Issues" />
            {openIssuesCount === 0 && <>No issues</>}
            {openIssuesCount !== 0 && <>{openIssuesCount} issues</>}
          </div>
        )}
      </div>
    </div>
  );
}

InfoBar.propTypes = {
  bundleData: PropTypes.shape({
    jsdelivr: PropTypes.shape({
      libName: PropTypes.string,
      fileName: PropTypes.string,
    }),
  }),
  repoData: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      pushed_at: PropTypes.string,
      open_issues_count: PropTypes.number,
      stargazers_count: PropTypes.number,
    }),
  ]).isRequired,
};

InfoBar.defaultProps = {
  bundleData: null,
};

export default InfoBar;
