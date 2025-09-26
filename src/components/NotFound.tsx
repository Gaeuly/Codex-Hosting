import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    // 1. Menghapus background putih dari container utama
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto text-center"
      >
        {/* 2. Mengganti style card menjadi "glass" */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8">
          {/* 3. Menyesuaikan style ikon error */}
          <div className="bg-red-500/20 p-4 rounded-xl mb-6 inline-block">
            <AlertTriangle size={48} className="text-red-400" />
          </div>
          
          {/* 4. Mengubah warna teks menjadi putih */}
          <h1 className="text-4xl font-bold text-white mb-4">404</h1>
          <h2 className="text-xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-300 mb-8">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved or doesn't exist.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-md"
            >
              <Home size={20} />
              <span>Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;