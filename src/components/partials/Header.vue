<script>
export default{
  name: 'Header',
}

</script>

<template>
<header>
  <nav>
    <ul class="d-flex justify-content-center">
      <li>link falso</li>
      <li>link falso</li>
      <li>link falso</li>
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