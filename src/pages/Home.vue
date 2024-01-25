<script>
import axios from 'axios';
import { store } from '../data/store';

import Card from '../components/partials/Card.vue';
import { router } from '../router/index';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      store,
      router,
      show: true,
    };
  },
  methods: {
    getApi(apiUrl) {
      store.toSearch = '';
      axios.get(apiUrl)
        .then(results => {
          console.log(results.data);
          store.apartments = results.data;
        });
    },

    sendAddress(address) {
      axios.post(store.apiUrl + 'research/' + address)
        .then(results => {
          console.log(results.data);
          store.foundApartments = results.data;
          store.autocomplete = [];
          this.$router.replace({ path: '/advanced-search' });
        });
    },

    autocomplete(toSearch) {
      store.autocomplete = [];
      axios.get(`https://api.tomtom.com/search/2/search/${toSearch}.json?key=mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX&language=it-IT&idxSets=Str&countrySet=IT&typeahead=true`)
        .then(results => {
          store.autocomplete = results.data.results;
          console.log(store.autocomplete);
        });
    },
    
    emptyAutocomplete(value) {
      store.toSearch = value;
      store.autocomplete = [];
    },
    
    dNoneTime() {
      let timeout;
      const slider = document.querySelector('.slider');
      const items = document.querySelectorAll('.item');
      const firstItem = slider.firstElementChild;
      const secondItem = firstItem.nextElementSibling;
      const thirdItem = secondItem.nextElementSibling;
      const fourthItem = thirdItem.nextElementSibling;
      const fifthItem = fourthItem.nextElementSibling;
      
      
      timeout = setTimeout(() => {
        for (let i = 0; i < items.length; ++i) {
          items[i].classList.add('d-none');
        }
        firstItem.classList.remove('d-none');             
        secondItem.classList.remove('d-none');
        thirdItem.classList.remove('d-none');
        fourthItem.classList.remove('d-none');
        fifthItem.classList.remove('d-none');
        this.show = false;
        
      }, 0);
    },
    
  },

  created() {
  },

  mounted() {
    this.getApi(store.apiUrl + 'apartments');
    
    const slider = document.querySelector('.slider');
    
    const activate = (e) => {
      const items = document.querySelectorAll('.item');
    
      if (e.target.matches('.next')) {
        slider.append(items[0]);
        this.dNoneTime();
      }
      
      if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
        this.dNoneTime();
      }
      
    };
    document.addEventListener('click', activate, false);
  },
  
  
};
</script>

<template onload="dNoneTime()">
  <div class="main-cn">
    <!-- sfondo -->
    <div class="bg-container d-flex flex-column justify-content-center">
      <div class="title-container">
        <h1>Boolbnb</h1>
      </div>

    <!-- barra di ricerca -->
      <div class="container d-flex justify-content-center position-relative">
        <form @submit.prevent="sendAddress(store.toSearch)" class="form-inline row w-50">
          <div class="d-flex col-11">
            <input 
            class="form-control"
            type="search" 
            placeholder="Cerca destinazione"
            v-model="store.toSearch"
            @keyup="autocomplete(store.toSearch)"
            required>
          </div>
          <div class="col-1">
            <button type="submit"
            class="btn btn-primary">
              cerca
            </button>
          </div>
          <div v-if="store.autocomplete.length > 0" class="results position-absolute">
            <p class="list-style-none autocomplete p-1" @click="emptyAutocomplete(result.address.freeformAddress)" v-for="(result,index) in store.autocomplete" :key="result+index">{{ result.address.freeformAddress }}</p>
          </div>
        </form>
      </div>
    </div>

    <!-- appartamenti sponsorizzati -->
    <div class="container h-500-px p-5">
        <h2 id="sponsor-title" class="text-center">Appartamenti Sponsorizzati</h2>
        <div class="d-flex w-100 flex-wrap justify-content-center">

          <div class="position-relative">

            <ul class='slider'>

                <li v-for="(apartment, index) in store.apartments" class='item' v-bind:style="{ backgroundImage: 'url(' + apartment.img + ')' }" v-show="($data.show)? index < 5 : 'index'">
                  <div class='content'>
                    <h2 class='title'>{{apartment.title}}</h2>
                    <p class='description' v-html="apartment.description"></p>
                    <a :href="'get-apartment/' +  apartment.slug">
                      <button>
                        Vai all'appartamento
                      </button>
                    </a>
                    <span class="p-1 box-sha fs-6"><i class="fa-solid fa-door-closed me-1"></i> {{ apartment.room_number }}</span>
                    <span class="p-1 box-sha fs-6"><i class="fa-solid fa-bed me-1"></i>{{ apartment.bed_number }}</span>
                  </div>
              </li>
            </ul>
            <nav class='nav position-absolute'>
              <ion-icon class='btn prev ' name="arrow-back-outline"></ion-icon>
              <ion-icon class='btn next ' name="arrow-forward-outline"></ion-icon>
            </nav>
          </div>
          <!-- <Card v-for="apartment in store.apartments" :key="apartment.id" :apartment="apartment"/> -->
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>



.main-cn{
  background-color: #fcfffd ;
  .bg-container{
    width: 100%;
    height: 700px;
    background-image: url(../img/sfondo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding-bottom: 20px;

    .title-container{
      width: 100%;
      background-color: rgba(0, 255, 255, 0);
      text-align: center;
      margin-bottom: 20px;
    }

  }

  .box-sha {
    color: #4b82c0;
}  

  

  .results{
    margin: 40px 0 0 15px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.309);
    border-radius: 10px;
    width: 500px;
    z-index: 500;
    .autocomplete{
      &:hover{
        background-color: aqua;
        cursor: pointer;
      }
    }

  }

}


.h-500-px {
  height: 500px;
}
// STILE SLIDER

.btn-pos {
  position: absolute;
}

.slider {
  position: relative;
  height: 400px;
  width: 1000px;
}
.item {
  width: 200px;
  height: 300px;
  list-style-type: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 20px 30px rgba(255,255,255,0.3) inset;
  transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;

  &:nth-child(1), &:nth-child(2) {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    border-radius: 0;
    box-shadow: none;
    opacity: 1;
  }

  &:nth-child(3) { left: 50%; }
  &:nth-child(4) { left: calc(50% + 220px); }
  &:nth-child(5) { left: calc(50% + 440px); }
  &:nth-child(6) { left: calc(50% + 660px); opacity: 0; }
}

.content {
  width: min(30vw,400px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  font: 400 0.85rem helvetica,sans-serif;
  color: white;
  text-shadow: 0 3px 8px rgba(0,0,0,0.5);
  opacity: 0;
  display: none;

  & .title {
    font-family: 'arial-black';
    text-transform: uppercase;
  }

  & .description {
    line-height: 1.7;
    margin: 1rem 0 1.5rem;
    font-size: 0.8rem;
  }

  & button {
    width: fit-content;
    background-color: rgba(0,0,0,0.1);
    color: white;
    border: 2px solid white;
    border-radius: 0.25rem;
    padding: 0.75rem;
    cursor: pointer;
  }
}

.item:nth-of-type(2) .content {
  display: block;
  animation: show 0.75s ease-in-out 0.3s forwards;
}

@keyframes show {
  0% {
    filter: blur(5px);
    transform: translateY(calc(-50% + 75px));
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
}

.nav {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  user-select: none;

  & .btn {
    background-color: rgba(255,255,255,0.5);
    color: rgba(0,0,0,0.7);
    border: 2px solid rgba(0,0,0,0.6);
    margin: 0 0.25rem;
    padding: 0.75rem;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(255,255,255,0.3);
    }
  }
}

@media (width > 650px) and (width < 900px) {
  .content {
    & .title        { font-size: 1rem; }
    & .description  { font-size: 0.7rem; }
    & button        { font-size: 0.7rem; }
  }
  .item {
    width: 160px;
    height: 270px;

    &:nth-child(3) { left: 50%; }
    &:nth-child(4) { left: calc(50% + 170px); }
    &:nth-child(5) { left: calc(50% + 340px); }
    &:nth-child(6) { left: calc(50% + 510px); opacity: 0; }
  }
}

@media (width < 650px) {
  .content {
    & .title        { font-size: 0.9rem; }
    & .description  { font-size: 0.65rem; }
    & button        { font-size: 0.7rem; }
  }
  .item {
    width: 130px;
    height: 220px;

    &:nth-child(3) { left: 50%; }
    &:nth-child(4) { left: calc(50% + 140px); }
    &:nth-child(5) { left: calc(50% + 280px); }
    &:nth-child(6) { left: calc(50% + 420px); opacity: 0; }
  }
}
</style>