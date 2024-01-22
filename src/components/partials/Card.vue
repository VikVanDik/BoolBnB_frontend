<script>
export default {
  name: "Card",
  props: {
    apartment:Object,
  },

}
</script>


<template>
  <div class="card-cn">
    <div class="img-container w-100">
        <img :src="apartment.img" class="w-100 h-100" :alt="apartment.title">
    </div>
    <div class="card-content d-flex flex-column justify-content-around ">
      <div class="c-title w-100">
        <h5>{{apartment.title}}</h5>
      </div>

      <div class="c-address w-100">
        <h6>{{ apartment.address }}.</h6>
      </div>

      <div class="description w-100">
        <p v-html="apartment.description"></p>
      </div>

      <div class="c-button w-100">
        <router-link class="btn btn-outline-success" :to="{name:'ApartmentDetails',params:{slug:apartment.slug}}">Info</router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.card-cn{
  width: 350px;
  height: 500px;
  border: 1px solid black;
  margin-bottom: 40px;

  .img-container{
    height: 70%;
  }

  .card-content{
    width: 100%;
    height: 30%;

    p{
      margin-bottom: 0px;

    }
  }
}

</style>