// ─── IronFit Configuration ────────────────────────────────────
// Change these values to customize the website for different clients.

const config = {
  // Gym details
  gymName: 'IronFit',
  tagline: 'Train Hard. Stay Strong.',

  // WhatsApp
  whatsappNumber: '919876543210', // Country code + number, no spaces or symbols
  whatsappMessage: "Hi, I'm interested in joining your gym. Please share the membership details.",

  // Contact
  phone: '+91 98765 43210',
  email: 'hello@ironfit.in',

  // Location
  address: '123 Fitness Street',
  city: 'Chennai, Tamil Nadu',
  mapQuery: '123+Fitness+Street+Chennai+Tamil+Nadu',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.728!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin',

  // Hours
  hours: {
    weekday: { label: 'Mon – Sat', time: '5 AM – 10 PM' },
    weekend: { label: 'Sunday', time: '6 AM – 12 PM' },
  },

  // Social links
  social: {
    instagram: 'https://instagram.com/ironfit',
    facebook: 'https://facebook.com/ironfit',
    youtube: 'https://youtube.com/@ironfit',
  },
};

export default config;
