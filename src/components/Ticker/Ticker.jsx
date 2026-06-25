import React, { useState, useEffect } from "react";
import "./Ticker.css";

export default function Ticker() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data/tickerData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch ticker data");
        }
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  if (items.length === 0) return null;

  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="ticker-item">
            <span>{item.text}</span>
            {item.highlight && <span className="ticker-highlight"> {item.highlight}</span>}
            <span className="ticker-separator">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
