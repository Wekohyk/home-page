import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// unocss
import unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), unocss()],
});
