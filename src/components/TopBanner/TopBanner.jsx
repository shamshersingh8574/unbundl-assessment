import React, { useState, useEffect } from "react";
import "./TopBanner.css";

export default function TopBanner() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/topBannerData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch top banner data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <div className="top-banner">
      <div className="top-banner-container">
        <p className="top-banner-text">
          {data.startingText} <span className="top-strike">{data.strikePrice}</span> <strong className="top-price-highlight">{data.highlightPrice}</strong>{data.offerText}
        </p>
      </div>
    </div>
  );
}
