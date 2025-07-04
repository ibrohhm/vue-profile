import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import MyProfile from './views/MyProfile.vue';
import EditProfile from './views/EditProfile.vue';
import NotFound from './views/NotFound.vue';
import LoginPage from './views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: "Login",
    component: LoginPage,
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfile,
  },
  {
    path: '/my-profile/edit',
    name: 'EditProfile',
    component: EditProfile,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;