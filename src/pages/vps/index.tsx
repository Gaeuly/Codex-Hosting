import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, MemoryStick, Server, ChevronLeft, ChevronRight } from 'lucide-react';

// --- Placeholder Imports untuk Gambar ---
// Pastikan kamu punya gambar-gambar ini di folder src/assets/
import ampereLogo from '@/assets/amr.png';
import intelLogo from '@/assets/intel.png';
import amdLogo from '@/assets/amd.png';
import ubuntuLogo from '@/assets/ubuntu.png';
import windowsLogo from '@/assets/windows.png';
import fedoraLogo from '@/assets/fedora.png';
import debianLogo from '@/assets/debian.png';
import kaliLogo from '@/assets/kali.png';


// --- Komponen SVG Bendera ---
const USFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 48" {...props}><path fill="#fff" d="M0 0h72v48H0z"/><path fill="#b22234" d="M0 0h72v4H0zm0 8h72v4H0zm0 16h72v4H0zm0 24h72v4H0zm0 32h72v4H0zm0 40h72v4H0z"/><path fill="#3c3b6e" d="M0 0h36v28H0z"/><path fill="#fff" d="m6 4 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 11.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM3 10l1.236 3.804h4.008L5.004 16.15l1.236 3.804L3 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L15 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L27 17.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zM6 16l1.236 3.804h4.008l-3.242 2.352 1.236 3.804L6 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L18 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008zm12 0 1.236 3.804h4.008l-3.242 2.352 1.236 3.804L30 23.608l-3.242 2.352 1.236-3.804-3.242-2.352h4.008z"/></svg>
);
const GermanyFlag = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" {...props}><path d="M0 0h5v3H0z"/><path fill="#D00" d="M0 1h5v2H0z"/><path fill="#FFCE00" d="M0 2h5v1H0z"/></svg>
);

// --- Data untuk VPS Plans ---
const vpsPlans = [
    // USA - Ampere
    { id: 1, name: 'USA-VPS-08GB', location: 'USA', cpuType: 'Ampere', cores: 8, ram: 8, ssd: 256, price: 679.00 },
    { id: 2, name: 'USA-VPS-16GB', location: 'USA', cpuType: 'Ampere', cores: 10, ram: 16, ssd: 512, price: 1359.00 },
    { id: 3, name: 'USA-VPS-24GB', location: 'USA', cpuType: 'Ampere', cores: 12, ram: 24, ssd: 768, price: 2039.00 },
    // Germany - Intel
    { id: 4, name: 'GER-VPS-08GB', location: 'Germany', cpuType: 'Intel', cores: 6, ram: 8, ssd: 300, price: 729.00 },
    { id: 5, name: 'GER-VPS-16GB', location: 'Germany', cpuType: 'Intel', cores: 8, ram: 16, ssd: 600, price: 1459.00 },
    // Germany - AMD
    { id: 6, name: 'GER-VPS-08GB', location: 'Germany', cpuType: 'AMD', cores: 8, ram: 8, ssd: 256, price: 749.00 },
    { id: 7, name: 'GER-VPS-16GB', location: 'Germany', cpuType: 'AMD', cores: 12, ram: 16, ssd: 512, price: 1499.00 },
];

// --- Data untuk Operating Systems ---
const operatingSystems = [
    { name: 'Ubuntu', logo: ubuntuLogo },
    { name: 'Windows', logo: windowsLogo },
    { name: 'Fedora', logo: fedoraLogo },
    { name: 'Debian', logo: debianLogo },
    { name: 'Kali Linux', logo: kaliLogo },
];

const VpsPricing = () => {
    const [location, setLocation] = useState('USA');
    const [cpuType, setCpuType] = useState('Ampere');

    const filteredPlans = vpsPlans.filter(p => p.location === location && p.cpuType === cpuType);

    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <section className="container mx-auto px-4 py-20 pt-32">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">VPS Hosting <span className="text-blue-400">Solutions</span></h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">High-performance virtual private servers with full root access, SSD storage, and 24/7 support. Perfect for developers and businesses.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto mt-12 space-y-6">
                    {/* 1. Location Selection */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">1. Location</h2>
                        <div className="flex items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2 max-w-xs">
                            <button onClick={() => setLocation('USA')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'USA' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
                                <USFlag className="w-5 h-5 rounded-sm"/> USA
                            </button>
                            <button onClick={() => setLocation('Germany')} className={`w-full text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${location === 'Germany' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>
                                <GermanyFlag className="w-5 h-5 rounded-sm"/> Germany
                            </button>
                        </div>
                    </div>

                    {/* 2. CPU Type Selection */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">2. CPU Type</h2>
                        <div className="flex flex-wrap items-center bg-gray-800/70 backdrop-blur-sm rounded-lg p-2 gap-2">
                            <button onClick={() => setCpuType('Ampere')} className={`flex-1 text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${cpuType === 'Ampere' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>Ampere Altra</button>
                            <button onClick={() => setCpuType('Intel')} className={`flex-1 text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${cpuType === 'Intel' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>Intel Xeon Gold 6150</button>
                            <button onClick={() => setCpuType('AMD')} className={`flex-1 text-center px-4 py-2 rounded-md transition-colors text-sm font-medium flex items-center justify-center gap-2 ${cpuType === 'AMD' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}>AMD Ryzen 9 5950X</button>
                        </div>
                    </div>

                     {/* 3. Choose Plan */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-400 mb-3">3. Choose Plan</h2>
                        <div className="space-y-4">
                            {filteredPlans.length > 0 ? (
                                filteredPlans.map((plan, index) => (
                                    <motion.div
                                        key={plan.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between gap-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            {plan.location === 'USA' ? <USFlag className="w-6 h-6 rounded-sm"/> : <GermanyFlag className="w-6 h-6 rounded-sm"/>}
                                            <h3 className="font-bold text-lg">{plan.name}</h3>
                                        </div>
                                        <div className="w-full md:w-auto flex flex-wrap justify-center gap-4 text-sm">
                                            <div className="flex items-center gap-2"><Cpu size={16} className="text-gray-400"/> {plan.cores} vCores</div>
                                            <div className="flex items-center gap-2"><MemoryStick size={16} className="text-gray-400"/> {plan.ram} GB RAM</div>
                                            <div className="flex items-center gap-2"><HardDrive size={16} className="text-gray-400"/> {plan.ssd} GB NVMe SSD</div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <p className="font-bold text-lg whitespace-nowrap">₹{plan.price.toFixed(2)}<span className="text-sm font-normal text-gray-400">/mo</span></p>
                                            <button className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">Order Now</button>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-10 bg-gray-800/60 rounded-lg">
                                    <p className="text-gray-400">No plans available for this selection.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center items-center gap-2 mt-8">
                        <button className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors disabled:opacity-50"><ChevronLeft size={16}/></button>
                        <button className="bg-blue-600 w-8 h-8 rounded-md text-sm font-bold">1</button>
                        <button className="bg-gray-800 w-8 h-8 rounded-md text-sm hover:bg-gray-700 transition-colors">2</button>
                        <button className="bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition-colors"><ChevronRight size={16}/></button>
                    </div>
                </div>

                {/* Operating Systems */}
                <div className="mt-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">Choose your <span className="text-blue-400">OS</span></h2>
                        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Select from a wide range of popular operating systems. All images are pre-configured and ready to deploy instantly on your VPS.</p>
                    </motion.div>
                    <div className="flex justify-center flex-wrap gap-4 md:gap-8 mt-10">
                        {operatingSystems.map((os, index) => (
                            <motion.div 
                                key={os.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-lg w-28 h-28 justify-center border border-transparent hover:border-blue-500 transition-colors"
                            >
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