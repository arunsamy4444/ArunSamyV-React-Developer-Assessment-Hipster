// pages/Contact.tsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Contact.module.css";

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const getContainerClass = () => {
    switch (theme) {
      case "theme1": return `${styles.container} ${styles.containerTheme1}`;
      case "theme2": return `${styles.container} ${styles.containerTheme2}`;
      case "theme3": return `${styles.container} ${styles.containerTheme3}`;
      default: return styles.container;
    }
  };

  return (
    <div className={getContainerClass()}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> hr@hipster-inc.com
          </p>
          <p>
            <strong>Phone:</strong> +6582314107
          </p>
          <p>
            <strong>Address:</strong> #01-04, 75 Ayer Rajah Crescent, 139953, Singapore
          </p>
        </div>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;