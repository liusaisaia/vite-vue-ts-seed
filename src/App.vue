<!--
 * @Descriptions: 
 * @Author: LiuSaiSai
 * @Date: 2023-05-09 22:38:06
 * @LastEditors: Liu SaiSai
-->
<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { getList } from '@/apis/user';

getList({ id: 2 });
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #4b53ecaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #1ace7daa);
}
</style>
