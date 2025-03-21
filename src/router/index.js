import { createRouter, createWebHistory } from 'vue-router';

// Importa las páginas
import InicioView from '../views/InicioView.vue';
import ProyectosView from '../views/ProyectosView.vue';
import ContactoView from '../views/ContactoView.vue';
import SobreMiView from '../views/SobreMiView.vue';

const routes = [
  { path: '/', component: InicioView }, 
  { path: '/proyectos', component: ProyectosView },
  { path: '/contacto', component: ContactoView },
  { path : '/sobre_mi', component: SobreMiView }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
