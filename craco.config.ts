import path from 'path';

const defineConfig = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

export default defineConfig;
