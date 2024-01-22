<script>
export default{
  name: 'Header',
}

</script>

<template>
<header class="d-flex align-items-center justify-content-between fixed-top">
  
  <!-- logo -->
  <div class="logo d-flex justify-content-center align-items-center">
    <img src="@/img/logo.png" alt="">
    <span>Boolbnb</span>
  </div>
  
  <!-- menu -->
  <div class="menu d-flex justify-content-center align-items-center">
    <ul class="d-flex">
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
    </ul>
  </div>
  
  <!-- button -->
  <div class="buttons d-flex justify-content-center align-items-center">
    <ul class="d-flex justify-content-between">
      <li>
        <a href="http://127.0.0.1:8000/login" target="_blank"><i class="fa-solid fa-right-to-bracket fa-lg"></i></a>
      </li>
      <li>
        <a href="http://127.0.0.1:8000/register" target="_blank"><i class="fa-solid fa-pen-to-square fa-lg"></i></a>
      </li>
    </ul>
  </div>
  
</header>


</template>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: 80px;
    background-color: #efe9e2;

    .logo, .menu, .buttons{
      width: 200px;
      height:100%;
    }
    img{
      width: 80px;
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
        padding-left: 15px;
        a{
          text-decoration: none;
          color: black; 
          width: 50px;
          &.active{
            border-bottom: 3px solid white;
          }
        }
      }
    }
  }
</style>