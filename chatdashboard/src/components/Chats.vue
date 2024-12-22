<template>
  <v-container style="height: 100%; margin-top: 70px; margin-left: 100px">
    <v-card color="#1E1F25" style="padding: 20px; border-radius: 20px">
      <div class="d-flex mb-4">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn
              color="#1E1F25"
              flat
              style="
                border: 1px solid #3c4254;
                text-transform: capitalize;
                color: #757b8c;
              "
              v-bind="props"
              v-model="activeItem"
              >{{ activeItem }}
              <v-icon class="ml-3">fas fa-caret-down</v-icon>
            </v-btn>
          </template>

          <v-list
            style="background-color: #1e1f25; font-size: 16px; color: #757b8c"
          >
            <v-list-item
              class="item-hover"
              v-for="(item, index) in items"
              :key="index"
              @click="setactive(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-icon class="mt-2" left color="#757B8C">fas fa-arrows-rotate</v-icon>
      </div>

      <v-list
        class="pa-2"
        style="border-radius: 12px; background-color: #1e1f25; color: white"
      >
        <v-list-item
          v-for="(chat, i) in chats"
          class="pa-0"
          @click="setChatActive(chat)"
          :class="{ 'active-item ': chatactive === chat.name }"
          style="
            padding: 10px !important;
            border-radius: 10px !important;
            margin-bottom: 10px;
          "
        >
          <div class="d-flex justify-center">
            <v-avatar style="text-align: start"
              ><img :src="chat.img" width="48px" height="48px"
            /></v-avatar>
            <div class="d-flex flex-column ml-4">
              <div class="d-flex mb-4" style="justify-content: space-between">
                <small
                  style="color: blue"
                  :class="chatactive === chat.name ? 'active-item-small' : ''"
                  >{{ chat.name }}</small
                >
                <small>{{ chat.time }}</small>
              </div>
              <div>
                <p class="mb-1">{{ chat.topic }}</p>
                <small
                  style="color: grey"
                  :class="chatactive === chat.name ? 'active-item-small' : ''"
                  class="truncate-text"
                >
                  {{ chat.text }}
                </small>
              </div>
            </div>
          </div>
          <v-divider class="mt-3 mb-4"></v-divider>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const items = [{ title: "Chats" }, { title: "Groups" }];
const activeItem = ref("Primary");
const setactive = (item) => {
  activeItem.value = item.title;
};

const chatactive = ref("Dulmi Chamathka");

const setChatActive = (chat) => {
  chatactive.value = chat.name;
};

const chats = [
  {
    img: "/profile.jpg",
    name: "Dulmi Chamathka",
    time: "9.23 A.M",
    topic: "Figma UI design",
    text: " Hey Bobby ,can i get your figma design. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat hic ipsum atque ea voluptatum provident dolor impedit minus, tenetur, eveniet at explicabo debitis libero voluptatibus! Minima similique magnam voluptatum inventore.",
  },
  {
    img: "/img2.png",
    name: "Geeth Malinda",
    time: "9.23 A.M",
    topic: "Figma UI design",
    text: " Hey Bobby ,can i get your figma design. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat hic ipsum atque ea voluptatum provident dolor impedit minus, tenetur, eveniet at explicabo debitis libero voluptatibus! Minima similique magnam voluptatum inventore.",
  },
  {
    img: "/img8.png",
    name: "Hasthika Rajapaksha",
    time: "9.23 A.M",
    topic: "Figma UI design",
    text: " Hey Bobby ,can i get your figma design. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat hic ipsum atque ea voluptatum provident dolor impedit minus, tenetur, eveniet at explicabo debitis libero voluptatibus! Minima similique magnam voluptatum inventore.",
  },
  {
    img: "/img5.png",
    name: "Kathrina Fenando",
    time: "9.23 A.M",
    topic: "Figma UI design",
    text: " Hey Bobby ,can i get your figma design. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat hic ipsum atque ea voluptatum provident dolor impedit minus, tenetur, eveniet at explicabo debitis libero voluptatibus! Minima similique magnam voluptatum inventore.",
  },
];
</script>

<style scoped>
.item-hover:hover {
  background-color: #1b213f;
}

.truncate-text {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit the text to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* Ensures wrapping for multiple lines */
}

.active-item {
  background-color: #2b54bc;
  color: white;
  padding: 10px !important;
  border-radius: 10px !important;
  margin-bottom: 15px;
  transition: transform 0.5s ease-out !important;
  transform: scale(1) !important;
}

.active-item:hover {
  transform: scale(1.05);
}
.active-item-small {
  color: #c0c0c0 !important;
}
</style>
