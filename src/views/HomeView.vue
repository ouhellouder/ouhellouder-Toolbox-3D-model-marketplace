<script>
export default {
  name: 'Home',
}
</script>

<template>
  <section class="home container">
    <div class="welcome">
      <h1>Welcome to Your 3D Marketplace</h1>
      <p class="subtitle">
        Browse amazing 3D models or upload your own creations to share with the world.
      </p>
    </div>

    <div class="features">
      <div class="feature-card">
        <div class="icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
            <line x1="16.65" y1="16.65" x2="22" y2="22" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>

        <h3>Browse 3D Models</h3>
        <p>
          Explore a growing library of 3D assets. Preview, rotate and inspect models before
          downloading them.
        </p>
        <router-link to="/browse" class="btn feature-btn"> Browse library </router-link>
      </div>

      <div class="feature-card">
        <div class="icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path d="M12 16V4" stroke="currentColor" stroke-width="2" />
            <path d="M7 9L12 4L17 9" stroke="currentColor" stroke-width="2" />
            <rect x="4" y="16" width="16" height="4" stroke="currentColor" stroke-width="2" />
          </svg>
        </div>

        <h3>Upload Your Models</h3>
        <p>Share your 3D creations with others. Build your profile and showcase your work.</p>

        <router-link to="/upload" class="btn feature-btn"> Upload a model </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home {
  text-align: center;
  padding-top: 4rem;
}

/* WELCOME */
.welcome h1 {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.subtitle {
  max-width: 620px;
  margin: 0 auto 3rem;
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* FEATURE GRID */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2.5rem;
  max-width: 900px;
  margin: 0 auto;
}

/* FEATURE CARD */
.feature-card {
  background: var(--card-bg);
  border: 1px solid #222c52;
  border-radius: var(--radius);
  padding: 2.2rem 1.8rem;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--glow);
}

.icon {
  margin-bottom: 1.2rem;
  color: var(--accent);
}

.feature-card h3 {
  margin-bottom: 0.6rem;
  font-size: 1.3rem;
}

.feature-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.4rem;
}

.feature-btn {
  margin-top: auto;
}
</style>
