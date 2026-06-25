import React, { useState, useEffect } from "react";
import "./ProductSection.css";

export default function ProductSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/productData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product section data");
        }
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading || !data) {
    return (
      <section id="pricing" className="product-section">
        <div className="section-container">
          <div className="product-loading-placeholder">Loading pricing info...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="product-section">
      <div className="section-container">
        <div className="product-grid-layout">
          
          <div className="product-left-panel">
            <h2>
              {data.heading}
            </h2>
            <p className="section-description">
              {data.description1}
            </p>
            <p className="section-description desktop-only">
              {data.description2}
            </p>
          </div>

          <div className="product-right-panel">
            <div className="product-card">
              <div className="product-card-left">
                <h3>{data.card.name}</h3>
                
                <div className="product-pricing">
                  <span className="price-strike">{data.card.strikePrice}</span>
                  <div className="price-row">
                    <span className="price-label">{data.card.startingPriceLabel}</span>
                    <span className="price-val">{data.card.price}</span>
                  </div>
                  <span className="price-tax">{data.card.taxLabel}</span>
                </div>

                <ul className="product-features-list">
                  {data.card.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="checkmark-icon">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="#booking" className="learn-more-link">
                  {data.card.learnMoreText}
                  <svg className="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              <div className="product-image-container">
                <img src={data.card.image} alt={data.card.name} className="product-image" />
              </div>
            </div>
            
            <p className="section-description mobile-only bottom-desc">
              {data.description2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
