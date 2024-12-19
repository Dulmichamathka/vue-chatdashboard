<template>
  <v-app-bar
    flat
    class="ma-5 ml-10 d-flex align-center justify-center"
    color="#1E1F25"
    style="border-radius: 20px; width: 1200px"
  >
    <h2 class="ml-5">Messages</h2>
    <div
      style="
        width: 2px;
        height: 20px;
        background-color: #282c38;
        margin-left: 14px;
      "
    ></div>
    <v-spacer></v-spacer>
    <v-icon
      style="position: relative; font-size: large; color: #3c4254; left: 30px"
      >fas fa-magnifying-glass</v-icon
    >
    <input
      type="text"
      style="
        width: 250px;
        height: 35px;
        border-radius: 12px;
        border: 1px solid #3c4254;
        background-color: #282c38;
        padding-left: 40px;
      "
      placeholder="Search from Message"
    />

    <v-icon
      style="position: relative; font-size: large; color: #3c4254; right: 30px"
      >fas fa-microphone</v-icon
    >

    <div
      style="
        width: 2px;
        height: 20px;
        background-color: #282c38;
        margin-left: 0px;
      "
    ></div>
    <div class="d-flex" style="font-size: 14px">
      <v-btn flat icon> <v-icon class="mr-4 ml-5">far fa-bell</v-icon></v-btn>
      <v-btn flat icon><v-icon class="mr-4">far fa-moon</v-icon> </v-btn>
    </div>

    <div
      style="
        width: 2px;
        height: 20px;
        background-color: #282c38;
        margin-left: 0px;
      "
    ></div>

    <v-btn
      style="
        width: 125px;
        height: 28px;
        background-color: #282c38;
        border: 0.5px solid #3c4254;
        margin-left: 18px;
        margin-right: 18px;
        padding-left: 6px;
        display: flex;
        align-items: center;
        justify-content: start;
      "
    >
      <img src="/star.png" width="18px" />
      <p
        style="
          color: darkgoldenrod;
          font-size: 14px;
          margin-left: 5px;
          margin-top: 3px;
        "
      >
        PREMIUM
      </p></v-btn
    >
  </v-app-bar>
</template>

<script setup></script>
<style scoped></style>
