import React, { useState, useEffect } from "react";
import "./Comparison.css";

export default function Comparison() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/comparisonData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch comparison data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  const renderValue = (val) => {
    if (val === true) {
      return (
        <span className="icon-check-wrapper">
          <svg className="table-icon check" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="icon-cross-wrapper">
          <svg className="table-icon cross" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      );
    }
    return val;
  };

  if (!data) return null;

  return (
    <section className="compare-section">
      <div className="compare-container">
        <h2>{data.heading}</h2>
        
        <div className="compare-table-wrapper">
          <table className="compare-table">
            <thead>
              <tr>
                <th className="feat-col-head">{data.headers.features}</th>
                <th className="whistle-col-head">
                  <img src={data.headers.whistleLogo} alt="Whistle" className="compare-logo" />
                </th>
                <th className="others-col-head">{data.headers.others}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, idx) => (
                <tr key={idx}>
                  <td className="feat-col">
                    <div className="feat-col-content">
                      <span>{row.feature}</span>
                      <svg className="chevron-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </td>
                  <td className="whistle-col">{renderValue(row.whistle)}</td>
                  <td className="others-col">{renderValue(row.others)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
