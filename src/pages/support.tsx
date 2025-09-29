import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LifeBuoy, MessageSquare, BookOpen, ChevronDown } from 'lucide-react';

// FAQ Data (Placeholder)
const faqData = [
    { question: 'How do I order a service?', answer: 'You can order a service through our pricing page. Simply choose the plan you want, click "Order Now", and follow the next steps.' },
    { question: 'What payment methods are accepted?', answer: 'We accept various payment methods, including credit/debit cards, bank transfers, and popular e-wallets for your convenience.' },
    { question: 'How long does server activation take?', answer: 'Your server will be activated instantly after we receive your payment. It usually only takes a few minutes.' },
    { question: 'Can I upgrade my plan later?', answer: 'Of course! You can easily upgrade your hosting plan at any time through the client panel without any downtime.' },
];

// Accordion Component for FAQ
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-700">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="font-semibold text-lg">{question}</span>
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 px-2 text-gray-300">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const Support = () => {
    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4 py-20 pt-32">

                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }} 
                    className="text-center mb-16"
                >
                    <LifeBuoy className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Help <span className="text-blue-400">Center</span></h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        We're here to help. Find answers or contact our support team.
                    </p>
                </motion.div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                    <motion.a 
                        href="#" 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center text-center border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all"
                    >
                        <MessageSquare className="w-12 h-12 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Open a Ticket</h2>
                        <p className="text-gray-400">Get personalized help from our expert team for your technical issues.</p>
                    </motion.a>
                    <motion.a 
                        href="#" 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg flex flex-col items-center text-center border border-gray-700 hover:border-blue-500 hover:bg-gray-800 transition-all"
                    >
                        <BookOpen className="w-12 h-12 text-blue-400 mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Knowledge Base</h2>
                        <p className="text-gray-400">Explore our comprehensive guides, tutorials, and documentation.</p>
                    </motion.a>
                </div>

                {/* FAQ */}
                <div>
                     <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-10"
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700"
                    >
                        {faqData.map(faq => <FaqItem key={faq.question} {...faq} />)}
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Support;