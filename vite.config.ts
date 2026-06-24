import { defineConfig } from 'vite';
import fs from 'fs';

const header = fs.readFileSync(
  './userscript-header.js',
  'utf8'
);

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      formats: ['iife'],
      name: 'MCUTools'
    },
    minify: false,
    rollupOptions: {
      output: {
        banner: header,
        entryFileNames: 'mcu-tools.user.js'
      }
    },
    outDir: 'dist'
  }
});