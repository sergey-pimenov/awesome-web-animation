import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import msToDays from '../../utils/scripts/msToDays';
import styles from './item.css';

const API = 'https://api.github.com/repos/';
const token = `token ${process.env.API_URL}`;

function Item({name, repo}) {
  const s = classnames.bind(styles);
  const [repoData, setRepoData] = useState({});

  function fetchData() {
    fetch(`${API}${repo}`, {
      headers: new Headers({
        "Authorization": token
      }),
    })
      .then(response => response.json())
      .then(data => setRepoData(data));
  }

  useEffect(() => {
    fetchData();
  }, [0]);

  let daysAgoUpdated;

  if(repoData.pushed_at) {
    const updateDate = Date.parse(repoData.pushed_at);
    const daysAgo = Date.now() - updateDate;
    daysAgoUpdated = Math.round(msToDays(daysAgo));
  }

  return (
    <div className={s('item')}>
      <a href={repoData.homepage || repoData.homepage} aria-label={`Link to ${name}`} className={s('itemLink')}> </a>
      <div className={s('itemHeader')}>
        <h3 className={s('name')}> { name } </h3>
        {repoData.html_url && (
          <div className={s('infoItem')}> 
            {/* <a href={repoData.html_url}>
              <img src={githubIcon} alt="github" />
            </a> */}
          </div>
        )}
      </div>
      <p className={s('description')}> { repoData.description } </p>
      <div className={s('info')}>
        <div className={s('infoItem')}> 
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">Issues:</span> 
            { repoData.open_issues_count }
          </a>
        </div>
        <div className={s('infoItem')}> 
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">⭐</span> 
            { repoData.stargazers_count }
          </a> 
        </div>
        <div className={s('infoItem')}> 
          <a href={repoData.stargazers_url}>
            <span role="img" aria-label="link">🔥 updated </span> 
            {daysAgoUpdated} days ago
          </a>
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
}

export default Item;
