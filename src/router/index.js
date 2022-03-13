import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/views/MainLayout/MainLayout';
import Home from '@/pages/Home/HomeV2';
import About from '../pages/About.vue';
import ProjectHandled from '@/pages/ProjectHandled/ProjectHandled';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainLayout,
    redirect: 'home',
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
      {
        path: '/about',
        name: 'about',
        component: About,
      },
      {
        path: 'project-handled',
        name: 'project-handled',
        component: ProjectHandled,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
