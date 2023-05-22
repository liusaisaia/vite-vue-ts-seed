<!--
 * @Descriptions:
 * @Author: LiuSaiSai
 * @Date: 2023-05-09 22:38:06
 * @LastEditors: Liu SaiSai
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { getList } from '@/apis/user'

getList({ id: 2 })
</script>

<template>
  <div class="m-0 flex flex-col place-items-center min-w-320px min-h-100vh">
    <div class="max-w-1280px my-0 mx-auto p-2rem text-center">
      <a href="https://vitejs.dev" target="_blank" class="font-medium color-[#646cff] hover:color-[#535bf2]">
        <img src="/vite.svg" class="h-6em p-1.5em hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="font-medium color-[#646cff] hover:color-[#535bf2]">
        <img src="./assets/vue.svg" class="h-6em p-1.5em hover:drop-shadow-[0_0_2em_#42b883aa]" alt="Vue logo" />
      </a>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
