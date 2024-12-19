import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

// Import Vuetify
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Import Vuetify's styles
import "@fortawesome/fontawesome-free/css/all.css";

// Create Vuetify instance
const vuetify = createVuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      dark: {
        background: "#171721",
      },
    },
  },
});

createApp(App).use(vuetify).use(router).mount("#app");
