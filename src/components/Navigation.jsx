import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../img/logo.svg'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo">
          <img src={LogoImg} alt="Flex-IT Logo" />
        </div>
        <ul className="navbar-menu">
          <li><Link to="#home" className="active">Home</Link></li>
          <li><Link to="#about">About Us</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#portfolio">Portfolio</Link></li>
          <li><Link to="#blog">Blog</Link></li>
          <li><Link to="#pages">Pages</Link></li>
          <li><Link to="#contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
