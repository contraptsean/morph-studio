<template>
  <div class="story" id="footer">
   <footer class="bg-primary text-center text-lg-start">
  <!-- Grid container -->
  <div class="container p-4">
    <!--Grid row-->
    <div class="row">
      <!--Grid column-->
      <div class="col-md-12 col-lg-3 mb-4 mb-md-0" id="footer-row-1">
        <h5 class="text-uppercase">Morph Studio Tallahassee</h5>
      </div>
        <div class="col-md-12 col-lg-9 mb-4 mb-md-0" id="footer-row-2">

        <p>
          1617 South Adams St, Unit 2, top floor
          <br />Tallahassee, FL.
        </p>
      </div>
    </div>
    <!--Grid row-->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    Made with 🖤 by 🦆 © 2023 Copyright:
    <span>Morph Textures Studio</span>
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
