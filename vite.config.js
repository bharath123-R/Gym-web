import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor code into separate chunks for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Framer Motion is the largest dependency — isolate it
          if (id.includes('framer-motion')) {
            return 'framer-motion';
          }
          // React core in its own chunk
          if (id.includes('react-dom') || (id.includes('/react/') && !id.includes('react-icons'))) {
            return 'react-vendor';
          }
        },
      },
    },
    // Increase chunk size warning limit (framer-motion is large but tree-shaken)
    chunkSizeWarningLimit: 200,
  },
})
