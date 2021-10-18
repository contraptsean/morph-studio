<template>
  <div class="bookings section" id="bookings">
   <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom my-5 display-4">Bookings</h2>
    <div class="row justify-content-center">

<div class="col-md-4 py-2 py-md-n2 ms-5 ms-md-n5">
    <!--A-->
    <div class="card h-100" style="width: 18rem;">
  <img src="../assets/a1.jpg" class="card-img-top rounded-circle" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">Arista</h5>
    <p class="card-text">Some quick example text to build on the card title.</p>
  </div>
    <div class="mt-auto text-center">

    <a href="https://www.instagram.com/pursuit.of.curls/?hl=en" target="_blank">
    <img src="../assets/instagram-brands.png" class="w-25" /></a>
    </div>
</div>
</div>

<div class="col-md-4 py-2 py-md-n2 ms-5 ms-md-n5">

<!--J-->
 <div class="card h-100" style="width: 18rem;">
  <img src="../assets/j1.jpg" class="card-img-top rounded-circle" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">Jordan</h5>
    <p class="card-text">Build on the card title and make up the bulk of the card's content.</p>
  </div>
        <div class="mt-auto text-center">

    <a href="https://www.instagram.com/jordanraehair/" target="_blank">
      <img src="../assets/instagram-brands.png" class="w-25" />
    </a>
    </div>
</div>

</div>
    </div><!--End Row-->
   </div>
  </div>
</template>

<script>
export default {
  name: 'Bookings',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  border:none;
}

</style>
