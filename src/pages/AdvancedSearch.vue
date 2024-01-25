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
    <div class="container pt-2">  
      <!-- Indirizzo e chilometri -->
      <!-- indirizzo -->
      <div class="d-flex row mb-3">
        <span class="fw-bold mb-1">Inserisci indirizzo</span>
        <div class="col-11 fw-bold">
          <input 
            type="text" 
            class="form-control" 
            id="formGroupExampleInput" 
            v-model="store.toSearch"
            @keyup.enter="getAdvancedSearch()">
        </div>

        <!-- Button trigger offcanvas filter -->
        <div class="col-1">
          <span class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="fa-solid fa-filter me-2"></i>
            <span>Filtri</span>
          </span>
  
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Filtri</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <!-- select KM -->
              <div class="fw-bold my-2">
                <i class="fa-solid fa-car-side me-3"></i>
                <label class="mb-1">Chilometri</label>
                <select @change="getAdvancedSearch()" v-model="store.radius" class="form-select " aria-label="Default select example">
                  <option value="1">1 Km</option>
                  <option value="2">2 Km</option>
                  <option value="5">5 Km</option>
                  <option value="20">20 Km</option>
                  <option value="50">50 Km</option>
                </select>
              </div> 
                <!-- /select KM -->
  
                <!-- select room -->
                <div class="fw-bold my-2">
                  <i class="fa-solid fa-door-closed me-3"></i>
                  <label>Seleziona numero di stanze</label>
                <select @change="getAdvancedSearch()" v-model="this.rooms" class="form-select " aria-label="Default select example">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
                <!-- /select room -->
  
                <!-- select bed -->             
                <div class="fw-bold my-2">
                  <i class="fa-solid fa-bed me-3"></i>
                  <label>Seleziona numero di letti</label>
                  <select @change="getAdvancedSearch()" v-model="this.beds" class="form-select " aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6+</option>
                  </select>
                </div>
                <!-- /select bed -->             
                
                 <!-- Servizi -->
                <div class="mb-5">
                  <ul class="d-flex flex-column">
                    <li v-for="service in store.services" :key="service.id" class="my-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="mt-5 " :class="store.foundApartments.length > 0? '': 'containter-card-searched'">
        <h1 class="text-center">{{store.foundApartments.length > 0  ? "Appartamenti trovati: "+ store.foundApartments.length  : 'Nessun appartamento trovato'}}</h1>
        
          <div class="d-flex py-3 flex-wrap justify-content-center" >
            <Card v-for="apartment in store.foundApartments" :key="apartment.id" :apartment="apartment"/>
          </div>
      </div>
    </div>
</template>

<style>
  .containter-card-searched{
    height: 400px;
  }
</style>