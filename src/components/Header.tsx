// components/Header.tsx
import React from "react";
import { useTheme, Theme } from "../context/ThemeContext";
import styles from "../styles/Header.module.css";

// Simple logo component
const Logo = () => (
  <div className={styles.logo}>
    <span className={styles.logoIcon}>🛍️</span>
    <span className={styles.logoText}>HipsterShop</span>
  </div>
);

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <header className={getHeaderClass()}>
      <Logo />
      <select 
        value={theme}
        onChange={handleChange}
        className={getSelectClass()}
      >
        <option value="theme1">Theme 1</option>
        <option value="theme2">Theme 2</option>
        <option value="theme3">Theme 3</option>
      </select>
    </header>
  );
};

export default Header;