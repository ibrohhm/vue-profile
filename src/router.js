import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import MyProfile from './views/MyProfile.vue';
import EditProfile from './views/EditProfile.vue';
import NotFound from './views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profiles/:userId',
    name: 'MyProfile',
    component: MyProfile,
    props: true
  },
  {
    path: '/profiles/:userId/edit',
    name: 'EditProfile',
    component: EditProfile,
    props: true
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