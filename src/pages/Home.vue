
<script>
import axios from 'axios';
import {store} from '../data/store';
import Card from '../components/partials/Card.vue';
import {router} from '../router/index';
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
      router,
    }
  },
  methods:{
    getApi(apiUrl){
      store.toSearch ='';
      axios.get(apiUrl)
        .then(results => {
  
          console.log(results.data);
          store.apartments = results.data;
        })
      
    },
    sendAddress(address){
      axios.post(store.apiUrl + 'research/' + address)
        .then(results => {
  
          console.log(results.data);
          store.foundApartments = results.data;
          this.$router.replace({ path: '/advanced-search' });
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
  <h1 class="text-center">BoolBnB</h1>

  <div class="container pt-80">
    <form @submit.prevent="sendAddress(store.toSearch)" class="form-inline my-2 my-lg-0 row">

      <div class="col-11">
        <input 
          class="form-control mr-sm-2" 
          type="search" 
          placeholder="Search"
          v-model="store.toSearch"
          required>
      </div>

      <div class="col">
        <button type="submit"
          class="btn btn-outline-success my-2 my-sm-0">
            cerca
          </button>
      </div>
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