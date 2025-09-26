import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Data untuk review
const reviewsData = [
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
      'Best Minecraft hosting I\'ve used. Zero lag and great performance for our 100+ player community.',
    rating: 5,
  },
  {
    name: 'Mike Rodriguez',
    role: 'Music Bot Creator',
    content:
      'Lavalink hosting is seamless. Crystal clear audio and never drops out. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    role: 'Community Manager',
    content:
      'The control panel is intuitive and powerful. Managing our servers has never been easier. 10/10 service!',
    rating: 5,
  },
];

const Reviews = () => {
  // Duplikasi data untuk loop animasi yang mulus
  const duplicatedReviews = [...reviewsData, ...reviewsData];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Tambahkan style JSX untuk animasi marquee */}
      <style jsx>{`
        .scroller-container {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
        .scroller-content {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .scroller-container:hover .scroller-content {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* === Header Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            What Our <span className="text-blue-400">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Join thousands of satisfied developers and communities who trust CodeX.
          </p>
        </motion.div>

        {/* === Marquee Container === */}
        <div className="scroller-container">
          <div className="scroller-content space-x-8 py-4">
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 w-80 md:w-96 flex-shrink-0"
              >
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{review.content}"
                </p>
                <div className="border-t border-gray-700 pt-4">
                  <h4 className="font-semibold text-white">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;