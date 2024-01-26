<script>
export default {
  name: 'Loader',
}
</script>


<template>
  <div class="loader">
    <h1>Loading....</h1>
    <div class="lds-hourglass"></div>

  </div>
</template>



<style lang="scss" scoped>

.loader {
  h1 {
    margin-bottom: 20px;
  }
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid rgb(94, 179, 222);
  border-color: rgb(68, 162, 209) transparent rgb(60, 157, 205) transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>