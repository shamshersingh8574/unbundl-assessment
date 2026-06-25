import React, { useState, useEffect } from "react";
import "./Difference.css";

export default function Difference() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/differenceData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch difference data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <section id="differences" className="diff-section">
      <div className="diff-container">
        <div className="diff-grid">
          <div className="diff-left">
            <h2>{data.heading}</h2>

            <div className="diff-list">
              {data.points.map((point, idx) => (
                <div key={idx} className="diff-item">
                  <div className="diff-icon-container">
                    <img src={point.icon} alt={point.title} className="diff-icon" />
                  </div>
                  <div className="diff-info">
                    <h3>{point.title}</h3>
                    <p className="diff-desc">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="diff-right">
            <div className="diff-image-wrapper">
              <img
                src={data.rightImage}
                alt={data.rightImageAlt}
                className="diff-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
