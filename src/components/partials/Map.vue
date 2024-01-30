<script>
import {onMounted, onUpdated, reactive, ref } from 'vue';
import {store} from "../../data/store.js";

export default {
  name:'Map',
  data(){
    return {
      store,
    }
  },
  props: {
    latitude:String,
    longitude:String,
  },


  setup() {
         const mapRef = ref(null)
 
         onUpdated(() => {
            
             const tt = window.tt;
             const focus = { lat:store.lat, lng:store.lon }
             
 
             var map = tt.map({
                 key: 'mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX',
                 container: mapRef.value,
                 center: focus, 
                 zoom: 15
             })
 
             map.addControl(new tt.FullscreenControl()); 
             map.addControl(new tt.NavigationControl()); 
             var marker = new tt.Marker().setLngLat(focus).addTo(map); 
              window.map = map
              
 
             // insertLocs(map)
        })
    
        return {
            mapRef
        }
    }
  }
</script>


<template>
  <div ref="mapRef" id="map"></div>
</template>


<style lang="scss" scoped>
 #map {
  position: relative;
  overflow: visible;
 }

</style>