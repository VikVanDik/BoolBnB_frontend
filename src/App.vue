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
    <main class="scroll-view">
      <RouterView class="h-view"/>
    </main>
    <Footer class="h-footer"/>
  </div>
</template>

<style lang="scss">
.total-view{
  height: 100%;
  width: 100%;
}
.scroll-view{
  margin-top: 80px;
}
.h-view{
  min-height: calc(100vh - 280px - 80px);
}
.h-footer{
  min-height: 280px;
}
</style>