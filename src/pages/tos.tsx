import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

// Component for styling legal content
const LegalContent = ({ children }: { children: React.ReactNode }) => (
    <div className="prose prose-invert prose-lg max-w-none 
                    prose-h2:text-blue-400 prose-h2:font-bold prose-h2:mb-2 prose-h2:mt-8
                    prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:ml-6 prose-ul:text-gray-300
                    prose-a:text-blue-400 hover:prose-a:text-blue-300">
        {children}
    </div>
);

const TOS = () => {
    return (
        <div className="min-h-screen text-white" style={{ backgroundImage: `url('/background.png')`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
            <div className="container mx-auto px-4 py-20 pt-32">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.7 }} 
                    className="text-center mb-12"
                >
                    <FileText className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
                    <p className="text-gray-400 mt-2">Last Updated: September 29, 2025</p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 md:p-10 border border-gray-700"
                >
                    <LegalContent>
                        <p>Welcome to CodeX! These Terms of Service ("Terms") govern your use of our hosting services ("Services"). By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.</p>
                        
                        <h2>1. Your Account</h2>
                        <p>To use our Services, you must register for an account. You are responsible for safeguarding the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>
                        
                        <h2>2. Acceptable Use Policy</h2>
                        <p>You agree not to use the Service for any illegal or unauthorized purpose. You agree to comply with all laws, rules, and regulations applicable to your use of the Services. Prohibited activities include, but are not limited to:</p>
                        <ul>
                            <li>Running malicious software, including malware, phishing scripts, or bots.</li>
                            <li>Engaging in Denial of Service (DoS) or Distributed Denial of Service (DDoS) attacks or any other malicious network activities.</li>
                            <li>Storing or distributing illegal content, including but not limited to copyrighted material for which you do not hold the rights.</li>
                            <li>Excessive use of server resources (CPU, memory, network) that may interfere with the performance and integrity of our systems or negatively impact other users.</li>
                            <li>Sending unsolicited bulk email (spam).</li>
                        </ul>

                        <h2>3. Payments, Renewals, and Refunds</h2>
                        <p>All services are billed in advance on a recurring basis. It is your responsibility to ensure your payment information is up to date. We offer a 7-day money-back guarantee for new customers on select hosting services. This guarantee is void if you violate any of these Terms. Domain name registrations are non-refundable.</p>

                        <h2>4. Service Availability and Backups</h2>
                        <p>We strive to maintain a 99.9% uptime for our network and servers. However, we cannot guarantee that the service will be uninterrupted or error-free. You are responsible for maintaining your own backups of your content. While we may perform routine backups, we are not liable for any data loss.</p>
                        
                        <h2>5. Termination</h2>
                        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may do so by submitting a cancellation request through our client portal.</p>

                        <h2>6. Limitation of Liability</h2>
                        <p>Our Service is provided "as is" and "as available". In no event shall CodeX, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to use the Service.</p>

                        <h2>7. Changes to Terms</h2>
                        <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
                        
                        <h2>8. Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of our jurisdiction, without regard to its conflict of law provisions.</p>
                    </LegalContent>
                </motion.div>
            </div>
        </div>
    );
};

export default TOS;