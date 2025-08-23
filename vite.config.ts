import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    reporters: ['default'],
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'lcov'],
      exclude: [
        '**/*.config.*',
        '**/.eslintrc.*',
        'src/main.ts?(x)',
        'src/utils.ts?(x)',
      ],
    },
  },
});
