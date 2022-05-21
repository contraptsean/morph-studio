<template>
  <div class="story section bg-light" id="our-story">
   <div class="container px-4 py-5">
     <div class="row">
    <h2 class="pb-2 border-bottom mt-5 display-4" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Our Story</h2>


    <div class="col mt-5">
    <img src="../assets/ms1.jpg" class="rounded float-start me-4" data-aos="fade-up" data-aos-duration="500" data-aos-once="true" />
      
    <div data-aos="fade-right" data-aos-duration="500" data-aos-once="true">

       <p class="lead">Morph Textures Studio was created with the simple concept in mind - that all heads deserve quality care.</p>

       <p>What started with a partnership between two artists in February 2021, grew to a multi-medium artist salon specializing in the care and styling of all heads including highly-textured hair.</p>
    </div>

    <ul class="list-unstyled text-wrap">
      <li class="mb-4" data-aos="fade-down-right" data-aos-duration="500" data-aos-once="true"><strong class="display-6 first">Inclusivity</strong>
      <p class="mt-3">Hair is an important part of all cultures – a part of our roots. It’s not simply about the aesthetic, it’s a ritual, and it’s for everyone.</p></li>
      <li class="mb-4" data-aos="fade-down-right" data-aos-duration="500" data-aos-once="true"><strong class="display-6 second">Health</strong>
      <p class="mt-3">While the journey to healthy hair is unique to each person’s hair texture, it shouldn’t have to be difficult, or inconvenient. On the contrary, it should be enjoyable, we are here as hair journey guides for any questions along the way.</p></li>
      <li class="mb-4" data-aos="fade-down-right" data-aos-duration="500" data-aos-once="true"><strong class="display-6 third">Style</strong>
      <p class="mt-3">Genderless expression beyond the curated masses. We want to help you cultivate any style you can dream of!</p></li>


    </ul>

    <p class="lead mt-5" data-aos="fade-down" data-aos-duration="500" data-aos-once="true">Experience Morph, the a unique full service and multi-medium salon, at <a class="link-secondary" href="/#our-location">1617 South Adams St, Unit 2, top floor</a>. </p>

    </div><!--end col-->


     </div> <!--End row-->
  </div><!--end contain-->
  </div>
</template>

<script>
export default {
  name: 'OurStory',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

strong.display-6.first {
  border-bottom:2px #b8f2e6 solid;

}

strong.display-6.second {
  border-bottom:2px #ffaaff solid;

}

strong.display-6.third {
  border-bottom:2px #ccc solid;

}
img {
  width:50%;
}

</style>
