import React from 'react';
import s from './header.css';

function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.appTitle}>
        Usefull staff for <br /> <strong>web animation</strong>
      </h1>
    </header>
  );
}

export default Header;
