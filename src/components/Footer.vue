<template>
  <div class="story" id="footer">
   <footer class="bg-primary text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-lg-3 col-md-12 mb-4 mb-md-0" id="footer-row-1">
        <h5 class="text-uppercase">Morph Studio Tallahassee</h5>
      </div>
            <div class="col-lg-3 col-md-12 mb-4 mb-md-0" id="footer-row-2">

        <p>
          1317 S. Adams St.
          <br />Tallahassee, FL.
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 class="text-uppercase">Hours</h5>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
          molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
          aliquam voluptatem veniam, est atque cumque eum delectus sint!
        </p>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2021 Copyright:
    <span>Morph Studio</span>
  </div>
  <!-- Copyright -->
</footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer-row-1 {
  border-right:1px solid #aaa;
}
</style>
