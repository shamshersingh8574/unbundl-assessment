import React, { useState, useEffect, useRef } from "react";
import "./MobileSlider.css";

export default function MobileSlider({ children }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef(null);
  const childArray = React.Children.toArray(children).filter(Boolean);

  const handleScroll = () => {
    if (trackRef.current && childArray.length > 0) {
      const { scrollLeft, scrollWidth } = trackRef.current;
      const totalSlides = childArray.length;
      const cardWidth = scrollWidth / totalSlides;
      const index = Math.min(
        Math.max(Math.round(scrollLeft / cardWidth), 0),
        totalSlides - 1
      );
      setActiveSlide(index);
    }
  };

  return (
    <div className="mobile-slider-container">
      <div 
        ref={trackRef} 
        className="mobile-slider-track"
        onScroll={handleScroll}
      >
        {childArray.map((child, index) => (
          <div key={index} className="mobile-slider-item">
            {child}
          </div>
        ))}
      </div>
      {childArray.length > 1 && (
        <div className="mobile-slider-dots">
          {childArray.map((_, index) => (
            <span
              key={index}
              className={`mobile-slider-dot ${activeSlide === index ? "active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
