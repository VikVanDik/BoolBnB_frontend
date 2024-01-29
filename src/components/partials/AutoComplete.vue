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

    margin: 40px 0 0 15px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.309);
    border-radius: 10px;
    width: 500px;
    z-index: 500;
    overflow: hidden;
    .autocomplete{
      padding:5px 10px;
      font-weight: 100;
      &:hover{
        background-color: aqua;
        cursor: pointer;
      }
    }

  }
</style>