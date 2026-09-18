import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const facilities = [
  { title: 'Modern Equipment', image: '/images/facility-equipment.jpg' },
  { title: 'Cardio Zone', image: '/images/facility-cardio.jpg' },
  { title: 'Locker Room', image: '/images/facility-locker.jpg' },
  { title: 'Training Area', image: '/images/facility-training.jpg' },
];

export default function Facilities() {
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
          <p className="section-heading">Our Facilities</p>
          <h2 className="section-title dark:text-crisp text-dark">
            WORLD-CLASS SPACE.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {facilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden group cursor-default h-[180px] sm:h-[240px] md:h-[300px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-matte/80 via-matte/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                <h3 className="font-heading text-sm sm:text-lg md:text-xl font-bold text-crisp">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
