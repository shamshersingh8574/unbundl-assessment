# Whistle Aligners - Premium Doctor-Led Dental Landing Page

A premium, interactive React landing page built with **Vite** and **Vanilla CSS**, featuring pixel-perfect visual fidelity, responsive design across mobile/desktop, and a fully dynamic data architecture.

---

## 🚀 Key Features

* **Dynamic Data Loading (JSON-Configurable):** 
  All sections featuring static text, highlights, images, pricing matrix, and list items have been modularized into JSON configuration files. This allows content editors to modify the landing page layout and copy without changing JSX files.
* **API Integration:**
  Fetches live mock data for the FAQ section and the "Why Whistle?" feature grids, incorporating clean, animated skeleton loading placeholders and robust error retry mechanisms.
* **High-Fidelity UI/UX:**
  Designed with curated Outfit and Instrument Sans typography, custom SVGs, clean CSS animations, sticky transitions, and interactive hover feedback.
* **100% Mobile Responsive:**
  Custom media breakpoints and a swipeable slider layout (`MobileSlider`) tailor the viewing experience perfectly for smartphone viewport widths.
* **Sticky Navigation Bar:**
  A smooth scrolling navigation bar that locks dynamically to the top once scrolled past, directing users to specific sections with offset support.

---

## 📂 Project Architecture

```bash
Whistle-react-UI-project/
├── public/
│   ├── data/                   # Dynamic JSON configuration files
│   │   ├── heroData.json       # Hero Section content & diagnostic form texts
│   │   ├── productData.json    # Whistle pricing, features, and cards
│   │   ├── resultsData.json    # Before/After transformation image paths & details
│   │   ├── differenceData.json # Next-Gen Zendura FLX value points
│   │   ├── comparisonData.json # Comparative grid headers & rows
│   │   ├── doctorLedData.json  # Doctor led callouts & orthodontic info
│   │   ├── testimonialsData.json # Patient reviews, ages & text content
│   │   ├── stepsData.json       # 4-Step treatment process timeline
│   │   ├── navbarData.json     # Dynamic navigation link targets
│   │   ├── topBannerData.json  # Header announcement alert text
│   │   └── footerData.json     # Brand taglines, links, and legal columns
│   └── images/                 # SVG icons & raster dentist/teeth assets
├── src/
│   ├── components/             # Reusable UI component modules
│   │   ├── Header/             # Logo and emergency call actions
│   │   ├── TopBanner/          # Discount announcement alert
│   │   ├── Navbar/             # Sticky active process tracker
│   │   ├── HeroSection/        # Hero image, questionnaire form, & clinic details
│   │   ├── Ticker/             # Infinite marquee slider
│   │   ├── ProductSection/     # Price check custom card layout
│   │   ├── Results/            # Before/After card grids
│   │   ├── WhyWhistleSection/  # DummyJSON product card grid
│   │   ├── Difference/         # Highlighting Zendura material qualities
│   │   ├── Comparison/         # Brand Comparison matrix
│   │   ├── DoctorLed/          # Clinic-bound orthodontist callout
│   │   ├── Testimonials/       # Horizontal review slider
│   │   ├── Steps/              # Process walkthrough cards
│   │   ├── Faq/                # Animated toggle dropdown Q&As
│   │   └── slider/             # Mobile slider wrapper component
│   ├── services/
│   │   └── api.js              # External API fetch utilities (FAQ & Features)
│   ├── App.jsx                 # Layout entry & mounting router
│   ├── index.css               # Clean typography presets & design tokens
│   └── main.jsx                # React root mount controller
└── index.html                  # HTML entry point (SEO optimized)
```

---

## 🛠 Setup & Run Instructions

To install and run the project locally:

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.

### 2. Install Dependencies
Navigate to the root directory and run:
```bash
npm install
```

### 3. Run Development Server
Start the local server with hot module reloading (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) (or the port specified in your console) in your web browser.

### 4. Build for Production
To generate a highly optimized production build output inside the `/dist` folder:
```bash
npm run build
```

### 5. Preview Production Build
Preview the generated production build locally:
```bash
npm run preview
```

---

## 🧹 Clean Code & Optimization

* **Zero Hardcoded Data:** All components retrieve structured data dynamically, making the code clean, modular, and reusable.
* **Optimized CSS stylesheets:** Stripped out legacy styles, unused selectors, and commented-out code snippets to deliver a fast page weight.
* **Skeleton Loaders:** Prevents layout shifts (CLS) when fetching resources from external APIs.
