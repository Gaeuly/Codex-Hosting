import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Komponen Utama
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

// Import Komponen Halaman Home
import Hero from './components/Hero';
import Features from './components/Features';
import Locations from './components/Locations';
import Pricing from './components/Pricing';
import Questions from './components/Questions';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Cta from './components/Cta';

// Import Halaman-Halaman Baru
import DiscordBotPricing from './pages/discord';
import MinecraftPricing from './pages/minecraft';
import VpsPricing from './pages/vps';


// Komponen untuk merender semua bagian dari Halaman Home
const Home = () => (
  <>
    <Hero />
    <Features />
    <Locations />
    <Pricing />
    <Questions />
    <Experience />
    <Reviews />
    <Cta />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* PERUBAHAN: Menambahkan route untuk setiap halaman baru */}
            <Route path="/discord" element={<DiscordBotPricing />} />
            <Route path="/minecraft" element={<MinecraftPricing />} />
            <Route path="/vps" element={<VpsPricing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;