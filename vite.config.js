import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    // Terser minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Code splitting – vendor és router külön chunk
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/scheduler/')) {
            return 'vendor'
          }
          if (id.includes('node_modules/react-router') || id.includes('node_modules/@remix-run') || id.includes('node_modules/turbo-stream')) {
            return 'router'
          }
          if (id.includes('node_modules/framer-motion/') || id.includes('node_modules/motion/')) {
            return 'motion'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },

    // Chunk size warning limit 600kB-ra emelve (framer-motion miatt)
    chunkSizeWarningLimit: 600,

    // CSS code splitting
    cssCodeSplit: true,
  },
})
