<script>
import axios from 'axios';
import {store} from '../data/store';
import Card from '../components/partials/Card.vue';

export default {
  name: 'Search',
  data(){
    return {
      store,
    }
  },
  components:{
    Card,
  },
  methods:{
    getApiPosition(endpoint){
      store.foundApartments = [];
      axios.get(endpoint)
        .then(results => {
          store.lat = results.data.results[0].position.lat;
          store.lon = results.data.results[0].position.lon;
          console.log(store.lat);
          console.log(store.lon);
          this.getDistance();
        })
    },
    getDistance(){
      store.apartments.forEach(apartment => {
        var lat2 = apartment.lat;
        var lon2 = apartment.lon;
        var distance = this.getDistanceFromLatLonInKm(store.lat,store.lon,lat2,lon2);
        if(distance <= 20){
          store.foundApartments.push(apartment);
        }
        console.log(store.foundApartments);
      });
    },
    getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    },
    deg2rad(deg) {
      return deg * (Math.PI/180)
    }
  },
  mounted(){
    this.getApiPosition(store.apiSearchStart + store.toSearch + store.apiSearchEnd);
  }
  
}
</script>

<template>
  <div class="container pt-80">

    <div class="mb-3">
      <label for="formGroupExampleInput" class="form-label">Example label</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder">
    </div>

    <div class="mt-5">
      <h1 class="text-center">Appartamenti Trovati</h1>
      <div class="row">
        <div class="col-4 py-3" v-for="apartment in store.foundApartments" :key="apartment.id">
          <Card :apartment="apartment"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss" scoped>

</style>