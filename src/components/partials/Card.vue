<script>
export default {
  name: "Card",
  props: {
    apartment:Object,
  },

}
</script>


<template>
  <div class="card h-100">
    <div class=" card-img w-100 overflow-hidden" style="height: 220px;">
        <img :src="apartment.img" class="img-fluid w-100" :alt="apartment.title">
    </div>
    <div class="card-body">
        <h5 class="card-title">{{apartment.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ apartment.address }}.</h6>
        <p v-html="apartment.description"></p>
        <a href="#" class="btn btn-success">Info</a>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>