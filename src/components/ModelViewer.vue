<template>
  <model-viewer
    :src="src"
    auto-rotate
    camera-controls
    shadow-intensity="1"
    style="width: 100%; height: 100%"
  />
</template>

<script>
export default {
  name: 'ModelViewer',
  props: {
    src: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
model-viewer {
  touch-action: none;
  cursor: grab;
}
</style>
