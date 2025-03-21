<template>
    <v-container class="sobre-mi-view" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="custom-card">
            <v-card-title class="text-h4 font-weight-bold">Sobre Mí</v-card-title>
            <v-card-text>
              <p class="text-body-1 mb-4">
                Hola, soy <strong>Aldo Eduardo Valdez Gutiérrez</strong>, estudiante de Ingeniería de Software en la Universidad de Colima.
                Me especializo en el desarrollo backend y tengo un gran interés en inteligencia artificial y ciberseguridad.
              </p>
              <p class="text-body-1 mb-4">
                He trabajado en proyectos como <strong>CollabTales</strong>, una plataforma de cuentos colaborativos; un sistema CRUD en C# como parte de mi servicio constitucional; y he realizado trabajos en backend para una plataforma educativa interna.
              </p>
              <v-divider class="my-4"></v-divider>
              <h3 class="text-h5 font-weight-medium mb-3">Educación</h3>
              <v-list dense>
                <v-list-item>Bachillerato General</v-list-item>
                <v-list-item>Ingeniería de Software - Universidad de Colima</v-list-item>
              </v-list>
              <v-divider class="my-4"></v-divider>
              <h3 class="text-h5 font-weight-medium mb-3">Habilidades Técnicas</h3>
              <v-chip-group>
                <v-chip>JavaScript</v-chip>
                <v-chip>C#</v-chip>
                <v-chip>Vue</v-chip>
                <v-chip>Vuetify</v-chip>
                <v-chip>Bootstrap</v-chip>
                <v-chip>Razor</v-chip>
                <v-chip>.NET</v-chip>
                <v-chip>Excel Intermedio</v-chip>
              </v-chip-group>
              <v-divider class="my-4"></v-divider>
              <h3 class="text-h5 font-weight-medium mb-3">Otros Conocimientos</h3>
              <v-list dense>
                <v-list-item>Diagnóstico y reparación de computadoras</v-list-item>
              </v-list>
              <v-divider class="my-4"></v-divider>
              <h3 class="text-h5 font-weight-medium mb-3">Áreas de Interés</h3>
              <v-list dense>
                <v-list-item>Desarrollo Backend</v-list-item>
                <v-list-item>Inteligencia Artificial</v-list-item>
                <v-list-item>Ciberseguridad</v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "SobreMiView",
  };
  </script>
  
  <style scoped>
  .sobre-mi-view {
    padding: 20px;
  }
  
  .custom-card {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  </style>