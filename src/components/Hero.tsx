import { motion } from 'framer-motion';
import { Zap, Shield, Clock } from 'lucide-react';

// Komponen untuk kartu fitur agar lebih rapi
const FeatureCard = ({ icon, text, className, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168, 85, 247, 0.3)' }}
      className={`absolute flex items-center gap-4 py-3 px-6 bg-gray-500/10 backdrop-blur-md border border-white/10 rounded-full shadow-lg ${className}`}
    >
      {icon}
      <span className="font-semibold text-white text-base md:text-lg">{text}</span>
    </motion.div>
  );
};

export default function Hero() {
  return (
    // Section utama dengan background gelap dan efek gradasi ungu
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0A0715] text-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Efek cahaya gradasi di background */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-900/50 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-900/40 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Kolom Kiri: Perkenalan */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Hosting <span className="text-purple-400">CodeX</span> Premier{' '}
            <span className="block">All-in-One Anda</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Temukan host terdepan untuk manajemen dan performa. Dibuat untuk meningkatkan pengalaman komunitas Anda, menyederhanakan manajemen server, dan memberikan Anda akses ke sumber daya premium untuk setiap kebutuhan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(139, 92, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
            >
              Mulai Hosting
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition-colors duration-300"
            >
              Lihat Paket
            </motion.button>
          </motion.div>
        </div>
        
        {/* Kolom Kanan: Kartu Fitur Zigzag */}
        <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
            <FeatureCard 
                icon={<Zap className="w-7 h-7 text-purple-400" />}
                text="99.9% Uptime"
                className="top-8 right-0"
                delay={0.6}
            />
            <FeatureCard 
                icon={<Shield className="w-7 h-7 text-purple-400" />}
                text="Proteksi DDoS"
                className="top-1/2 left-0 -translate-y-1/2"
                delay={0.8}
            />
            <FeatureCard 
                icon={<Clock className="w-7 h-7 text-purple-400" />}
                text="Dukungan 24/7"
                className="bottom-8 right-0"
                delay={1.0}
            />
        </div>
      </div>
    </section>
  );
}
