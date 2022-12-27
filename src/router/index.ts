import { createWebHistory, createRouter } from "vue-router";
import Customer from "@/views/CustomerView.vue";

const routes = [
  {
    path: "/:brand",
    name: "Customer",
    component: Customer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;