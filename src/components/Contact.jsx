import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
      errs.phone = 'Enter a valid 10-digit phone number';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Enter a valid email';
    if (!form.goal.trim()) errs.goal = 'Select a fitness goal';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl dark:bg-white/5 bg-dark/5 border ${
      errors[field] ? 'border-red-400/50' : 'dark:border-white/10 border-dark/10'
    } dark:text-crisp text-dark placeholder:text-muted/50 focus:outline-none focus:border-slate transition-colors text-sm`;

  return (
    <section id="contact" className="py-20 sm:py-28 section-padding dark:bg-dark/40 bg-gray-50/50">
      <div ref={ref} className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="section-heading">Get Started</p>
          <h2 className="section-title dark:text-crisp text-dark mb-3">
            READY TO GET STARTED?
          </h2>
          <p className="text-muted">Book your free trial today.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-7 sm:p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-5">
                <FiCheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-heading text-2xl font-bold dark:text-crisp text-dark mb-2">
                Thank You!
              </h3>
              <p className="text-muted text-sm">
                We&apos;ll reach out to you shortly to schedule your free trial.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', goal: '' }); }}
                className="btn-outline mt-6"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass('phone')}
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <select
                  value={form.goal}
                  onChange={(e) => setForm({ ...form, goal: e.target.value })}
                  className={inputClass('goal')}
                >
                  <option value="">Select Fitness Goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-building">Muscle Building</option>
                  <option value="strength">Strength Training</option>
                  <option value="general">General Fitness</option>
                  <option value="cardio">Cardio & Endurance</option>
                </select>
                {errors.goal && <p className="text-red-400 text-xs mt-1">{errors.goal}</p>}
              </div>

              <button type="submit" className="btn-primary w-full">
                <FiSend className="w-4 h-4" />
                Book Free Trial
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
