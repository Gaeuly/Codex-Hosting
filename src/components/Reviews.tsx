import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Alex Johnson',
    role: 'Discord Bot Developer',
    content: 'CodeX has been incredible for hosting my Discord bots. The uptime is amazing and support is always there when needed.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Minecraft Community Owner',
    content: 'Best Minecraft hosting I\'ve used. Great performance, easy setup, and the DDoS protection saved us multiple times.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Music Bot Developer',
    content: 'Lavalink nodes are super fast and reliable. My music bot has never performed better. Highly recommend!',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.content}"</p>
              <div>
                <p className="text-white font-semibold">{review.name}</p>
                <p className="text-purple-400 text-sm">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors shadow-lg"
          >
            Join Thousands of Happy Customers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}