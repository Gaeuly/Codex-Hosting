import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Thompson',
    role: 'Bot Developer',
    content:
      'CodeX has been incredible for hosting my Discord bots. The uptime is amazing and support is top-notch!',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Server Owner',
    content:
      "Best Minecraft hosting I've used. Zero lag and great performance for our 100+ player community.",
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Music Bot Creator',
    content:
      'Lavalink hosting is seamless. Crystal clear audio and never drops out. Highly recommend!',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* 1. Mengubah warna teks judul */}
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied developers and communities who trust
            CodeX for their hosting needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              // 2. Mengganti style card menjadi "glass"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.content}"
              </p>
              {/* 3. Mengubah warna border dan teks di bagian bawah card */}
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-semibold text-white">{review.name}</h4>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;