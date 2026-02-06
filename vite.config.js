// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'pachydermal-nonsensibly-phylis.ngrok-free.dev' // La URL que te dio ngrok
    ]
  }
})