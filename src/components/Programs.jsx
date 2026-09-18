import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GiWeightLiftingUp, GiMuscleUp, GiHeartBeats, GiRunningShoe, GiBodyBalance, GiBoxingGlove } from 'react-icons/gi';

const programs = [
  { icon: GiWeightLiftingUp, title: 'Strength Training', desc: 'Build raw power with progressive overload programs.' },
  { icon: GiMuscleUp, title: 'Personal Training', desc: 'One-on-one coaching tailored to your goals.' },
  { icon: GiHeartBeats, title: 'Weight Loss', desc: 'Effective fat-burning programs with guided nutrition.' },
  { icon: GiBodyBalance, title: 'Muscle Building', desc: 'Hypertrophy-focused routines for lean muscle gains.' },
  { icon: GiRunningShoe, title: 'Cardio', desc: 'High-energy sessions to boost endurance and stamina.' },
  { icon: GiBoxingGlove, title: 'Functional Training', desc: 'Real-world movements for everyday strength.' },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="programs" className="py-16 sm:py-20 md:py-28 section-padding dark:bg-dark/40 bg-gray-50/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-heading">Our Programs</p>
          <h2 className="section-title dark:text-crisp text-dark">
            TRAIN YOUR WAY.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-4 sm:p-5 md:p-7 group cursor-default hover:border-slate/20 transition-all duration-500"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-slate/20 transition-colors duration-300">
                <prog.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate" />
              </div>
              <h3 className="font-heading text-sm sm:text-base md:text-lg font-bold dark:text-crisp text-dark mb-1 sm:mb-2">
                {prog.title}
              </h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                {prog.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
