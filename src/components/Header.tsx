import React, { useState, useRef, useEffect } from "react";
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
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsThemeDropdownOpen(false);
      }
      if (!(event.target as HTMLElement).closest(`.${styles.mobileNav}`)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown when pressing Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsThemeDropdownOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Theme-specific style getters
  const getHeaderClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.header} ${styles.headerTheme1}`;
      case "theme2":
        return `${styles.header} ${styles.headerTheme2}`;
      case "theme3":
        return `${styles.header} ${styles.headerTheme3}`;
      default:
        return styles.header;
    }
  };

  const getNavLinkClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.navLink} ${styles.navLinkTheme1}`;
      case "theme2":
        return `${styles.navLink} ${styles.navLinkTheme2}`;
      case "theme3":
        return `${styles.navLink} ${styles.navLinkTheme3}`;
      default:
        return styles.navLink;
    }
  };

  const getHamburgerClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.hamburger} ${styles.hamburgerTheme1}`;
      case "theme2":
        return `${styles.hamburger} ${styles.hamburgerTheme2}`;
      case "theme3":
        return `${styles.hamburger} ${styles.hamburgerTheme3}`;
      default:
        return styles.hamburger;
    }
  };

  const getMenuClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.menu} ${styles.menuTheme1}`;
      case "theme2":
        return `${styles.menu} ${styles.menuTheme2}`;
      case "theme3":
        return `${styles.menu} ${styles.menuTheme3}`;
      default:
        return styles.menu;
    }
  };

  const getThemeDropdownClass = () => {
    const baseClass = `${styles.themeDropdown} ${
      isThemeDropdownOpen ? styles.dropdownVisible : ""
    }`;
    switch (theme) {
      case "theme1":
        return `${baseClass} ${styles.themeDropdownTheme1}`;
      case "theme2":
        return `${baseClass} ${styles.themeDropdownTheme2}`;
      case "theme3":
        return `${baseClass} ${styles.themeDropdownTheme3}`;
      default:
        return baseClass;
    }
  };

  const getThemeButtonClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.themeButton} ${styles.themeButtonTheme1}`;
      case "theme2":
        return `${styles.themeButton} ${styles.themeButtonTheme2}`;
      case "theme3":
        return `${styles.themeButton} ${styles.themeButtonTheme3}`;
      default:
        return styles.themeButton;
    }
  };

  const handleThemeChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setIsThemeDropdownOpen(false);
  };

  const toggleThemeDropdown = () => {
    setIsThemeDropdownOpen(!isThemeDropdownOpen);
    if (!isThemeDropdownOpen) {
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsThemeDropdownOpen(false);
    }
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

        {/* Mobile Navigation */}
        <div className={styles.mobileNav}>
          <button
            className={getHamburgerClass()}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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
        <div className={styles.themeSwitcher} ref={dropdownRef}>
          <button
            ref={themeButtonRef}
            className={getThemeButtonClass()}
            onClick={toggleThemeDropdown}
            aria-haspopup="true"
            aria-expanded={isThemeDropdownOpen}
          >
            {`Theme ${theme.slice(-1)}`}
            <span className={styles.dropdownArrow}>
              {isThemeDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          <div className={getThemeDropdownClass()}>
            <button
              className={styles.themeOption}
              onClick={() => handleThemeChange("theme1")}
              aria-current={theme === "theme1" ? "true" : undefined}
            >
              Theme 1
            </button>
            <button
              className={styles.themeOption}
              onClick={() => handleThemeChange("theme2")}
              aria-current={theme === "theme2" ? "true" : undefined}
            >
              Theme 2
            </button>
            <button
              className={styles.themeOption}
              onClick={() => handleThemeChange("theme3")}
              aria-current={theme === "theme3" ? "true" : undefined}
            >
              Theme 3
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
