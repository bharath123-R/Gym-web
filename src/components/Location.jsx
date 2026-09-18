import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiClock, FiPhone, FiNavigation } from 'react-icons/fi';
import config from '../config';

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="location" className="py-16 sm:py-20 md:py-28 section-padding">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="section-heading">Visit Us</p>
          <h2 className="section-title dark:text-crisp text-dark">
            FIND US HERE.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-5 sm:p-7 md:p-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate/10 flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-slate" />
                </div>
                <div>
                  <h4 className="font-heading font-bold dark:text-crisp text-dark text-sm mb-1">Address</h4>
                  <p className="text-muted text-sm">{config.address}</p>
                  <p className="text-muted text-sm">{config.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate/10 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-5 h-5 text-slate" />
                </div>
                <div>
                  <h4 className="font-heading font-bold dark:text-crisp text-dark text-sm mb-1">Hours</h4>
                  <p className="text-muted text-sm">
                    <span className="dark:text-crisp/80 text-dark/80">{config.hours.weekday.label}:</span> {config.hours.weekday.time}
                  </p>
                  <p className="text-muted text-sm">
                    <span className="dark:text-crisp/80 text-dark/80">{config.hours.weekend.label}:</span> {config.hours.weekend.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate/10 flex items-center justify-center flex-shrink-0">
                  <FiPhone className="w-5 h-5 text-slate" />
                </div>
                <div>
                  <h4 className="font-heading font-bold dark:text-crisp text-dark text-sm mb-1">Contact</h4>
                  <p className="text-muted text-sm">{config.phone}</p>
                  <p className="text-muted text-sm">{config.email}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${config.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
              >
                <FiNavigation className="w-4 h-4" />
                Get Directions
              </a>
              <a
                href={`tel:${config.phone.replace(/\s/g, '')}`}
                className="btn-outline flex-1 text-center"
              >
                <FiPhone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden h-[250px] sm:h-[300px] md:h-full min-h-[300px] md:min-h-[350px] glass-card"
          >
            <iframe
              title="IronFit Location"
              src={config.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
