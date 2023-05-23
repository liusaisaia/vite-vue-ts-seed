/*
 * @Descripttion:
 * @Author: LiuSaiSai
 * @Date: 2023-05-09 22:38:06
 * @LastEditors: Liu SaiSai
 */
import path from 'node:path' // 这个path用到了上面安装的@types/node
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import viteCompression from 'vite-plugin-compression'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unoCSS'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [
      vue(),
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
          }),
          presetTypography(),
          presetWebFonts({
            fonts: {
              sans: 'DM Sans',
              serif: 'DM Serif Display',
              mono: 'DM Mono',
            },
          }),
        ],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      {
        ...viteCompression(),
        apply: 'build',
      },
    ],
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      https: false,
      proxy: {
        '/api': {
          target: '要代理的地址',
          changeOrigin: true,
          ws: true,
          rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    // 这里进行配置别名
    resolve: {
      alias: {
        '@': path.resolve('./src'), // @代替src
        '#': path.resolve('./types'), // #代替types
        '~/': `${path.resolve(__dirname, 'src')}/`,
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'pinia', 'vue-router'],
            elementIcons: ['@element-plus/icons-vue'],
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  })
}
