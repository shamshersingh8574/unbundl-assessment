import React, { useState, useEffect } from "react";
import "./Steps.css";

export default function Steps() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/stepsData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch steps data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <section id="process" className="steps-section">
      <div className="steps-container">
        <h2>{data.heading}</h2>
        
        <div className="steps-timeline">
          {data.steps.map((step, idx) => (
            <div key={idx} className="step-timeline-card">
              <div className="step-number-badge">{step.num}</div>
              <div className="step-card-content">
                <h3>{step.title}</h3>
                <p className="step-card-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
