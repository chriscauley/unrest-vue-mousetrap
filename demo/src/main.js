import { createApp } from "vue";
import App from "./App.vue";
import SshPre from "simple-syntax-highlighter";
import "simple-syntax-highlighter/dist/sshpre.css";

const app = createApp(App);
app.component("SshPre", SshPre);
app.mount("#app");
