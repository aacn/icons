import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const src = (relativePath: string) => {
  return fileURLToPath(new URL(relativePath, import.meta.url));
};

export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      react: src('./node_modules/react'),
      'react-dom': src('./node_modules/react-dom'),
      'react/jsx-runtime': src('./node_modules/react/jsx-runtime.js'),
      'react/jsx-dev-runtime': src('./node_modules/react/jsx-dev-runtime.js'),
    },
  },
});
