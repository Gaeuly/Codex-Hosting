import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 sm:p-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
            About CodeX
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-center">
            At CodeX, we provide next-gen hosting solutions for developers and
            communities. From Discord bots to Minecraft servers and Lavalink —
            we got you covered.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;