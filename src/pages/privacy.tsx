import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

// Component for styling legal content (reusable)
const LegalContent = ({ children }: { children: React.ReactNode }) => (
    <div className="prose prose-invert prose-lg max-w-none 
                    prose-h2:text-blue-400 prose-h2:font-bold prose-h2:mb-2 prose-h2:mt-8
                    prose-p:text-gray-300 prose-p:leading-relaxed
                    prose-ul:list-disc prose-ul:ml-6 prose-ul:text-gray-300
                    prose-a:text-blue-400 hover:prose-a:text-blue-300">
        {children}
    </div>
);

const PrivacyPolicy = () => {
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
                    <Shield className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
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
                        <p>This Privacy Policy describes how CodeX ("we", "our", or "us") collects, uses, and discloses your information when you use our services. We are committed to protecting your privacy and handling your data in an open and transparent manner.</p>
                        
                        <h2>1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This information may include:</p>
                        <ul>
                            <li><strong>Personal Identification Information:</strong> Name, email address, mailing address, phone number.</li>
                            <li><strong>Payment Information:</strong> Credit card details, billing address, and other payment-related information, processed securely by our payment partners.</li>
                            <li><strong>Technical Information:</strong> IP address, browser type, operating system, and login data collected automatically when you use our services.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website, products, and services.</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect for various purposes, including to:</p>
                        <ul>
                            <li>Provide, operate, maintain, and improve our Services.</li>
                            <li>Process transactions, send you related information including purchase confirmations and invoices.</li>
                            <li>Communicate with you about products, services, offers, promotions, and events.</li>
                            <li>Monitor and analyze trends, usage, and activities in connection with our Services.</li>
                            <li>Detect, investigate and prevent fraudulent transactions and other illegal activities and protect the rights and property of CodeX and others.</li>
                        </ul>

                        <h2>3. Information Sharing and Disclosure</h2>
                        <p>We do not sell, trade, or rent your personal identification information to others. We may share your information in the following situations:</p>
                        <ul>
                            <li><strong>With Service Providers:</strong> We may share information with third-party vendors and service providers that perform services on our behalf, such as payment processing and data analysis.</li>
                            <li><strong>For Legal Reasons:</strong> We may disclose your information if we believe it's required by law, regulation, or legal process.</li>
                            <li><strong>With Your Consent:</strong> We may share your information for any other purposes with your explicit consent.</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>We take reasonable and appropriate measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

                        <h2>5. Cookies and Tracking Technologies</h2>
                        <p>We use cookies and similar tracking technologies to track the activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                        
                        <h2>6. Your Data Protection Rights</h2>
                        <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                        <ul>
                            <li>The right to access, update, or delete the information we have on you.</li>
                            <li>The right of rectification.</li>
                            <li>The right to object to our processing of your personal information.</li>
                            <li>The right of restriction.</li>
                            <li>The right to data portability.</li>
                        </ul>
                        <p>You can exercise these rights at any time by logging into your account or contacting us directly.</p>

                        <h2>7. Changes to This Privacy Policy</h2>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </LegalContent>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;