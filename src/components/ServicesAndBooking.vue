<template>
  <div class="services-and-booking section" id="services-and-booking">
   <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom mt-5 display-4 services-heading" data-aos="fade-down" data-aos-duration="500" data-aos-once="true">Services & Bookings</h2>
    <p class="lead mb-4" data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-anchor=".services-heading">In order to offer a full suite of services, each of our artists specializes uniquely and books independently. See our artist pages for full details.</p>
    <div class="row row-cols-1 row-cols-lg-3 justify-content-center">

<div class="col mb-4 mb-lg-0 d-flex justify-content-center">
    <!--A-->
    <div class="card h-100 border border-primary shadow" data-aos="fade-down" data-aos-duration="500" data-aos-once="true">
  <img src="../assets/a1.jpg" class="card-img-top rounded" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">Arista</h5>
    <p class="card-text">Curl Cultivator</p>
  </div>
    <div class="mt-auto text-center pb-3">

    <a class="btn btn-secondary" href="/arista">See Services <i class="bi bi-arrow-right"></i></a>
    </div>
</div>
</div>



<div class="col mb-4 mb-lg-0 d-flex justify-content-center">

<!--J-->
 <div class="card h-100 border border-primary shadow" data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-delay="100"
>
  <img src="../assets/j1.jpg" class="card-img-top rounded" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">Jordan</h5>
    <p class="card-text">Universal Style Translator</p>
  </div>
        <div class="mt-auto text-center pb-3">

      <a class="btn btn-secondary" href="/jordan" alt="jordan masked">See Services <i class="bi bi-arrow-right"></i></a>

    </div>
</div><!--end card-->

</div><!--end col -->


<div class="col mb-4 mb-lg-0 d-flex justify-content-center">

<!--M-->
 <div class="card h-100 border border-primary shadow" data-aos="fade-down" data-aos-duration="500" data-aos-once="true" data-aos-delay="200"
>
  <img src="../assets/mystery-person.jpg" class="card-img-top rounded" alt="..." style="height:288px;">
  <div class="card-body text-center">
    <h5 class="card-title">Maia</h5>
    <p class="card-text">Licensed Full Lash Specialist </p>
  </div>
        <div class="mt-auto text-center pb-3">

        <a class="btn btn-secondary" href="https://maibeauty.as.me/schedule.php" target="_blank">See Services <i class="bi bi-arrow-right"></i></a>

    </div>
</div><!--end card-->

</div><!--end col-->

    </div><!--End Row-->
   </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesAndBooking',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width: 18rem;
  border-radius: 8px;
  transition: transform .2s; /* Animation */

}

.card:hover {
  box-shadow: 0 0.7rem 1.5rem rgb(0 0 0 / 15%) !important;
  transform: scale(1.05); 

}

.card-img-top {
  border-bottom-left-radius: 0px!important;
  border-bottom-right-radius: 0px!important;
  transition: transform .1s; /* Animation */
}    



</style>
