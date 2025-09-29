import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, MemoryStick, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

// --- Placeholder Imports untuk Gambar ---
// Pastikan kamu punya gambar-gambar ini di folder src/assets/
import ubuntuLogo from '@/assets/ubuntu.png';
import windowsLogo from '@/assets/windows.png';
import fedoraLogo from '@/assets/fedora.png';
import debianLogo from '@/assets/debian.png';
import kaliLogo from '@/assets/kali.png';

// --- Komponen SVG Bendera ---
const USFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" {...props}><path fill="#fff" d="M0 0h72v48H0z"/><path fill="#b22234" d="M0 0h72v4H0zm0 8h72v4H0zm0 16h72v4H0zm0 24h72v4H0zm0 32h72v4H0zm0 40h72v4H0z"/><path fill="#3c3b6e" d="M0 0h36v28H0z"/><path fill="#fff" d="m6 4 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM3 10l1.236 3.804h4.008L5.004 16.15l1.236 3.804L3 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L15 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L27 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM6 16l1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008z"/></svg>
);
const NetherlandsFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 6" {...props}><path fill="#21468B" d="M0 0h9v6H0z"/><path fill="#fff" d="M0 0h9v4H0z"/><path fill="#AE1C28" d="M0 0h9v2H0z"/></svg>
);

// --- Data Mata Uang ---
const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    INR: { symbol: '₹', name: 'Indian Rupee', rate: 83.5 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
};

// --- DATA VPS LENGKAP UNTUK SEMUA KOMBINASI ---
const vpsPlans = [
    // USA - Ampere
    { id: 1, name: 'USA-AMP-08GB', location: 'USA', cpuType: 'Ampere', cores: 8, ram: 8, ssd: 256, priceUSD: 40.99 },
    { id: 2, name: 'USA-AMP-16GB', location: 'USA', cpuType: 'Ampere', cores: 10, ram: 16, ssd: 512, priceUSD: 80.99 },
    { id: 3, name: 'USA-AMP-24GB', location: 'USA', cpuType: 'Ampere', cores: 12, ram: 24, ssd: 768, priceUSD: 120.99 },
    // USA - Intel
    { id: 4, name: 'USA-INT-08GB', location: 'USA', cpuType: 'Intel', cores: 6, ram: 8, ssd: 300, priceUSD: 45.99 },
    { id: 5, name: 'USA-INT-16GB', location: 'USA', cpuType: 'Intel', cores: 8, ram: 16, ssd: 600, priceUSD: 90.99 },
    // USA - AMD
    { id: 6, name: 'USA-AMD-08GB', location: 'USA', cpuType: 'AMD', cores: 8, ram: 8, ssd: 256, priceUSD: 42.99 },
    { id: 7, name: 'USA-AMD-16GB', location: 'USA', cpuType: 'AMD', cores: 12, ram: 16, ssd: 512, priceUSD: 85.99 },
    // Netherlands - Ampere
    { id: 8, name: 'NL-AMP-08GB', location: 'Netherlands', cpuType: 'Ampere', cores: 8, ram: 8, ssd: 256, priceUSD: 43.99 },
    { id: 9, name: 'NL-AMP-16GB', location: 'Netherlands', cpuType: 'Ampere', cores: 10, ram: 16, ssd: 512, priceUSD: 86.99 },
    // Netherlands - Intel
    { id: 10, name: 'NL-INT-08GB', location: 'Netherlands', cpuType: 'Intel', cores: 6, ram: 8, ssd: 300, priceUSD: 48.99 },
    { id: 11, name: 'NL-INT-16GB', location: 'Netherlands', cpuType: 'Intel', cores: 8, ram: 16, ssd: 600, priceUSD: 97.99 },
    { id: 12, name: 'NL-INT-32GB', location: 'Netherlands', cpuType: 'Intel', cores: 12, ram: 32, ssd: 1200, priceUSD: 195.99 },
    // Netherlands - AMD
    { id: 13, name: 'NL-AMD-08GB', location: 'Netherlands', cpuType: 'AMD', cores: 8, ram: 8, ssd: 256, priceUSD: 46.99 },
    { id: 14, name: 'NL-AMD-16GB', location: 'Netherlands', cpuType: 'AMD', cores: 12, ram: 16, ssd: 512, priceUSD: 93.99 },
    { id: 15, name: 'NL-AMD-32GB', location: 'Netherlands', cpuType: 'AMD', cores: 16, ram: 32, ssd: 1024, priceUSD: 187.99 },
];

const operatingSystems = [
    { name: 'Ubuntu', logo: ubuntuLogo }, { name: 'Windows', logo: windowsLogo }, { name: 'Fedora', logo: fedoraLogo },
    { name: 'Debian', logo: debianLogo }, { name: 'Kali Linux', logo: kaliLogo },
];

const PLANS_PER_PAGE = 3;

const VpsPricing = () => {
    const [location, setLocation] = useState('USA');
    const [cpuType, setCpuType] = useState('Ampere');
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    
    const currentCurrency = currencies[selectedCurrency as keyof typeof currencies];

    // Filter plans berdasarkan lokasi dan tipe CPU
    const filteredPlans = vpsPlans.filter(p => p.location === location && p.cpuType === cpuType);
    
    // Logika Pagination
    const totalPages = Math.ceil(filteredPlans.length / PLANS_PER_PAGE);
    const startIndex = (currentPage - 1) * PLANS_PER_PAGE;
    const endIndex = startIndex + PLANS_PER_PAGE;
    const currentPlans = filteredPlans.slice(startIndex, endIndex);

    const handleFilterChange = () => {
        setCurrentPage(1); // Reset ke halaman 1 setiap kali filter berubah
    };
    
    const setAndFilterLocation = (loc: string) => {
        setLocation(loc);
        handleFilterChange();
    }

    const setAndFilterCpuType = (cpu: string) => {
        setCpuType(cpu);
        handleFilterChange();
    }


    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <section className="container mx-auto px-4 py-20 pt-32">
                {/* Header & Currency Converter */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">VPS Hosting <span className="text-blue-400">Solutions</span></h1>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto">High-performance virtual private servers with full root access, SSD storage, and 24/7 support.</p>
                    </div>
                    {/* Currency Dropdown */}
                    <div className="flex justify-center md:justify-end mt-6 md:-mt-12">
                         <div className="relative inline-block text-left">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center">
                                <span className="mr-2">{currentCurrency.symbol} {selectedCurrency}</span>
                                <ChevronDown size={20} />
                            </button>
                            {isDropdownOpen && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10">
                                <div className="py-1">
                                {Object.entries(currencies).map(([code, { symbol, name }]) => (
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

                <div className="max-w-5xl mx-auto mt-8 space-y-6">
                    {/* 1. Location */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">1. Location</h2>
                        <div className="flex items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2 max-w-xs">
                            <button onClick={() => setAndFilterLocation('USA')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'USA' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
                                <USFlag className="w-5 h-5 rounded-sm"/> USA
                            </button>
                            <button onClick={() => setAndFilterLocation('Netherlands')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'Netherlands' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
                                <NetherlandsFlag className="w-5 h-5 rounded-sm"/> Netherlands
                            </button>
                        </div>
                    </div>

                    {/* 2. CPU Type */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">2. CPU Type</h2>
                        <div className="flex flex-wrap items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2">
                            <button onClick={() => setAndFilterCpuType('Ampere')} className={`flex-1 text-center px-4 py-2 rounded-md transition-colors text-sm font-medium ${cpuType === 'Ampere' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>Ampere Altra</button>
                            <button onClick={() => setAndFilterCpuType('Intel')} className={`flex-1 text-center px-4 py-2 rounded-md transition-colors text-sm font-medium ${cpuType === 'Intel' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>Intel Xeon Gold</button>
                            <button onClick={() => setAndFilterCpuType('AMD')} className={`flex-1 text-center px-4 py-2 rounded-md transition-colors text-sm font-medium ${cpuType === 'AMD' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>AMD Ryzen 9</button>
                        </div>
                    </div>

                     {/* 3. Choose Plan */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">3. Choose Plan</h2>
                        <div className="space-y-4 min-h-[340px]">
                            {currentPlans.length > 0 ? (
                                currentPlans.map((plan, index) => (
                                    <motion.div
                                        key={plan.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4"
                                    >
                                        <div className="flex items-center gap-3"><h3 className="font-bold text-lg">{plan.name}</h3></div>
                                        <div className="w-full md:w-auto flex flex-wrap justify-center gap-4 text-sm">
                                            <div className="flex items-center gap-2"><Cpu size={16} className="text-gray-400"/> {plan.cores} vCores</div>
                                            <div className="flex items-center gap-2"><MemoryStick size={16} className="text-gray-400"/> {plan.ram} GB RAM</div>
                                            <div className="flex items-center gap-2"><HardDrive size={16} className="text-gray-400"/> {plan.ssd} GB NVMe SSD</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="font-bold text-lg whitespace-nowrap">{currentCurrency.symbol}{(plan.priceUSD * currentCurrency.rate).toFixed(2)}<span className="text-sm font-normal text-gray-400">/mo</span></p>
                                            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Order Now</button>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-10 bg-gray-800/60 rounded-lg flex items-center justify-center h-full">
                                    <p className="text-gray-400">No plans available for this selection.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1} className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"><ChevronLeft size={16}/></button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button key={i} onClick={() => setCurrentPage(i + 1)} className={`${currentPage === i + 1 ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'} w-8 h-8 rounded-md text-sm font-bold transition-colors`}>{i + 1}</button>
                        ))}
                        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages || totalPages === 0} className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"><ChevronRight size={16}/></button>
                    </div>
                </div>

                {/* Operating Systems */}
                <div className="mt-24">
                     <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">Choose your <span className="text-blue-400">OS</span></h2>
                        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Select from a wide range of popular operating systems.</p>
                    </motion.div>
                    <div className="flex justify-center flex-wrap gap-4 md:gap-8 mt-10">
                        {operatingSystems.map((os, index) => (
                            <motion.div key={os.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-lg w-28 h-28 justify-center border border-transparent hover:border-blue-500 transition-colors">
                                <img src={os.logo} alt={os.name} className="w-12 h-12 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', `<div class="w-12 h-12 bg-gray-700 rounded-md flex items-center justify-center text-xs">${os.name.substring(0,3)}</div>`) }} />
                                <span className="text-sm font-medium">{os.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VpsPricing;