import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '',
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'https://iso53-github-io-serverless.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
