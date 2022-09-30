import { createApp } from "vue";
import { Chrome, create } from "@ckpack/vue-color";
import App from "./App.vue";

// const files = require.context("./", true, /\.vue$/i);
// files
//   .keys()
//   .map((key) =>
//     App.component(key.split("/").pop().split(".")[0], files(key).default)
//   );

createApp(App)
  .use(
    create({
      components: [Chrome],
    })
  )
  .mount("#app");
