import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@services': `${path.resolve(__dirname, './src/services/')}`,
      '@utils': `${path.resolve(__dirname, './src/utils/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants/')}`,
      '@styles': `${path.resolve(__dirname, './src/styles/')}`,
    },
  },
})
