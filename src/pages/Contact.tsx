// pages/Contact.tsx
import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/Contact.module.css";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const getContainerClass = () => {
    switch (theme) {
      case "theme1": return `${styles.container} ${styles.containerTheme1}`;
      case "theme2": return `${styles.container} ${styles.containerTheme2}`;
      case "theme3": return `${styles.container} ${styles.containerTheme3}`;
      default: return styles.container;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const getToastClass = () => {
    switch (theme) {
      case "theme1": return `${styles.toast} ${styles.toastTheme1}`;
      case "theme2": return `${styles.toast} ${styles.toastTheme2}`;
      case "theme3": return `${styles.toast} ${styles.toastTheme3}`;
      default: return styles.toast;
    }
  };

  return (
    <div className={getContainerClass()}>
      {showToast && (
        <div className={getToastClass()}>
          Your message has been sent successfully!
        </div>
      )}

      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactInfo}>
          <p>
            <strong>Email:</strong> hr@xxxxx.com
          </p>
          <p>
            <strong>Phone:</strong> +1234567890
          </p>
          <p>
            <strong>Address:</strong> #01-04, 75 ABC, 0987, Singapore
          </p>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;