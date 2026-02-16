import React from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div className="footer-links">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/position">Положения</Link>
          <Link to="/criteria">Критерии оценки</Link>
          <Link to="/winners">Победители</Link>
          <Link to="/judges">Судьи</Link>
          <Link to="/articles">Статьи</Link>
        </div>
        <div className="footer-contacts">
          <div className="footer-contact-item">
            <i className="bi bi-envelope fo-icon"></i>
            <a href="mailto:itsc@gmail.com">itsc@gmail.com</a>
          </div>
          <div className="footer-contact-item">
            <i className="bi bi-telephone fo-icon"></i>
            <a href="tel:+79568567676">+7 956-856-76-76</a>
          </div>
        </div>
        <div className="footer-copy">
          <p>&copy; 2018-2024 Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
