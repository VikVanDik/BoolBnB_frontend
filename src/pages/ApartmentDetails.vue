<script>
  import axios  from 'axios';
  import { store } from '../data/store';
  export default {
    name:'ApartmentDetails',

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
  <div  class="apartment-card pt-80">
    <h2>Title Apartment: {{ apartment.title }} </h2>
  </div>
</template>

<style lang="scss" scoped>
  
</style>