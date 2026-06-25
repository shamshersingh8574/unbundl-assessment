import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    fetch("/data/navbarData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch navbar data");
        }
        return res.json();
      })
      .then((data) => {
        setTabs(data);
        if (data.length > 0) {
          setActiveTab(data[0].name);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const wrapper = document.querySelector(".nav-bar-wrapper");
      if (wrapper) {
        setSticky(window.scrollY > wrapper.offsetTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (name, target) => {
    setActiveTab(name);
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (tabs.length === 0) return null;

  return (
    <div className="nav-bar-wrapper">
      <nav className={`nav-bar ${sticky ? "sticky-nav" : ""}`}>
        <div className="nav-container">
          <div className="nav-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleTabClick(tab.name, tab.target)}
                className={`nav-tab-btn ${activeTab === tab.name ? "active-tab" : ""}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
