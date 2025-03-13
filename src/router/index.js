import { createRouter, createWebHistory } from 'vue-router';

// Importa las páginas
import InicioView from '../views/InicioView.vue';

const routes = [
  { path: '/', component: InicioView }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
