<script>
export default {
  name: "Card",
  props: {
    apartment:Object,
  },
}




</script>


<template>
  <div class="card w-25 m-3">
    <div class="card-img w-100 overflow-hidden" style="height: 200px;">
      <img :src="apartment.img" class="w-100" :alt="apartment.title">
    </div>
    <div class="card-body">
      <div class="card-title">
        <h5>{{apartment.title}}</h5>
      </div>
      <div class="card-text">
        <h6>{{ apartment.address }}.</h6>
      </div>

      <div v-if="!apartment.distance">
      </div>

      <div v-else>

        <div class="card-text" v-if = "apartment.distance > 1" >
          <i class="fa-solid fa-map-location-dot"></i>
          <span class="ps-2"> {{ parseFloat(apartment.distance).toFixed(2) }} km</span>
        </div>
  
        <div class="card-text" v-else>
          <i class="fa-solid fa-location-dot"></i>
          <span class="fs-6">Si trova a meno di un km dalla destinazione scelta</span>
        </div>

      </div>

      <div class="card-text">
        <p v-html="apartment.description"></p>
      </div>
      <div class="card-text">
        <p><strong>Numero di stanze: </strong>{{apartment.room_number }}</p>
        <p><strong>Numero di letti: </strong>{{apartment.bed_number }}</p>
      </div>

        <router-link class="btn btn-primary" :to="{name:'ApartmentDetails',params:{slug:apartment.slug}}">
          Info
        </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>