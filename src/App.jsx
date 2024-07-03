import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Trusted from './components/Trusted';

function App() {
  return (
    <div className=' custom-bg'>
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
