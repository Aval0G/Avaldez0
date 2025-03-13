import { createRouter, createWebHistory } from 'vue-router';

// Importa las páginas
import InicioView from '../views/InicioView.vue';
import ProyectosView from '../views/ProyectosView.vue';

const routes = [
  { path: '/', component: InicioView }, 
  { path: '/proyectos', component: ProyectosView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
