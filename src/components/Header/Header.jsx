import "./Header.css";

export default function Header() {
  const handlePhoneClick = () => {
    window.location.href = "tel:18001234567";
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <div className="logo-text">
              <img src="/images/logo.png" alt="" />
            </div>
          </div>

          <button
            onClick={handlePhoneClick}
            className="phone-btn"
            aria-label="Call support"
          >
            <svg
              className="phone-icon"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
