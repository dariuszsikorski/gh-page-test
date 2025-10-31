import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'apps/artifacter'),
  publicDir: path.resolve(__dirname, 'public'),
  base: '/gh-page-test/',
  resolve: {
    alias: {
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
})
