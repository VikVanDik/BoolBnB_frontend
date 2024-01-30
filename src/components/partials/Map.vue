<script>
import {onMounted, onUpdated, reactive, ref } from 'vue'
export default {
  name:'Map',
  props: {
    latitude:String,
    longitude:String,
  },

  setup() {
         const mapRef = ref(null)
 
         onMounted(() => {
            
             const tt = window.tt;
             const focus = { lat:"41.1111111", lng:"41.2222222" }
 
             var map = tt.map({
                 key: 'mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX',
                 container: mapRef.value,
                 center: focus,
                 zoom: 15
             })
 
             map.addControl(new tt.FullscreenControl()); 
             map.addControl(new tt.NavigationControl()); 
 
             window.map = map
 
             // insertLocs(map)
        })
    
        return {
            mapRef
        }
    },


  data() {
    return{
     
   }

  },


}
</script>


<template>
  <h1 > {{ latitude + ' ' + longitude}}</h1>
  <div ref="mapRef" id="map"></div>
</template>


<style lang="scss" scoped>
 #map {
  position: relative;
  overflow: visible;
 }

</style>