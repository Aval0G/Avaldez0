<template>
    <v-app>
      <v-app-bar app color="white darken-4" dark>
        <v-toolbar-title>MiPortafolio</v-toolbar-title>
  
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-md-flex">
          <v-btn v-for="(item, index) in menuItems" :key="index" text class="mx-2" :href="item.link">
            {{ item.text }}
          </v-btn>
        </v-toolbar-items>

        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-app-bar>
  
      <v-navigation-drawer v-model="drawer" app temporary color="grey darken-4">
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" :href="item.link">
            <v-list-item-title class="text-white">{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const drawer = ref(false);
  const menuItems = ref([
    { text: 'Inicio', link: '#inicio' },
    { text: 'Sobre mí', link: '#sobre-mi' },
    { text: 'Proyectos', link: '#proyectos' },
    { text: 'Servicios', link: '#servicios' },
    { text: 'Contacto', link: '#contacto' },
  ]);
  </script>
  