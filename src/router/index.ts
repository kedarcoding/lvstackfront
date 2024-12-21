import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '@/components/Login.vue';
import Profile from '@/views/Users/Profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // Lazy-loaded route
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { requiresAuth: true }, // Protect this route
    },
  ],
});

// Global navigation guard for authentication
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('userToken'); // Example authentication check
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  }else if(to.path=='/login' && isAuthenticated){
    next({ name: 'home' });
  }
  else {
    // Otherwise, allow the navigation
    next();
  }
});

export default router;
