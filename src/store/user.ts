import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('')
  const userPermiss = ref([])
  return { username, userPermiss }
})
