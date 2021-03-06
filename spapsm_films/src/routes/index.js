import Vue from 'vue'
import Router from 'vue-router'
import HomeScreen from '../components/HomeScreen'
import Dashboard from '../components/Dashboard'
import Search from '../components/Search'
import TopMovies from '../components/TopMovies'
import Randomizer from '../components/Randomizer'
import Account from '../components/Account'
import Movie from '../components/Movie'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/',
            name: 'home',
            component: HomeScreen
        },
        {
          path: '/search',
          name: 'Search',
          component: Search,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/top',
          name: 'TopMovies',
          component: TopMovies,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/random',
          name: 'Randomizer',
          component: Randomizer,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/account',
          name: 'Account',
          component: Account,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/movie/:filmId',
          name: 'Movie',
          component: Movie,
          meta: {
            requiresAuth: true
          }
        }
    ]
})

// Nav Guard
router.beforeEach((to, from, next) => {
    // Check for requiresAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // Check if NO logged user
      if (!firebase.auth().currentUser) {
        // Go to login
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      // Check if NO logged user
      if (firebase.auth().currentUser) {
        // Go to login
        next({
          path: '/dashboard',
          query: {
            redirect: to.fullPath
          }
        });
      } else {
        // Proceed to route
        next();
      }
    } else {
      // Proceed to route
      next();
    }
  });

export default router