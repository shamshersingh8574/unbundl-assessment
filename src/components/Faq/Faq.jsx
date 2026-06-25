import React, { useState, useEffect, useRef } from "react";
import { getFaqs } from "../../services/api";
import "./Faq.css";

function FaqItem({ faq, isActive, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isActive, faq.a]);

  useEffect(() => {
    const handleResize = () => {
      if (isActive && contentRef.current) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive]);

  return (
    <div className={`faq-card ${isActive ? "faq-active" : ""}`}>
      <button 
        onClick={onToggle}
        className="faq-question-btn"
        aria-expanded={isActive}
      >
        <span className="faq-question-text">{faq.q}</span>
        <span className={`faq-toggle-icon ${isActive ? "active" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" className="faq-icon-vertical"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </span>
      </button>
      
      <div 
        ref={contentRef}
        className="faq-answer-wrapper"
        style={{ maxHeight: height }}
      >
        <p className="faq-answer">{faq.a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const fetchFaqData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getFaqs();
      const formatted = data.map((item) => ({
        id: item.id,
        q: item.title,
        a: item.body
      }));
      setFaqs(formatted);
      if (formatted.length > 0) {
        setActiveIndex(0);
      }
    } catch (err) {
      setError("Failed to load FAQs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>
          <span className="faq-heading-highlight">Got Questions?</span> We’ve got answers
        </h2>

        {loading && (
          <div className="faq-loading-container">
            {[1, 2, 3, 4, 5].map((val) => (
              <div key={val} className="faq-skeleton-card">
                <div className="faq-skeleton-header">
                  <div className="faq-skeleton-line short"></div>
                  <div className="faq-skeleton-circle"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="faq-error-container">
            <div className="faq-error-card">
              <svg className="faq-error-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <h3>Failed to Load FAQs</h3>
              <p className="faq-error-msg">{error}</p>
              <button onClick={fetchFaqData} className="faq-retry-btn">
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && faqs.length === 0 && (
          <div className="faq-empty-container">
            <p className="faq-empty-msg">No FAQs available at the moment.</p>
          </div>
        )}

        {!loading && !error && faqs.length > 0 && (
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <FaqItem 
                key={faq.id}
                faq={faq}
                isActive={activeIndex === idx}
                onToggle={() => setActiveIndex(activeIndex === idx ? null : idx)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
