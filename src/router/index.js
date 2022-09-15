import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';
import CategoryView from "../views/CategoryView.vue";
import BrandView from "@/views/BrandView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:productSlug',
      name: 'product-page',
      component: ProductView
    },
    {
      path: '/categories/:categorySlug',
      name: 'category-page',
      component: CategoryView
    },
    {
      path: '/brands/:brandSlug',
      name: 'brand-page',
      component: BrandView
    }
  ]
});

export default router;
