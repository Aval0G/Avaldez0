<template>
    <v-container class="pa-6">
      <v-card class="mx-auto" max-width="800">
        <v-card-title class="d-flex flex-column align-items-center">
          <v-avatar size="120">
            <v-img src="/profile.jpg" alt="Foto de perfil" />
          </v-avatar>
          <h1 class="mt-4">Aldo Valdez</h1>
          <p class="text-subtitle-1">Estudiante de Ingeniería de Software 6H</p>
        </v-card-title>
  
        <v-divider></v-divider>
  
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <h2>Sobre Mí</h2>
                <p>Soy un estudiante de Ingeniería de Software en Colima, México. Actualmente, estoy aprendiendo .NET y tengo experiencia en desarrollo web. Me apasiona crear aplicaciones eficientes y atractivas.</p>
              </v-col>
  
              <v-col cols="12">
                <h2>Proyectos</h2>
                <v-list>
                  <v-list-item>
                    <v-list-item-title><strong>Facultad de Telemática 2-H Métodos Numéricos</strong></v-list-item-title>
                    <v-list-item-subtitle>Repositorio en GitHub</v-list-item-subtitle>
                    <p>Proyecto enfocado en la implementación de métodos numéricos utilizando C#.</p>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title><strong>Facultad de Telemática 3-H Base de Datos</strong></v-list-item-title>
                    <v-list-item-subtitle>Repositorio en GitHub</v-list-item-subtitle>
                    <p>Desarrollo de proyectos relacionados con bases de datos y su gestión.</p>
                  </v-list-item>
                </v-list>
              </v-col>
  
              <v-col cols="12">
                <h2>Habilidades</h2>
                <v-chip-group>
                  <v-chip>JavaScript</v-chip>
                  <v-chip>Vue.js</v-chip>
                  <v-chip>Node.js</v-chip>
                  <v-chip>HTML & CSS</v-chip>
                  <v-chip>.NET</v-chip>
                  <v-chip>C#</v-chip>
                </v-chip-group>
              </v-col>
  
              <v-col cols="12">
                <h2>Contacto</h2>
                <p>Email: chsjajaa@gmail.com</p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/aldo-valdez-5036a315b" target="_blank">linkedin.com/in/aldo-valdez-5036a315b</a></p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  