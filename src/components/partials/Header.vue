<script>
export default{
  name: 'Header',
}

</script>

<template>
<header class="d-flex align-items-center justify-content-between px-4 fixed-top ">
  
  <!-- logo -->
  <router-link class="fs-5 router mx-2" :to="{name: 'home'}">
    <div class="logo d-flex justify-center align-items-center">
      <img src="@/img/logo.png" alt="logo">
      <span class="ms-1 text-white">Boolbnb</span>
    </div>
  </router-link>
  
  <div class="d-md-none">
    <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <i class="fa-solid fa-bars text-white"></i>
    </button>

    <div class="offcanvas offcanvas-end w-50" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style="background-color: #4b82c0;">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-white" id="offcanvasRightLabel">BoolMenu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul>
          <li>
            <router-link class="fs-3 text-white" :to="{name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link class="fs-3 text-white" :to="{name: 'infoBoolbnb'}">Chi siamo</router-link>
          </li>
          <li>
            <router-link class="fs-3 text-white" :to="{name: 'contacts'}">Contatti</router-link>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- menu -->
  <div class="d-flex justify-content-center align-items-center d-none d-md-block">
    <ul class="d-flex">
      <li>
        <router-link class="fs-5 text-white mx-2" :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link class="fs-5 text-white mx-2" :to="{name: 'infoBoolbnb'}">Chi siamo</router-link>
      </li>
      <li>
        <router-link class="fs-5 text-white mx-2" :to="{name: 'contacts'}">Contatti</router-link>
      </li>
    </ul>
  </div>
  
  <!-- section to register profile and login -->
  <div class="profile d-none d-md-block">
    <ul class="d-flex justify-content-end h-100 align-items-center">
      <li class="text-center pe-2">
        <a href="http://127.0.0.1:8000/login" target="_blank">
          <i class="fa-solid fa-right-to-bracket fa-lg text-white"></i>
          <p class=" m-0 fs-6 text-white">Accedi</p>
        </a>
      </li>
      <li class="text-center">
        <a href="http://127.0.0.1:8000/register" target="_blank">
          <i class="fa-solid fa-pen-to-square fa-lg text-white"></i>
          <p class=" m-0 fs-6 text-white">Registrati</p>
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
    background-color: #4b82c0;

    .router {
      text-decoration: none;
    }
    .logo, .menu, .profile{
      width: 170px;
      height: 100%;
    }
    img{
      height: 60px;
    }
    span{
      font-size: 30px;
      font-weight: bold;
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
            border-bottom: 3px solid rgb(169, 230, 248);
          }
        
        }
      }
    }
  }
</style>