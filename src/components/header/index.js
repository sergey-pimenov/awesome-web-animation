import React from 'react';
import s from './header.css';

function Header() {
  return (
    <header className={s.header}>
      <h1 className={s.appTitle}>
        <div className={s.sub}>awesome list</div> <strong>web animation</strong>
      </h1>
    </header>
  );
}

export default Header;
