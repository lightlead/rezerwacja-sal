import React from "react";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Book Your Court Anytime, Anywhere!</h1>
        <p>Experience the joy of basketball with Gdynia's premier reservation system.</p>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-item">
            <img src="/images/easy-booking.png" alt="Easy Booking" />
            <h3>Easy Booking</h3>
            <p>Reserve your court in just a few clicks.</p>
          </div>
          <div className="feature-item">
            <img src="/images/affordable-rates.png" alt="Affordable Rates" />
            <h3>Affordable Rates</h3>
            <p>Enjoy competitive pricing and more.</p>
          </div>
          <div className="feature-item">
            <img src="/images/community-events.png" alt="Community Events" />
            <h3>Community Events</h3>
            <p>Join local tournaments and meet other players.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>What Players Say</h2>
        <blockquote>
          "This system makes booking courts so easy! I’ve been able to play regularly without any hassle."
        </blockquote>
        <p>- Alex Johnson</p>
      </div>
    </div>
  );
}

export default Home;
