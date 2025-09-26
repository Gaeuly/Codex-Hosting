import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import USFlag from '../icons/flags/USFlag';
import NetherlandsFlag from '../icons/flags/NetherlandsFlag';

// Data diperbarui dengan Netherlands
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
          className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-center bg-no-repeat"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 500' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M851.3 125.4c-3.3-1.2-6.9-2.1-10.6-2.6-3.7-.5-7.5-.8-11.3-.8-13.8 0-27.2 2.7-39.7 7.8-12.5 5.2-24 12.8-34.1 22.4-10.1 9.6-18.6 21-25.2 33.6-6.6 12.6-11.2 26.2-13.4 40.2-.9 5.8-1.4 11.7-1.4 17.6 0 16 3.6 31.8 10.5 46.5 6.9 14.7 16.5 28 28.5 39.2 12 11.2 26.1 20 41.8 25.8 15.7 5.8 32.6 8.5 50.2 7.7 17.6-.8 35.1-5.2 51.5-12.9 16.4-7.7 31.5-18.5 44.5-31.9 13-13.4 23.6-29.1 31.4-46.6 7.8-17.5 12.6-36.5 14-56.2.5-7.1.8-14.3.8-21.5 0-21.3-4.9-42.3-14.3-61.8-9.4-19.5-22.9-37-40-51.5-17.1-14.5-37.3-25.6-59.5-32.6-22.2-7-45.8-9.8-69.3-8.1-11.6.8-23.1 2.5-34.3 5z' fill='%231a202c'/%3E%3C/svg%3E")` }}
        >
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