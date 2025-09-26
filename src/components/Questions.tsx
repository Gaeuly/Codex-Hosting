import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqData = [
  {
    question: 'How do I get started with game server hosting?',
    answer: 'Getting started is simple! Just choose a plan that fits your needs, complete the checkout process, and your server will be instantly deployed. You will receive an email with all the necessary login details to get started right away.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support through tickets and Discord. Our expert team is always ready to help you with any server-related issues, from initial setup to troubleshooting complex problems.'
  },
  {
    question: 'Can I modify server settings and configurations?',
    answer: 'Absolutely! You get full access to your server files and a user-friendly control panel to modify settings, install mods, plugins, and customize your gaming experience to your liking.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept a wide range of payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and various cryptocurrencies for your convenience.'
  },
  {
    question: 'Do you offer DDoS protection?',
    answer: 'Yes, all our hosting plans come with enterprise-grade DDoS protection to keep your server online and safe from attacks, ensuring a smooth and uninterrupted experience for your players.'
  }
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* PERBAIKAN: Mengubah lg:grid-cols-2 menjadi md:grid-cols-2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* === Kolom Kiri: Ilustrasi === */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            // Sembunyikan gambar di layar 'sm' ke bawah, tampilkan sebagai 'block' di 'md' ke atas
            className="hidden md:block" 
          >
            <img 
              src="/question.png" 
              alt="Minecraft character illustration" 
              className="w-full h-auto max-w-md mx-auto"
            />
          </motion.div>

          {/* === Kolom Kanan: FAQ Accordion === */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Frequently Asked
                <br />
                <span className="text-blue-400 relative inline-block">
                  Questions
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-400 mt-4">
                Find answers to common questions about our game server hosting services.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
                  >
                    <div className="flex items-center">
                        <span className="text-blue-400 font-bold mr-4 bg-gray-700/50 px-3 py-1 rounded-md">
                            0{index + 1}
                        </span>
                        <span className="font-semibold text-white">{faq.question}</span>
                    </div>
                    <ChevronRight 
                        className={`transform transition-transform duration-300 text-blue-400 ${activeIndex === index ? 'rotate-90' : 'rotate-0'}`}
                        size={20}
                    />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 p-5 pt-0">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;