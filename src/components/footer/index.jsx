import React from 'react';
import s from './footer.module.css';
import love from './img/love.svg';

function Footer() {
  return (
    <footer className={s.footer} data-testid="footer">
      <a href="https://github.com/sergey-pimenov/" target="_blank" rel="noopener noreferrer">
        <div className={s.lineOne}>Made with</div>
        <div className={s.lineTwo}>love</div>
        <img className={s.love} src={love} alt="Love" />
        <div className={s.lineThree}> by Sergey Pimenov </div>
      </a>
    </footer>
  );
}

export default Footer;
