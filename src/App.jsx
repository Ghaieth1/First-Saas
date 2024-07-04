import React from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Trusted from './components/Trusted';
import bgImage from './images/bg_stack.png';

function App() {
  return (
    <div className='custom-bg' style={{ backgroundImage: `url(${bgImage})` }}>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
