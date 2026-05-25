import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-binary-gltf-assets',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url) return next()
          const url = req.url.split('?')[0]
          if (url.endsWith('.bin') || url.endsWith('.gltf') || url.endsWith('.glb')) {
            const filePath = path.join(server.config.publicDir, decodeURIComponent(url))
            if (fs.existsSync(filePath)) {
              const ext = path.extname(filePath).toLowerCase()
              const mime = ext === '.gltf' ? 'model/gltf+json' : 'application/octet-stream'
              res.setHeader('Content-Type', mime)
              res.setHeader('Cache-Control', 'no-cache')
              fs.createReadStream(filePath).pipe(res)
              return
            }
          }
          next()
        })
      },
    },
  ],
  assetsInclude: ['**/*.gltf', '**/*.bin', '**/*.glb'],
})
