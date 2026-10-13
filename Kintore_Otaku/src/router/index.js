import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MembershipPlansView from '../views/MembershipPlansView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'home',
    },
    {
      path: '/membership-plans',
      component: MembershipPlansView,
      name: 'membership-plans',
    },
  ],
});

export default router;
