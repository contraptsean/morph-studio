<template>
  <Navbar />
  <div class="jordan section">
    <div class="banner">
 
    </div><!--end banner-->

   <div class="container">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col d-flex justify-content-center">
        <img class="rounded-circle" src="../assets/j1.jpg" alt="">   
      </div><!--end col-->

        <div class="col mt-3 d-flex flex-column">
        <p class="lead">Jordan is an artist that translates style and character into any head of hair. Awesome hair for everyone is the goal. Jordan is always excited to help on whatever hair journey you want to begin.</p>

          <a class="btn btn-secondary align-self-center px-3" href="https://jordan-rae-hair.square.site/" target="_blank">Book Jordan Online <i class="bi bi-arrow-right"></i></a>
        </div><!--end col-->
        

   
      </div><!--end row-->
    </div><!--end contain-->
  </div><!--end section-->


  <div class="services section" id="services">
   <div class="container pb-5">
      <h2 class="display-5 mb-4">Services</h2>
    <div class="row row-cols-1 row-cols-lg-2 g-2 g-lg-4">


      <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Short Cut</h3>
            <h4 class="fs-5">$45 | <span class="text-muted">1 hr- 1 hr 15 min</span></h4>
            <p class="card-text">Above the ear, clipper, pixie, micro mullet. A short cut with wash and style. *If you are doing a large style change and going from very long to short please book the medium length cut. All textures welcome.</p>
          </div>
        </div><!--end card-->
      
      </div><!--end col-->

       <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Medium Length Cut </h3>
            <h4 class="fs-5">$60 | <span class="text-muted">1hr 20 min- 1 hr 45 min</span></h4>
            <p class="card-text">Ear to Shoulder Length, OR transformation from long to very short. Medium length hair, includes wash, cut and style. All textures celebrated.</p>
          </div>
        </div><!--end card-->
      
      </div><!--end col-->

       <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Long Cut</h3>
            <h4 class="fs-5">$75 | <span class="text-muted">1 hr 50min+</span></h4>
            <p class="card-text">Hair past shoulder length, includes wash, cut and style. All textures celebrated.</p>
          </div>
        </div><!--end card-->
      
      </div><!--end col-->

       <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Returning Client Bang Trim </h3>
            <h4 class="fs-5">$15 | <span class="text-muted">20  min</span></h4>
            <p class="card-text">Mini bang and face framing touch up,* not for creating new bangs</p>
          </div>
        </div><!--end card-->
      
      </div><!--end col-->

       <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Complimentary Consultation</h3>
            <h4 class="fs-5">$45 | <span class="text-muted">15 min</span></h4>
            <p class="card-text">Want a fresh color? Need to ask questions about a cut first? Complimentary consulting for any service inquisitions</p>
          </div>
        </div><!--end card-->
      
      </div><!--end col-->

      <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Custom Color</h3>
            <p class="card-text">My customer color starts at $70/hr and includes the hair repair treatment Olaplex in all color. All new clients need a consultation online or in person before color.</p>
          </div>
        </div><!--end card-->
      
      </div><!--end col-->

      <div class="col">
        <div class="card border border-secondary rounded h-100">
          <div class="card-body">
            <h3 class="card-title">Bridal & Special Occasion</h3>
            <p class="card-text">I am available for special occasions and wedding events. Please email <a class="link-secondary" href="mailto:bishopsmith.jordan@gmail.com">bishopsmith.jordan@gmail.com</a> with dates and inquiries thank you.</p>
          </div>
        </div><!--end card-->
      
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
  name: 'Jordan',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">

.banner {
  min-height: 75vh;
  
  background-image: url('../assets/jordan-mobile-header.png');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
}


.nav-pills .nav-link.active {
  background-color:#080066;;
}

.nav-link {
  color: #080066;
}
ul li {
  margin-bottom:2rem;
}
img {
  position:relative;
  top:-50%;
}

@media (min-width: 768px) {
  .banner {

    background-image: url('../assets/jordan-desktop-header.png');
  }


}
</style>