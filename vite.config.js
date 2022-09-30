import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import reactScopedCssPlugin from 'rollup-plugin-react-scoped-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactScopedCssPlugin()]
})