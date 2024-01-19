<script>
export default{
  name: 'Header',
}

</script>

<template>
<header>
  <nav class="d-flex justify-content-between ">
    <ul class="d-flex">
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
    </ul>
    <ul class="d-flex">
      <li>
        <a href="http://127.0.0.1:8000/login" target="_blank">Accedi</a>
      </li>
      <li>
        <a href="http://127.0.0.1:8000/register" target="_blank">Registrati</a>
      </li>
    </ul>
  </nav>
</header>


</template>

<style lang="scss" scoped>
  header{
    position: fixed;
    width: 100%;
    background-color: #EC8F5E;
    z-index: 999;
    border-bottom: 1px solid #F1EB90;
    ul{
      list-style: none;
      li{
        padding: 10px;
        a{
          text-decoration: none;
          color: #F1EB90; 
          &:hover{
            border-bottom: 1px solid #F1EB90;
          }
          &.active{
            border-bottom: 3px solid white;
            color: white; 
          }
        }
      }
    }
  }
</style>