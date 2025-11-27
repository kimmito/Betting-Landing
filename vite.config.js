import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // Для GitHub Pages используйте '/ВАШЕ_НАЗВАНИЕ_РЕПОЗИТОРИЯ/'
  // Если репозиторий называется test-seocare, оставьте как есть
  // Для локальной разработки base будет '/'
  base: process.env.GITHUB_ACTIONS ? '/test-seocare/' : '/',
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})