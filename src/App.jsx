import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import SitePolicy from "./Screens/SitePolicy";
import UserAgreement from "./Screens/UserAgreement";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/site-policy" element={<SitePolicy />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;