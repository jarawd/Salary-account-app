import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Salary-account-app/',
  plugins: [react()],
});
