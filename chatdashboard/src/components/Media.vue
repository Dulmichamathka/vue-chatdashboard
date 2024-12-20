<template>
  <v-card
    color="#1E1F25"
    style="
      width: 380px;
      padding: 20px;
      border-radius: 20px;
      margin-top: 90px;
      margin-left: 138px;
    "
    ><div class="d-flex align-center">
      <h3>Media</h3>
      <v-spacer></v-spacer>
      <v-btn
        style="
          width: 100px;
          height: 28px;
          background-color: #282c38;
          border: 0.5px solid #3c4254;
          font-size: small;
          color: #757b8c;
        "
      >
        see all
        <v-icon style="font-size: 13px; color: #757b8c"
          >fas fa-chevron-right</v-icon
        ></v-btn
      >
    </div>
    <div
      style="
        display: grid;

        grid-template-columns: repeat(2, 0fr);
        gap: 8px;
        margin-top: 20px;
        margin-left: 15px;
      "
    >
      <v-card
        v-for="(media, index) in medias"
        :key="index"
        style="
          width: 150px;
          height: 170px;
          border-radius: 15px;
          background-color: #3c4254;
          display: flex;
          flex-wrap: wrap;
        "
        ><img
          style="width: 100%; height: 100%; object-fit: cover"
          :src="media.image"
      /></v-card>
    </div>
  </v-card>
</template>

<script setup>
const medias = [
  { image: "/m1.png" },
  { image: "/m2.jpg" },
  { image: "/m3.jpg" },
  { image: "/m4.jpg" },
  { image: "/m5.jpg" },
  { image: "/m6.jpg" },
];
</script>
