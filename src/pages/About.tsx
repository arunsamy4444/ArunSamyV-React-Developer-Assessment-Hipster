// pages/About.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  const { theme } = useTheme();

  const getContainerClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.container} ${styles.containerTheme1}`;
      case "theme2":
        return `${styles.container} ${styles.containerTheme2}`;
      case "theme3":
        return `${styles.container} ${styles.containerTheme3}`;
      default:
        return styles.container;
    }
  };

  const getTitleClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.title} ${styles.titleTheme1}`;
      case "theme2":
        return `${styles.title} ${styles.titleTheme2}`;
      case "theme3":
        return `${styles.title} ${styles.titleTheme3}`;
      default:
        return styles.title;
    }
  };

  return (
    <div className={getContainerClass()}>
      <div className={styles.content}>
        <h1 className={getTitleClass()}>About Us</h1>
        <div className={styles.text}>
          <p>
            We are a hipster company dedicated to bringing you the best theme switching experience.
            Our app demonstrates how radically different themes can transform your user interface.
          </p>
          <p>
            Try switching between our three themes to see how layout, colors, typography, and spacing
            can completely change the look and feel of an application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;