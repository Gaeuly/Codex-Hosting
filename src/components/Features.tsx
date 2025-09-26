import { motion } from 'framer-motion';
import { Bot, Gamepad2, Music, Shield } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Discord Bot Hosting',
    description: 'Host your Discord bots with 24/7 uptime and automatic restarts.',
  },
  {
    icon: Gamepad2,
    title: 'Minecraft Hosting',
    description: 'High-performance Minecraft servers with mod support and DDoS protection.',
  },
  {
    icon: Music,
    title: 'Lavalink',
    description: 'Premium music streaming nodes with global distribution and low latency.',
  },
  {
    icon: Shield,
    title: '24/7 Uptime & DDoS Protection',
    description: 'Enterprise-grade security with guaranteed uptime and attack mitigation.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to host your projects with confidence and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 w-fit mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}