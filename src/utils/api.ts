// utils/api.ts
export const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};