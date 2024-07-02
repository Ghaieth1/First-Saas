import Features from './components/Features';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Trusted from './components/Trusted';

function App() {
  return (
    <div className=' custom-bg'>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
    </div>
  );
}

export default App;
