import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: 'BASIC',
    monthly: 999,
    features: ['Gym Access', 'Cardio Zone', 'Locker Room'],
    popular: false,
  },
  {
    name: 'PRO',
    monthly: 1499,
    features: ['Everything in Basic', 'Group Classes', 'Diet Guidance'],
    popular: true,
  },
  {
    name: 'ELITE',
    monthly: 2499,
    features: ['Everything in Pro', 'Personal Training', 'Custom Workout Plan'],
    popular: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const getPrice = (monthly) => yearly ? monthly * 10 : monthly;
  const getSaving = (monthly) => monthly * 12 - monthly * 10;

  return (
    <section id="pricing" className="py-16 sm:py-20 md:py-28 section-padding dark:bg-dark/40 bg-gray-50/50">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-heading">Membership Plans</p>
          <h2 className="section-title dark:text-crisp text-dark mb-8">
            CHOOSE YOUR PLAN.
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-2 sm:gap-4 glass-card p-1 sm:p-1.5 rounded-xl">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                !yearly ? 'bg-slate text-white shadow-lg shadow-slate/25' : 'dark:text-muted text-dark/60'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                yearly ? 'bg-slate text-white shadow-lg shadow-slate/25' : 'dark:text-muted text-dark/60'
              }`}
            >
              Yearly
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`glass-card p-5 sm:p-7 md:p-8 relative group hover:border-slate/20 transition-all duration-500 ${
                plan.popular ? 'border-slate/30 dark:bg-dark/80 bg-white/90 ring-1 ring-slate/20' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate text-white text-[10px] font-bold tracking-widest px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <h3 className="font-heading text-lg font-bold dark:text-crisp text-dark mb-1 tracking-wider">
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${plan.name}-${yearly}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="font-heading text-3xl sm:text-4xl font-bold dark:text-crisp text-dark"
                  >
                    ₹{getPrice(plan.monthly).toLocaleString('en-IN')}
                  </motion.span>
                </AnimatePresence>
                <span className="text-muted text-sm">/{yearly ? 'year' : 'month'}</span>
              </div>

              {/* Yearly saving badge */}
              {yearly && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block bg-green-500/10 text-green-400 dark:text-green-400 text-xs font-semibold px-3 py-1 rounded-full mb-5"
                >
                  Save ₹{getSaving(plan.monthly).toLocaleString('en-IN')}
                </motion.div>
              )}

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <FiCheck className="w-4 h-4 text-slate flex-shrink-0" />
                    <span className="text-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById('location');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 ${
                  plan.popular
                    ? 'bg-slate text-white hover:bg-slate/85 shadow-lg shadow-slate/25'
                    : 'dark:bg-white/5 bg-dark/5 dark:text-crisp text-dark dark:hover:bg-white/10 hover:bg-dark/10'
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
