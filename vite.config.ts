import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { format, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'my-ui',
      fileName: (format) => `my-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@reduxjs/toolkit', 'react-redux', "@emotion/css"],
    }
  },
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      "plugins": ["@emotion"]
    }
  })]
})
