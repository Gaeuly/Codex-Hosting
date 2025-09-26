import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Server, Puzzle, Heart } from 'lucide-react';

// Data untuk setiap fitur yang akan ditampilkan
const experienceData = [
  {
    icon: LayoutDashboard,
    title: 'Main Dashboard',
    description: 'Easily view your server status, player count, resource usage, and quick controls—all in one place for efficient management.',
    image: '/experience.png'
  },
  {
    icon: Server,
    title: 'Server Dashboard',
    description: 'Access detailed settings for your Minecraft server including world selection, server type, RAM allocation, and live console access.',
    image: '/experience.png'
  },
  {
    icon: Puzzle,
    title: 'One-Click Plugin Installer',
    description: 'Install Minecraft plugins like EssentialsX, LuckPerms, or WorldEdit instantly—no uploads or config needed.',
    image: '/experience.png'
  },
  {
    icon: Heart,
    title: 'Version Changer',
    description: 'Easily switch between different Minecraft server versions or software types like Paper, Fabric, and more with just a few clicks.',
    image: '/experience.png'
  }
];

const Experience = () => {
  // State untuk melacak index fitur yang sedang aktif
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect untuk membuat slideshow otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      // Pindah ke slide berikutnya, kembali ke 0 jika sudah di akhir
      setActiveIndex(prevIndex => (prevIndex + 1) % experienceData.length);
    }, 5000); // Ganti slide setiap 5 detik

    // Membersihkan timer saat komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="bg-blue-500/10 text-blue-400 text-sm font-semibold px-4 py-2 rounded-full">
            ✦ Our Panel
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Experience Our <span className="text-blue-400">Platform</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for your needs
          </p>
        </motion.div>

        {/* === Konten Utama (Grid) === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* === Kolom Kiri: Daftar Fitur === */}
          <div className="space-y-4">
            {experienceData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive ? 'bg-blue-500/10 border-blue-500' : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800/80'
                  }`}
                >
                  {/* Animasi Loading Bar */}
                  {isActive && (
                    <motion.div
                      key={activeIndex} // Kunci untuk mereset animasi saat index berubah
                      className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: 'linear' }}
                      style={{ originX: 0 }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-md ${isActive ? 'text-blue-400' : 'text-gray-400'}`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                      <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* === Kolom Kanan: Tampilan Gambar === */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 rounded-xl bg-gray-800/50 border border-gray-700 p-4"
          >
            <AnimatePresence>
              <motion.img
                key={activeIndex} // Kunci untuk animasi ganti gambar
                src={experienceData[activeIndex].image}
                alt={experienceData[activeIndex].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;