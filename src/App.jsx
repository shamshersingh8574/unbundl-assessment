import TopBanner from "./components/TopBanner/TopBanner";
import Header from "./components/Header/Header";
import Ticker from "./components/Ticker/Ticker";
import HeroSection from "./components/HeroSection/HeroSection";
import Results from "./components/Results/Results";
import Difference from "./components/Difference/Difference";
import WhyWhistleSection from "./components/WhyWhistleSection/WhyWhistleSection";
import Comparison from "./components/Comparison/Comparison";
import DoctorLed from "./components/DoctorLed/DoctorLed";
import ProductSection from "./components/ProductSection/ProductSection";
import Faq from "./components/Faq/Faq";

export default function App() {
  return (
    <>
      <Header />
      <TopBanner />
      <HeroSection />
      <Ticker />
      <ProductSection />
      <Results />
      <WhyWhistleSection />
      <Difference />
      <Comparison />
      <DoctorLed />
      <Faq />
    </>
  );
}
