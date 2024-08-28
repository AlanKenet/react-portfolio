import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@home': path.resolve(__dirname, './src/pages/home'),
      '@about': path.resolve(__dirname, './src/pages/about'),
      '@experience': path.resolve(__dirname, './src/pages/experience'),
      '@contact': path.resolve(__dirname, './src/pages/contact')
    }
  }
})
