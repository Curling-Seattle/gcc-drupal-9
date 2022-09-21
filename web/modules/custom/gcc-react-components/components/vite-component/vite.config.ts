import { defineConfig } from 'vite'
import * as path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      presets: [
        [
          "@babel/preset-env",
          {
            "targets": {
              "browsers": [
                "IE >= 11",
                "last 3 versions"
              ]
            }
          }
        ],
        "@babel/preset-react"
      ]
    }
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.tsx'),
      name: 'ViteComponent',
      // the proper extensions will be added
      fileName: 'vite-component'
    }
  }
})
