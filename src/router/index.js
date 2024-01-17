import {createRouter, createWebHistory} from 'vue-router';

import Home from '../pages/Home.vue'
import Search from '../pages/Search.vue'
import ApartmentDetails from '../pages/ApartmentDetails.vue';
import Error404 from '../pages/Error404.vue'


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
    },
    {
      path:'/search',
      name:'search',
      component:Search,
    },

    {
      path: '/get-apartment/:slug',
      name: 'ApartmentDetails',
      component:ApartmentDetails
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export {router};