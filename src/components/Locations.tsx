import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import USFlag from '../icons/flags/USFlag';
import NetherlandsFlag from '../icons/flags/NetherlandsFlag';
// Kita tidak perlu lagi import Map.tsx

const serverLocations = [
  {
    country: 'United States',
    specs: 'AMD EPYC™ 9634 / Ampere Altra',
    flag: USFlag,
    position: { top: '35%', left: '18%' },
  },
  {
    country: 'Netherlands',
    specs: 'AMD Ryzen™ 9 5900X / Intel® Xeon®',
    flag: NetherlandsFlag,
    position: { top: '25%', left: '49%' },
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="bg-blue-600/20 text-blue-300 text-sm font-semibold px-4 py-1 rounded-full inline-flex items-center gap-2">
            <Globe size={14}/>
            Global Infrastructure
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            Global <span className="text-blue-400">Locations</span>
          </h2>
          <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">
            Strategically positioned servers worldwide for optimal performance and minimal latency
          </p>
        </motion.div>

        {/* === Info Lokasi di atas Peta === */}
        <div className="flex justify-center flex-wrap gap-x-12 gap-y-6 mb-12">
            {serverLocations.map(loc => (
                <motion.div 
                    key={loc.country}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4"
                >
                    <loc.flag className="w-8 h-8 rounded-full object-cover" />
                    <div>
                        <h3 className="font-semibold text-white">{loc.country}</h3>
                        <p className="text-sm text-gray-400">{loc.specs}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* === Peta Dunia dengan Titik Denyut === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl mx-auto aspect-[2/1]"
        >
          {/* Menggunakan tag <img> untuk memanggil SVG dari folder public */}
          <img 
            src="/map.svg" 
            alt="Global Server Locations Map" 
            className="absolute top-0 left-0 w-full h-full object-contain" 
          />

          {/* Titik Lokasi (tetap sama) */}
          {serverLocations.map((loc) => (
            <div
              key={loc.country}
              className="absolute"
              style={{ top: loc.position.top, left: loc.position.left }}
            >
              <div className="relative flex justify-center items-center">
                <div className="absolute w-4 h-4 rounded-full bg-blue-500 animate-ping opacity-75"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;