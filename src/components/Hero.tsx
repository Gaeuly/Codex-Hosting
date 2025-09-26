import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  Headset,
  TerminalSquare,
} from 'lucide-react';

// Array teks yang akan dianimasikan
const animatedWords = [
  'Discord Bot',
  'Minecraft Server',
  'Lavalink Node',
  'VPS',
];

// Data untuk kartu fitur di sebelah kanan
const featureCards = [
  {
    icon: TerminalSquare,
    title: 'Instant Setup',
    description: 'Get your server running in under 60 seconds',
  },
  {
    icon: ShieldCheck,
    title: 'DDoS Protection',
    description: 'Enterprise-grade security for your servers',
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Reliable hosting with guaranteed availability',
  },
  {
    icon: Headset,
    title: '24/7 Support',
    description: 'Expert help whenever you need it',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect untuk mengubah teks setiap 2.5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
    }, 2500); // Ganti teks setiap 2.5 detik

    return () => clearInterval(interval); // Cleanup interval saat komponen unmount
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* === Kolom Kiri: Teks & Tombol === */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Host your own
              <br />
              {/* Container untuk animasi teks */}
              <span className="text-blue-400 h-20 block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block"
                  >
                    {animatedWords[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-lg">
              Experience lightning-fast performance, unbeatable reliability, and 24/7 support for all your favorite games and applications.
            </p>
            <div className="mt-8 flex items-center space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </motion.button>
              <a
                href="#"
                className="text-gray-300 font-medium hover:text-white flex items-center space-x-2 transition-colors"
              >
                <span>Learn More</span>
                <ExternalLink size={16} />
              </a>
            </div>
             <p className="mt-6 text-sm text-gray-500">
              ··· Get started for free!
            </p>
          </motion.div>

          {/* === Kolom Kanan: Kartu Fitur === */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
           >
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
              >
                <div className="flex items-start space-x-4">
                    <card.icon className="text-blue-400 mt-1" size={24} />
                    <div>
                        <h3 className="font-semibold text-white">{card.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{card.description}</p>
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;