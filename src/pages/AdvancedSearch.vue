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
    }
  },

}
</script>

<template>
  <h1 class="text-center" >Ricerca avanzata</h1>
  <div class="mb-3">
    <input 
      type="text" 
      class="form-control" 
      id="formGroupExampleInput" 
      v-model="store.toSearch">
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