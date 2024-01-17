<script>
import axios from 'axios';
import {store} from '../data/store';
import Card from '../components/partials/Card.vue';
export default{
  name: 'Home',
  components:{
    Card,
  },
  props:{

  },
  data(){
    return {
      store,
    }
  },
  methods:{
    getApi(endpoint){
      // this.isLoader = false,
      axios.get(endpoint)
        .then(results => {
          // this.isLoader = true;
          store.apartments = results.data;
        })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'apartments');
  }

}

</script>

<template>

<div class="container pt-80">
  <h1 class="text-center">Home</h1>

  <div class="container pt-80">
    <form class="form-inline my-2 my-lg-0">

      <input 
        class="form-control mr-sm-2" 
        type="search" 
        placeholder="Search"
        v-model="store.toSearch"
        required>

      <router-link  
        class="btn btn-outline-success my-2 my-sm-0" 
        :to="{name: 'search'}">
          cerca</router-link>
    </form>
  </div>

  <div class="mt-5">
    <h1 class="text-center">Appartamenti Sponsorizzati</h1>

    <div class="row">
      <div class="col-4 py-3" v-for="apartment in store.apartments" :key="apartment.id">
        <Card :apartment="apartment"/>
      </div>
    </div>
    
  </div>
</div>

</template>

<style lang="scss" scoped>

</style>