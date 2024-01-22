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
  <RouterView />
</template>

<style lang="scss">

</style>