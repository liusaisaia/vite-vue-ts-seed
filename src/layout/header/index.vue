<!--
 * @Description: 头部
 * @Author: LiuSaiSai
 * @Date: 2023-05-24 23:08:25
 * @LastEditors: Liu SaiSai
-->

<script setup lang="ts">
import { ref } from 'vue'

const switchValue = ref(false)

const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<template>
  <div class="flex w-full h-20 bg-slate-500 justify-between items-center px-5">
    <div class="flex items-center w-80 text-4xl text-lime-500">
      <img class="h-4/5 w-18" src="/vite.svg" alt="" />
      <span>Vite Vue Ts</span>
    </div>
    <div class="flex">
      <div class="mr-10">
        <el-switch v-model="switchValue" loading />
      </div>
      <div class="mr-10">
        <el-select v-model="value" placeholder="Select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="mr-10">
        <el-badge :value="12" class="item">
          <div class="i-octicon-bell-24 text-2xl mt-1" />
        </el-badge>
      </div>
      <div>
        <el-avatar :size="30" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
