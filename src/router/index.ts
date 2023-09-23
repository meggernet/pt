import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HoursView from "../views/HoursView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "hours",
    component: HoursView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
