import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, HardDrive, Wifi, ShieldCheck, LifeBuoy, ChevronDown } from 'lucide-react';

// Data mata uang dan kurs konversi
const currencies = {
  INR: { symbol: '₹', name: 'Indian Rupee', rate: 83.5 },
  USD: { symbol: '$', name: 'US Dollar', rate: 1 },
  EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
};

// Data paket hosting dengan harga dasar dalam USD untuk konversi
const discordPlans = [
  {
    name: 'Lite Plan',
    type: 'Discord Bot',
    priceUSD: 0.42,
    cpu: '100% CPU',
    ram: '512 MB',
    storage: '2 GB',
    storageType: 'SSD Storage',
    bandwidth: 'Unlimited',
    uptime: '24/7 Uptime',
    popular: false,
  },
  {
    name: 'Plus Plan',
    type: 'Discord Bot',
    priceUSD: 0.84,
    cpu: '100% CPU',
    ram: '1 GB',
    storage: '5 GB',
    storageType: 'SSD Storage',
    bandwidth: 'Unlimited',
    uptime: '24/7 Uptime',
    popular: true,
  },
  {
    name: 'Pro Plan',
    type: 'Discord Bot',
    priceUSD: 1.68,
    cpu: '100% CPU',
    ram: '2 GB',
    storage: '15 GB',
    storageType: 'SSD Storage',
    bandwidth: 'Unlimited',
    uptime: '24/7 Uptime',
    popular: false,
  },
  {
    name: 'Ultra Plan',
    type: 'Discord Bot',
    priceUSD: 3.35,
    cpu: '150% CPU',
    ram: '4 GB',
    storage: '20 GB',
    storageType: 'SSD Storage',
    bandwidth: 'Unlimited',
    uptime: '24/7 Uptime',
    popular: false,
  },
  {
    name: 'Elite Plan',
    type: 'Discord Bot',
    priceUSD: 5.02,
    cpu: '200% CPU',
    ram: '6 GB',
    storage: '30 GB',
    storageType: 'SSD Storage',
    bandwidth: 'Unlimited',
    uptime: '24/7 Uptime',
    popular: false,
  },
  {
    name: 'LavaLink: V4',
    type: 'Discord Bot',
    priceUSD: 0.96,
    cpu: '100% CPU',
    ram: '2 GB',
    storage: '5 GB',
    storageType: 'SSD Storage',
    bandwidth: 'Unlimited',
    uptime: '24/7 Uptime',
    popular: false,
  },
];

const AdvancedFeatures = [
    {
        icon: <Zap size={28} className="text-blue-400" />,
        title: 'Instant Activation',
        description: 'Your service is activated instantly after payment confirmation.'
    },
    {
        icon: <ShieldCheck size={28} className="text-blue-400" />,
        title: 'DDoS Protection',
        description: 'Advanced protection to keep your bot online during attacks.'
    },
    {
        icon: <LifeBuoy size={28} className="text-blue-400" />,
        title: '24/7 Support',
        description: 'Our expert team is always ready to help you with any issue.'
    },
];

const DiscordBotPricing = () => {
  const [activeTab, setActiveTab] = useState('premium');
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const currentCurrency = currencies[selectedCurrency as keyof typeof currencies];

  return (
    // PERUBAHAN: Latar belakang menggunakan background.png dan ada section wrapper
    <div className="min-h-screen" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      {/* PERUBAHAN: Wrapper section dengan padding atas (pt-32) agar tidak menempel navbar */}
      <section className="container mx-auto px-4 py-20 pt-32">
        
        {/* === Header Section & Currency Selector === */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Discord Bot <span className="text-blue-400">Hosting</span></h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Reliable and affordable Discord bot hosting with 24/7 uptime, Node.js support, and easy management. Perfect for developers and communities.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            {/* Plan Type Tabs */}
            <div className="bg-gray-800/70 backdrop-blur-sm p-2 rounded-lg flex items-center gap-2">
                <button 
                    onClick={() => setActiveTab('standard')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'standard' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                    Plan Type
                </button>
                <button 
                    onClick={() => setActiveTab('premium')}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${activeTab === 'premium' ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                    Premium Plans
                </button>
            </div>
            {/* Currency Dropdown */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-white font-semibold py-2.5 px-4 rounded-lg inline-flex items-center text-sm"
              >
                <span className="mr-2">{currentCurrency.symbol} {selectedCurrency}</span>
                <ChevronDown size={20} />
              </button>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
                >
                  <div className="py-1">
                    {Object.entries(currencies).map(([code, { symbol, name }]) => (
                      <a
                        key={code}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedCurrency(code);
                          setIsDropdownOpen(false);
                        }}
                        className="text-gray-300 block px-4 py-2 text-sm hover:bg-gray-700"
                      >
                        {symbol} {code} - {name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
        </div>

        {/* === Pricing Cards Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {discordPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden group hover:border-blue-500 transition-all duration-300 flex flex-col ${plan.popular ? 'border-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
              <div className="p-6 flex-grow">
                <div className="flex items-start gap-4 mb-4">
                  {/* PERUBAHAN: Gambar langsung dari assets */}
                  <img src="/src/assets/nodejs.jpg" alt="Node.js Icon" className="w-16 h-16 rounded-lg object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/64x64/1F2937/FFFFFF?text=JS' }} />
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-sm text-gray-400">{plan.type}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4 my-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-300"><Cpu size={16} className="text-gray-500"/> <span>{plan.cpu}</span></div>
                    <div className="flex items-center gap-2 text-gray-300"><Zap size={16} className="text-gray-500"/> <span>{plan.ram} RAM</span></div>
                    <div className="flex items-center gap-2 text-gray-300"><HardDrive size={16} className="text-gray-500"/> <span>{plan.storage} {plan.storageType}</span></div>
                    <div className="flex items-center gap-2 text-gray-300"><Wifi size={16} className="text-gray-500"/> <span>{plan.bandwidth}</span></div>
                </div>
                
                <div className='border-t border-gray-700 my-6'></div>
                
                <div className="flex items-baseline justify-center text-center">
                  {/* PERUBAHAN: Harga dinamis sesuai mata uang yang dipilih */}
                  <span className="text-4xl font-bold tracking-tight text-white">{currentCurrency.symbol}{(plan.priceUSD * currentCurrency.rate).toFixed(2)}</span>
                  <span className="text-lg text-gray-400">/mo</span>
                </div>
              </div>
              
              <div className="p-6 pt-0 mt-auto">
                <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/30">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* === Advanced Features Section === */}
        <div className="mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced <span className="text-blue-400">Features</span></h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Everything you need for professional bot hosting.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {AdvancedFeatures.map((feature, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center"
                    >
                        <div className="flex justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default DiscordBotPricing;