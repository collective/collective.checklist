import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    manifest: true,
    sourcemap: true,
    rollupOptions: {
      input: 'src/main.js',
      output: {
        format: 'iife',
        name: 'svecklist',
        dir: '../../src/collective/checklist/apps/svecklist',
        entryFileNames: "svecklist-[name].js",
      },
    },
  },
  base: './',
  resolve: {
    alias: [
      {find: '$pico', replacement: './node_modules/@picocss/pico/scss/'}
    ]
  }
})
