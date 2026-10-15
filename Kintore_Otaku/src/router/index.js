import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import MembershipPlansView from "../views/MembershipPlansView.vue";
import MemberView from "@/views/MemberView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      name: "home",
    },
    // {
    //   path: "/membership-plans",
    //   component: MembershipPlansView,
    //   name: "membership-plans",
    // },
    {
      path: "/memberView",
      component: MemberView,
      name: "memberView",
    },
  ],
});

export default router;
