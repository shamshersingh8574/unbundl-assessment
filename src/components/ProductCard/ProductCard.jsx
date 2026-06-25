import React from "react";
import "./ProductCard.css";

export default function ProductCard({ thumbnail, title, price, description }) {
  const priceValue = Math.round(price * 500 + 35000);
  const strikePrice = Math.round(priceValue * 1.15);

  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(priceValue);

  const formattedStrike = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(strikePrice);

  return (
    <div className="product-card">
      <div className="product-card-left">
        <span className="product-brand-tag">Whistle</span>
        <h3>{title}</h3>
        
        <div className="product-pricing">
          <span className="price-label">starting at</span>
          <div className="price-values">
            <span className="price-strike">{formattedStrike}</span>
            <span className="price-val">{formattedPrice}</span>
          </div>
        </div>

        <ul className="product-features-list">
          <li className="feature-item-tick">
            <span className="tick-icon">✓</span> Free scan & consult
          </li>
          <li className="feature-item-tick">
            <span className="tick-icon">✓</span> FDA approved materials
          </li>
        </ul>
        
        <a href="#booking" className="learn-more-link">
          Book Free Scan
          <svg className="arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>

      <div className="product-image-container">
        <img src={thumbnail} alt={title} className="product-image" loading="lazy" />
      </div>
    </div>
  );
}
