import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingInstagram from './components/FloatingInstagram';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import SmoothScroll from './components/SmoothScroll';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Destinations = lazy(() => import('./pages/Destinations'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const Universities = lazy(() => import('./pages/Universities'));
const StudentSuccess = lazy(() => import('./pages/StudentSuccess'));
const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const CountryUSA = lazy(() => import('./pages/CountryUSA'));
const CountryUK = lazy(() => import('./pages/CountryUK'));
const CountryCanada = lazy(() => import('./pages/CountryCanada'));
const CountryAustralia = lazy(() => import('./pages/CountryAustralia'));
const CountryIreland = lazy(() => import('./pages/CountryIreland'));
const CountryEurope = lazy(() => import('./pages/CountryEurope'));
const CountryNewZealand = lazy(() => import('./pages/CountryNewZealand'));
const CountryGermany = lazy(() => import('./pages/CountryGermany'));
const Exams = lazy(() => import('./pages/Exams'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-16 h-16 border-4 border-brand-purple border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
          <Suspense fallback={<PageLoader />}>
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
          </Suspense>
          <Footer />
          <FloatingInstagram />
          <FloatingWhatsApp />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
