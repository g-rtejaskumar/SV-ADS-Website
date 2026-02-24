import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy Load Sections
const HomeSection = lazy(() => import("./sections/HomeSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ServicesSection = lazy(() => import("./sections/ServicesSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));

// Loading Fallback
const LoadingSpinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0D1B3D', color: '#fff' }}>
    Loading...
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <HomeSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
