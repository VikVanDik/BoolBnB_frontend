
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

  <div class="main-cn">
    <!-- sfondo -->
    <div class="bg-container d-flex flex-column justify-content-center ">
      <div class="title-container">
        <h1>Boolbnb</h1>
      </div>

    <!-- barra di ricerca -->
      <div class="container d-flex justify-content-center">
        <form @submit.prevent="sendAddress(store.toSearch)" class="form-inline row w-50">
          <div class="d-flex col-11">
            <input 
            class="form-control"
            type="search" 
            placeholder="Cerca qui il tuo appartamento"
            v-model="store.toSearch"
            required>
          </div>
          <div class="col-1">
            <button type="submit"
            class="btn btn-primary">
              cerca
            </button>
          </div>
          
        </form>
      </div>
    </div>

    <!-- appartamenti sponsorizzati -->
    <div class="container p-5">
        <h2 id="sponsor-title" class="text-center">Appartamenti Sponsorizzati</h2>
        <div class="d-flex w-100 flex-wrap justify-content-center">
          <Card v-for="apartment in store.apartments" :key="apartment.id" :apartment="apartment"/>
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.main-cn{
  .bg-container{
    width: 100%;
    height: 700px;
    background-image: url(../img/sfondo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 20px;

    .title-container{
      width: 100%;
      background-color: rgba(0, 255, 255, 0);
      text-align: center;
      margin-bottom: 20px;
    }

  }

}
</style>