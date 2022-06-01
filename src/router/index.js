import { createRouter, createWebHistory } from "vue-router";

import Page1 from "../views/Page1.vue";
import Page2 from "../views/Page2.vue";
import Page3 from "../views/Page3.vue";
import Page4 from "../views/Page4.vue";

const routes = [
  {
    path: "/",
    name: "profissional",
    component: Page1,
  },
  {
    path: "/atendimento",
    name: "atendimento",
    component: Page2,
  },
  {
    path: "/finalizacao",
    name: "cadastro",
    component: Page3,
  },
  {
    path: "/conclusao",
    name: "conclusao",
    component: Page4,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
