<template>
    <v-container class="pa-6">
      <v-card class="mx-auto" max-width="800">
        <v-card-title class="d-flex flex-column align-items-center">
          <v-avatar size="120">
            <v-img src="/profile.jpg" alt="Foto de perfil" />
          </v-avatar>
          <h1 class="mt-4">Aldo Eduardo Valdez Gutierrez</h1>
          <p class="text-subtitle-1">Estudiante de Ingeniería de Software</p>
          <p class="text-subtitle-1">Universidad de Colima</p>
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
                <h2>Algunos de mis Proyectos</h2>
                <v-list>
                  <v-list-item>
                    <v-list-item-title><strong>Sistema Administracion Gimnasio .NET</strong></v-list-item-title>
                    <v-list-item-subtitle><a href="https://github.com/SSC-UdeC/Gimnasio">Repositorio en GitHub</a> </v-list-item-subtitle>
                    <p>Sistema de administracion de un Gimnasio usando .NET</p>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title><strong>Collabtales</strong></v-list-item-title>
                    <v-list-item-subtitle><a href="https://github.com/jd-becerra/collabtales">Repositorio en GitHub</a></v-list-item-subtitle>
                    <p>Plataforma web para crear y desarrollar cuentos de manera colaborativa.</p>
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
                <p>Email: <a href="mailto:trabajo@avaldez0.com" target="_blank">trabajo@avaldez0.com</a> </p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/aldo-valdez-5036a315b" target="_blank">linkedin.com/in/aldo-valdez-5036a315b</a></p>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  