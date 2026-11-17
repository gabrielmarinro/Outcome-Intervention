
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cpSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

// Publicar archivos utilizados por la aplicación
const copyDemoAssets = {
  name: 'copy-demo-assets',
  apply: 'build',
  closeBundle() {
    for (const folder of ['data', 'screenshots', 'videos']) {
      const source = resolve(process.cwd(), folder)
      if (existsSync(source)) {
        cpSync(
          source,
          resolve(process.cwd(), 'dist', folder),
          { recursive: true }
        )
      }
    }
  },
}

export default defineConfig({
  plugins: [react(), copyDemoAssets],
  base: '/Outcome-Intervention/'
})
