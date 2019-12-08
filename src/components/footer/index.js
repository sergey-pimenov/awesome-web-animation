import React from 'react';
import s from './footer.css';
import love from './img/love.svg';

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.lineOne}>Made with</div>
      <div className={s.lineTwo}>love</div>
      <img className={s.love} src={love} alt="Love" />
      <div className={s.lineThree}>
        <a href="https://github.com/sergey-pimenov/" target="_blank" rel="noopener noreferrer">by Sergey Pimenov</a>
      </div>
    </footer>
  );
}

export default Footer;
