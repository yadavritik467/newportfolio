import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'brotliCompress', // Use 'gzip' or 'brotliCompress'
      ext: '.br', // or '.gz' for gzip
      deleteOriginFile: false, // Whether to delete the original uncompressed files
    }),
  ],
});
