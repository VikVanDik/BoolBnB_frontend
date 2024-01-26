<script>
import axios from 'axios';
import {store} from '../data/store';
import Card from '../components/partials/Card.vue';

export default {
  name:'AdvancedSearch',
  components:{
    Card,
  },
  data(){
    return {
      store,
      servicesClick : [],
      rooms:1,
      beds:1
    }
  },
  methods:{

    getPhoto(){   
      return 'http://127.0.0.1:8000/storage/icons/';
    },

    getServices(apiUrl){
      axios.get(apiUrl)
        .then(results => {
          store.services = results.data;
        })
      
    },
    getSelectionServices(id){
      console.log(id);
      if(this.servicesClick.includes(id) ){
        this.servicesClick.splice(this.servicesClick.indexOf(id),1);
      }else{
        this.servicesClick.push(id);
      }
      this.getAdvancedSearch();
    
    },

    // getRadiuskm(){
    //   lastKm = 0;
    //   setInterval(function myTimer(){
    //     this.getAdvancedSearch();
    //   }, 1000)
    // },

    getAdvancedSearch(){
      let params = {
        radius: store.radius,
        address: store.toSearch,
        services: this.servicesClick,
        rooms:this.rooms,
        beds:this.beds
      };
      axios.get(store.apiUrl + 'advanced-search',{ params })
        .then(results => {
          console.log(results.data);
          store.foundApartments = results.data;
        })
    }
  },
  mounted(){

    let slider = document.getElementById("km");
    let output = document.getElementById("label-km");
    console.log(slider);
    console.log(output);
    output.innerHTML = slider.value + 'Km'

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value + 'Km';
    }
    this.getServices(store.apiUrl + 'services');
  }
}
</script>

<template>
    <div class="container bg-img pt-2">  
      <!-- Indirizzo e chilometri -->
      <!-- indirizzo -->
      <div class="d-flex row mb-3">
        <span class="fw-bold mb-1">Inserisci indirizzo</span>
        <div class="col-11 fw-bold">
          <input 
            type="text" 
            class="form-control" 
            id="formGroupExampleInput" 
            v-model="store.toSearch"
            @keyup.enter="getAdvancedSearch()"/>
        </div>

        <!-- Button trigger offcanvas filter -->
          <div class="btn btn-success col-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <i class="fa-solid fa-filter me-2"></i>
            <span>Filtri</span>
          </div>
  
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Filtri</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body">
              <!-- select KM -->
              <div class="fw-bold my-2 w-100">
                <div>
                  <i class="fa-solid fa-car-side me-3"></i>
                  Distanza <label class="mb-1 ms-2 float-end" id="label-km">km</label>  
                </div>
                <input type="range" value="15" id="km" name="km" v-model="store.radius" @change="getAdvancedSearch()" min="1" max="30">
              </div> 
                <!-- /select KM -->
  
                <!-- select room -->
              <div class="fw-bold my-2">
                <i class="fa-solid fa-door-closed me-3"></i>
                <label>Seleziona numero di stanze</label>
                <select @change="getAdvancedSearch()" v-model="this.rooms" class="form-select " aria-label="Default select example">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6+</option>
                </select>
                <!-- /select room -->
  
                <!-- select bed -->             
                <div class="fw-bold my-2">
                  <i class="fa-solid fa-bed me-3"></i>
                  <label>Seleziona numero di letti</label>
                  <select @change="getAdvancedSearch()" v-model="this.beds" class="form-select " aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6+</option>
                  </select>
                </div>
                <!-- /select bed -->             
                
                <!-- Servizi -->
                <div class="mb-5">
                  <fieldset class="checkbox-group">
                    <legend class="checkbox-group-legend">Choose your favorites</legend>
                    <div v-for="service in store.services" :key="service.id" class="checkbox">
                      <label class="checkbox-wrapper">
                        <input type="checkbox" class="checkbox-input" 
                        :name="service.id"
                        :id="service.id"
                        :value="service.id"
                        @click="getSelectionServices(service.id)"/>
                        <span class="checkbox-tile" :class="service.name.length > 11 ? 'scroll-container' : ''">
                          <span class="checkbox-icon">
                            <img :src="service.icon" class="mini-img" alt="">
                          </span>
                          <span class="checkbox-label" :class="service.name.length > 11 ? 'scroll-text' : ''">{{service.name}}</span>
                        </span>
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
      </div>
    
      <div class="mt-5 " :class="Object.keys(store.foundApartments).length > 0? '': 'containter-card-searched'">
        <h1 class="text-center">{{Object.keys(store.foundApartments).length > 0  ? "Appartamenti trovati: "+ Object.keys(store.foundApartments).length  : 'Nessun appartamento trovato'}}</h1>
        
          <div class="d-flex py-3 flex-wrap justify-content-center" >
            <Card v-for="apartment in store.foundApartments" :key="apartment.id" :apartment="apartment"/>
          </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .containter-card-searched{
    height: 400px;
  }

  .bg-img{
    background-image: url();
  }

  #km{
    width: 100%;
  }

  .debug{
    border: 1px solid red;
    background-color: rgba(255, 0, 0, 0.425);
  }

  // STILE TESTO SCORREVOLE

  .scroll-container {
  border: 3px solid black;
  border-radius: 5px;
  overflow: hidden;
}

.scroll-text {
  width: 100px;
  -moz-transform: translateX(80%);
  -webkit-transform: translateX(80%);
  transform: translateX(80%);
  
  -moz-animation: my-animation 5s linear infinite;
  -webkit-animation: my-animation 5s linear infinite;
  animation: my-animation 5s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from { -moz-transform: translateX(85%); }
  to { -moz-transform: translateX(-85%); }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from { -webkit-transform: translateX(85%); }
  to { -webkit-transform: translateX(-85%); }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(85%);
    -webkit-transform: translateX(85%);
    transform: translateX(85%);
  }
  to {
    -moz-transform: translateX(-85%);
    -webkit-transform: translateX(-85%);
    transform: translateX(-85%);
  }
}

  /* STILE MINICARDS SERVIZI */

  .mini-img {
    width: 60%;
  }

  .checkbox-group {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	max-width: 600px;
	user-select: none;
	& > * {
		margin: .5rem 0.5rem;
	}
}



.checkbox-group-legend {
	font-size: 1.5rem;
	font-weight: 700;
	color: #9c9c9c;
	text-align: center;
	line-height: 1.125;
	margin-bottom: 1.25rem;
}

.checkbox-input {
	// Code to hide the input
	clip: rect(0 0 0 0);
	clip-path: inset(100%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;

	&:checked + .checkbox-tile {
		border-color: #2260ff;
		box-shadow: 0 5px 10px rgba(#000, 0.1);
		color: #2260ff;
		&:before {
			transform: scale(1);
			opacity: 1;
			background-color: #2260ff;
			border-color: #2260ff;
		}
		
		.checkbox-icon, .checkbox-label {
			color: #2260ff;
		}
	}
	
	&:focus + .checkbox-tile {
		border-color: #2260ff;
		box-shadow: 0 5px 10px rgba(#000, 0.1), 0 0 0 4px #b5c9fc;
		&:before {
			transform: scale(1);
			opacity: 1;
		}
	}
}

.checkbox-tile {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80px;
	height: 80px;
	border-radius: 0.5rem;
	border: 2px solid #b5bfd9;
	background-color: #fff;
	box-shadow: 0 5px 10px rgba(#000, 0.1);
	transition: 0.15s ease;
	cursor: pointer;
	position: relative;

	&:before {
		content: "";
		position: absolute;
		display: block;
		width: 1.25rem;
		height: 1.25rem;
		border: 2px solid #b5bfd9;
		background-color: #fff;
		border-radius: 50%;
		top: 0.25rem;
		left: 0.25rem;
		opacity: 0;
		transform: scale(0);
		transition: 0.25s ease;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='192' height='192' fill='%23FFFFFF' viewBox='0 0 256 256'%3E%3Crect width='256' height='256' fill='none'%3E%3C/rect%3E%3Cpolyline points='216 72.005 104 184 48 128.005' fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='32'%3E%3C/polyline%3E%3C/svg%3E");
		background-size: 12px;
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}

	&:hover {
		border-color: #2260ff;
		&:before {
			transform: scale(1);
			opacity: 1;
		}
	}
}

.checkbox-icon {
	transition: .375s ease;
	color: #494949;
	img {
		width: 3rem;
		height: 3rem;
	}
}

.checkbox-label {
	color: #707070;
	transition: .375s ease;
	text-align: center;
  font-size: 11px;
}


</style>