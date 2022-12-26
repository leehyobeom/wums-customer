import { createWebHistory, createRouter } from "vue-router";
import Dashboar from "@/views/DashboardView.vue";
import UserMonitor from "@/views/UserMonitorView.vue";
import UserFront from "@/views/UserFrontView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboar",
    component: Dashboar,
  },
  {
    path: "/monitor/:id",
    name: "UserMonitor",
    component: UserMonitor,
  },
  {
    path: "/:brand",
    name: "UserFront",
    component: UserFront,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;