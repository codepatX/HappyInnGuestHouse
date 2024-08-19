// src/pages/HomePage.jsx
import React from 'react';
import './Homepage.css'; 

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to Our Store</h1>
        <p>Your one-stop shop for all your needs.</p>
        <div className="home-buttons">
          <a href="/products" className="home-button">Browse Products</a>
          <a href="/cart" className="home-button">View Cart</a>
        </div>
      </header>
      <section className="home-features">
        <h2>Why Choose Us?</h2>
        <div className="features-list">
          <div className="feature">
            <h3>Quality Products</h3>
            <p>We offer high-quality products that meet your needs and exceed expectations.</p>
          </div>
          <div className="feature">
            <h3>Fast Shipping</h3>
            <p>Enjoy speedy delivery on all orders, so you get your products when you need them.</p>
          </div>
          <div className="feature">
            <h3>Excellent Support</h3>
            <p>Our customer support team is here to help you with any questions or issues.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
