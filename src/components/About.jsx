import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const points = ['Expert Trainers', 'Modern Equipment', 'Friendly Environment'];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 section-padding">
      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/about.jpg"
              alt="Modern gym training area"
              className="w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[480px] object-cover"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-slate/30 rounded-2xl -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="section-heading">About Us</p>
          <h2 className="section-title dark:text-crisp text-dark mb-4">
            MORE THAN A GYM.
          </h2>
          <p className="text-muted text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            A modern training space built to help you become stronger and healthier.
          </p>

          <div className="space-y-4">
            {points.map((point, i) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <FiCheckCircle className="w-5 h-5 text-slate flex-shrink-0" />
                <span className="dark:text-crisp/90 text-dark/90 font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
