<script>
export default{
  name: 'Header',
}

</script>

<template>
<header class="d-flex align-items-center justify-content-between px-4">
  
  <!-- logo -->
  <div class="logo d-flex justify-content-center align-items-center">
    <img src="@/img/logo.png" alt="">
    <span>Boolbnb</span>
  </div>
  
  <!-- menu -->
  <div class="menu d-flex justify-content-center align-items-center">
    <ul class="d-flex">
      <li>
        <router-link class="fs-5" :to="{name: 'home'}">Home</router-link>
      </li>
    </ul>
  </div>
  
  <!-- button -->
  <div class="d-flex justify-content-between align-items-center">

    <ul class="d-flex justify-content-between align-items-center">
      <li class="text-center pe-2">
        <a href="http://127.0.0.1:8000/login" target="_blank">
          <i class="fa-solid fa-right-to-bracket fa-lg"></i>
          <p class=" m-0 fs-6">Accedi</p>
        </a>
      </li>
      <li class="text-center">
        <a href="http://127.0.0.1:8000/register" target="_blank">
          <i class="fa-solid fa-pen-to-square fa-lg"></i>
          <p class=" m-0 fs-6">Registrati</p>
        </a>
      </li>
      
    </ul>
  </div>
  
</header>


</template>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 80px;
    background-color: #d5c7bc;

    .logo, .menu, .buttons{
      width: 150px;
      height: 100%;
    }
    img{
      width: 70px;
    }
    span{
      font-size: 30px;
      font-weight: bold;
      color: black;
    }
    ul{
      list-style: none;
      margin-bottom: 0px;
      padding-left: 0px;
      li{
        color: black;
        a{
          text-decoration: none;
          color: black; 
          width: 50px;
          &.active{
            border-bottom: 3px solid rgb(37, 143, 175);
          }
        
        }
      }
    }
  }
</style>