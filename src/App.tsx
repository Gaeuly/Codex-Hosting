import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

const Home = () => (
  <>
    <Hero />
    <About />
    <Features />
    <Reviews />
  </>
);

function App() {
  return (
    <Router>
      {/* MASALAH ADA DI SINI: Kelas 'bg-white' dihapus dari div ini.
        Sekarang, background dari index.css (body) akan bisa terlihat.
      */}
      <div className="min-h-screen">
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
