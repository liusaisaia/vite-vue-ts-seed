/*
 * @Descripttion:
 * @Author: LiuSaiSai
 * @Date: 2023-05-09 22:38:06
 * @LastEditors: Liu SaiSai
 */
import { createApp } from 'vue'
import './style.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 引入图标
import App from './App.vue'

import 'element-plus/dist/index.css' // 引入样式
import 'uno.css'
import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind.css'
import '@/assets/styles/style.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) app.component(key, component)

createApp(App).mount('#app')
