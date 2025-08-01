// Product API utility for fetching store products
export const fetchProducts = async () => {
  try {
    // Fetch products from FakeStore API with JSON headers
    const response = await fetch("https://fakestoreapi.com/products", {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    // Throw error for unsuccessful responses (4xx/5xx)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

     // Return parsed JSON data on success
    return await response.json();
  } catch (error) {
     // Log and re-throw errors for error boundaries
    console.error('Error fetching products:', error);
    throw error;
  }
};