import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Reviews />
    </>
  );
}

function App() {
  return (
    <Router>
      {/* MASALAHNYA DI SINI:
        Background gradient sebelumnya menimpa background image di Hero.tsx.
        Sekarang diubah menjadi background hitam polos agar tidak konflik.
      */}
      <div className="min-h-screen bg-black">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
