import React from 'react';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Trusted from './components/Trusted';
import bgImage from './images/bg_stack.png'; // Importez l'image

function App() {
  return (
    <div
      className='custom-bg'
      style={{ backgroundImage: `url(${bgImage})` }} // Utilisez l'image importée ici
    >
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
