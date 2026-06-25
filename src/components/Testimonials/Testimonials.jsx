import React, { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const [data, setData] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("/data/testimonialsData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch testimonials data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  if (!data) return null;

  return (
    <section className="test-section">
      <div className="test-container">
        <div className="test-header">
          <h2>{data.heading}</h2>
          <div className="test-nav-btns">
            <button onClick={() => scroll("left")} className="scroll-btn" aria-label="Scroll left">
              ←
            </button>
            <button onClick={() => scroll("right")} className="scroll-btn" aria-label="Scroll right">
              →
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="test-list-wrapper">
          {data.reviews.map((rev, idx) => (
            <div key={idx} className="test-card">
              <div className="test-meta">
                <span className="test-user-name">{rev.name}</span>
                <span className="test-user-age">{rev.age}</span>
              </div>
              <h3>{rev.title}</h3>
              <p className="test-text">"{rev.text}"</p>
              <div className="test-rating">
                <span>★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
