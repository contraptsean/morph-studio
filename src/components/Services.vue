<template>
  <div class="services section" id="services">
   <div class="container px-4 py-5">
    <h2 class="pb-2 border-bottom my-5 display-4 ">Services</h2>
    <div class="d-flex align-items-start">
  <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
   
    <button class="nav-link active" id="v-pills-cut-tab" data-bs-toggle="pill" data-bs-target="#v-pills-cut" type="button" role="tab" aria-controls="v-pills-cut" aria-selected="true">Cut</button>
   
    <button class="nav-link" id="v-pills-color-tab" data-bs-toggle="pill" data-bs-target="#v-pills-color" type="button" role="tab" aria-controls="v-pills-color" aria-selected="false">Color</button>
   
    <button class="nav-link" id="v-pills-texture-tab" data-bs-toggle="pill" data-bs-target="#v-pills-texture" type="button" role="tab" aria-controls="v-pills-texture" aria-selected="false">Texture</button>
   
    <button class="nav-link" id="v-pills-hair-treatments-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hair-treatments" type="button" role="tab" aria-controls="v-pills-hair-treatments" aria-selected="false">Hair Treatments</button>
  </div>

  <div class="tab-content" id="v-pills-tabContent">
    <!--1-->
    <div class="tab-pane fade show active" id="v-pills-cut" role="tabpanel" aria-labelledby="v-pills-cut-tab">
        
      <div class="row my-3">

        <div class="col">
          <img src="../assets/cut/1.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/cut/2.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/cut/3.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->

        <div class="row">

        <div class="col">
          <img src="../assets/cut/4.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/cut/5.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/cut/6.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->
  

    </div>    <!--End Pane-->


    <div class="tab-pane fade" id="v-pills-color" role="tabpanel" aria-labelledby="v-pills-color-tab">
      
            <div class="row my-3">

        <div class="col">
          <img src="../assets/color/1.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/color/2.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/color/3.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->

        <div class="row">

        <div class="col">
          <img src="../assets/color/4.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/color/5.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/color/6.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->

    </div><!--End Pane-->

    <div class="tab-pane fade" id="v-pills-texture" role="tabpanel" aria-labelledby="v-pills-texture-tab">
      
            <div class="row my-3">

        <div class="col">
          <img src="../assets/texture/1.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/texture/2.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/texture/3.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->

        <div class="row">

        <div class="col">
          <img src="../assets/texture/4.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/texture/5.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/texture/6.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->

    </div><!--End Pane-->

    <div class="tab-pane fade" id="v-pills-hair-treatments" role="tabpanel" aria-labelledby="v-pills-hair-treatments-tab">
      
            <div class="row my-3">

        <div class="col">
          <img src="../assets/treatment/1.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/treatment/2.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/treatment/3.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->

        <div class="row">

        <div class="col">
          <img src="../assets/treatment/4.jpg" class="img-fluid" />
        </div>
        <div class="col">
          <img src="../assets/treatment/5.jpg" class="img-fluid" />

        </div>
        <div class="col">
          <img src="../assets/treatment/6.jpg" class="img-fluid" />

        </div>
      </div><!--End Row-->
      
    </div><!--End Pane-->

  </div><!--End tab-content---->
</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-fluid {
  width:100%;
}

.nav-pills .nav-link {
 color:#5e6472 !important;
}


</style>
