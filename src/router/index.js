import {createRouter, createWebHistory} from 'vue-router';

import Home from '../pages/Home.vue';
import AdvancedSearch from '../pages/AdvancedSearch.vue';
import ApartmentDetails from '../pages/ApartmentDetails.vue';
import Error404 from '../pages/Error404.vue';
import InfoBoolbnb from '../pages/InfoBoolbnb.vue';
import Contacts from '../pages/Contacts.vue';

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
      path:'/advanced-search',
      name:'AdvancedSearch',
      component:AdvancedSearch,
    },

    {
      path: '/get-apartment/:slug',
      name: 'ApartmentDetails',
      component:ApartmentDetails
    },

    {
      path: '/info-boolbnb',
      name: 'infoBoolbnb',
      component: InfoBoolbnb
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'Error404',
      component: Error404
    }
  ]
});

export {router};