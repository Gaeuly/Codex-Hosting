import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Bot, Server, Music, Globe, Info, HelpingHand, FileText, Shield, BarChart } from 'lucide-react';

// --- Data untuk dropdown menu, agar mudah diubah ---
const serviceItems = [
  { icon: Bot, name: 'Discord Bot', href: '#' },
  { icon: Server, name: 'Minecraft Server', href: '#' },
  { icon: Music, name: 'Lavalink Hosting', href: '#' },
  { icon: Globe, name: 'VPS', href: '#' },
];

const moreItems = [
  { icon: Info, name: 'About Us', href: '#about' },
  { icon: HelpingHand, name: 'Support', href: '#' },
  { icon: FileText, name: 'TOS', href: '#' },
  { icon: Shield, name: 'Privacy Policy', href: '#' },
  { icon: BarChart, name: 'Status Page', href: '#' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // State untuk dropdown di versi mobile
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 100); // Sedikit delay agar tidak langsung tertutup
  };
  
  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* === Logo === */}
          <Link to="/" className="flex-shrink-0">
            <img src="/codex.png" alt="CodeX Logo" className="h-10 w-auto" />
          </Link>

          {/* === Desktop Menu === */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Home</Link>

            {/* Dropdown Services */}
            <div onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave} className="relative">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {openDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 w-96 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-4 grid grid-cols-2 gap-4"
                  >
                    {serviceItems.map(item => <DropdownItem key={item.name} {...item} />)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dropdown More */}
            <div onMouseEnter={() => handleMouseEnter('more')} onMouseLeave={handleMouseLeave} className="relative">
              <button className="flex items-center text-gray-300 hover:text-white transition-colors text-sm font-medium">
                More <ChevronDown size={16} className="ml-1" />
              </button>
              <AnimatePresence>
                {openDropdown === 'more' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg p-2"
                  >
                    {moreItems.map(item => <DropdownItem key={item.name} {...item} />)}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          {/* === Tombol Dashboard & Mobile Menu Toggle === */}
          <div className="flex items-center">
             <a href="#" className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Dashboard</a>
            <div className="md:hidden ml-4">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/80 backdrop-blur-sm"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link to="/" className="block py-2 text-gray-300 hover:text-white">Home</Link>
              
              {/* Dropdown Services Mobile */}
              <div>
                <button onClick={() => toggleMobileDropdown('services')} className="w-full flex justify-between items-center py-2 text-gray-300 hover:text-white">
                  <span>Services</span>
                  <ChevronDown size={20} className={`transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'services' && (
                  <div className="pl-4 mt-2 space-y-2">
                    {serviceItems.map(item => <Link key={item.name} to={item.href} className="flex items-center gap-3 py-2 text-gray-400 hover:text-white"><item.icon size={18} />{item.name}</Link>)}
                  </div>
                )}
              </div>
              
              {/* Dropdown More Mobile */}
              <div>
                <button onClick={() => toggleMobileDropdown('more')} className="w-full flex justify-between items-center py-2 text-gray-300 hover:text-white">
                  <span>More</span>
                   <ChevronDown size={20} className={`transition-transform ${mobileDropdown === 'more' ? 'rotate-180' : ''}`} />
                </button>
                {mobileDropdown === 'more' && (
                  <div className="pl-4 mt-2 space-y-2">
                     {moreItems.map(item => <Link key={item.name} to={item.href} className="flex items-center gap-3 py-2 text-gray-400 hover:text-white"><item.icon size={18} />{item.name}</Link>)}
                  </div>
                )}
              </div>
              
               <a href="#" className="block w-full text-center bg-blue-600 text-white mt-4 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">Dashboard</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Komponen kecil untuk item dropdown agar kode lebih rapi
const DropdownItem = ({ icon: Icon, name, href }: { icon: React.ElementType, name: string, href: string }) => (
  <a href={href} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors text-gray-300 hover:text-white">
    <Icon size={18} />
    <span className="text-sm font-medium">{name}</span>
  </a>
);

export default Navbar;