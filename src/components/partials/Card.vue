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
        <h4>{{apartment.title}}</h4>
      </div>
      <div class="card-subtitle text-secondary">
        <span>{{ apartment.address }}.</span>
      </div>

      <div v-if="!apartment.distance">
      </div>

      <div v-else>

        <div class="card-subtitle text-secondary" v-if = "apartment.distance > 1" >
          <i class="fa-solid fa-map-location-dot text-primary"></i>
          <span class="ps-2"> {{ parseFloat(apartment.distance).toFixed(2) }} km</span>
        </div>
  
        <div class=" card-subtitle text-secondary" v-else>
          <i class="fa-solid fa-location-dot text-danger"></i>
          <span class="ps-2">A meno di 1 km</span>
        </div>

      </div>

      <div class="card-text">
        <p v-html="apartment.description"></p>
      </div>
      <div class="card-text">
        <span class="me-2">
          <i class="fa-solid fa-door-closed me-1"></i>{{apartment.room_number }}

        </span>
        <span>
          <i class="fa-solid fa-bed me-1"></i>{{apartment.bed_number }}
        </span>
      </div>

        <router-link class="btn btn-primary" :to="{name:'ApartmentDetails',params:{slug:apartment.slug}}">
          Info
        </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>