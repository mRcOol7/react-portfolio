import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navigation from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css'; // Your custom CSS
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    AOS.init({
      // AOS options
      duration: 1200,
      once: false, // Animation should happen every time element comes into view
    });

    // Example of using GSAP for more complex animations
    gsap.from('.hero-title', { duration: 1, y: -50, opacity: 0, ease: 'power1.out' });
    gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, ease: 'power1.out', delay: 0.5 });

    // Custom animations for other sections
    gsap.from('.about-section', { duration: 1, y: -50, opacity: 0, ease: 'power1.out', scrollTrigger: '.about-section' });
    gsap.from('.portfolio-section', { duration: 1, y: -50, opacity: 0, ease: 'power1.out', scrollTrigger: '.portfolio-section' });
    gsap.from('.contact-section', { duration: 1, y: -50, opacity: 0, ease: 'power1.out', scrollTrigger: '.contact-section' });
    gsap.from('.footer', { duration: 1, y: -50, opacity: 0, ease: 'power1.out', scrollTrigger: '.footer' });
  }, []);

  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
