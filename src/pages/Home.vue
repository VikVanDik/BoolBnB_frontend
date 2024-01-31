<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';
import Card from '../components/partials/Card.vue';
import AutoComplete from '../components/partials/AutoComplete.vue';
import { router } from '../router/index';

export default {
  name: 'Home',
  components: {
    Card,
    Loader,
    AutoComplete
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
      store.isLoading = false;
      axios.get(apiUrl)
        .then(results => {
          store.isLoading = true;
          console.log(results.data);
          store.apartments = results.data;
        });
    },

    sendAddress(address) {
        store.isLoading = false;

      axios.post(store.apiUrl + 'research/' + address)
        .then(results => {
          store.isLoading = true;
          console.log(results.data);
          store.foundApartments = results.data;
          store.autocomplete = [];
          this.$router.replace({ path: '/advanced-search' });
          store.isLoading = false;
        });
    },

    truncateString(str, length = 105) {
      if (typeof str !== "string" || typeof length !== "number") return str
      return str.length > length ? str.substring(0, length - 1) + "..." : str
    },



    autocomplete(toSearch) {
      store.autocomplete = [];
      axios.get(`https://api.tomtom.com/search/2/search/${toSearch}.json?key=mqY8yECF75lXPuk7LVSI3bFjFtyEAbEX&language=it-IT&idxSets=Str&countrySet=IT&typeahead=true`)
        .then(results => {
          store.autocomplete = results.data.results;
          console.log(store.autocomplete);
        });
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
        this.show = false;
        
      }, 0);
    },
    
  },

  created() {
  },

  mounted() {

    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }

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
      <div class="container d-flex justify-content-center ">
        <form @submit.prevent="sendAddress(store.toSearch)" class="form-inline row w-75 ">
          <div class="d-flex col-10 p-0 position-relative">
            <input 
            class="form-control w-100"
            type="search" 
            placeholder="Cerca destinazione"
            v-model="store.toSearch"
            @keyup="autocomplete(store.toSearch)"
            required>
            <AutoComplete class="autocomplete"/>
          </div>
          <div class="col-2 px-1">
            <button type="submit"
            class="btn btn-primary d-flex justify-content-center align-items-center ">
              <span class="d-none d-md-block"> cerca</span>
              <i class="fa-solid fa-magnifying-glass d-block d-md-none"></i>
            </button>

          </div>
          
        </form>
      </div>
    </div>

    <!-- appartamenti sponsorizzati -->
    <div class="container p-5"> 
        <h2 id="sponsor-title" class="text-center">Appartamenti in evidenza</h2>
        <div class="d-flex w-100 flex-wrap justify-content-center">
          <div class="position-relative">
            <ul class='slider'>
              <li v-for="(apartment, index) in store.apartments" :key="apartment.id" class='item' :style="{ backgroundImage: 'url(' + apartment.img + ')' }" v-show="($data.show)? index < 4 : 'index'">

                <div class='content pe-3'>
                  <h2 class='title'>{{apartment.title}}</h2>
                  <p class='description' v-html="truncateString(apartment.description)"></p>
                  <a :href="'get-apartment/' +  apartment.slug">
                    <button>
                      Vai all'appartamento
                    </button>
                  </a>
                  <div class="p-1 box-sha fs-6 d-block">
                    <i class="fa-solid fa-door-closed me-1"></i> {{ apartment.room_number }}
                    <i class="fa-solid fa-bed me-1"></i>{{ apartment.bed_number }}
                  </div>
                </div>
              </li>
            </ul>

            <nav class='nav position-absolute'>
              <ion-icon class='btn-slider prev' name="arrow-back-outline"><i class="fa-solid fa-arrow-left prev"></i></ion-icon>
              <ion-icon class='btn-slider next' name="arrow-forward-outline"><i class="fa-solid fa-arrow-right next"></i></ion-icon>
            </nav>
          </div>
          <!-- <Card v-for="apartment in store.apartments" :key="apartment.id" :apartment="apartment"/> -->
        </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.autocomplete{
  padding: 0;
  top:51px;
}

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

  .fa-solid{
    padding: 3px;
  }

  .results{

    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.309);
    border-radius: 10px;
    z-index: 500;
    .autocomplete{
      &:hover{
        background-color: aqua;
        cursor: pointer;
      }
    }
  }
}
// STILE SLIDE

.slider {
  position: relative;
  height: 50vh;
  width: 60vw;
  border-radius: 10px;
  overflow: hidden;
}
.item {
  width: 140px;
  height: 250px;
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

  &:nth-child(3) { left: 60%; }
  &:nth-child(4) { left: calc(50% + 250px); }
  &:nth-child(5) { left: calc(50% + 440px); }
  &:nth-child(6) { left: calc(50% + 660px); opacity: 0; }
}

.content {
  width: min(50%,400px);
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  font: 400 0.85rem helvetica,sans-serif;
  color: white;
  text-shadow: 0 3px 8px rgb(0, 0, 0);
  opacity: 0.2;
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
    background-color: rgba(0, 0, 0, 0.473);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.342);
    border-radius: 0.25rem;
    padding: 0.75rem;
    cursor: pointer;
    &:hover{
      background-color: rgba(146, 146, 146, 0.658);
      color: rgb(0, 0, 0);
    }
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
  bottom: 20px;
  transform: translateX(-50%);
  z-index: 5;
  user-select: none;

  & .btn-slider {
    background-color: rgba(255,255,255,0.5);
    display: block;
    color: rgba(0,0,0,0.7);
    border: 2px solid rgba(0,0,0,0.6);
    margin: 0.5px;
    padding:0.75px;
    cursor: pointer;

    &:hover {
      background-color: rgba(145, 145, 145, 0.329);
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
      width: 120px;
      height: 220px;
  
      &:nth-child(3) { left: 60%; }
      &:nth-child(4) { left: calc(50% + 170px); }
      &:nth-child(5) { left: calc(50% + 340px); }
      &:nth-child(6) { left: calc(50% + 510px); opacity: 0; }
    }
}
@media (width < 650px) {

    .content {

      & .title        { font-size: 1rem; }
      & .description  { font-size: 0.75rem; }
      & button        { font-size: 0.8rem; }
    }
    .item {
      width: 90px;
      height: 200px;
  
      &:nth-child(3) { left: 69%; }
      &:nth-child(4) { left: calc(50% + 170px); }
      &:nth-child(5) { left: calc(50% + 200px); }
      &:nth-child(6) { left: calc(50% + 400px); opacity: 0; }
    }
}
</style>