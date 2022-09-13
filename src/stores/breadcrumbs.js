import { defineStore } from 'pinia'

export const useBreadcrumbStore = defineStore({
  state: () => ({
    breadcruumbs: null
  }),
  getters: {
    getBreadcrumbs: state => {

    }
  },
})
