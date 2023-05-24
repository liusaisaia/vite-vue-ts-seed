<!--
 * @Descriptions:
 * @Author: LiuSaiSai
 * @Date: 2023-05-22 17:50:47
 * @LastEditors: Liu SaiSai
-->
<script setup lang="ts">
import Header from './header/index.vue'
</script>

<template>
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="move" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped></style>
