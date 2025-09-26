import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
        >
          Powerful Hosting for{' '}
          <span className="text-purple-600">Bots, Minecraft & More</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Fast, reliable, and affordable hosting with CodeX
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <button className="bg-white border border-gray-200 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-semibold text-gray-900">
                Start Your Journey
              </span>
              <ArrowRight
                size={28}
                className="text-purple-600 group-hover:translate-x-2 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 mt-2">
              Deploy in minutes, scale effortlessly
            </p>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;