import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BmiCalculator from './components/BmiCalculator';
import Faq from './components/Faq';

import WhatsAppButton from './components/WhatsAppButton';
import Location from './components/Location';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ironfit-theme');
      return saved ? saved === 'dark' : true; // Default to dark
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
    localStorage.setItem('ironfit-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Facilities />
        <Gallery />
        <Testimonials />
        <BmiCalculator />
        <Faq />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
