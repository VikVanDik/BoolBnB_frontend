<script>

import Header from '@/components/partials/Header.vue';

export default{
  name: 'App',
  components: {
    Header
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
  <Header/>
  <div class="scroll-view overflow-auto ">
    <RouterView />
  </div>
</template>

<style lang="scss">
  .scroll-view{
    height: calc(100vh - 80px);

  }
</style>