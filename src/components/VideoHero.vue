<template>
<header>

  <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
  <div class="overlay"></div>

  <!-- The HTML5 video element that will create the background video on the header -->
  <video class="animate__animated animate__fadeIn" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://res.cloudinary.com/dtjlk7e7g/video/upload/v1647718539/Morph-Front-1_bft1fz.mp4" type="video/mp4">
  </video>


  <!-- The header content -->
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100">
          <div class="col">
        <h1 class="display-1">Morph Textures Salon</h1>
        <a type="button" class="btn btn-outline-primary btn-lg px-4 me-2" href="#our-story">About</a>
        <a type="button" class="btn btn-outline-primary btn-lg px-4" href="#services-and-booking">Make An Appointment</a>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'VideoHero',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  position: relative;
  top:-90px;
  margin-bottom:-90px;
  background-color: black;
  height: 100vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}
</style>
