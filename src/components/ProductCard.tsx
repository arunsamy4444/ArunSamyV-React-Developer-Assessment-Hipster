// components/ProductCard.tsx
import React from "react";
import { Theme } from "../context/ThemeContext";
import styles from "../styles/MainContent.module.css";

// Reusable product card component with theme support
interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
  theme: Theme;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, theme }) => {
    // Applies theme-specific styling to card container
  const getCardStyle = () => {
    switch (theme) {
      case "theme1":
        return `${styles.productCard} ${styles.cardTheme1}`;
      case "theme2":
        return `${styles.productCard} ${styles.cardTheme2}`;
      case "theme3":
        return `${styles.productCard} ${styles.cardTheme3}`;
      default:
        return styles.productCard;
    }
  };

    // Applies theme-specific styling to action button
  const getButtonStyle = () => {
    switch (theme) {
      case "theme1":
        return `${styles.addToCart} ${styles.buttonTheme1}`;
      case "theme2":
        return `${styles.addToCart} ${styles.buttonTheme2}`;
      case "theme3":
        return `${styles.addToCart} ${styles.buttonTheme3}`;
      default:
        return styles.addToCart;
    }
  };

  return (
    <div className={getCardStyle()}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productDetails}>
        <h3>{product.title}</h3>
        <p>{product.description.substring(0, 60)}...</p>
        <div className={styles.price}>${product.price}</div>
        <button className={getButtonStyle()}>
          {theme === "theme3" ? "🛒 Add" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;