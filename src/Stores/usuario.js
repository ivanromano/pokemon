import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
	// con parentesis cuando se retorna un objeto
  state: () => ({
		userData: 'republica@gmail.com'
	})
})
