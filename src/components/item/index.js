import React, { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './item.css';

const API = 'https://api.github.com/repos/';

function Item({name, website, repo, stars}) {
  const s = classnames.bind(styles);
  const [repoData, setRepoData] = useState({});

  function fetchData() {
    fetch(`${API}${repo}`, {
      headers: new Headers({
        "Authorization": "token 1fe8ff836fd6f2221fad6c6bb8497bdeb6686061"
      }),
    })
      .then(response => response.json())
      .then(data => setRepoData(data));
  }

  useEffect(() => {
    fetchData();
  }, [0]);

  return (
    <div className={s('item')}>
      <h3 className={s('name')}> { name } </h3>
      <p className={s('description')}> { repoData.description } </p>
      <div className={s('info')}>
        <div className={s('infoItem')}> 
          <a href={website}>
            <span role="img" aria-label="link">🔗</span>
          </a>
        </div>
        <div className={s('infoItem')}> 
          <a href={repo}>
            <span role="img" aria-label="link">💾</span>
          </a> 
        </div>
        <div className={s('infoItem')}> 
          <a href={repo}>
            <span role="img" aria-label="link">⭐</span> 
            { stars }
          </a> 
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
}

export default Item;
