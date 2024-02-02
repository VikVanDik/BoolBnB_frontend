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
    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
      <i class="fa-solid fa-bars text-white"></i>
    </button>


    <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style="background-color: #4b82c0;">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title text-white" id="offcanvasTopLabel">BoolMenu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <ul class="w-100">
          <li class="d-flex align-items-center">
            <div class="w-custom">
              <i class="fa-solid fa-house me-3 fs-3 text-white"></i>
            </div>
            <router-link class="fs-3 text-white" :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="d-flex align-items-center">
            <div class="w-custom">
              <i class="fa-solid fa-circle-question me-3 fs-3 text-white"></i>
            </div>
            <router-link class="fs-3 text-white" :to="{name: 'infoBoolbnb'}">Chi siamo</router-link>
          </li>
          <li class="d-flex align-items-center">
            <div class="w-custom">
              <i class="fa-solid fa-address-card me-3 fs-3 text-white"></i>
            </div>
            <router-link class="fs-3 text-white" :to="{name: 'contacts'}">Contatti</router-link>
          </li>
          
        </ul>
        <div class="d-flex mt-4 pt-2 fs-6 float-end">
          <a class="text-decoration-none" href="http://127.0.0.1:8000/login">
            <i class="fa-solid fa-right-to-bracket fa-lg text-white"></i>
            <span class=" m-1 fs-6 text-white"> Accedi</span>
          </a>
          <a class="ps-3 text-decoration-none" href="http://127.0.0.1:8000/register">
            <i class="fa-solid fa-pen-to-square fa-lg text-white"></i>
            <span class=" m-1 fs-6 text-white">Registrati</span>
          </a>
        </div>
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
        <a href="http://127.0.0.1:8000/login">
          <i class="fa-solid fa-right-to-bracket fa-lg text-white"></i>
          <p class=" m-0 fs-6 text-white">Accedi</p>
        </a>
      </li>
      <li class="text-center">
        <a href="http://127.0.0.1:8000/register">
          <i class="fa-solid fa-pen-to-square fa-lg text-white"></i>
          <p class=" m-0 fs-6 text-white">Registrati</p>
        </a>
      </li>
    </ul>
  </div>
</header>
</template>

<style lang="scss" scoped>

  .w-custom{
    width: 40px;
  }
  header{
    width: 100%;
    height: 80px;
    background-color: #4b82c0;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.384);

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
          &.active{
            border-bottom: 3px solid rgb(169, 230, 248);
          }
        
        }
      }
    }
  }
</style>