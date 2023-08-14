import { createRouter, createWebHistory } from "vue-router";

// Views
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
import ProductDetails from "./views/ProductDetails.vue";
import CartOrders from "./views/Orders.vue";

// paths
const routes = [
  { path: "/", component: Home },
  { path: "/admin", component: Admin },
  { path: "/productDetails/:prodID", component: ProductDetails },
  { path: "/orders", component: CartOrders },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
