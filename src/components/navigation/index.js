import React from 'react';
import s from './navigation.css';

function Navigation() {
  return (
    <nav className={s.navigation}>
      <a className={s.item} href="#Books">
        Books
      </a>
      <a className={s.item} href="#SVG">
        SVG
      </a>
      <a className={s.item} href="#Common">
        Common
      </a>
      <a className={s.item} href="#CSS">
        CSS
      </a>
      <a className={s.item} href="#Canvas">
        Canvas
      </a>
      <a className={s.item} href="#Scroll">
        Scroll
      </a>
      <a className={s.item} href="#Text">
        Text
      </a>
      <a className={s.item} href="#React">
        React
      </a>
      <a className={s.item} href="#GUI">
        With GUI
      </a>
    </nav>
  );
}

export default Navigation;
