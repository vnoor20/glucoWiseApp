import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Technology from './components/Technology';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Technology />
        <FAQ />
        <Contact />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
