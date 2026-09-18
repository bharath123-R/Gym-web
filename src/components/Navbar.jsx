import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';

const links = ['Home', 'About', 'Programs', 'Trainers', 'Pricing', 'Gallery', 'Location'];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-matte/80 dark:bg-matte/80 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Logo */}
        <button onClick={() => scrollTo('home')} className="font-heading text-2xl font-black tracking-tight">
          <span className="text-slate">IRON</span>
          <span className="dark:text-crisp text-dark">FIT</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium dark:text-muted text-dark/70 hover:text-slate transition-colors duration-300 tracking-wide"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl dark:bg-white/5 bg-dark/5 dark:hover:bg-white/10 hover:bg-dark/10 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo('location')}
            className="hidden sm:flex btn-primary !py-2.5 !px-5 !text-xs"
          >
            Join Now
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-xl dark:bg-white/5 bg-dark/5"
            aria-label="Menu"
          >
            {open ? <HiX className="w-5 h-5" /> : <HiMenuAlt3 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden dark:bg-matte/95 bg-white/95 backdrop-blur-2xl border-t dark:border-white/5 border-black/5"
          >
            <div className="flex flex-col gap-1 p-5">
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link)}
                  className="text-left py-3 px-4 rounded-xl text-sm font-medium dark:text-muted text-dark/70 hover:text-slate dark:hover:bg-white/5 hover:bg-dark/5 transition-all"
                >
                  {link}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo('location')}
                className="btn-primary mt-3 w-full"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
