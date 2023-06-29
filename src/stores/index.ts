import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'index',
  persist: true,
  state: () => ({
    // light || dark
    mode: '',
  }),
  getters: {
    /**
     * 获取本地资源图片地址路径
     * @param url 地址
     */
    getImage: () => (url: string) => {
      if (!url)
        return ''
      return new URL(`../assets/${url}`, import.meta.url).href
    },
  },
})
