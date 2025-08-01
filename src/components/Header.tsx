// components/Header.tsx
import React, { useState } from "react";
import { useTheme, Theme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

// App logo component
const Logo = () => (
  <div className={styles.logo}>
    <span className={styles.logoIcon}>🛍️</span>
    <span className={styles.logoText}>HipsterShop</span>
  </div>
);

// Main header with navigation and theme switcher
const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

// Theme-specific style getters
  const getHeaderClass = () => {
    switch (theme) {
      case "theme1": return `${styles.header} ${styles.headerTheme1}`;
      case "theme2": return `${styles.header} ${styles.headerTheme2}`;
      case "theme3": return `${styles.header} ${styles.headerTheme3}`;
      default: return styles.header;
    }
  };

  const getSelectClass = () => {
    switch (theme) {
      case "theme1": return `${styles.select} ${styles.selectTheme1}`;
      case "theme2": return `${styles.select} ${styles.selectTheme2}`;
      case "theme3": return `${styles.select} ${styles.selectTheme3}`;
      default: return styles.select;
    }
  };

  const getNavLinkClass = () => {
    switch (theme) {
      case "theme1": return `${styles.navLink} ${styles.navLinkTheme1}`;
      case "theme2": return `${styles.navLink} ${styles.navLinkTheme2}`;
      case "theme3": return `${styles.navLink} ${styles.navLinkTheme3}`;
      default: return styles.navLink;
    }
  };

  const getHamburgerClass = () => {
    switch (theme) {
      case "theme1": return `${styles.hamburger} ${styles.hamburgerTheme1}`;
      case "theme2": return `${styles.hamburger} ${styles.hamburgerTheme2}`;
      case "theme3": return `${styles.hamburger} ${styles.hamburgerTheme3}`;
      default: return styles.hamburger;
    }
  };

  const getMenuClass = () => {
    switch (theme) {
      case "theme1": return `${styles.menu} ${styles.menuTheme1}`;
      case "theme2": return `${styles.menu} ${styles.menuTheme2}`;
      case "theme3": return `${styles.menu} ${styles.menuTheme3}`;
      default: return styles.menu;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <header className={getHeaderClass()}>
      <div className={styles.headerLeft}>
        <Logo />
      </div>
      
      <div className={styles.headerRight}>
         {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <Link to="/" className={getNavLinkClass()}>
            Home
          </Link>
          <Link to="/about" className={getNavLinkClass()}>
            About
          </Link>
          <Link to="/contact" className={getNavLinkClass()}>
            Contact
          </Link>
        </div>

        <div className={styles.mobileNav}>
          <button 
            className={getHamburgerClass()} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {isMenuOpen && (
            <div className={getMenuClass()}>
              <Link 
                to="/" 
                className={getNavLinkClass()} 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={getNavLinkClass()} 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={getNavLinkClass()} 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>

{/* Theme Switcher */}
        <select 
          value={theme}
          onChange={handleChange}
          className={getSelectClass()}
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;