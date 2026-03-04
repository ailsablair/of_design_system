import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/of_design_system/',
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'OfDesignSystem',
      fileName: (format) => `of-design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/joy', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/joy': 'Joy',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
        },
      },
    },
  },
});
