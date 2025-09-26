import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    // 1. Mengurangi padding vertikal dan menghapus min-h-screen agar tidak terlalu jauh
    <section
      className="flex items-center justify-center py-32 sm:py-40 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // 2. Mengubah warna teks menjadi putih agar kontras dengan background gelap
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6"
        >
          Powerful Hosting for{' '}
          <span className="text-white">Bots, Minecraft & More</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Mengubah warna sub-teks menjadi abu-abu terang
          className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto"
        >
          Fast, reliable, and affordable hosting with CodeX
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block"
        >
          {/* 3. Tombol tetap putih untuk kontras, shadow disesuaikan */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black font-bold py-4 px-8 border-2 border-black rounded-lg shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] flex items-center group"
          >
            <span className="text-2xl font-semibold">
              Start Your Journey
            </span>
            <ArrowRight
              size={28}
              className="ml-4 text-black group-hover:translate-x-2 transition-transform duration-300"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;