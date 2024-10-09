import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   server: {
      port: 9999, // Change this to the desired port
   },
   plugins: [react()],
});
