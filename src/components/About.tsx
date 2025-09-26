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
          // 1. Menghapus background putih dan shadow, diganti dengan style "glass"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 sm:p-12"
        >
          {/* 2. Mengubah warna teks menjadi putih */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            About CodeX
          </h2>
          {/* 3. Mengubah warna sub-teks menjadi abu-abu terang */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed text-center">
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