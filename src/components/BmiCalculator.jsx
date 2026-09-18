import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiActivity } from 'react-icons/fi';

function getBmiCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-yellow-400', bg: 'bg-yellow-400/10' };
  if (bmi < 25) return { label: 'Normal', color: 'text-green-400', bg: 'bg-green-400/10' };
  if (bmi < 30) return { label: 'Overweight', color: 'text-orange-400', bg: 'bg-orange-400/10' };
  return { label: 'Obesity', color: 'text-red-400', bg: 'bg-red-400/10' };
}

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const calculate = () => {
    const errs = {};
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!height || isNaN(h) || h < 50 || h > 300) errs.height = 'Enter valid height (50–300 cm)';
    if (!weight || isNaN(w) || w < 10 || w > 500) errs.weight = 'Enter valid weight (10–500 kg)';

    setErrors(errs);
    if (Object.keys(errs).length > 0) { setResult(null); return; }

    const bmi = w / Math.pow(h / 100, 2);
    setResult(bmi);
  };

  const category = result ? getBmiCategory(result) : null;

  return (
    <section className="py-16 sm:py-20 md:py-28 section-padding dark:bg-dark/40 bg-gray-50/50">
      <div ref={ref} className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="section-heading">Health Check</p>
          <h2 className="section-title dark:text-crisp text-dark">
            CHECK YOUR BMI
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-5 sm:p-7 md:p-8"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="text-sm font-medium dark:text-muted text-dark/70 mb-1.5 block">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="170"
                className={`w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-dark/5 border ${
                  errors.height ? 'border-red-400/50' : 'dark:border-white/10 border-dark/10'
                } dark:text-crisp text-dark placeholder:text-muted/50 focus:outline-none focus:border-slate transition-colors text-sm`}
              />
              {errors.height && <p className="text-red-400 text-xs mt-1">{errors.height}</p>}
            </div>
            <div>
              <label className="text-sm font-medium dark:text-muted text-dark/70 mb-1.5 block">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="70"
                className={`w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-dark/5 border ${
                  errors.weight ? 'border-red-400/50' : 'dark:border-white/10 border-dark/10'
                } dark:text-crisp text-dark placeholder:text-muted/50 focus:outline-none focus:border-slate transition-colors text-sm`}
              />
              {errors.weight && <p className="text-red-400 text-xs mt-1">{errors.weight}</p>}
            </div>
          </div>

          <button onClick={calculate} className="btn-primary w-full mb-5">
            <FiActivity className="w-4 h-4" />
            Calculate BMI
          </button>

          {/* Result */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-5 rounded-xl dark:bg-white/5 bg-dark/5"
            >
              <p className="text-muted text-sm mb-1">Your BMI</p>
              <p className="font-heading text-3xl sm:text-4xl font-bold dark:text-crisp text-dark mb-2">
                {result.toFixed(1)}
              </p>
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${category.bg} ${category.color}`}>
                {category.label}
              </span>
            </motion.div>
          )}

          {result && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                const el = document.getElementById('location');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-outline w-full mt-5"
            >
              Talk to a Trainer
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
