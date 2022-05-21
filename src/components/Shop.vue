<template>
  <div class="shop section" id="shop">
   <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom mt-5 display-4 text-light">Shop</h2>
    <div class="row row-cols-1 row-cols-md-2 mt-5">

      <div class="col mb-3 mb-md-0">
                  <div class="card h-100" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">

                  <p class="lead">At Morph Textures Studio we are dedicated to finding products that work. </p>

          
          <p>We currently carry Innersense Organic Beauty, Hairstory, and AG Naturals. We focus on finding hair care with no parabens, silicones, sulfates, synthetic fragrances or questionable ingredients.</p>
          
        
            
          <a href="https://www.hairstory.com/?r=vsdlad" class="btn btn-primary px-4 my-3 mx-auto" target="_blank">Shop HairStory Products <i class="bi bi-arrow-right px-2" /></a>

          <p>Ask about joining our refill program! Use less plastic and save! Purchase certain hair care products, bring back the clean bottle and get 20% the price for a refill.</p>
                  </div>
        
          
      </div><!--end col-->

      
      
      <div class="col">
          <!-- <img src="../assets/inside.jpeg" class="img-fluid w-75 rounded" /> -->
          <div class="card mb-3 top-card" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
            <div class="card-body text-secondary">
              <p>Innersense Organic Beauty continues to push the boundaries of new product development by utilizing organic chemistry to raise the bar on clean, luxurious formulas with professional performance to care for your hair, health and planet.</p>
            </div>
          </div>

           <div class="card" data-aos="fade-right" data-aos-duration="500" data-aos-once="true" data-aos-anchor=".top-card" data-aos-delay="100">
            <div class="card-body text-secondary">
            <p>New Wash is a revolutionary hair product that removes regular shampoo from the equation. Our hair cleansers are designed for your unique hair type - whether you have curly hair, fine hair, dry hair, oily hair color-treated hair, or anything in between.</p>
            </div>
          </div>

      </div>
  </div><!--End row-->
   </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.shop.section {
background: center no-repeat url("../assets/inside-lg.png");
background-size: cover;
background-attachment: fixed;
}
.card {
  padding: 1rem;
  border-radius:8px;
  background-color: rgba(255,255,255,.9);
}

p {
  font-weight:600;
}

</style>
