import { motion } from 'framer-motion';
import {
  Cpu,
  Zap,
  ShieldCheck,
  HeartPulse,
  Settings,
  BarChart,
  Globe,
  Cloud,
} from 'lucide-react';

// Data baru sesuai gambar referensi
const featuresData = [
  {
    icon: Cpu,
    title: 'High Performance',
    description: 'Powered by latest generation processors for performance',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: Zap,
    title: 'Low Latency',
    description: 'Optimized network infrastructure for minimal lag and delay',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Security',
    description: 'Our system is protected by advanced, multi-layered security protocols designed to detect, isolate, and neutralize threats in real time.',
    span: 'col-span-1 md:col-span-2 row-span-1', // Kartu ini lebih lebar
  },
  {
    icon: HeartPulse,
    title: 'Auto Recovery',
    description: 'Automatic server recovery and backup systems',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: Settings,
    title: 'Full Control',
    description: 'Complete server control panel with advanced configuration options',
    span: 'col-span-1 row-span-1',
  },
    {
    icon: BarChart,
    title: 'Resource Scaling',
    description: 'Dynamic resource allocation based on server demands',
    span: 'col-span-1 row-span-1',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Worldwide server locations for optimal connectivity',
    span: 'col-span-1 row-span-1',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left mb-12"
        >
          <span className="bg-blue-600/20 text-blue-300 text-sm font-semibold px-4 py-1 rounded-full">
            We Won't Disappoint
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Advanced <span className="text-blue-400">Features</span>
          </h2>
          <p className="text-lg text-gray-400 mt-2 max-w-3xl">
            Everything you need for professional game server hosting
          </p>
        </motion.div>

        {/* === Grid Kartu Fitur === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Terapkan span dari data untuk mengatur ukuran kartu
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 ${feature.span}`}
            >
              <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <feature.icon className="text-blue-400" size={24} />
              </div>
              <p className="text-gray-400 mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;