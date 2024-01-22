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
      <div class="card-text">
        <p v-html="apartment.description"></p>
      </div>
        <router-link class="btn btn-primary" :to="{name:'ApartmentDetails',params:{slug:apartment.slug}}">
          Info
        </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>