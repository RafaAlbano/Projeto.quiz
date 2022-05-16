import { createRouter, createWebHistory } from "vue-router";
import BlocoLogin from "../views/BlocoLogin.vue";
import BlocoQuestoes from "../views/BlocoQuestoes.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "Login",
      component: BlocoLogin,
    },
    {
      path: "/questoes",
      name: "Quiz",
      component: BlocoQuestoes,
    },
  ],
});

export default router;
