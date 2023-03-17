import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/RepoView.vue';
import ContactView from '../views/ContactView.vue';
import ErrorView from '../views/ErrorView.vue';
import VisitRepo from '../views/VisitRepo.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView 
      },
      {
        path: '/repo',
        name: 'repo-page',
        component: AboutView
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView
      },
      {
        path: '/:catchAll(.*)*',
        name: 'Error404',
        component: ErrorView
      },
    ]
      })

      export default router