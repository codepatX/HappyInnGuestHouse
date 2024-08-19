import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Happy Inn Guest House</h1>
          <p>Experience luxury and comfort in the heart of the city</p>
          <button className="cta-btn">Book Your Stay</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Happy Inn Guest House offers world-class amenities and top-notch service to ensure your stay is unforgettable. Our rooms are designed to provide you with the ultimate in comfort and style.</p>
        </div>
        <div className="about-image"></div>
      </section>

      {/* Rooms Section */}
      <section className="rooms-section">
        <h2>Our Rooms</h2>
        <div className="rooms-grid">
          <div className="room-card">
            <div className="room-image"></div>
            <h3>Deluxe Room</h3>
            <p>Elegant and spacious with a stunning city view.</p>
            <button className="cta-btn">View Details</button>
          </div>
          <div className="room-card">
            <div className="room-image"></div>
            <h3>Executive Suite</h3>
            <p>A luxurious suite with premium amenities.</p>
            <button className="cta-btn">View Details</button>
          </div>
          <div className="room-card">
            <div className="room-image"></div>
            <h3>Family Room</h3>
            <p>Perfect for families with ample space and comfort.</p>
            <button className="cta-btn">View Details</button>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section">
        <h2>Our Facilities</h2>
        <div className="facilities-grid">
          <div className="facility-card">
            <div className="facility-icon"></div>
            <h3>Spa & Wellness</h3>
            <p>Relax and rejuvenate in our state-of-the-art spa.</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon"></div>
            <h3>Gourmet Dining</h3>
            <p>Enjoy exquisite cuisine prepared by top chefs.</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon"></div>
            <h3>Conference Rooms</h3>
            <p>Modern and fully equipped for business needs.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"An unforgettable experience! The staff was incredibly helpful and the rooms were immaculate."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"The perfect getaway! The facilities were top-notch and the food was out of this world."</p>
            <h4>- Jane Smith</h4>
          </div>
          <div className="testimonial-card">
            <p>"A luxurious stay with all the comforts of home. I will definitely be coming back!"</p>
            <h4>- Michael Brown</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <p>Have any questions? Feel free to reach out to us. We’re here to help you 24/7.</p>
          <button className="cta-btn">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
