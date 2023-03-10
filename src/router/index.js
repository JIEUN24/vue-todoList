import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoView from "../views/TodoView.vue";
import CompoTest from "../views/CompoTest.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/todo",
      name: "todo",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TodoView,
    },
    {
      path: "/todo2",
      name: "todo2",
      component: () => import("../views/TodoView2.vue"),
    },
    {
      path: "/compo",
      name: "compo",
      component: CompoTest,
    },
  ],
});

export default router;
