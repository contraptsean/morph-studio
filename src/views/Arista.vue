<template>
  <Navbar />
  <div class="header section">
    <div class="banner container mb-5">
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center border">
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">Arista</h1>
        <p class="lead">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden">
          <img class="rounded-circle w-75" src="../assets/a1.jpg" alt="">
      </div>
      </div><!--end row-->
    </div><!--end contain-->
  </div><!--end section-->

  
  <div class="services section" id="services">
   <div class="container pb-5">
    <!-- <h2 class="pb-2 border-bottom my-5 display-4">Optional Header</h2> -->
    <div class="row">


      <div class="col-sm-3">
      <div class="nav flex-column nav-pills me-5" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      
        <button class="nav-link active" id="v-pills-services-tab" data-bs-toggle="pill" data-bs-target="#v-pills-services" type="button" role="tab" aria-controls="v-pills-services" aria-selected="false">Services</button>
      
        <button class="nav-link" id="v-pills-new-guest-tab" data-bs-toggle="pill" data-bs-target="#v-pills-new-guest" type="button" role="tab" aria-controls="v-pills-new-guest" aria-selected="true">New Guest Info</button>
      
        <button class="nav-link" id="v-pills-booking-tab" data-bs-toggle="pill" data-bs-target="#v-pills-booking" type="button" role="tab" aria-controls="v-pills-booking" aria-selected="false">Booking</button>
      
        <button class="nav-link" id="v-pills-faq-tab" data-bs-toggle="pill" data-bs-target="#v-pills-faq" type="button" role="tab" aria-controls="v-pills-faq" aria-selected="false">FAQ</button>
      </div>
      </div><!--end col-->
            <div class="col-sm-9">


      <div class="tab-content" id="v-pills-tabContent">

        <!--services-->

        <div class="tab-pane fade show active" id="v-pills-services" role="tabpanel" aria-labelledby="v-pills-services-tab">
            <h3>Services</h3>
            <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

            <h4 class="mt-5">Maintenance & Cuts</h4>
            <hr />
            <ul class="list-unstyled">

              <li><h5>The Monarch First Time Haircut</h5>
              For new guests or clients that have not had a haircut by Pursuit of Curls in the past 3 months
              <br /><a class="text-info" href="#" data-bs-target="#v-pills-new-guest">See More New Guest Info</a>
              <br /><small class="text-muted">$175</small></li>
              
              <li><h5>The Monarch Maintenance Reshape</h5>
              This service is only for clients who have had a haircut in the past 3 months and are only looking for a maintenance haircut
              <br /><small class="text-muted">$125</small></li>
              
              <li><h5>The Firefly</h5>
              This service is for guys in need for styles in shorter to medium length curls
              <br /><small class="text-muted">$75+</small></li>

              <li><h5>Wash and Define</h5>
              Wash days can be hard when our schedule doesn’t have time for it. This one hour service is perfect for those special occasion nights
              <br /><small class="text-muted">$65+</small></li>

            </ul>

            <h4 class="mt-5">Sunflower Color Services</h4>
            <p class="lead">Color Correction and Blonding/Highlighting services are charged by the hour and are dependent on how much time and product it is required for the finished result.</p>
            <hr />
            <ul class="list-unstyled">

              <li><h5>Basic Color</h5>
              Basic amount of coloring for guests new and otherwise
              <br /><small class="text-muted">$150+</small></li>
              
              <li><h5>Maintenance Color</h5>
              This service is only for clients who have had a haircut in the past 3 months and are only looking for a maintenance haircut
              <br /><small class="text-muted">$125</small></li>
              
            </ul>

        </div><!--End Pane-->

        <!--new guest-->
        <div class="tab-pane fade" id="v-pills-new-guest" role="tabpanel" aria-labelledby="v-pills-new-guest-tab">
            
            <h3>New Guest Info</h3>
            <p class="lead">Product buildup is a huge contributor to our dehydration and we have been taught that more is better! Well, science says something a little different and if you are ready to take the plunge with us, we will show you that less can be more effective. So throw away what you thought you knew about textured and curly hair and be prepared to evolve your curls onto the next level.</p>
            <!------>

            <h4 class="mt-5">Step One: Detox</h4>
            <hr />
            <ul class="list-unstyled">

              <li><h5>The Monarch Detox</h5></li>
                            
              <ol>
                <li>Guests should detox from heavy oils, silicone’s, clay masks, and Eco/Wetline Gel at least 21 days (3 shampoo sessions) prior to your appointment. Detox instructions are found below.</li>

                <li>We only schedule a month at a time. Each month’s schedule will be opened on the 15th of the month before.</li>

                <li>A video consultation is required for all new clients. Video consultations should be during stylists business hours (Arista Mon-Tue 10am-4pm)</li>

                <li>If there is not a date available for the time you are interested in it is possible that the appointment is already taken or I am unavailable.</li>

                <li>You can be added to the cancellation list and will be notified if we receive a last-minute cancellation.</li>

                <li>All new client appointments and all color services require a deposit, which will be discussed during the virtual consultation.</li>

                <li>Questions about deposits will be found in policies. </li>
              </ol>

            </ul><!--end step-->

             <!------>

            <h4 class="mt-5">Step Two: Booking</h4>
            <hr />
            <ul class="list-unstyled">
              <li><h5>Booking An Appointment Online</h5>
              You can book an appointment using our online calendar. Simply select first time haircut and a date and time that works for you. New appointments open on the 15th of the previous month
              <br /><a class="text-info" href="https://pursuit-of-curls-studio.square.site/">Book Online</a></li>

              <li><h5>Booking By Email</h5>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br /><a class="text-info" href="mailto:pursuitofcurlsllc@gmail.com">Book By Email</a></li>

            </ul><!--end step-->

            <!------>

            <h4 class="mt-5">Step Three: First Appointment</h4>
            <hr />
            <ul class="list-unstyled">
              <li><h5>The Monarch First Time Haircut</h5>
              Here is some info about the first time haircut and how it is different from a regular haircut and some info to make you feel comfortable and realize how easy the process will be after</li>

              <li><h5>Basic Color</h5>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </li>
            </ul><!--end step-->

            <!------>

            <h4 class="mt-5">Questions?</h4>
            <hr />
            <ul class="list-unstyled">
              <li><h5>Email</h5>
              Here is some info about the first time haircut and how it is different from a regular haircut and some info to make you feel comfortable and realize how easy the process will be after
              <br /><a class="text-info" href="mailto:pursuitofcurlsllc@gmail.com">Email</a></li>

              <li><h5>Insta</h5>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br /><a class="text-info" href="https://www.instagram.com/pursuit.of.curls/?hl=en" target="_blank">Insta</a></li>


            </ul><!--end step-->
      

        </div>    <!--End Pane-->

        <div class="tab-pane fade" id="v-pills-booking" role="tabpanel" aria-labelledby="v-pills-booking-tab">
          
                <h3>Booking</h3>
                <p class="lead">Product buildup is a huge contributor to our dehydration and we have been taught that more is better! Well, science says something a little different and if you are ready to take the plunge with us, we will show you that less can be more effective. So throw away what you thought you knew about textured and curly hair and be prepared to evolve your curls onto the next level.</p>

              <ul class="list-unstyled">
              <li><h5>Booking An Appointment Online</h5>
              You can book an appointment using our online calendar. Simply select first time haircut and a date and time that works for you. New appointments open on the 15th of the previous month
              <br /><a class="text-info" href="https://pursuit-of-curls-studio.square.site/">Book Online</a></li>

              <li><h5>Booking By Email</h5>
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br /><a href="mailto:pursuitofcurlsllc@gmail.com">Book By Email</a></li>

            </ul><!--end ul-->
        </div><!--End Pane-->

        <div class="tab-pane fade" id="v-pills-faq" role="tabpanel" aria-labelledby="v-pills-faq-tab">
          <h3>FAQ</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </div><!--End Pane-->

      </div><!--End tab-content---->
            </div><!--end col-->

  </div><!--end row-->
  </div><!--end contain-->
  </div><!--end section-->
  

  <Footer />
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Arista',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
.header.section {
    background-image: url('../assets/l3.jpeg');
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
}

.banner .row {
  background-color:rgba(255,255,255,0.8)
}

.nav-pills .nav-link.active {
  background-color:#080066;;
}

.nav-link {
  color: #080066;
}

ul li {
  margin-bottom:2rem;
}
</style>