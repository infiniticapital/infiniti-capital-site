import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If deploying to username.github.io/REPO, set base: '/REPO/'
  base: '/',
})
