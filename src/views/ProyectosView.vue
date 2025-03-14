<template>
    <v-container class="pa-6">
      <h2 class="text-h4 font-weight-bold mb-4">🚀 Proyectos</h2>
      
      <v-row>
        <v-col v-for="(project, index) in projects" :key="index" cols="12" md="6">
          <v-card class="project-card">
            <v-card-title class="text-h6 font-weight-bold">
              {{ project.title }}
            </v-card-title>
            <v-card-subtitle>
              <a :href="project.link" target="_blank" class="text-primary">
                Ver en GitHub
              </a>
            </v-card-subtitle>
            <v-card-subtitle>
              <a :href="project.live" target="_blank" class="text-primary">
                Implementacion
              </a>
            </v-card-subtitle>
            <v-card-text>{{ project.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projects = ref([
    {
      title: "Sistema de Administración de Gimnasio",
      link: "https://github.com/SSC-UdeC/Gimnasio",
      description: "Implementación de un sistema de administracion de Gimnasio usando .NET.",
    },
    {
        title:'Collabtales',
        link:'https://github.com/jd-becerra/collabtales',
        description:'Plataforma web para crear y desarrollar cuentos de manera colaborativa.',
    },
    {
      title: "Sistema de Administracion de una tortilleria",
      link: "https://github.com/Aval0G/BD-Tortilleria",
      description: "Implementacion de un sistema de administracion basico usando .Net.",
    },
    {
      title: "Web Mi portafolio",
      link: "https://github.com/Aval0G/Avaldez0",
      description: "Pagina web que mi curriculum vitae.",
    },
    {
        title: "Web para solucion de Ecuaciones no lineales",
        link: "https://github.com/jd-becerra/root-approximation?tab=readme-ov-file",
        live: "https://raiz-aproximacion.netlify.app/",
        description: "Pagina web para solucionar ecuaciones no lineales.",
    },
    {
      title: "Programación lineal con python",
      link: "https://github.com/Aval0G/Programacion-Lineal",
      description: "Resolución de 3 problemas de programación lineal de INV de Operaciones",
    },
    {
      title: "Replicacion de pagina usando Vue",
      link: "https://github.com/Aval0G/Marca.git",
      live: "https://aval0g.github.io/Marca/",
      description: "Replicacion de la pagina https://www.marca.com/mx/.",
    },
    {
        title: 'Mini Programas de JS',
        link: 'https://github.com/Aval0G/Facultad-de-telematica-3-H-Base-de-datos',
        description: 'Mini programas donde se aplican conceptos de JS.',
    }
  ]);
  </script>
  
  <style scoped>
  .project-card {
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
  }
  </style>
  