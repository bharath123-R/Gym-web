import { FiInstagram, FiYoutube, FiFacebook } from 'react-icons/fi';
import config from '../config';

const quickLinks = [
  { label: 'About', id: 'about' },
  { label: 'Programs', id: 'programs' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Location', id: 'location' },
];

const socialLinks = [
  { icon: FiInstagram, href: config.social.instagram, label: 'Instagram' },
  { icon: FiFacebook, href: config.social.facebook, label: 'Facebook' },
  { icon: FiYoutube, href: config.social.youtube, label: 'YouTube' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="dark:bg-dark/60 bg-gray-50 border-t dark:border-white/5 border-dark/5">
      <div className="max-w-6xl mx-auto section-padding py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <div>
            <h2 className="font-heading text-2xl font-black mb-3 tracking-tight">
              <span className="text-slate">IRON</span>
              <span className="dark:text-crisp text-dark">FIT</span>
            </h2>
            <p className="text-muted text-sm">{config.tagline}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold dark:text-crisp text-dark text-sm mb-4 tracking-wider">
              QUICK LINKS
            </h4>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block text-muted text-sm hover:text-slate transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold dark:text-crisp text-dark text-sm mb-4 tracking-wider">
              FOLLOW US
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl dark:bg-white/5 bg-dark/5 flex items-center justify-center dark:text-muted text-dark/50 hover:bg-slate hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t dark:border-white/5 border-dark/5 text-center">
          <p className="text-muted/60 text-xs">
            © 2026 {config.gymName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
