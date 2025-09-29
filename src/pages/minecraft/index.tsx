import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, ShieldCheck, Gamepad2, Server, MapPin } from 'lucide-react';

// Komponen SVG untuk bendera, seperti di Locations.tsx
const USFlag = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" {...props}>
    <path fill="#fff" d="M0 0h72v48H0z"/>
    <path fill="#b22234" d="M0 0h72v4H0zm0 8h72v4H0zm0 16h72v4H0zm0 24h72v4H0zm0 32h72v4H0zm0 40h72v4H0z"/>
    <path fill="#3c3b6e" d="M0 0h36v28H0z"/>
    <path fill="#fff" d="m6 4 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM3 10l1.236 3.804h4.008L5.004 16.15l1.236 3.804L3 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L15 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L27 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM6 16l1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008z"/>
  </svg>
);
const NetherlandsFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" {...props}>
        <path fill="#21468B" d="M0 0h9v6H0z"/>
        <path fill="#fff" d="M0 0h9v4H0z"/>
        <path fill="#AE1C28" d="M0 0h9v2H0z"/>
    </svg>
);

// Data untuk semua paket, dibedakan berdasarkan cpuType dan location
const allPlans = [
    // --- Ampere Altra - USA ---
    { name: 'GRASS PLAN', cpuType: 'ampere', location: 'USA', priceINR: 139.00, ram: '2 GB', cpu: '100% CPU', storage: '16 GB SSD', features: ['DDoS Protection'] },
    { name: 'PLANK PLAN', cpuType: 'ampere', location: 'USA', priceINR: 279.00, ram: '4 GB', cpu: '150% CPU', storage: '16 GB SSD', features: ['DDoS Protection'] },
    { name: 'STONE PLAN', cpuType: 'ampere', location: 'USA', priceINR: 419.00, ram: '6 GB', cpu: '200% CPU', storage: '24 GB SSD', features: ['DDoS Protection'] },
    // --- Intel Xeon - USA ---
    { name: 'GRASS PLAN', cpuType: 'intel', location: 'USA', priceINR: 159.00, ram: '2 GB', cpu: '120% CPU', storage: '20 GB SSD', features: ['DDoS Protection', 'NVMe Storage'] },
    { name: 'PLANK PLAN', cpuType: 'intel', location: 'USA', priceINR: 299.00, ram: '4 GB', cpu: '180% CPU', storage: '20 GB SSD', features: ['DDoS Protection', 'NVMe Storage'] },
    { name: 'STONE PLAN', cpuType: 'intel', location: 'USA', priceINR: 449.00, ram: '6 GB', cpu: '220% CPU', storage: '30 GB SSD', features: ['DDoS Protection', 'NVMe Storage'] },
    // --- Ampere Altra - Netherlands ---
    { name: 'GRASS PLAN', cpuType: 'ampere', location: 'Netherlands', priceINR: 145.00, ram: '2 GB', cpu: '100% CPU', storage: '16 GB SSD', features: ['DDoS Protection'] },
    { name: 'PLANK PLAN', cpuType: 'ampere', location: 'Netherlands', priceINR: 289.00, ram: '4 GB', cpu: '150% CPU', storage: '16 GB SSD', features: ['DDoS Protection'] },
    { name: 'STONE PLAN', cpuType: 'ampere', location: 'Netherlands', priceINR: 439.00, ram: '6 GB', cpu: '200% CPU', storage: '24 GB SSD', features: ['DDoS Protection'] },
    // --- Intel Xeon - Netherlands ---
    { name: 'GRASS PLAN', cpuType: 'intel', location: 'Netherlands', priceINR: 165.00, ram: '2 GB', cpu: '120% CPU', storage: '20 GB SSD', features: ['DDoS Protection', 'NVMe Storage'] },
    { name: 'PLANK PLAN', cpuType: 'intel', location: 'Netherlands', priceINR: 309.00, ram: '4 GB', cpu: '180% CPU', storage: '20 GB SSD', features: ['DDoS Protection', 'NVMe Storage'] },
    { name: 'STONE PLAN', cpuType: 'intel', location: 'Netherlands', priceINR: 469.00, ram: '6 GB', cpu: '220% CPU', storage: '30 GB SSD', features: ['DDoS Protection', 'NVMe Storage'] },
];

const MinecraftPricing = () => {
  const [planType, setPlanType] = useState('ampere');
  const [location, setLocation] = useState('USA');

  // Filter paket berdasarkan state yang aktif
  const filteredPlans = allPlans.filter(
    (plan) => plan.cpuType === planType && plan.location === location
  );

  return (
    <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <section className="container mx-auto px-4 py-20 pt-32">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center">Choose your <span className="text-green-400">Game Server</span></h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto text-center">Select from our wide range of optimized game servers. Each server is configured for maximum performance and comes with DDoS protection.</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto mt-12 space-y-8">
            {/* 1. Plan Type Selection */}
            <div>
                <h2 className="text-sm font-semibold text-gray-400 mb-3">1. Plan Type</h2>
                <div className="flex items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2">
                    <button onClick={() => setPlanType('ampere')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${planType === 'ampere' ? 'bg-green-600' : 'hover:bg-gray-700'}`}><Server size={16}/> Ampere Altra</button>
                    <button onClick={() => setPlanType('intel')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${planType === 'intel' ? 'bg-green-600' : 'hover:bg-gray-700'}`}><Cpu size={16}/> Intel Xeon</button>
                </div>
            </div>

            {/* 2. Location Selection */}
            <div>
                <h2 className="text-sm font-semibold text-gray-400 mb-3">2. Location</h2>
                <div className="flex items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2">
                    <button onClick={() => setLocation('USA')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'USA' ? 'bg-gray-900 ring-1 ring-green-500' : 'hover:bg-gray-700'}`}><USFlag className="w-5 h-5 rounded-sm"/> USA</button>
                    <button onClick={() => setLocation('Netherlands')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'Netherlands' ? 'bg-gray-900 ring-1 ring-green-500' : 'hover:bg-gray-700'}`}><NetherlandsFlag className="w-5 h-5 rounded-sm"/> Netherlands</button>
                </div>
            </div>

            {/* 3. Select Software */}
            <div>
                <h2 className="text-sm font-semibold text-gray-400 mb-3">3. Select Software</h2>
                <div className="bg-green-600/20 border border-green-500 rounded-lg p-4 flex items-center gap-4">
                    <div className="bg-green-500 p-2 rounded">
                        <Gamepad2 size={24}/>
                    </div>
                    <div>
                        <h3 className="font-bold">Minecraft <span className="text-xs bg-green-500 px-1.5 py-0.5 rounded-full ml-1">Included</span></h3>
                        <p className="text-sm text-gray-300">Deploy and strive in the ultimate sandbox game. Starting at ₹139/mo</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 4. Choose Plan */}
        <div className="mt-16">
            <h2 className="text-sm font-semibold text-gray-400 mb-4 text-center">4. Choose Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlans.map((plan, index) => (
                    <motion.div
                        key={plan.name + plan.location + plan.cpuType}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col hover:border-green-500 transition-all"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            {plan.location === 'USA' ? <USFlag className="w-5 h-5 rounded-sm"/> : <NetherlandsFlag className="w-5 h-5 rounded-sm"/>}
                            <h3 className="text-lg font-bold">{plan.name}</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-300 mb-6 flex-grow">
                            <li className="flex items-center gap-3"><Server size={16} className="text-green-400"/> {plan.ram} RAM</li>
                            <li className="flex items-center gap-3"><Cpu size={16} className="text-green-400"/> {plan.cpu}</li>
                            <li className="flex items-center gap-3"><HardDrive size={16} className="text-green-400"/> {plan.storage}</li>
                            {plan.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3"><ShieldCheck size={16} className="text-green-400"/> {feature}</li>
                            ))}
                        </ul>
                        <div className="text-center mt-auto">
                            <p className="text-3xl font-bold mb-4">₹{plan.priceINR.toFixed(2)}<span className="text-base font-normal text-gray-400">/mo</span></p>
                            <button className="w-full bg-green-600 text-white font-semibold py-2.5 rounded-lg hover:bg-green-700 transition-colors">Order Now</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default MinecraftPricing;