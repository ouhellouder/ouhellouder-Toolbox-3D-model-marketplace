<script>
import TheNavbar from '@/components/TheNavbar.vue'
import { useModelsStore } from '@/stores/models.js'

export default {
  name: 'App',
  components: { TheNavbar },
  mounted() {
    const modelsStore = useModelsStore()
    modelsStore.load()
  },
}
</script>

<template>
  <TheNavbar />
  <router-view />
</template>
<!-- Nature, Low Poly, Pre-rendered, Chill, Pastel Colors -->
<style>
:root {
  --bg: #0f1724;
  --card-bg: #ffffff;
  --accent: #00c853; /* green for active */
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  font-family:
    Inter,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
  background: linear-gradient(180deg, #f7fafc, #ffffff);
}

.app-main {
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
</style>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
