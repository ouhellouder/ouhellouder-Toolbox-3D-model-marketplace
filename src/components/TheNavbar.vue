<template>
  <nav class="navbar">
    <div class="nav-inner container">
      <router-link to="/" class="logo">Toolbox</router-link>

      <div v-if="isBrowsePage" class="nav-search-wrapper">
        <input
          v-model="searchQuery"
          @keyup.enter="applySearch"
          type="text"
          placeholder="Search 3D models..."
          class="nav-search"
        />
        <BaseButton @click="applySearch">Search</BaseButton>
      </div>

      <div class="nav-links">
        <router-link :to="{ name: 'Browse' }">Browse</router-link>
        <router-link :to="{ name: 'Upload' }">Upload</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'TheNavbar',
  components: {
    BaseButton,
  },
  data() {
    return {
      searchQuery: '',
    }
  },

  computed: {
    isBrowsePage() {
      return this.$route.name === 'Browse'
    },
  },

  methods: {
    applySearch() {
      if (!this.searchQuery) return
      this.$router.push({ name: 'Browse', query: { q: this.searchQuery } })
      this.searchQuery = ''
    },
  },
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(17, 23, 42, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #1e2645;
  padding: 0.6rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--text-muted);
  font-weight: 500;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
  text-shadow: var(--glow);
}

/* Search bar on Browse page */
.nav-search-wrapper {
  max-width: 600px;
  width: 60%;
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

.nav-search {
  flex: 1;
  min-width: 0;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid #222c52;
  background: var(--bg-secondary);
  color: var(--text-main);
  text-align: left;
}

.nav-search:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: var(--glow);
}
</style>
