import React from 'react';
import classNames from 'classnames/bind';
import styles from './header.css';

function Header() {
  const s = classNames.bind(styles);

  return (
    <header className={s('header')}>
      <h1 className={s('appTitle')}> Usefull staff for <br/> <strong>web animation</strong> </h1>
    </header>
  )
}

export default Header;
