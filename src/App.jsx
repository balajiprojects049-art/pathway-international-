import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Destinations from './pages/Destinations';
import ServicesPage from './pages/ServicesPage';
import Universities from './pages/Universities';
import StudentSuccess from './pages/StudentSuccess';
import BookConsultation from './pages/BookConsultation';
import ContactUs from './pages/ContactUs';
import CountryUSA from './pages/CountryUSA';

import CountryAustralia from './pages/CountryAustralia';
import CountryCanada from './pages/CountryCanada';
import CountryEurope from './pages/CountryEurope';
import CountryIreland from './pages/CountryIreland';
import CountryUK from './pages/CountryUK';
import CountryNewZealand from './pages/CountryNewZealand';
import CountryGermany from './pages/CountryGermany';
import Exams from './pages/Exams';

import SmoothScroll from './components/SmoothScroll';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="overflow-x-hidden bg-white">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/success" element={<StudentSuccess />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/country/usa" element={<CountryUSA />} />
            <Route path="/country/uk" element={<CountryUK />} />
            <Route path="/country/canada" element={<CountryCanada />} />
            <Route path="/country/australia" element={<CountryAustralia />} />
            <Route path="/country/ireland" element={<CountryIreland />} />
            <Route path="/country/europe" element={<CountryEurope />} />
            <Route path="/country/new-zealand" element={<CountryNewZealand />} />
            <Route path="/country/germany" element={<CountryGermany />} />
          </Routes>
          <Footer />
          {/* <FloatingWhatsApp /> */}
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
