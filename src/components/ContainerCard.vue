<script>
import {store} from '../data/store'
import Card from './partials/Card.vue';
export default {
  name:'ContainerCard',
  components:{
    Card,
  },
  data(){
    return {
      store,
      titolo : "Appartamenti Sponsorizzati",
    }
  }
}
</script>

<template>
    <h1 class="text-center">Appartamenti Sponsorizzati</h1>
    <div class="row">
      <div class="col-4 py-3" v-for="apartment in store.apartments" :key="apartment.id">
        <Card :apartment="apartment"/>
      </div>
    </div>

</template>

<style lang="scss" scoped>

</style>