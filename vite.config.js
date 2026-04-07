import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

// 使用 import 代替 require
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig(({ mode }) => {
  // 加载环境变量
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 配置 PostCSS 插件，包括 TailwindCSS 和 Autoprefixer
    css: {
      postcss: {
        plugins: [
          tailwindcss, // 使用导入的 tailwindcss
          autoprefixer, // 使用导入的 autoprefixer
        ],
      },
    },
    plugins: [
      // Vue 插件
      vue(),
      // Vue DevTools 插件（只在开发模式下启用）
      VueDevTools(),
      // Mock 插件（只在开发模式下启用）
      
    ],
    resolve: {
      alias: {
        // 设置路径别名 '@' 指向 'src' 文件夹
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      // 设置开发服务器的端口等配置（根据需要可以进行修改）
      port: 3000,
      open: true, // 启动时自动打开浏览器
    },
  };
});
