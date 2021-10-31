<template>
  
    <nav class="navbar navbar-expand-lg sticky-top animate__animated animate__fadeIn" id="navbar-1" :class="{change_color: scrollPosition > 50 || this.$route.path !== '/' , animate__fadeInDown: scrollPosition > 50 && this.$route.path === '/', animate__fadeIn: scrollPosition < 50 && this.$route.path === '/',  }">
    <div class="container">
        <a class="navbar-brand" href="/">
          <img src="../assets/logo-test.png" alt="" width="50" class="mx-2"></a>
        <button class="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
            <a class="nav-link" href="/#our-story">Our Story</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/#services-and-booking">Services & Booking</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/#shop">Shop</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/#covid">COVID-19</a>
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
</style>
