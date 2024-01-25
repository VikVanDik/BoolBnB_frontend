<script>
export default {
  name:'InfoBoolbnb',
}
</script>


<template>
  <div class="bg-img">
    <div class="container py-5 text-white">
  
      <!-- section history -->
      <h2 class="text-center">Cosa è boolbnb</h2>
      <section class="d-flex justify-content-center align-items-center  section-info">
        <div class="img-container d-flex align-items-center justify-content-center me-3">
          <img src="../img/logo.png" alt="logo">
        </div>
        <div class="w-50">
          <p class="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptatibus ullam cum nihil voluptates magni culpa voluptatem ipsum nulla, quam amet similique et quas laudantium aliquam consequuntur iure doloribus? Quia libero blanditiis beatae ad eius est quisquam. Aliquam suscipit repellat voluptate? Sint veritatis impedit nisi aperiam quidem ad maiores, optio, dolor voluptates vel magnam obcaecati aliquid officia. Aliquam neque obcaecati odit perspiciatis eius dolore, dolorem doloremque aperiam alias delectus modi facere distinctio. Quis in asperiores minus voluptatum labore placeat voluptatibus, non, dolor maiores recusandae quas aspernatur nam quibusdam omnis cum, ea odio tenetur? Perferendis, sed adipisci ab nam ipsam excepturi a numquam praesentium ut porro! Velit quos sit omnis, accusamus quisquam neque dolor, alias illum ullam magnam quidem aperiam quas iusto laudantium exercitationem? Impedit enim deserunt delectus accusantium nemo, accusamus consectetur id exercitationem vel magni incidunt mollitia nam, reiciendis possimus repellendus similique maxime! Totam, magni tenetur consectetur dicta dolor ad!.</p>
        </div>
      </section>
  
      <!-- section team2 -->
        <h2 class="text-center my-4" >Da cosa nasce</h2>
      <section class="d-flex justify-content-center align-items-center section-info ">
        <div class="w-50">
          <p class=" m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptatibus ullam cum nihil voluptates magni culpa voluptatem ipsum nulla, quam amet similique et quas laudantium aliquam consequuntur iure doloribus? Quia libero blanditiis beatae ad eius est quisquam. Aliquam suscipit repellat voluptate? Sint veritatis impedit nisi aperiam quidem ad maiores, optio, dolor voluptates vel magnam obcaecati aliquid officia. Aliquam neque obcaecati odit perspiciatis eius dolore, dolorem doloremque aperiam alias delectus modi facere distinctio. Quis in asperiores minus voluptatum labore placeat voluptatibus, non, dolor maiores recusandae quas aspernatur nam quibusdam omnis cum, ea odio tenetur? Perferendis, sed adipisci ab nam ipsam excepturi a numquam praesentium ut porro! Velit quos sit omnis, accusamus quisquam neque dolor, alias illum ullam magnam quidem aperiam quas iusto laudantium exercitationem? Impedit enim deserunt delectus accusantium nemo, accusamus consectetur id exercitationem vel magni incidunt mollitia nam, reiciendis possimus repellendus similique maxime! Totam, magni tenetur consectetur dicta dolor ad!.</p>
        </div>
        <div class="img-container d-flex align-items-center justify-content-center ms-3">
          <img src="../img/logo.png" alt="logo">
        </div>
      </section>
      
      <!-- section team2 -->
        <h2 class="text-center my-4" >Il team 2</h2>
      <section class="container-fluid section-info d-flex flex-column align-items-center ">
  
        <div class="row">
          <div class="img-container d-flex align-items-center justify-content-center col-2 m-1">
            <img src="../img/logo.png" alt="logo">
          </div>
          <div class="img-container d-flex align-items-center justify-content-center col-2 m-1">
            <img src="../img/logo.png" alt="logo">
          </div>
          <div class="img-container d-flex align-items-center justify-content-center col-2 m-1">
            <img src="../img/logo.png" alt="logo">
          </div>
          <div class="img-container d-flex align-items-center justify-content-center col-2 m-1">
            <img src="../img/logo.png" alt="logo">
          </div>
          <div class="img-container d-flex align-items-center justify-content-center col-2 m-1">
            <img src="../img/logo.png" alt="logo">
          </div>
          <div class="img-container d-flex align-items-center justify-content-center col-2 m-1">
            <img src="../img/logo.png" alt="logo">
          </div>
        </div>
  
        <div class="w-75">
          <p class="text-center m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis voluptatibus ullam cum nihil voluptates magni culpa voluptatem ipsum nulla, quam amet similique et quas laudantium aliquam consequuntur iure doloribus? Quia libero blanditiis beatae ad eius est quisquam. Aliquam suscipit repellat voluptate? Sint veritatis impedit nisi aperiam quidem ad maiores, optio, dolor voluptates vel magnam obcaecati aliquid officia. Aliquam neque obcaecati odit perspiciatis eius dolore, dolorem doloremque aperiam alias delectus modi facere distinctio. Quis in asperiores minus voluptatum labore placeat voluptatibus, non, dolor maiores recusandae quas aspernatur nam quibusdam omnis cum, ea odio tenetur? Perferendis, sed adipisci ab nam ipsam excepturi a numquam praesentium ut porro! Velit quos sit omnis, accusamus quisquam neque dolor, alias illum ullam magnam quidem aperiam quas iusto laudantium exercitationem? Impedit enim deserunt delectus accusantium nemo, accusamus consectetur id exercitationem vel magni incidunt mollitia nam, reiciendis possimus repellendus similique maxime! Totam, magni tenetur consectetur dicta dolor ad!.</p>
        </div>
      </section>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.bg-img{
  background-image: url(../img/capanna-bosco.jpg);
  background-size: cover;
  background-position: center;

  .text-top{
   color: #4FA1D7; 
  }
  .section-info{
    background-color: #4b82c0b7;
    padding: 10px;
    border-radius: 20px;
  
  
    .img-container{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: #c8cdffa2;
      img{
        width:60%;
      }
    }
  }
}
</style>