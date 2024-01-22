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
    <div class="container-fluid">
      <div>
        <h2>Title Apartment: {{ apartment.title }} </h2>
      </div>
      <div class="card-img w-100 overflow-hidden" >
        <img :src="apartment.img" :alt="apartment.title">
      </div>
      <div>
        <p><strong>Numero di stanze: </strong>{{apartment.room_number }}</p>
        <p><strong>Numero di letti: </strong>{{apartment.bed_number }}</p>
        <p><strong>Numero di bagni: </strong>{{apartment.bathroom_number }}</p>
        <p><strong>Mq: </strong>{{apartment.sq_metres }}</p>
      </div>
      <div v-if = "apartment.description">
        <h5>Descrizione:</h5>
        <p  v-html="apartment.description"></p>
      </div>
      <h4 v-else>Nessuna descrizione</h4>
      <FormMessage :apartment_id = "apartment.id"/>
    </div>

</template>

<style lang="scss" scoped>
  
</style>