import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="promo-middle-banner">
          <div className="middle-banner-content">
            <div className="banner-left">
              <h2>Invisible Aligners for a dream smile</h2>
              <p className="banner-subtext">
                Book a Scan and avail a free <br />
                Orthodontist Consult <span className="banner-highlight">worth ₹1500</span>
              </p>
            </div>
            <div className="banner-right">
              <img 
                src="/images/hero_smile_woman.png" 
                alt="Woman smiling with clear aligners" 
                className="banner-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
