import { motion } from 'framer-motion';
import { Users, Zap, Shield, Heart } from 'lucide-react';

// Team Data (Placeholder)
const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', image: 'https://placehold.co/500x500/1E293B/FFFFFF?text=JD' },
    { name: 'Jane Smith', role: 'Head of Operations', image: 'https://placehold.co/500x500/1E293B/FFFFFF?text=JS' },
    { name: 'Peter Jones', role: 'Lead Developer', image: 'https://placehold.co/500x500/1E293B/FFFFFF?text=PJ' },
    { name: 'Sarah Miller', role: 'Support Manager', image: 'https://placehold.co/500x500/1E293B/FFFFFF?text=SM' },
];

// Company Values Data
const coreValues = [
    { icon: Zap, title: 'Performance', description: 'We are obsessed with speed and low latency to deliver the best experience.' },
    { icon: Shield, title: 'Security', description: 'Keeping your servers and data secure is our top priority.' },
    { icon: Heart, title: 'Customer Support', description: 'Our team is always ready to help you 24/7 with a fast and friendly response.' },
    { icon: Users, title: 'Community', description: 'We build more than just a service; we build a community.' },
];

const AboutUs = () => {
    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4 py-20 pt-32">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }} 
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">About <span className="text-blue-400">CodeX</span></h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                        Providing high-performance hosting solutions with leading technology for developers, gamers, and businesses worldwide.
                    </p>
                </motion.div>

                {/* Our Mission */}
                <div className="text-center mb-20">
                    <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Our Mission
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-400 max-w-4xl mx-auto leading-relaxed"
                    >
                        Our mission is to empower creativity and innovation by providing reliable, fast, and secure server infrastructure. We believe that everyone deserves access to high-quality hosting without compromising on performance or security. At CodeX, we are committed to being the trusted hosting partner for your every project, from the smallest to enterprise scale.
                    </motion.p>
                </div>

                {/* Our Team */}
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-10"
                    >
                        Our <span className="text-blue-400">Team</span>
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div 
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9 }} 
                                whileInView={{ opacity: 1, scale: 1 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <img src={member.image} alt={member.name} className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full object-cover border-4 border-gray-700 mb-4" />
                                <h3 className="font-bold text-lg">{member.name}</h3>
                                <p className="text-blue-400 text-sm">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Our Values */}
                <div>
                    <motion.h2 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center mb-10"
                    >
                        Our Core Values
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div 
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }} 
                                whileInView={{ opacity: 1, y: 0 }} 
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg text-center border border-gray-700"
                            >
                                <value.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                                <p className="text-gray-400 text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;