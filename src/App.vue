<template>
  <v-app>
    <Navbar />
    <v-main class="pt-0">
      <Curriculum />
    </v-main>
  </v-app>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Curriculum from './components/CurriculumVitae.vue'; // Asegúrate de la ruta correcta
</script>
