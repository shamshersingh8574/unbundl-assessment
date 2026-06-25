import React from "react";
import "./FeatureCard.css";

export default function FeatureCard({ image, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-img-wrapper">
        <img src={image} alt={title} className="feature-img" />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>
    </div>
  );
}
