<script>
  import axios  from 'axios';
  import { store } from '../data/store';
  import FormMessage from '../components/FormMessage.vue';
  export default {
    name:'ApartmentDetails',
    components:{
      FormMessage
    },

    data(){
      return {
        slug:'', 
        apartment:{},
        user_name:'',
        user_surname:''
      }
    },
    methods: {
      getSingleProject(slug){
        axios.get(store.apiUrl + 'apartments/get-apartment/' + slug)
      .then(response => {
        console.log(response.data.success);
        if(!response.data.success){
          console.log('pagina erroreeeee');
          this.$router.push({ name: 'Error404' })
        }
        this.apartment = response.data.apartment;
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
      <h2 class="text-center">Appartamento: {{ apartment.title }} </h2>
      <div class="d-flex justify-content-center">
        <div class="me-5 w-50">
          <img :src="apartment.img" :alt="apartment.title" class="w-100">
        </div>
        <div class="d-flex flex-column justify-content-between ">
          
          <!-- info appartamento -->
          <div>
            <h3>Info appartamento di : {{  this.user_name + ' ' + this.user_surname }}</h3>
            <div>
              <span class="badge text-bg-info me-2" v-for="service in apartment.services" :key="service.id">{{ service.name }}</span>
            </div>
            <p><strong>Numero di stanze: </strong>{{apartment.room_number }}</p>
            <p><strong>Numero di letti: </strong>{{apartment.bed_number }}</p>
            <p><strong>Numero di bagni: </strong>{{apartment.bathroom_number }}</p>
            <p><strong>Mq: </strong>{{apartment.sq_metres }}</p>
            <div v-if = "apartment.description">
              <h5>Descrizione:</h5>
              <p  v-html="apartment.description"></p>
            </div>
            <h4 v-else>Nessuna descrizione</h4>
          </div>

          <!-- bottone -->
          <div class="button">
            <FormMessage :apartment_id = "apartment.id" :user_name="this.user_name"  :user_surname="this.user_surname"/>
          </div>
        </div>
        <!-- descrizione -->
      </div>
    </div>

</template>

<style lang="scss" scoped>
  
</style>