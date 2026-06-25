import React, { useState, useEffect } from "react";
import "./DoctorLed.css";

export default function DoctorLed() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/doctorLedData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch doctor led data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <section className="doctor-section">
      <div className="doctor-container">
        <div className="doctor-grid">
          <div className="doctor-left">
            <h2>{data.heading}</h2>
            <p className="doctor-desc">
              {data.description}
            </p>
            <a href={data.ctaLink} className="doctor-cta-btn">
              {data.ctaText}
            </a>
          </div>

          <div className="doctor-right">
            <div className="doctor-image-wrapper">
              <img 
                src={data.image} 
                alt={data.imageAlt} 
                className="doctor-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
