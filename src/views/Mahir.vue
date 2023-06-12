<template>
  <Navbar />
  <div class="mahir section">
    <div class="banner">
 
    </div><!--end banner-->

   <div class="container">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col d-flex justify-content-center">
        <img class="rounded-circle" src="../assets/mahir.jpg" alt="">   
      </div><!--end col-->

        <div class="col mt-3 d-flex flex-column">
        <p class="lead statement">Mahir is a barber technician and curl specialist. Sleek clean fades and defined volumized curls are just some of his masterful skills.</p>
        <div class="align-items-center d-flexy">


          <a class="btn btn-secondary px-3" href="https://squareup.com/appointments/book/5f5mlt08d80dw4/LE63GY2R29K0S/services" target="_blank">Book Now <i class="bi bi-arrow-right"></i></a>
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