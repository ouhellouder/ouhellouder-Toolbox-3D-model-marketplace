import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BrowseView from '@/views/BrowseView.vue'
import UploadView from '@/views/UploadView.vue'
import ModelView from '@/views/ModelView.vue'

const routes = [
  { path: '/', component: HomeView, name: 'Home' },
  { path: '/browse', component: BrowseView, name: 'Browse' },
  { path: '/upload', component: UploadView, name: 'Upload' },
  { path: '/model/:id', component: ModelView, name: 'ModelView' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
