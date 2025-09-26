import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center items-center mb-4">
            <span className="text-2xl font-bold text-white">
              Code<span className="text-purple-400">X</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 CodeX. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}