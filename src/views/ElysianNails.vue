<template>
  <Navbar />
  <div class="mahir section">
    <div class="banner">
 
    </div><!--end banner-->

   <div class="container">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col d-flex justify-content-center">
        <img class="rounded-circle" src="../assets/tatiana.jpg" alt="">   
      </div><!--end col-->

        <div class="col mt-3 d-flex flex-column">
        <p class="lead statement">Elysian Nails is located in the small room inside Morph studio. Providing supreme artistry with awesome art and technique, Tatiana is a master acrylic and gel nail artist applying long lasting art to every hand. </p>
        <div class="align-items-center d-flexy">


          <a class="btn btn-secondary px-3" href="https://elysiannails.as.me/" target="_blank">Book Now <i class="bi bi-arrow-right"></i></a>
        </div>
        </div><!--end col-->
        

   
      </div><!--end row-->
    </div><!--end contain-->
  </div><!--end section-->


  
  <Footer />
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Arista',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">

.banner {
  min-height: 75vh;
  
  background-image: url('../assets/arista-mobile-header.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}

img {
  position:relative;
  top:-50%;
}

@media (min-width: 768px) {
  .banner {

    background-image: url('../assets/arista-desktop-header.png');
  }


}
</style>