<template>
  <v-app-bar app elevation="0" class="custom-navbar">
    <v-toolbar-title class="font-weight-bold text-uppercase text-white">Mi Portafolio</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="d-none d-md-flex">
      <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.link" text class="mx-2 text-white">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.text }}
      </v-btn>
    </v-toolbar-items>

    <v-app-bar-nav-icon class="d-md-none text-white" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary class="bg-grey-darken-4">
    <v-list dense>
      <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.link" class="text-white">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);
const menuItems = ref([
  { text: 'Inicio', link: '/', icon: 'mdi-home' },
  { text: 'Sobre mí', link: '/sobre_mi', icon: 'mdi-account' },
  { text: 'Proyectos', link: '/proyectos', icon: 'mdi-briefcase' },
  { text: 'Habilidades', link: '/habilidades', icon: 'mdi-lightbulb' },
  { text: 'Contacto', link: '/contacto', icon: 'mdi-email' },
]);
</script>

<style scoped>
.custom-navbar {
  background: rgba(0, 0, 0, 0.7); /* Negro semitransparente */
  backdrop-filter: blur(10px); /* Efecto de desenfoque */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.v-navigation-drawer {
  border-right: 2px solid rgba(255, 255, 255, 0.1);
}
</style>