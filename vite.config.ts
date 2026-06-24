import { defineConfig } from 'vite';
import fs from 'fs';


let header = fs.readFileSync(
  './userscript-header.js',
  'utf8'
);

// Replace the version placeholder with the actual version from environment variable
const version = process.env.VERSION ?? '0.0.0-dev';
header = header.replace('__VERSION__', version);


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