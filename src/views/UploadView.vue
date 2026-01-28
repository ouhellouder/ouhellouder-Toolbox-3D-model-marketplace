<template>
  <div class="container">
    <h1>Upload 3D Model</h1>

    <div class="form-box">
      <div class="form-group">
        <label>Model Name</label>
        <input v-model="name" placeholder="Enter model name" />
      </div>

      <div class="form-group">
        <label>Tags (comma separated)</label>
        <input v-model="tags" placeholder="Sci-Fi, Weapon, PBR" />
      </div>

      <div class="form-group">
        <label>3D File</label>
        <input type="file" accept=".glb,.gltf" @change="onFile" />
      </div>

      <BaseButton @click="submit">Upload File</BaseButton>
    </div>
  </div>
</template>

<script>
import { useModelsStore } from '../stores/models'
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'UploadView',
  components: {
    BaseButton,
  },
  data() {
    return {
      name: '',
      tags: '',
      fileUrl: null,
      store: useModelsStore(),
    }
  },

  methods: {
    onFile(e) {
      const file = e.target.files[0]
      if (!file) return

      const reader = new FileReader()

      reader.onload = () => {
        this.fileUrl = reader.result
      }

      reader.readAsDataURL(file)
    },

    submit() {
      if (!this.name || !this.fileUrl) {
        return alert('Please provide a name and a 3D file!')
      }

      const cleanedTags = this.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)

      this.store.addModel({
        name: this.name,
        tags: cleanedTags,
        fileUrl: this.fileUrl,
      })

      this.name = ''
      this.tags = ''
      this.fileUrl = null

      this.$router.push('/browse')
    },
  },
}
</script>
