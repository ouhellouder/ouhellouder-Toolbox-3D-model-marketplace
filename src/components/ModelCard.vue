<template>
  <router-link :to="`/model/${model.id}`" class="model-card">
    <ModelViewer :src="model.fileUrl" />
    <div class="model-title">
      {{ model.name }}
      <ModelTags :tags="model.tags" />
    </div>
  </router-link>
</template>

<script>
import ModelViewer from '@/components/ModelViewer.vue'
import ModelTags from '@/components/ModelTags.vue'
export default {
  name: 'ModelCard',
  components: {
    ModelViewer,
    ModelTags,
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.model-card {
  display: block;
  border: 1px solid #222c52;
  border-radius: var(--radius);
  padding: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}
.model-card:hover {
  transform: translateY(-3px);
}
.model-thumb img {
  width: 100%;
  border-radius: var(--radius);
}
.model-title {
  font-weight: bold;
  margin-top: 0.5rem;
}
.tag {
  background: rgba(108, 240, 255, 0.15);
  color: var(--accent);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  font-size: 0.7rem;
  margin-right: 0.3rem;
}
</style>
