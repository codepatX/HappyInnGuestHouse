import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import HomePage from './Homepage/Homepage';
import ProductsPage from './ProductsPage/ProductsPage';
import CartPage from './CartPage/CartPage';
import Store from './store/store';

function App() {
  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // If it exists, increase the quantity
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      {/* Pass cart item count to Navbar */}
      <Navbar cartItemCount={cartItems.length} />  
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Pass addToCart function to ProductsPage to allow adding items to the cart */}
        <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />  
        {/* Pass cartItems to CartPage to display items in the cart */}
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />  
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
