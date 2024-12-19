<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Sidebar />
  </v-app>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>
