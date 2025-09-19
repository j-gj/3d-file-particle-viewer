import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: './main.js',
      name: 'GLBPointCloudViewer',
      fileName: 'glb-point-cloud-viewer',
      formats: ['es']
    },
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: true
  }
})