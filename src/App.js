import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import CraftedWith from "./Components/CraftedWith/CraftedWith";
import WhyChoose from "./Components/WhyChoose/WhyChoose";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import GetCraftzCart from "./Components/GetCraftzCart/GetCraftzCart";
import OurCollections from "./Components/OurCollections/OurCollections";
import ContactUs from "./Components/ContactUs/ContactUs";
import Handpicked from "./Components/Handpicked/Handpicked";
import Explore from "./Components/Explore/Explore";
import Made from "./Components/Made/Made";
import OurTeam from "./Components/OurTeam/OurTeam";

// 404 Page Not Found
const NotFound = () => (
  <div style={{ padding: "80px 20px", textAlign: "center" }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
  </div>
);

// Home route component
function Home() {
  return (
    <>
      <Hero />
      <CraftedWith />
      <WhyChoose />
      <HowItWorks />
      <GetCraftzCart />
      <OurCollections />
      <ContactUs /> {/* ContactUs included on all main pages */}
    </>
  );
}

function Collections() {
  return (
    <>
      <Handpicked />
      <Explore />
      <OurCollections />
      <ContactUs />
    </>
  );
}

function AboutUs() {
  return (
    <>
      <Made />
      <OurTeam />
      <OurCollections />
      <ContactUs />
    </>
  );
}

// ScrollToTop component defined inside the same file
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop /> {/* Use scroll to top here */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
