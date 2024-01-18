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

    // Serve a prendere api index
    getApi(endpoint){
      axios.get(endpoint)
        .then(results => {
          store.apartments = results.data;
        })
    },

    // Mandiamo l'address in post
    sendAddress(address){
      axios.post(store.apiUrl + 'research/'+ address)
      .then(results => {
          store.foundApartments = results.data;
        });
      store.toSearch = address;
      console.log(store.foundApartments);
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'apartments');
  }

}

</script>

<template>


  <h1 class="text-center">BoolBnB</h1>

  <div class="container pt-80">

    <!-- FORM SEARCH-BAR -->
    <form @submit.prevent="sendAddress(store.toSearch)" autocomplete="off" class="form-inline my-2 my-lg-0 row">

      <div class="col-11">
        <input 
          class="form-control mr-sm-2" 
          id="address"
          type="search" 
          placeholder="Search"
          v-model="store.toSearch"
          required>
      </div>

      <div class="col">
        <button  
          type="submit"
          class="btn btn-outline-success my-2 my-sm-0" >
            cerca
          </button>
      </div>
    </form>

  </div>

  <!-- Parte Sponsor -->
  <div class="mt-5">
    <h1 class="text-center">Appartamenti Sponsorizzati</h1>

    <div class="row">
      <div class="col-4 py-3" v-for="apartment in store.apartments" :key="apartment.id">
        <Card :apartment="apartment"/>
      </div>
    </div>
    
  </div>


</template>

<style lang="scss" scoped>

</style>