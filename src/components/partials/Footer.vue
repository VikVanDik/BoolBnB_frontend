<script>
export default{
  name: 'Footer',
}

</script>

<template>
<footer>
  <div class="p-4 text-secondary">
    <h3 class="text-primary text-center pb-3 ">Boolbnb info</h3>

    <!-- section list footer -->
    <div class="d-flex flex-column flex-sm-row justify-content-sm-between middle-section text-center text-sm-start">
      <div>
        <h5>Assistenza</h5>
        <ul class=" list-unstyled">
          <li><a href="" class=" text-decoration-none text-white"> Domande</a></li>
          <li><a href="" class=" text-decoration-none text-white"> Parla con un esperto</a></li>
          <li><a href="" class=" text-decoration-none text-white"> Contattaci</a></li>
        </ul>
      </div>
      <div>
        <h5>Scopri di più</h5>
        <ul class=" list-unstyled">
          <li><a href="" class=" text-decoration-none text-white"> Chi siamo</a></li>
          <li><a href="" class=" text-decoration-none text-white"> Opzioni di sponsorizzazione</a></li>
          <li><a href="" class=" text-decoration-none text-white"> Piccole chicche</a></li>
        </ul>
      </div>
      <div>
        <h5>Boolbnb</h5>
        <ul class=" list-unstyled">
          <li><a href="" class=" text-decoration-none text-white"> Aggiungi un appartamento</a></li>
          <li><a href="" class=" text-decoration-none text-white"> Diventa Boolbnbeer</a></li>
          <li><a href="" class=" text-decoration-none text-white"> Trova il papero d'oro</a></li>
        </ul>
      </div>
    </div>
    <!-- section list footer -->
    <hr class="">
    <div class="end-section d-flex justify-content-between">
      <span>© 2024 Airbnb, Inc.| Team 2 in Boolbnb</span>
      <div class="social-section">
        <i class="fa-brands fa-instagram "></i>
        <i class="fa-brands fa-x-twitter ms-2"></i>
        <i class="fa-brands fa-facebook ms-2"></i>
        <i class="fa-brands fa-linkedin-in ms-2"></i>
      </div>
    </div>
  </div>

</footer>


</template>

<style lang="scss" scoped>
 footer {
  width: 100%;
  background-color: black;
 }
</style>