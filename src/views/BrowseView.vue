<template>
  <div class="container">
    <h1>Browse 3D Models</h1>

    <div class="tag-filter">
      <button class="tag-btn" :class="{ active: activeTag === null }" @click="setTag(null)">
        All
      </button>
      <button
        v-for="tag in allTags"
        :key="tag"
        class="tag-btn"
        :class="{ active: activeTag === tag }"
        @click="setTag(tag)"
      >
        {{ tag }}
      </button>
    </div>
    <div class="model-grid">
      <ModelCard v-for="model in filteredModels" :key="model.id" :model="model" />
    </div>
  </div>
</template>

<script>
import { useModelsStore } from '../stores/models'
import ModelCard from '../components/ModelCard.vue'

export default {
  name: 'BrowseView',
  components: { ModelCard },

  data() {
    return {
      activeTag: null,
      store: useModelsStore(),
    }
  },

  computed: {
    models() {
      return this.store.models
    },

    allTags() {
      return this.store.allTags
    },

    filteredModels() {
      if (!this.activeTag) return this.models
      return this.models.filter((m) => m.tags.includes(this.activeTag))
    },
  },

  methods: {
    setTag(tag) {
      this.activeTag = tag
    },
  },
}
</script>

<style scoped>
.tag-filter {
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin: 1.2rem 0 2rem;
}

.tag-btn {
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid #222c52;
  background: var(--bg-secondary);
  color: var(--text-muted);
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.8rem;
}

.tag-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.tag-btn.active {
  background: rgba(108, 240, 255, 0.15);
  color: var(--accent);
  border-color: var(--accent);
}
</style>
