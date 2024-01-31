<script>
import axios from 'axios';
import {store} from "../../data/store.js";
export default{
  name: 'AutoComplete',
  data(){
    return {
      store,

    }
  },
  methods:{
    emptyAutocomplete(value) {
      store.toSearch = value;
      store.autocomplete = [];
    },
  }
}

</script>

<template>

<div v-if="store.autocomplete.length > 0" class="results position-absolute">
            <p class="autocomplete" @click="emptyAutocomplete( result.address.freeformAddress)" v-for="(result,index) in store.autocomplete" :key="result+index">{{ result.address.freeformAddress }}</p>
          </div>

</template>

<style lang="scss" scoped>
.results{
    width: 100%;
    font-size: .8rem;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.309);
    border-radius: 10px;
    z-index: 500;
    overflow: hidden;
    .autocomplete{
      border: 1px solid rgba(128, 128, 128, 0.227);
      margin: 0;
      padding:5px 10px;
      font-weight: 100;
      &:hover{
        color: white;
        background-color: #4b82c0;
        cursor: pointer;
      }
    }
  }
    @media (width > 576px) and (width < 992px) {
      .results{
        width: 400px;
      }
    }
    @media (width < 576px) {
      .results{
        width: 250px;
      }
    
    }
</style>