import { createRouter, createWebHashHistory } from "vue-router";

import Basics from "./Basics";
import Mousetrap from "./Mousetrap";
import HelpModal from "./HelpModal";

const history = createWebHashHistory();
const routes = [
  { path: "/", component: Basics },
  { path: "/mousetrap", component: Mousetrap },
  { path: "/help-modal", component: HelpModal }
];

export default createRouter({ history, routes });
