import { createRouter, createWebHashHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
});
