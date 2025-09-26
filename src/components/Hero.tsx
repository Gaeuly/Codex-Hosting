import { motion } from 'framer-motion';
import { Zap, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Powerful Hosting for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Bots, Minecraft & More
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Fast, reliable, and affordable hosting with CodeX
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg"
            >
              Start Hosting Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-colors"
            >
              View Plans
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-3 mb-3">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="text-gray-400">Uptime</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-3 mb-3">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-white">DDoS</p>
              <p className="text-gray-400">Protection</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-3 mb-3">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-gray-400">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}