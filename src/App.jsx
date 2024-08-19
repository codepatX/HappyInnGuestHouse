import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import HomePage from './Homepage/Homepage';
import ProductsPage from './ProductsPage/ProductsPage';
import CartPage from './CartPage/CartPage';
import Store from './store/store';
import { BouncingBalls, Infinite, SkewedSquares, Spinner, WanderingCubes } from 'loaders-ui';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {

      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {

        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {

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
  //   <div>
  //   <SkewedSquares
  //   />
  // </div>
  );
}

export default App;
