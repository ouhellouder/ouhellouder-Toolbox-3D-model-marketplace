<template>
  <div class="container" v-if="model">
    <div class="model-layout">
      <div class="model-preview-large">
        <ModelViewer :src="model.fileUrl" />
      </div>

      <div class="model-info">
        <h1>{{ model.name }}</h1>

        <ModelTags :tags="model.tags" />

        <div class="model-meta">
          <p><strong>Format:</strong> GLTF</p>
          <p><strong>Polycount:</strong> A lot</p>
          <p><strong>License:</strong> GNU</p>
        </div>

        <button class="btn">Download (Soon)</button>
      </div>
    </div>
  </div>

  <div v-else>
    <p>Model not found.</p>
  </div>
</template>

<script>
import { useModelsStore } from '@/stores/models'
import ModelViewer from '@/components/ModelViewer.vue'
import ModelTags from '@/components/ModelTags.vue'

export default {
  name: 'ModelView',
  components: {
    ModelViewer,
    ModelTags,
  },
  data() {
    return {
      modelsStore: useModelsStore(),
    }
  },

  computed: {
    model() {
      return this.modelsStore.getById(this.$route.params.id)
    },
  },
}
</script>

<style scoped>
.model-layout {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.model-preview-large {
  border-radius: var(--radius);
  background: linear-gradient(135deg, #0b0f1a, #151c35);
  display: flex;
  align-items: center;
  justify-content: center;
}

.model-info {
  background: var(--card-bg);
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid #222c52;
}

.model-info h1 {
  margin-bottom: 0.8rem;
}

.model-meta {
  margin: 1rem 0;
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 900px) {
  .model-layout {
    grid-template-columns: 1fr;
  }
}
</style>
