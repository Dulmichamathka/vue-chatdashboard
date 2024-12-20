<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <v-container>
      <Sidebar />
      <Header />

      <v-row>
        <v-col cols="12" sm="12" md="4">
          <v-row>
            <v-col cols="12" sm="12" md="12"><Chats /></v-col> </v-row
        ></v-col>
      </v-row>
      <v-col cols="12" sm="12" md="4"><Details /></v-col>
      <v-col cols="12" sm="12" md="4"><Media /></v-col>
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
