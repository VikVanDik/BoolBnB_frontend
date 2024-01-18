<script>
import Header from "./components/partials/Header.vue"

export default{
  name: 'App',
  components: {
    Header,
  },
  data(){
    return {
    }
  },
  methods:{

  },
  mounted(){
  }
}

</script>

<template>
  <Header />
  
  <div class="container pt-80">
    <RouterView />
  </div>
</template>

<style lang="scss">

</style>