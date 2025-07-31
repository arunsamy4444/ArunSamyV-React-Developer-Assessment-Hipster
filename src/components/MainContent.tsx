// components/MainContent.tsx
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "../styles/MainContent.module.css";
import { fetchProducts } from "../utils/api";
import ProductCard from "./ProductCard";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const MainContent: React.FC = () => {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setLoading(false);
    }
  };
  
  loadProducts();
}, []);

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

  const getButtonClass = () => {
    switch (theme) {
      case "theme1":
        return `${styles.button} ${styles.buttonTheme1}`;
      case "theme2":
        return `${styles.button} ${styles.buttonTheme2}`;
      case "theme3":
        return `${styles.button} ${styles.buttonTheme3}`;
      default:
        return styles.button;
    }
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

 return (
    <div className={getContainerClass()}>
      <div className={styles.content}>
        <h1 className={getTitleClass()}>
          {theme === "theme1" 
            ? "Minimalist Collection" 
            : theme === "theme2" 
              ? "Dark Elegance" 
              : "Fun & Colorful"}
        </h1>
        
        <p className={styles.description}>
          {theme === "theme1"
            ? "Clean, simple designs for the modern shopper."
            : theme === "theme2"
              ? "Sophisticated products for discerning tastes."
              : "Bright and cheerful items to spark joy!"}
        </p>
        
        <button className={getButtonClass()}>
          {theme === "theme1"
            ? "Browse Collection"
            : theme === "theme2"
              ? "Explore Products"
              : "Start Shopping"}
        </button>
        
        {/* Add theme-specific layout differences */}
        {theme === "theme2" && (
          <aside className={styles.sidebar}>
            <h3>Categories</h3>
            <ul>
              {Array.from(new Set(products.map(p => p.category))).map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </aside>
        )}


<div className={styles.productsGrid}>
  {products.map(product => (
    <ProductCard 
      key={product.id} 
      product={product} 
      theme={theme} 
    />
  ))}
</div>
      </div>
    </div>
  );
};

export default MainContent;