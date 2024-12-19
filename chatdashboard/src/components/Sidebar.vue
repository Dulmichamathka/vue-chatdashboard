<template>
  <nav>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="#1E1F25"
      class=" drawer ma-5 rounded-xl"
      style="height: calc(100% - 40px); 
      scrollbar-color: #757b8c #282c38; width: 270px;;"
    >
      <v-container class="d-flex align-center">
        <div
          style="
            display: flex;
            justify-content: start;
            align-items: center;
            padding: 4px;
            margin-right: 15px;
        
            font-size: large;
          "
          ><img src="/public/logo2.jpg" width="30px" height="30px"  style="padding-top: 0px !important;"/>
        <v-toolbar-title>Dashcube</v-toolbar-title>  </div
        >
        <v-btn
          text
          style="
            width: 50px;
            height: 28px;
            margin-right: 6px;
            background-color: #282c38;
            border: 0.5px solid #3c4254;
          "
          ><div class="d-flex" style="color: #757b8c">
            <v-icon style="font-size: 15px; margin-right: 7px"
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
        class="d-flex align-center flex-column item-hover"
        style="justify-content: start"
        @click="setActive(item)"
        :class="{'active-item ' : selecteditem === item.name}"
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
          <v-icon :class="{'text-color': selecteditem === item.name}"  style="margin-right: 20px; font-size: 20px">{{
            item.icon
          }}</v-icon>
          <p :class="{'text-color': selecteditem === item.name}" style="font-size: 14px">{{ item.name }}</p>

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
        class="d-flex align-center flex-column item-hover"
        style="justify-content: start"
        @click="setActive(item)"
        :class="{'active-item ' : selecteditem === item.name}"
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
          <img :class="{'text-color': selecteditem === item.name}" :src="item.icon" style="margin-right: 20px ;width: 20px;height: 20px;"></img>
          <p :class="{'text-color': selecteditem === item.name}" style="font-size: 14px;">{{ item.name }}</p>

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
        class="d-flex align-center flex-column item-hover"
        style="justify-content: start"
         @click="setActive(item)"
        :class="{'active-item ' : selecteditem === item.name}"
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
          <v-icon :class="{'text-color': selecteditem === item.name}" style="margin-right: 20px; font-size: 20px">{{
            item.icon
          }}</v-icon>
          <p :class="{'text-color': selecteditem === item.name}" style="font-size: 14px">{{ item.name }}</p>
        </div>
      </v-container>

      <v-container class="d-flex " style=" background:#282C38 ; width: 100%;">
        <v-avatar><img src="/profile.jpg" width="52px" height="50px"></v-avatar>
        <div class="ml-3">
          <p style="font-weight: 500;font-size: 13px;">Dulmi Chamathka</p>
          <small style="color: #3C4254;">dulmi@gmail.com</small>
        </div>
        <div class="ml-8"><v-icon style="color: #757B8C; font-size: 17px ;">fas fa-ellipsis</v-icon></div>
      </v-container>

    </v-navigation-drawer>
  </nav>
</template>

<script setup>
import { ref } from 'vue';


const drawer = true;

const selecteditem = ref("Dashboard")
const setActive = (item) =>{
  selecteditem.value = item.name
}

const items = [
  { icon: "fas fa-table-cells-large", name: "Dashboard" },
  { icon: "fas fa-chart-column", name: "Projects" },
  { icon: "fas fa-calendar-days", name: "Calender" },
  { icon: "fas fa-folder-open", name: "Documents" },
  { icon: "fas fa-cart-shopping", name: "Store" },
];

const intergrations = [
  { icon: "/figma.png", name: "Figma" },
  { icon: "/slack.png", name: "Slack" },
  { icon: "/jira.png", name: "Jira" },
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


.item-hover:hover {
  background-color: #1b213f;
  
}

.active-item {
  background-color:  #5878c8 !important;
  color: #6a84c6;
}

.text-color {
  color: #1E1F25;
}



.v-navigation-drawer::-webkit-scrollbar {
  width: 4px !important;
}

.v-navigation-drawer::-webkit-scrollbar-thumb {
  background-color: #757b8c;
  border-radius: 10px;
}

.v-navigation-drawer::-webkit-scrollbar-thumb:hover {
  background-color: #5a5f70; 
}

.v-navigation-drawer::-webkit-scrollbar-track {
  background-color: #282c38;
}
</style>
