import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';

const testimonials = [
  { quote: 'Great trainers and great atmosphere.', name: 'Arun', role: 'Member since 2023' },
  { quote: 'The perfect place to stay consistent.', name: 'Karthik', role: 'Member since 2022' },
  { quote: 'Clean gym with excellent equipment.', name: 'Priya', role: 'Member since 2024' },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-16 sm:py-20 md:py-28 section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-heading">Member Stories</p>
          <h2 className="section-title dark:text-crisp text-dark">
            WHAT THEY SAY.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-5 sm:p-7 group hover:border-slate/20 transition-all duration-500"
            >
              <FiMessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-slate/30 mb-3 sm:mb-4" />
              <p className="dark:text-crisp/90 text-dark/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-heading font-bold dark:text-crisp text-dark text-sm">{item.name}</p>
                <p className="text-muted text-xs">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
