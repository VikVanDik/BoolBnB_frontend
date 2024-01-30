<script>
  import axios  from 'axios';
  import { store } from '../data/store';
  import FormMessage from '../components/FormMessage.vue';
  import Map from '../components/partials/Map.vue';
  export default {
    name:'ApartmentDetails',
    components:{
      FormMessage,
      Map
    },

    data(){
      return {
        slug:'', 
        apartment:{},
        user_name:'',
        user_surname:'',
        store,
      }
    },
    methods: {
      getSingleProject(slug){
        store.lon = null;
        store.lat = null;
        axios.get(store.apiUrl + 'apartments/get-apartment/' + slug)
      .then(response => {
        console.log(response.data.success);
        if(!response.data.success){
          console.log('pagina erroreeeee');
          this.$router.push({ name: 'Error404' })
        }
        this.apartment = response.data.apartment;
        store.lon = response.data.apartment.lon;
        store.lat = response.data.apartment.lat;
        this.user_name = response.data.apartment.user.name;
        this.user_surname = response.data.apartment.user.surname;

        })},
    },
    computed: {
    },

    mounted(){
      this.slug = this.$route.params.slug;
      this.getSingleProject(this.slug);
    }
  }
  </script>


<template>
    <div class="container my-5 py-5">
      <div class="row">
        <div class="col-lg-8 h-100 img-house ">
          <h2 class="mt-3 mb-4">Appartamento: {{ apartment.title }} </h2>
          <img :src="apartment.img" :alt="apartment.title" class="img-fluid h-100">
        </div>
            <!-- map -->
            <div class="col-lg-4 h-100 d-flex flex-column">
              <h3 class="mt-3 mb-4">Dove ti troverai</h3>
              <div class="map">
                <Map :latitude="apartment.lat"  :longitude="apartment.lon"/>
              </div>
              
              <div class="card mt-3" >
                <div class="card-body text-center">
                  <h5 class="card-title">Chiedi informazioni all' host</h5>
                  <p class="card-text">Di solito l' host risponde entro 3 hr</p>
                  <div class="button  ">
                    <FormMessage :apartment_id = "apartment.id" :user_name="this.user_name"  :user_surname="this.user_surname"/>
                  </div>
                </div>
              </div>

            </div>
      </div>

        <div class="row">
          <!-- info appartamento -->
          <!-- colonna di sinistra -->
          <div class="col-12 col-lg-7">
            
            <!-- indirizzo e info -->
            <div class="address">
              <h3 class="mt-4">Indirizzo : {{ apartment.address }} </h3>
              <span> {{apartment.room_number ==  1 ? apartment.room_number + " stanza" : apartment.room_number+ ' stanze'}} &#9675;</span>
              <span> {{apartment.bed_number ==  1 ? apartment.bed_number + " posto letto" : apartment.bed_number+ ' posti letto'}} &#9675;</span>
              <span> {{apartment.bathroom_number ==  1 ? apartment.bathroom_number + " bagno" : apartment.bathroom_number+ ' bagni'}} &#9675;</span>
              <span> {{apartment.sq_metres }} metri quadri</span>
            </div>

            <!-- info host -->
            <div class="host mt-4">
              <h3>Nome dell' host : {{  this.user_name + ' ' + this.user_surname }}</h3>
              <p>Superhost 9 anni di esperienza come host</p>
            </div>

            <!-- ranking host  -->
            <div class="ranking-host">
              <div class="row align-items-center">
                <div class="col-auto">
                  <i class="fa-solid fa-medal"></i>
                </div>
                <div class="col">
                  <h3>{{  this.user_name }}  è un Superhost.</h3>
                  <p>I Superhost sono host con esperienza e valutazioni molto alte.</p>
                </div>
              </div>


              <div class="row align-items-center">
                <div class="col-auto">
                  <i class="fa-solid fa-key"></i>
                </div>
                <div class="col">
                  <h3>Ottima esperienza di check-in</h3>
                  <p>Il 100% degli ospiti ha valutato con 5 stelle la procedura di check-in.</p>
                </div>
              </div>
            </div>

            <!-- descrizione -->
            <div class="description">
              <div v-if = "apartment.description">
                <h3>Descrizione</h3>
                <p  v-html="apartment.description"></p>
              </div>
              <h4 v-else>Nessuna descrizione</h4>
            </div>

            <!-- dove dormirai -->
            <h3>Dove dormirai</h3>
            <div class="details-house">
              <div class="row">
                <div class="col-12 col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <i class="fa-solid fa-door-closed me-1"></i>
                      <h6 class="card-title my-3">Numero di stanze nell' appartamento</h6>
                      <h6 class="card-subtitle mb-2 text-body-secondary">{{apartment.room_number }}</h6>
                    </div>
                  </div>

                </div>
                <div class="col-12 my-3 col-md-4 my-md-0">
                  <div class="card">
                    <div class="card-body">
                      <i class="fa-solid fa-bed me-1"></i>
                      <h6 class="card-title my-3">Posti letto nell' appartamento</h6>
                      <h6 class="card-subtitle mb-2 text-body-secondary">{{apartment.bed_number }}</h6>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="card">
                    <div class="card-body">
                      <i class="fa-solid fa-toilet"></i>
                      <h6 class="card-title my-3">Numero di bagni nell' appartamento</h6>
                      <h6 class="card-subtitle mb-2 text-body-secondary"> {{apartment.bathroom_number }}</h6>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- cosa troverai -->
            <h3 class="mt-4">Cosa troverai</h3>
            <div class="services row">
                <div class="d-flex align-items-center col-6 mb-3" v-for="service in apartment.services" :key="service.id">
                  <img :src="service.icon" class="service-icon" alt="">     
                  <span>{{service.name}}</span>
                </div>
              
            </div>


        </div>
        <!-- fine colonna sinistra  -->
          
           
      </div>
   
     
    </div>

</template>

<style lang="scss" scoped>
.img-house {
  img {
    min-height: 490px;
  }
}

.card {
  background-color: rgba(197, 196, 196, 0.213);
}
.ranking-host {
  p {
    color: gray;
  }
}
.address {
  span {
    color: gray;
  }
}

.host {
  p {
    color: gray;
  }
}

i {
  color:rgb(75, 130, 192);
  font-size: 25px;
}
  .address{
    span{
      font-size: .9rem;
      padding-right: 10px;
    }
  }

  .host, .ranking-host , .description, .services{
    border-bottom: 1px solid rgba(128, 128, 128, 0.244);
    margin-bottom: 20px;
  }
  .service-icon {
    width: 50px;
  }

  .map {
    width: 100%;
    height: 300px;
  }

</style>