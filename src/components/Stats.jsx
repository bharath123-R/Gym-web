import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiAward, FiUserCheck, FiGrid } from 'react-icons/fi';

const stats = [
  { icon: FiUsers, end: 500, suffix: '+', label: 'Members' },
  { icon: FiAward, end: 10, suffix: '+', label: 'Years' },
  { icon: FiUserCheck, end: 15, suffix: '+', label: 'Trainers' },
  { icon: FiGrid, end: 25, suffix: '+', label: 'Equipment' },
];

function Counter({ end, suffix, inView }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const totalFrames = 60;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (frame >= totalFrames) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, end]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-12 sm:py-16 md:py-20 section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-4 sm:p-6 md:p-8 text-center group hover:border-slate/20 transition-all duration-500"
            >
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold dark:text-crisp text-dark mb-0.5 sm:mb-1">
                <Counter end={stat.end} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-muted text-xs sm:text-sm tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
