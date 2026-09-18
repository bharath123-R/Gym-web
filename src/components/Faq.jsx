import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    q: 'How do I get started?',
    a: 'Simply visit our gym or give us a call. Our team will guide you through the available membership plans and help you choose the best fit for your goals.',
  },
  {
    q: 'What are your membership plans?',
    a: 'We have three plans — Basic (₹999/mo), Pro (₹1,499/mo), and Elite (₹2,499/mo). Save more with our yearly billing option.',
  },
  {
    q: 'Do you offer personal training?',
    a: 'Absolutely. Our Elite plan includes personal training sessions with certified coaches who customize workouts to your goals.',
  },
  {
    q: 'What are your opening hours?',
    a: "Monday to Saturday: 5 AM \u2013 10 PM. Sunday: 6 AM \u2013 12 PM. We're open all major holidays.",
  },
  {
    q: 'Can beginners join?',
    a: "Of course! Our trainers work with all fitness levels. We'll help you build a routine that matches your current ability and goals.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-16 sm:py-20 md:py-28 section-padding">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-heading">FAQ</p>
          <h2 className="section-title dark:text-crisp text-dark">
            GOT QUESTIONS?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="dark:text-crisp text-dark font-medium text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg dark:bg-white/5 bg-dark/5 flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  openIndex === i ? 'bg-slate/20 dark:bg-slate/20' : ''
                }`}>
                  {openIndex === i ? (
                    <FiMinus className="w-4 h-4 text-slate" />
                  ) : (
                    <FiPlus className="w-4 h-4 dark:text-muted text-dark/50" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-muted text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
