import { defineStore } from 'pinia'

const STORAGE_KEY = 'models-store'

export const useModelsStore = defineStore('models', {
  state: () => ({
    models: [],
  }),

  getters: {
    getById: (state) => (id) => state.models.find((m) => m.id === id),

    allTags: (state) => {
      const tags = new Set()
      state.models.forEach((m) => m.tags.forEach((t) => tags.add(t)))
      return [...tags]
    },
  },

  actions: {
    save() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.models))
    },

    load() {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          this.models = Array.isArray(parsed) ? parsed : seedModels
        } catch {
          this.models = seedModels
        }
      } else {
        this.models = seedModels
      }
    },

    addModel(model) {
      this.models.push({
        id: Date.now().toString(),
        name: model.name,
        tags: model.tags,
        fileUrl: model.fileUrl,
      })
      this.save()
    },
  },
})
