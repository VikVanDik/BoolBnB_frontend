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
      rooms:1,
      beds:1
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
        rooms:this.rooms,
        beds:this.beds
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
  <div class="container pt-5 mt-5">
    <h1 class="text-center" >Ricerca avanzata</h1>
  
    <!-- Indirizzo -->
    <div class="d-flex">
      <div class="m-3 col-10">
        <p>Inserisci indirizzo</p>
        <input 
          type="text" 
          class="form-control" 
          id="formGroupExampleInput" 
          v-model="store.toSearch"
          @keyup.enter="getAdvancedSearch()">
      </div>
  
      <!-- KM -->
      <div class="m-3 offset-1 col-1 ">
        <p>Km</p>
        <select @change="getAdvancedSearch()" v-model="store.radius" class="form-select " aria-label="Default select example">
          <option value="1">1 Km</option>
          <option value="2">2 Km</option>
          <option value="5">5 Km</option>
          <option value="20">20 Km</option>
          <option value="50">50 Km</option>
        </select>
      </div>
    </div>
  
      <!-- Servizi -->
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
  
    <div class="row">
  
      <!-- Stanze -->
      <div class="col-3 offset-1">
        <p>Seleziona numero di stanze</p>
        <select @change="getAdvancedSearch()" v-model="this.rooms" class="form-select " aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6+</option>
        </select>
      </div>
    
      <!-- Letti -->
      <div class="col-3 offset-4">
        <p>Seleziona numero di letti</p>
        <select @change="getAdvancedSearch()" v-model="this.beds" class="form-select " aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6+</option>
        </select>
      </div>
    </div>
  
  
    <div class="mt-5">
      <h1 class="text-center">{{store.foundApartments.length > 0  ? "Appartamenti trovati: "+ store.foundApartments.length  : 'Nessun appartamento trovato'}}</h1>
      
        <div class="d-flex py-3 flex-wrap justify-content-center" >
          <Card v-for="apartment in store.foundApartments" :key="apartment.id" :apartment="apartment"/>
        </div>
    </div>
  </div>
</template>

<style>

</style>