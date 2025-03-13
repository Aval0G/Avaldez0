<template>
  <v-app-bar app color="white darken-4">
    <v-toolbar-title>MiPortafolio</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items class="d-none d-md-flex">
      <v-btn v-for="(item, index) in menuItems" :key="index" :to="item.link" class="mx-2">
        {{ item.text }}
      </v-btn>
    </v-toolbar-items>

    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item v-for="(item, index) in menuItems" :key="index" :to="item.link">
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
  { text: 'Habilidades', link: '/habilidades' },
  { text: 'Contacto', link: '/contacto' },
]);
</script>
