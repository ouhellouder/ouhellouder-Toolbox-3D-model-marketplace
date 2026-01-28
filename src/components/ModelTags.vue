<template>
  <div class="model-tags">
    <span v-for="tag in tags" :key="tag" class="model-tag">
      {{ tag }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'ModelTags',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
}
</script>
