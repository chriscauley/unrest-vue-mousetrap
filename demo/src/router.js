import { createRouter, createWebHashHistory } from "vue-router";

import Basics from "./Basics";
import Mousetrap from "./Mousetrap";

const history = createWebHashHistory();
const routes = [
  { path: "/", component: Basics },
  { path: "/mousetrap", component: Mousetrap }
];

export default createRouter({ history, routes });
