import { motion } from 'framer-motion';
import { Zap, Shield, Clock } from 'lucide-react';

// Kartu fitur dengan gaya baru: gradient glossy dan offset shadow
const FeatureCard = ({ icon, text, className, delay }) => {
  return (
    <motion.div
      // Animasi awal saat komponen muncul
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: delay, type: 'spring', stiffness: 100 }}
      
      // Efek saat cursor diarahkan ke kartu (hover)
      whileHover={{ 
        y: -6, // Geser sedikit ke atas
        x: 6,  // Geser sedikit ke kanan
        // Ubah shadow saat di-hover agar lebih dinamis dan berwarna ungu
        boxShadow: '10px 10px 0px #A855F7', 
      }}
      
      // Styling utama kartu
      className={`group absolute flex items-center gap-4 py-4 px-7 rounded-2xl cursor-pointer
                 transition-all duration-300
                 // 1. Latar belakang glossy dengan gradien biru-hitam-ungu
                 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900
                 // 2. Border tipis semi-transparan untuk efek modern
                 border border-white/20
                 // 3. Offset shadow awal berwarna abu-abu gelap
                 shadow-[8px_8px_0px_#4B5563]`}
      style={{
        // Menambahkan properti transisi custom untuk pergerakan dan shadow
        transitionProperty: 'transform, box-shadow'
      }}
    >
        <div className="text-purple-400">
            {icon}
        </div>
        <span className="font-semibold text-white text-base md:text-lg">{text}</span>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section 
      className="relative w-full flex items-center justify-center bg-cover bg-center bg-no-repeat text-white overflow-hidden pt-40 pb-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      <div aria-hidden="true" className="absolute inset-0 z-0 bg-black/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            CodeX is Your Premier{' '}
            <span className="text-purple-400">All-in-One</span> Host
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            Meet the leading host for management and performance. Built to elevate your community's experience, streamline server management, and provide you access to premium resources for every necessity.
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
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400/10 transition-colors duration-300"
            >
              View Plans
            </motion.button>
          </motion.div>
        </div>
        
        {/* Bagian ini tidak diubah, hanya menampung kartu-kartu fitur */}
        <div className="relative h-96 w-full hidden lg:flex items-center justify-center">
            <FeatureCard 
                icon={<Zap className="w-7 h-7" />}
                text="99.9% Uptime"
                className="top-8 right-0"
                delay={0.6}
            />
            <FeatureCard 
                icon={<Shield className="w-7 h-7" />}
                text="DDoS Protection"
                className="top-1/2 left-0 -translate-y-1/2"
                delay={0.8}
            />
            <FeatureCard 
                icon={<Clock className="w-7 h-7" />}
                text="24/7 Support"
                className="bottom-8 right-0"
                delay={1.0}
            />
        </div>
      </div>
    </section>
  );
}
