import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

const images = [
  { src: '/images/gallery-gym1.jpg', category: 'gym', alt: 'Gym interior' },
  { src: '/images/gallery-training1.jpg', category: 'training', alt: 'Barbell training' },
  { src: '/images/gallery-equipment1.jpg', category: 'equipment', alt: 'Dumbbells closeup' },
  { src: '/images/gallery-training2.jpg', category: 'training', alt: 'Battle ropes workout' },
  { src: '/images/facility-equipment.jpg', category: 'equipment', alt: 'Weight room' },
  { src: '/images/facility-cardio.jpg', category: 'gym', alt: 'Cardio zone' },
  { src: '/images/facility-training.jpg', category: 'training', alt: 'Functional training area' },
  { src: '/images/about.jpg', category: 'gym', alt: 'Training floor' },
];

const categories = ['All', 'Gym', 'Training', 'Equipment'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter.toLowerCase());

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-28 section-padding dark:bg-dark/40 bg-gray-50/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="section-heading">Gym Gallery</p>
          <h2 className="section-title dark:text-crisp text-dark mb-8">
            SEE OUR SPACE.
          </h2>

          {/* Filter buttons */}
          <div className="inline-flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-slate text-white shadow-lg shadow-slate/25'
                    : 'dark:bg-white/5 bg-dark/5 dark:text-muted text-dark/60 dark:hover:bg-white/10 hover:bg-dark/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Image grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIndex(i)}
                className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-matte/0 group-hover:bg-matte/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={filtered}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length)}
            onNext={() => setLightboxIndex((prev) => (prev + 1) % filtered.length)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
