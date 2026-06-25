import React, { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [heroData, setHeroData] = useState(null);
  const [hasGaps, setHasGaps] = useState("Yes");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/data/heroData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Hero data");
        }
        return res.json();
      })
      .then((data) => setHeroData(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  if (!heroData) {
    return (
      <section className="hero-section">
        <div className="hero-top-wrapper">
          <div className="hero-container">
            <div className="hero-grid">
              <div className="inner-hero">
                <div className="hero-title-skeleton"></div>
                <div className="hero-subtitle-skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="hero-section">
      <div className="hero-top-wrapper">
        <div className="hero-container">
          <div className="hero-grid">
            <div className="inner-hero">
              <h1 className="h2">
                {heroData.titlePart1} <br className="mobile-only" /> {heroData.titlePart2}
              </h1>
              <p className="hero-subtitle">
                {heroData.subtitlePart1} <br className="desktop-only" />
                {heroData.subtitlePart2} <span className="highlight-text">{heroData.subtitleHighlight}</span>
              </p>
            </div>
            <div className="hero-img-wrapper">
              <img
                src={heroData.image}
                alt={heroData.imageAlt}
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-wrapper">
        <div className="hero-container">
          <div className="form-card">
            <h2>{heroData.formHeading}</h2>

            <form onSubmit={handleSubmit} className="diagnostic-form">
              <div className="radio-row">
                <label className="radio-container">
                  <input
                    type="radio"
                    name="gaps"
                    value="Yes"
                    checked={hasGaps === "Yes"}
                    onChange={() => setHasGaps("Yes")}
                  />
                  <span className="radio-checkmark"></span>
                  Yes
                </label>
                <label className="radio-container">
                  <input
                    type="radio"
                    name="gaps"
                    value="No"
                    checked={hasGaps === "No"}
                    onChange={() => setHasGaps("No")}
                  />
                  <span className="radio-checkmark"></span>
                  No
                </label>
              </div>

              {submitted ? (
                <div className="form-success">
                  🎉 Thank you! We will contact you shortly to book your free scan.
                </div>
              ) : (
                <>
                  <div className="form-inputs-row">
                    <div className="input-box name-box">
                      <input
                        type="text"
                        placeholder="Ajay Kumar"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <span className="input-label">Full Name*</span>
                    </div>

                    <div className="input-box phone-box">
                      <input
                        type="tel"
                        placeholder="+91 Mobile number*"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                      <span className="input-label">Mobile number*</span>
                    </div>

                    <button type="submit" className="cta-btn">
                      Book a Free Scan
                    </button>
                  </div>

                  <div className="checkbox-row">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        defaultChecked
                        required
                      />
                      <span className="checkbox-checkmark"></span>
                      <span className="checkbox-label-text">
                        I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
                      </span>
                    </label>
                  </div>
                </>
              )}
            </form>
          </div>

          <div className="clove-banner">
            <p className="clove-desc">
              {heroData.cloveDesc}
            </p>
            <div className="clove-brand-col">
              <div className="clove-badge">
                <span className="clove-word">clove<span className="smile-accent"> : )</span></span>
                <span className="clove-subtext">DENTAL</span>
              </div>
              <button className="find-clinic-btn">
                Find Clinic
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
