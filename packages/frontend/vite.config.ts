import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsConfigPaths from "vite-tsconfig-paths"
import * as path from "node:path";


export default defineConfig({
      plugins: [
          react(),
          svgr(),
          tsConfigPaths()
      ],

      resolve: {
            alias: {
                  '@application': path.resolve(__dirname, 'src/application'),
                  '@domain': path.resolve(__dirname, 'src/domain'),
                  '@infrastructure': path.resolve(__dirname, 'src/infrastructure'),
                  '@tests': path.resolve(__dirname, 'src/tests'),
                  '@UI': path.resolve(__dirname, 'src/src'),
                  '@ui': path.resolve(__dirname, 'src/src'),
                  '@shared': path.resolve(__dirname, 'src/shared'),
            }
      },

      server: {
            port: 5173,
            open: true,
            strictPort: true,
            hmr: {
                  overlay: true
            },
            proxy: {
                  '/api':  {
                        target: 'http://localhost:8080',
                        changeOrigin: true,
                        secure: false,
                  },
            },
      },
      css: {
            devSourcemap: true,
      },

      build: {
            outDir: 'dist',
            sourcemap: false,
            minify: 'esbuild',
            assetsDir: 'assets',
            emptyOutDir: true,
            rollupOptions: {
                  output: {
                        manualChunks: {
                              vendor: ['react', 'react-dom'],
                        },
                  },
            },
      },

})
