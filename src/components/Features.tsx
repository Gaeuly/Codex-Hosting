import { motion } from 'framer-motion';
import { Bot, Gamepad2, Music, Shield } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Discord Bot Hosting',
    description: 'Deploy and manage your Discord bots with ease',
  },
  {
    icon: Gamepad2,
    title: 'Minecraft Hosting',
    description: 'High-performance servers for your Minecraft worlds',
  },
  {
    icon: Music,
    title: 'Lavalink',
    description: 'Premium audio streaming for your Discord music bots',
  },
  {
    icon: Shield,
    title: '24/7 Uptime & DDoS Protection',
    description: 'Enterprise-grade security and reliability',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* 1. Mengubah warna teks judul menjadi putih */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose CodeX?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive hosting solutions designed for modern
            developers and gaming communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              // 2. Mengganti style card menjadi "glass"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {/* 3. Mengubah style ikon agar cocok dengan tema gelap */}
                <div className="bg-white/20 p-4 rounded-xl mb-4">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;