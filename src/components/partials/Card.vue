<script>
export default {
  name: "Card",
  props: {
    apartment:Object,
  },
}
</script>

<template>

<li class="booking-card" v-bind:style="{ backgroundImage: 'url(' + apartment.img + ')' }">
    <div class="book-container">
      <div class="content">
        <router-link class="btn" :to="{name:'ApartmentDetails',params:{slug:apartment.slug}}">
          Info
        </router-link>
      </div>
    </div>
    <div class="informations-container">
      <h2 class="title">{{apartment.title}}</h2>
      <p class="sub-title">{{ apartment.address }}</p>
      <div v-if="!apartment.distance">
      </div>

      <div v-else>

        <div class="card-subtitle text-secondary" v-if = "apartment.distance > 1" >
          <i class="fa-solid fa-map-location-dot text-primary"></i>
          <span class="ps-2"> {{ parseFloat(apartment.distance).toFixed(2) }} km</span>
        </div>
  
        <div class=" card-subtitle text-secondary" v-else>
          <i class="fa-solid fa-location-dot text-danger"></i>
          <span class="ps-2">A meno di 1 km</span>
        </div>

      </div>
      <div class="more-information">
        <div class="info-and-date-container">
          <div class="box info">
            <span class="me-2">
              <i class="fa-solid fa-door-closed me-1"></i>{{apartment.room_number }}
              
            </span>
          </div>
          <div class="box date">
            <span>
              <i class="fa-solid fa-bed me-1"></i>{{apartment.bed_number }}
            </span>
          </div>
        </div>
        <p class='disclaimer' v-html="apartment.description"></p>
        </div>
    </div>
  </li>

  <!-- <div class="card w-25 m-3">
    <div class="card-img w-100 overflow-hidden" style="height: 200px;">
      <img :src="apartment.img" class="w-100" :alt="apartment.title">
    </div>
    <div class="card-body">
      <div class="card-title">
        <h4>{{apartment.title}}</h4>
      </div>
      <div class="card-subtitle text-secondary">
        <span>{{ apartment.address }}.</span>
      </div>

      <div v-if="!apartment.distance">
      </div>

      <div v-else>

        <div class="card-subtitle text-secondary" v-if = "apartment.distance > 1" >
          <i class="fa-solid fa-map-location-dot text-primary"></i>
          <span class="ps-2"> {{ parseFloat(apartment.distance).toFixed(2) }} km</span>
        </div>
  
        <div class=" card-subtitle text-secondary" v-else>
          <i class="fa-solid fa-location-dot text-danger"></i>
          <span class="ps-2">A meno di 1 km</span>
        </div>

      </div>

      <div class="card-text">
        <p v-html="apartment.description"></p>
      </div>
      <div class="card-text">
        <span class="me-2">
          <i class="fa-solid fa-door-closed me-1"></i>{{apartment.room_number }}

        </span>
        <span>
          <i class="fa-solid fa-bed me-1"></i>{{apartment.bed_number }}
        </span>
        <span>
          <i class="fa-solid fa-bed me-1"></i>{{apartment.end_date }}
        </span>
      </div>

        <router-link class="btn btn-primary" :to="{name:'ApartmentDetails',params:{slug:apartment.slug}}">
          Info
        </router-link>
    </div>
  </div> -->
</template>


<style lang="scss" scoped>

$font : 'Sofia', sans-serif;
$font-size:16px;
$blue : #0a4870;
$blue2 : #e3ebf1;
$black: #000;
$grey : #7d7d7d;
$grey2 : #f0f0f0;
$grey3 : #e8e7e7;
$grey4 : #fdfdfd;
$bluegrey : #49606e;
$orange: #ec992c;

@mixin radius($val) {
  -webkit-border-radius: $val;
  -moz-border-radius: $val;
  border-radius: $val;
}

@mixin cardsOpen() {
    &::before {
      background: rgba(10,72,112, 0.6);
    }
    .book-container {
      .content {
        opacity: 1;

        transform: translateY(0px);
      }
    }

    .informations-container {      
      transform: translateY(0px);
      .more-information {
        opacity: 1;
      }
    }
}



  .booking-card{
    position: relative;
    width: 300px;
    display: flex;
    flex: 0 0 300px;
    flex-direction: column;
    
    margin: 20px;
    margin-bottom: 30px;
    @include radius(10px);
    
    overflow: hidden;
    
    background-position: center center;
    background-size: cover;
    
    text-align: center;
    color: $blue;
    
    transition: .3s;
    
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      
      background: rgba(10,72,112, 0);
      
      transition: .3s;
    }
    
    .book-container {
      height: 200px;
      .content {
        position: relative;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        
        transform: translateY(-200px);
        
        transition: .3s;
        
        .btn {      
          border: 3px solid white;
          padding: 10px 15px;
          
          background: none;
          
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.3em;
          color: white;
          
          cursor: pointer;
          
          transition: .3s;
          
          &:hover {
            background: white;
            
            border: 0px solid white;
            
            color: $blue;
          }
        }
      }
    }
    
    .informations-container{      
      flex: 1 0 auto;
      
      padding: 20px;
      
      background: $grey2;
      
      transform: translateY(206px);
      
      transition: .3s;
      
      .title {
        position: relative;
        
        padding-bottom: 10px;
        margin-bottom: 10px;
        
        font-weight: bold;
        font-size: 1.2em;
        
        &::after{
          content: '';
          
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          
          height: 3px;
          width: 50px;
          
          margin: auto;
          
          background: $blue;
        }
      }
      
      .price {
        display: flex;
        align-items: center;
        justify-content: center;
        
        margin-top: 10px;
        
        .icon {
          margin-right: 10px;
        }
      }
      
      .more-information {
        opacity: 0;
        
        transition: .3s;
        .info-and-date-container {
          display: flex;

          .box {
            flex: 1 0;

            padding: 15px;
            margin-top: 20px;
            @include radius(10px);

            background: white;

            font-weight: bold;
            font-size: 0.9em;

            .icon {
              margin-bottom: 5px;
            }

            &.info{
              color: $orange;

              margin-right: 10px;
            }
          }
        }
        .disclaimer {
          margin-top: 20px;

          font-size: 0.8em;
          color: $grey;
        }
      }
    }
    
    &:hover {
      @include cardsOpen();
    }
  }


@media (max-width: 768px) {
  ul {
    .booking-card{
      @include cardsOpen();
    }
  }
}

.credits{
  display: table;
  background: $blue;
  color: white;
  line-height: 25px;
  
  margin: 10px auto;
  padding: 20px;
  
  @include radius(10px);
  
  text-align: center;
  
  a{
    color: $blue2;
  }
}

h1{
  margin: 10px 20px;
}

</style>