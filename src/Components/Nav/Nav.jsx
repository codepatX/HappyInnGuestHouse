import React, { useState, useEffect } from 'react';
import './Nav.css';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      if (!isHovered) { // Only change if not hovered
        if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; // Slightly faded
        } else {
          navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)'; // Fully opaque
        }
      }
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)'; // Fully opaque
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; // Slightly faded
      } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)'; // Fully opaque
      }
    };

    window.addEventListener('scroll', handleScroll);
    navbar.addEventListener('mouseenter', handleMouseEnter);
    navbar.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navbar.removeEventListener('mouseenter', handleMouseEnter);
      navbar.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Happy Inn Guest House</h1>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-buttons">
        <button className="book-btn">Book Now</button>
        <button className="login-btn">Login</button>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
