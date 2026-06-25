import React, { useState, useEffect } from "react";
import MobileSlider from "../slider/MobileSlider";
import "./Results.css";

export default function Results() {
  const [resultsData, setResultsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/resultsData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch results data");
        }
        return res.json();
      })
      .then((data) => {
        setResultsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="results" className="results-section">
        <div className="results-container">
          <h2>Results You'll Love</h2>
          <div className="results-grid">
            <div className="results-loading-placeholder">Loading results...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="results" className="results-section">
      <div className="results-container">
        <h2>Results You'll Love</h2>

        <div className="results-grid">
          <MobileSlider>
            {resultsData.map((card, idx) => (
              <div key={idx} className="results-card">
                <div className="results-images-wrapper">
                  <img
                    src={card.image_1}
                    alt={`Teeth transformation before case ${idx + 1}`}
                    className="results-img-half"
                  />
                  <img
                    src={card.image_2}
                    alt={`Teeth transformation after case ${idx + 1}`}
                    className="results-img-half"
                  />
                </div>
                <div className="results-labels">
                  <span className="label-before">Before</span>
                  <span className="label-after">After</span>
                </div>
                <div className="results-divider"></div>
                <div className="results-row">
                  <span className="results-row-label">Concern</span>
                  <span className="results-row-value">{card.concern}</span>
                </div>
                <div className="results-divider"></div>
                <div className="results-row">
                  <span className="results-row-label">Treatment Duration</span>
                  <span className="results-row-value">{card.duration}</span>
                </div>
              </div>
            ))}
          </MobileSlider>
        </div>
      </div>
    </section>
  );
}
