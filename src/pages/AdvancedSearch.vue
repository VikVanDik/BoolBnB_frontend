<script>
import axios from 'axios';
import {store} from '../data/store';
import Card from '../components/partials/Card.vue';
export default {
  name:'AdvancedSearch',
  components:{
    Card,
  },
  data(){
    return {
      store,
      servicesClick : [],
    }
  },
  methods:{
    getServices(apiUrl){
      axios.get(apiUrl)
        .then(results => {
          store.services = results.data;
        })
      
    },
    getSelectionServices(id){
      console.log(id);
      if(this.servicesClick.includes(id) ){
        this.servicesClick.splice(this.servicesClick.indexOf(id),1);
      }else{
        this.servicesClick.push(id);
      }
      this.getAdvancedSearch();
    
    },

    // getRadiuskm(){
    //   lastKm = 0;
    //   setInterval(function myTimer(){
    //     this.getAdvancedSearch();
    //   }, 1000)
    // },

    getAdvancedSearch(){
      let params = {
        radius: store.radius,
        address: store.toSearch,
        services: this.servicesClick,
      };
      axios.get(store.apiUrl + 'advanced-search',{ params })
        .then(results => {
          console.log(results.data);
          store.foundApartments = results.data;
        })
    }
  },
  mounted(){
    this.getServices(store.apiUrl + 'services');
  }
}
</script>

<template>
  <h1 class="text-center" >Ricerca avanzata</h1>

  <div class="d-flex">
    <div class="m-3 col-10">
      <input 
        type="text" 
        class="form-control" 
        id="formGroupExampleInput" 
        v-model="store.toSearch"
        @keyup.enter="getAdvancedSearch()">
    </div>
    <div class="m-3 offset-1 col-1 ">
      <input 
        type="number" 
        class="form-control" 
        id="formGroupExampleInput" 
        v-model="store.radius"
        @click="getAdvancedSearch()">
    </div>
  </div>

    <div class="mb-5">
      <ul class="d-flex justify-content-around">
        <li v-for="service in store.services" :key="service.id">
          <input 
            type="checkbox"
            class="btn-check"
            :name="service.id"
            :id="service.id"
            :value="service.id"
            @click="getSelectionServices(service.id)"
          >
          <label class="btn btn-outline-primary " :for="service.id">{{service.name}}</label>
        </li>
      </ul>
  </div>

  <div class="mt-5">
    <h1 class="text-center">Appartamenti Trovati</h1>

    <div class="row">
      <div class="col-4 py-3" v-for="apartment in store.foundApartments" :key="apartment.id">
        <Card :apartment="apartment"/>
      </div>
    </div>
  </div>
</template>

<style>

</style>