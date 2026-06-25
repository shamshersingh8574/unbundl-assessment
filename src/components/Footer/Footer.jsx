import React, { useState, useEffect } from "react";
import "./Footer.css";

export default function Footer() {
  const [data, setData] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetch("/data/footerData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch footer data");
        }
        return res.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return null;

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="foot-brand">{data.brand}</span>
              <span className="foot-tagline">{data.tagline}</span>
            </div>
            <p className="footer-about">
              {data.about}
            </p>
          </div>

          {data.sections.map((section, sIdx) => (
            <div key={sIdx} className="footer-links-col">
              <h4>{section.title}</h4>
              <ul className="footer-links">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.target}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} {data.copyrightSuffix}
          </p>
          <div className="footer-bottom-links">
            {data.bottomLinks.map((link, idx) => (
              <a key={idx} href={link.target}>{link.label}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
