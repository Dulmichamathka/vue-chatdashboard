<template>
  <nav>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="#1E1F25"
      class="ma-5 rounded-xl"
      style="height: calc(100% - 40px)"
    >
      <v-container class="d-flex align-center">
        <v-toolbar-title
          style="
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 5px;
            margin-right: 20px;
            font-size: large;
          "
          ><img src="/public/logo2.jpg" width="30px" height="30px" />
          Dashcube</v-toolbar-title
        >
        <v-btn
          text
          style="
            width: 40px;
            height: 28px;
            margin-right: 6px;
            background-color: #282c38;
            border: 0.5px solid #3c4254;
          "
          ><div class="d-flex" style="color: #757b8c">
            <v-icon style="font-size: 15px; margin-right: 4px"
              >fas fa-crosshairs</v-icon
            >
            <p>H</p>
          </div>
        </v-btn>
        <v-btn
          style="
            width: 30px;
            height: 28px;
            background-color: #282c38;
            border: 0.5px solid #3c4254;
          "
          ><v-icon style="font-size: 15px; color: #757b8c"
            >fas fa-arrow-left</v-icon
          ></v-btn
        >
      </v-container>

      <v-divider color="white"></v-divider>
      <v-container
        v-for="(item, index) in items"
        :key="index"
        class="d-flex align-center flex-column"
        style="justify-content: start"
      >
        <div
          style="
            justify-content: flex-start;
            width: 100%;
            color: #757b8c;
            position: relative;
          "
          class="d-flex align-center pl-2"
        >
          <v-icon style="margin-right: 20px; font-size: 20px">{{
            item.icon
          }}</v-icon>
          <p style="font-size: 14px">{{ item.name }}</p>

          <v-badge
            v-if="item.name === 'Projects'"
            color="#FA2256"
            content="3"
            overlap
            style="position: absolute; right: 10px"
          ></v-badge>
        </div>
      </v-container>

      <h5 class="mt-6 mb-3 ml-5" style="color: #3c4254">INTEGRATIONS</h5>

      <v-container
        v-for="(item, index) in intergrations"
        :key="index"
        class="d-flex align-center flex-column"
        style="justify-content: start"
      >
        <div
          style="
            justify-content: flex-start;
            width: 100%;
            color: #757b8c;
            position: relative;
          "
          class="d-flex align-center pl-2"
        >
          <img :src="item.icon" style="margin-right: 20px ;width: 20px;height: 20px;"></img>
          <p>{{ item.name }}</p>

          <v-badge
            v-if="item.name === 'Projects'"
            color="#FA2256"
            content="99+"
            overlap
            style="position: absolute; right: 10px"
          ></v-badge>
        </div>
      </v-container>

      <h5 class="mt-6 mb-3 ml-5" style="color: #3c4254">ACCOUNT</h5>


      <v-container
        v-for="(item, index) in account"
        :key="index"
        class="d-flex align-center flex-column"
        style="justify-content: start"
      >
        <div
          style="
            justify-content: flex-start;
            width: 100%;
            color: #757b8c;
            position: relative;
          "
          class="d-flex align-center pl-2"
        >
          <v-icon style="margin-right: 20px; font-size: 20px">{{
            item.icon
          }}</v-icon>
          <p style="font-size: 14px">{{ item.name }}</p>

          
        </div>
      </v-container>

    </v-navigation-drawer>
  </nav>
</template>

<script setup>
const drawer = true;
const items = [
  { icon: "fas fa-table-cells-large", name: "Dashboard" },
  { icon: "fas fa-chart-column", name: "Projects" },
  { icon: "fas fa-calendar-days", name: "Calender" },
  { icon: "fas fa-folder-open", name: "Documents" },
  { icon: "fas fa-cart-shopping", name: "Store" },
];

const intergrations = [
  { icon: "/figma.png", name: "Dashboard" },
  { icon: "/slack.png", name: "Projects" },
  { icon: "/jira.png", name: "Calender" },
];

const account = [
{ icon: "fas fa-gear", name: "Setting" },
{ icon: "fas fa-right-from-bracket", name: "log-out" },
]
</script>

<style scoped>
.v-btn--size-default {
  min-width: 10px;
}
</style>
