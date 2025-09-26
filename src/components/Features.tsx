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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CodeX?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-xl mb-4">
                  <feature.icon size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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