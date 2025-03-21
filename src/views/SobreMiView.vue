<template>
    <v-container class="sobre-mi-view" fluid>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title class="text-h5">Sobre Mí</v-card-title>
            <v-card-text>
              <p>
                Hola, soy <strong>Aldo Eduardo Valdez Gutiérrez</strong>, estudiante de Ingeniería de Software en la Universidad de Colima.
                Me especializo en el desarrollo backend y tengo un gran interés en inteligencia artificial y ciberseguridad.
              </p>
              <p>
                He trabajado en proyectos como CollabTales, una plataforma de cuentos colaborativos; un sistema CRUD en C# como parte de mi servicio constitucional; y he realizado trabajos en backend para una plataforma educativa interna.
              </p>
              <h3 class="text-h6">Educación</h3>
              <v-list>
                <v-list-item>Bachillerato General</v-list-item>
                <v-list-item>Ingeniería de Software - Universidad de Colima</v-list-item>
              </v-list>
              <h3 class="text-h6">Habilidades Técnicas</h3>
              <v-list>
                <v-list-item>JavaScript</v-list-item>
                <v-list-item>C#</v-list-item>
                <v-list-item>Vue</v-list-item>
                <v-list-item>Vuetify</v-list-item>
                <v-list-item>Bootstrap</v-list-item>
                <v-list-item>Razor</v-list-item>
                <v-list-item>.NET</v-list-item>
                <v-list-item>Excel Intermedio</v-list-item>
              </v-list>
              <h3 class="text-h6">Otros Conocimientos</h3>
              <v-list>
                <v-list-item>Diagnóstico y reparación de computadoras</v-list-item>
              </v-list>
              <h3 class="text-h6">Áreas de Interés</h3>
              <v-list>
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
  </style>