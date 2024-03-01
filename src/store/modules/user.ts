import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({ count: 0 }), // 类比data
  getters: {
    // 类比computed
    double: (state) => state.count * 2
  },
  actions: {
    // 类比methods
    increment() {
      this.count++
    }
  }
})
