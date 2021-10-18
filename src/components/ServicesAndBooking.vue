<template>
  <div class="services-and-booking section" id="services-and-booking">
   <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom mt-5 display-4">Services & Bookings</h2>
    <p class="lead mb-4">In order to offer a full suite of services, each of our artists specializes uniquely and books independently. See our artist pages for full details.</p>
    <div class="row justify-content-center">

<div class="col-md-3 py-2 py-md-n2 ms-5 ms-md-n5" style="">
    <!--A-->
    <div class="card h-100">
  <img src="../assets/a1.jpg" class="card-img-top rounded" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">Arista</h5>
    <p class="card-text">Education Director/Curl Guru</p>
  </div>
    <div class="mt-auto text-center">

    <a class="btn btn-secondary" href="/arista">See Services <i class="bi bi-arrow-right"></i></a>
    </div>
</div>
</div>



<div class="col-md-3 py-2 py-md-n2 ms-5 ms-md-n5">

<!--J-->
 <div class="card h-100">
  <img src="../assets/j1.jpg" class="card-img-top rounded" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">Jordan</h5>
    <p class="card-text">Color Maestro/Aesthetic Overlord</p>
  </div>
        <div class="mt-auto text-center">

      <a class="btn btn-secondary" href="/jordan" alt="...">See Services <i class="bi bi-arrow-right"></i></a>

    </div>
</div><!--end card-->

</div><!--end col-->


<div class="col-md-3 py-2 py-md-n2 ms-5 ms-md-n5">

<!--M-->
 <div class="card h-100">
  <img src="../assets/mystery-person.jpg" class="card-img-top rounded" alt="..." style="height:288px;">
  <div class="card-body text-center">
    <h5 class="card-title">Maia</h5>
    <p class="card-text">Lashes, Eyebrows, and really the whole face</p>
  </div>
        <div class="mt-auto text-center">

        <a class="btn btn-secondary" href="https://www.mahoganyandrose.com/services" target="_blank">See Services <i class="bi bi-arrow-right"></i></a>

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
  border:none;
  width: 18rem;
}

</style>
