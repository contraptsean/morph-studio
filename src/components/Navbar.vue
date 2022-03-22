<template>
  
    <nav class="navbar navbar-expand-lg sticky-top animate__animated animate__fadeIn py-0" id="navbar-1" :class="{change_color: scrollPosition > 50 || this.$route.path !== '/' , animate__fadeInDown: scrollPosition > 50 && this.$route.path === '/', animate__fadeIn: scrollPosition < 50 && this.$route.path === '/',  }">
    <div class="container">
        <a class="navbar-brand py-0" href="/">
          <img src="../assets/logo1.svg" alt="Morph Logo" :class="{d_none: scrollPosition > 50 || this.$route.path !== '/'}"> <!--displays if on homepage and at top-->
          <img src="../assets/logo14.svg" alt="Morph Logo" :class="{d_none: scrollPosition < 50 && this.$route.path == '/'}"> <!--displays if scrolled or not on homepage-->
        </a>
        <button class="navbar-toggler" :class="{'navbar-light': scrollPosition > 50 || this.$route.path !== '/', 'navbar-dark': scrollPosition < 50 && this.$route.path == '/'} " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-center">
            <li class="nav-item active">
            <a class="nav-link" href="/#our-story">Our Story</a>
            </li>
            <i class="bi bi-cloud-moon-fill nav-link"></i>
            <li class="nav-item">
            <a class="nav-link" href="/#services-and-booking">Services & Booking</a>
            </li>
            <i class="bi bi-cloud-moon-fill nav-link"></i>

            <li class="nav-item">
            <a class="nav-link" href="/#shop">Shop</a>
            </li>

            <i class="bi bi-cloud-moon-fill nav-link"></i>

            <li class="nav-item">
            <a class="nav-link" :class="{'last-nav': scrollPosition < 50 && this.$route.path == '/'}" href="/#covid">COVID-19</a>
            </li>

        </ul>
        </div>
    </div>
    </nav>  

</template>

<script>
export default {
  name: 'Navbar',
  props: {
  },
  data(){
      return{
        scrollPosition: null
      }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
       
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
.navbar {
  font-size:1.2rem;
  color:#fff;
  text-transform: uppercase;
  font-weight:700;
}

.nav-item{
  margin:7px;
  padding:10px;
}

 .change_color {
  background-color:#fff;
  border-bottom:1px solid #d8e2ec;
   }
   .change_color .nav-link {
      color:#000;
   }

   i {
     font-size: 0.8rem;
   }
   img {
     width:30%
   }

   .d_none {
     display:none;
   }
@media (max-width: 992px) { 
  
  .last-nav {
    margin-bottom:95px;
  }
 }
</style>
