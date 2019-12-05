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
      <a className={s.item} href="#Canvas">
        Easing
      </a>
      <a className={s.item} href="#Canvas">
        Scroll
      </a>
      <a className={s.item} href="#Canvas">
        Canvas
      </a>
      <a className={s.item} href="#CSS">
        CSS
      </a>
      <a className={s.item} href="#Engines">
        Text
      </a>
      <a className={s.item} href="#Engines">
        With GUI
      </a>
    </nav>
  );
}

export default Navigation;
