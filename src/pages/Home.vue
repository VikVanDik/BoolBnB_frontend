
<script>
import axios from 'axios';
import {store} from '../data/store';
import Header from '@/components/partials/Header.vue';
import Card from '../components/partials/Card.vue';
import {router} from '../router/index';
export default{
  name: 'Home',
  components:{
    Card,
    Header
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
    <Header/>

    <!-- sfondo -->
    <div class="bg-container d-flex flex-column justify-content-center ">
      <div class="title-container">
        <h1>Boolbnb</h1>
      </div>

    <!-- barra di ricerca -->
      <div class="search-container d-flex justify-content-center">
        <form @submit.prevent="sendAddress(store.toSearch)" class="form-inline">
        <div class="d-flex">
          <input 
          class="form-control"
          type="search" 
          placeholder="Cerca qui il tuo appartamento"
          v-model="store.toSearch"
          required>

          <button type="submit"
          class="btn btn-outline-success">
            cerca
          </button>
        </div>
        
        </form>
      </div>
    </div>

    <!-- appartamenti sponsorizzati -->
    <div class="sponsor-container d-flex flex-column">
      <div class="title-container d-flex justify-content-center ">
        <h2 id="sponsor-title">Appartamenti Sponsorizzati</h2>
      </div>
      <div class="cards-cn d-flex justify-content-around flex-wrap">
        <Card v-for="apartment in store.apartments" :key="apartment.id" :apartment="apartment"/>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.main-cn{
  width: 100vw;
  height: 100vh;

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

  .search-container{
    width: 100%;


    form{
      width: 60%;
    }

    button{
      margin-left: 20px;
    }
  }
}

.sponsor-container{
  background-color: #efe9e2;

  #sponsor-title{
    font-size: 40px;
    margin-top: 20px;
  }
  .cards-cn{
    width: 100%;
    padding-top: 40px;
  }
}
}
</style>