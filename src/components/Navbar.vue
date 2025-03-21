<template>
  <v-app-bar app color="primary">
    <v-toolbar-title>Mi Portafolio</v-toolbar-title>
    <v-spacer></v-spacer>

    <!-- Menú para pantallas grandes -->
    <v-toolbar-items class="d-none d-md-flex">
      <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.link" class="mx-2" text>
        {{ item.text }}
      </v-btn>
    </v-toolbar-items>

    <!-- Icono de menú personalizado para pantallas pequeñas -->
    <v-btn class="d-md-none" @click="drawer = !drawer" icon>
      <v-icon>mdi-view-list</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Menú desplegable -->
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.link" @click="drawer = false">
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const menuItems = ref([
  { text: 'Inicio', link: '/' },
  { text: 'Sobre mí', link: '/sobre_mi' },
  { text: 'Proyectos', link: '/proyectos' },
  { text: 'Contacto', link: '/contacto' },
]);
</script>
