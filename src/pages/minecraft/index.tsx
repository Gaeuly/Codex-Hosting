import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, MemoryStick, Shield, ChevronDown } from 'lucide-react';

// PERUBAHAN: Import gambar minecraft dari assets
import minecraftLogo from '@/assets/minecraft.png';

// --- Komponen SVG Bendera ---
const USFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" {...props}><path fill="#fff" d="M0 0h72v48H0z"/><path fill="#b22234" d="M0 0h72v4H0zm0 8h72v4H0zm0 16h72v4H0zm0 24h72v4H0zm0 32h72v4H0zm0 40h72v4H0z"/><path fill="#3c3b6e" d="M0 0h36v28H0z"/><path fill="#fff" d="m6 4 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM3 10l1.236 3.804h4.008L5.004 16.15l1.236 3.804L3 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L15 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L27 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM6 16l1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008z"/></svg>
);
const NetherlandsFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" {...props}><path fill="#21468B" d="M0 0h9v6H0z"/><path fill="#fff" d="M0 0h9v4H0z"/><path fill="#AE1C28" d="M0 0h9v2H0z"/></svg>
);

// PERUBAHAN: Menambahkan data mata uang
const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    INR: { symbol: '₹', name: 'Indian Rupee', rate: 83.5 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
};

// PERUBAHAN: Menambahkan harga dalam USD untuk kalkulasi
const gamePlans = [
    // USA - Ampere
    { id: 1, name: 'GRASS PLAN', location: 'USA', planType: 'Ampere', ram: 2, cpu: 100, ssd: 16, priceUSD: 13.99 },
    { id: 2, name: 'PLANK PLAN', location: 'USA', planType: 'Ampere', ram: 4, cpu: 150, ssd: 16, priceUSD: 27.99 },
    { id: 3, name: 'STONE PLAN', location: 'USA', planType: 'Ampere', ram: 6, cpu: 200, ssd: 24, priceUSD: 41.99 },
    // USA - Intel
    { id: 4, name: 'IRON PLAN', location: 'USA', planType: 'Intel', ram: 8, cpu: 250, ssd: 32, priceUSD: 55.99 },
    { id: 5, name: 'GOLD PLAN', location: 'USA', planType: 'Intel', ram: 10, cpu: 300, ssd: 48, priceUSD: 66.99 },
    { id: 6, name: 'DIAMOND PLAN', location: 'USA', planType: 'Intel', ram: 12, cpu: 350, ssd: 48, priceUSD: 88.99 },
    // Netherlands - Ampere
    { id: 7, name: 'WOOD PLAN', location: 'Netherlands', planType: 'Ampere', ram: 2, cpu: 100, ssd: 20, priceUSD: 14.99 },
    { id: 8, name: 'COBBLE PLAN', location: 'Netherlands', planType: 'Ampere', ram: 4, cpu: 150, ssd: 20, priceUSD: 29.99 },
    // Netherlands - Intel
    { id: 9, name: 'OBSIDIAN PLAN', location: 'Netherlands', planType: 'Intel', ram: 8, cpu: 250, ssd: 40, priceUSD: 59.99 },
    { id: 10, name: 'EMERALD PLAN', location: 'Netherlands', planType: 'Intel', ram: 12, cpu: 350, ssd: 60, priceUSD: 92.99 },
];

const MinecraftPricing = () => {
    const [planType, setPlanType] = useState('Ampere');
    const [location, setLocation] = useState('USA');
    // PERUBAHAN: State untuk mata uang
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const currentCurrency = currencies[selectedCurrency as keyof typeof currencies];
    const filteredPlans = gamePlans.filter(p => p.location === location && p.planType === planType);

    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <section className="container mx-auto px-4 py-20 pt-32">
                 {/* PERUBAHAN: Header dibuat responsif dengan Flexbox */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">Choose your <span className="text-green-400">Game Server</span></h1>
                            <p className="text-lg text-gray-400 max-w-2xl">Select from our wide range of optimized game servers for maximum performance.</p>
                        </div>
                        {/* Currency Dropdown */}
                        <div className="relative inline-block text-left">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center">
                                <span className="mr-2">{currentCurrency.symbol} {selectedCurrency}</span>
                                <ChevronDown size={20} />
                            </button>
                            {isDropdownOpen && (
                                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="origin-top-right md:origin-top-left absolute right-0 md:left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1">
                                    {Object.entries(currencies).map(([code, { symbol }]) => (
                                        <a key={code} href="#" onClick={(e) => { e.preventDefault(); setSelectedCurrency(code); setIsDropdownOpen(false); }} className="text-gray-300 block px-4 py-2 text-sm hover:bg-gray-700">
                                        {symbol} {code}
                                        </a>
                                    ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto mt-12 space-y-6">
                    {/* 1. Plan Type */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">1. Plan Type</h2>
                        <div className="flex items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2 max-w-xs">
                            <button onClick={() => setPlanType('Ampere')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium ${planType === 'Ampere' ? 'bg-green-600' : 'hover:bg-gray-700'}`}>Ampere Altra</button>
                            <button onClick={() => setPlanType('Intel')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium ${planType === 'Intel' ? 'bg-green-600' : 'hover:bg-gray-700'}`}>Intel Xeon</button>
                        </div>
                    </div>

                    {/* 2. Location */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">2. Location</h2>
                        <div className="flex items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2 max-w-xs">
                            <button onClick={() => setLocation('USA')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'USA' ? 'bg-green-600' : 'hover:bg-gray-700'}`}>
                                <USFlag className="w-5 h-5 rounded-sm"/> USA
                            </button>
                            <button onClick={() => setLocation('Netherlands')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'Netherlands' ? 'bg-green-600' : 'hover:bg-gray-700'}`}>
                                <NetherlandsFlag className="w-5 h-5 rounded-sm"/> Netherlands
                            </button>
                        </div>
                    </div>

                    {/* 3. Select Software */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">3. Select Software</h2>
                        <div className="bg-green-900/50 backdrop-blur-sm border border-green-700 rounded-lg p-4 flex items-center gap-4 max-w-sm">
                            {/* PERUBAHAN: Icon diganti dengan tag <img> */}
                            <img src={minecraftLogo} alt="Minecraft Logo" className="w-12 h-12" onError={(e) => e.currentTarget.src = 'https://placehold.co/48x48/10B981/FFFFFF?text=MC'}/>
                            <div>
                                <h3 className="font-bold text-white text-lg">Minecraft <span className="text-xs bg-green-500 text-white font-semibold px-2 py-0.5 rounded-full ml-1">POPULAR</span></h3>
                                <p className="text-sm text-gray-300">Deploy and strive in the ultimate sandbox game. Starting at {currentCurrency.symbol}139.00/mo</p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Choose Plan */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">4. Choose Plan</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredPlans.map((plan, index) => (
                                <motion.div 
                                    key={plan.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-6 flex flex-col"
                                >
                                    <div className="flex items-center gap-2 mb-4">
                                        {plan.location === 'USA' ? <USFlag className="w-5 h-5"/> : <NetherlandsFlag className="w-5 h-5"/>}
                                        <h3 className="font-bold text-xl text-white">{plan.name}</h3>
                                    </div>
                                    <ul className="space-y-2 text-gray-300 mb-6 flex-grow">
                                        <li className="flex items-center gap-3"><MemoryStick size={16} className="text-green-400"/> {plan.ram} GB RAM</li>
                                        <li className="flex items-center gap-3"><Cpu size={16} className="text-green-400"/> {plan.cpu}% CPU</li>
                                        <li className="flex items-center gap-3"><HardDrive size={16} className="text-green-400"/> {plan.ssd} GB SSD</li>
                                        <li className="flex items-center gap-3"><Shield size={16} className="text-green-400"/> DDoS Protection</li>
                                    </ul>
                                    <div className="text-center">
                                        <p className="text-3xl font-bold text-white mb-4">
                                            {currentCurrency.symbol}{(plan.priceUSD * currentCurrency.rate).toFixed(2)}
                                            <span className="text-base font-normal text-gray-400">/mo</span>
                                        </p>
                                        <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors">Order Now</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MinecraftPricing;