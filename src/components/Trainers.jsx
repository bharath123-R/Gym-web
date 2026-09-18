import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiInstagram } from 'react-icons/fi';

const trainers = [
  { name: 'Arjun Kumar', role: 'Strength Coach', exp: '8+ Years Experience', image: '/images/trainer1.jpg' },
  { name: 'Rahul Raj', role: 'Fitness Coach', exp: '6+ Years Experience', image: '/images/trainer2.jpg' },
  { name: 'Priya S', role: 'Fitness Trainer', exp: '5+ Years Experience', image: '/images/trainer3.jpg' },
];

export default function Trainers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="trainers" className="py-16 sm:py-20 md:py-28 section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-heading">Meet Our Trainers</p>
          <h2 className="section-title dark:text-crisp text-dark">
            YOUR FITNESS GUIDES.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matte/90 via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <FiInstagram className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                  <h3 className="font-heading text-sm sm:text-lg md:text-xl font-bold text-crisp">{trainer.name}</h3>
                  <p className="text-slate text-xs sm:text-sm font-medium">{trainer.role}</p>
                  <p className="text-muted text-[10px] sm:text-xs mt-0.5 sm:mt-1">{trainer.exp}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
