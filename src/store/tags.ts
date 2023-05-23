/*
 * @Descriptions:
 * @Author: LiuSaiSai
 * @Date: 2023-05-23 17:04:39
 * @LastEditors: Liu SaiSai
 */
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface ListItem {
  name: string
  path: string
  title: string
}

export const useTagsStore = defineStore(
  'tags',
  () => {
    const list = ref<ListItem[]>([])

    const show = computed(() => {
      return list.value.length > 0
    })
    const nameList = computed(() => {
      return list.value.map((item: ListItem) => item.name)
    })

    function delTagsItem(index: number) {
      list.value.splice(index, 1)
    }
    function setTagsItem(data: ListItem) {
      list.value.push(data)
    }
    function clearTags() {
      list.value = []
    }
    function closeTagsOther(data: ListItem[]) {
      list.value = data
    }

    return { list, show, nameList, delTagsItem, setTagsItem, clearTags, closeTagsOther }
  },
  {
    persist: {
      storage: sessionStorage,
    },
  },
)
