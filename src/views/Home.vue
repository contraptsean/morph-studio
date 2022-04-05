<template>
  <Navbar />
  <div class="home">
    <VideoHero />
    <OurStory />
    <ServicesAndBooking />
    <Shop />
    <OurLocation />
    <Covid />
  </div>
  <Footer />
</template>

<script>
//animate on scroll
import AOS from 'aos'
import 'aos/dist/aos.css'
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import VideoHero from '@/components/VideoHero.vue'
import OurStory from '@/components/OurStory.vue'
import OurLocation from '@/components/OurLocation.vue'
import ServicesAndBooking from '@/components/ServicesAndBooking.vue'
import Shop from '@/components/Shop.vue'
import Covid from '@/components/Covid.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    VideoHero,
    OurStory,
    OurLocation,
    ServicesAndBooking,
    Shop,
    Covid,
    Footer
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss">

</style>