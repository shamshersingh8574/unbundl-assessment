import React, { useState, useEffect } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import MobileSlider from "../slider/MobileSlider";
import { getWhyWhistleData } from "../../services/api";
import "./WhyWhistleSection.css";

export default function WhyWhistleSection() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWhyWhistleData();
      setFeatures(data);
    } catch (err) {
      setError("Failed to fetch features. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="why-whistle-section">
      <div className="why-container">
        <h2>Why Whistle?</h2>

        {loading && (
          <div className="why-loading">
            <MobileSlider>
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="why-skeleton-card">
                  <div className="why-skeleton-image"></div>
                  <div className="why-skeleton-title"></div>
                  <div className="why-skeleton-desc"></div>
                </div>
              ))}
            </MobileSlider>
          </div>
        )}

        {error && (
          <div className="why-error">
            <p className="why-error-message">{error}</p>
            <button onClick={fetchData} className="why-retry-btn">
              Retry
            </button>
          </div>
        )}

        {!loading && !error && (
          <div className="why-grid">
            <MobileSlider>
              {features.map((feature) => (
                <FeatureCard
                  key={feature.id}
                  image={feature.thumbnail}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </MobileSlider>
          </div>
        )}
      </div>
    </section>
  );
}
