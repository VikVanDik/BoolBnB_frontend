<script>

import Header from '@/components/partials/Header.vue';
import Footer from './components/partials/Footer.vue'
export default{
  name: 'App',
  components: {
    Header,
    Footer
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
  <div class="total-view">
    <Header/>
    <div class="scroll-view h-100">
      <RouterView class="h-100"/>
    </div>
    <Footer/>
  </div>
</template>

<style lang="scss">
.total-view{
  height: 100%;
}
.scroll-view{
  height: 100%;
  margin-top: 80px;
}
</style>