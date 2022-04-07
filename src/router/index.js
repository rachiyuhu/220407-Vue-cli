import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },

  {
    path: '/login',
    name: 'login',
    component: function () {
      return import("../views/LoginView.vue");
    },
  },

  {
    path: "/board",
    name: "board",
    component: function () {
      return import("../views/BoardView.vue");
    },
    children: [
      {
        path: ":page",
        component: function () {
          return import("../components/PageComponent.vue");
        },
      },
    ],
  },


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
