<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Sidebar />
    <Header />
    <v-container>
      <v-col cols="12" sm="12" md="3"><Chats /></v-col>
      <v-col cols="12" sm="12" md="6"><Details /></v-col>
      <v-col cols="12" sm="12" md="3"><Media /></v-col>
    </v-container>
  </v-app>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import Details from "../components/Details.vue";
import Media from "../components/Media.vue";
import Chats from "../components/Chats.vue";
</script>
