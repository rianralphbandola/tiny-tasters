<script setup>
import imgLogo from '@/assets/images/tiny taster logo.png'
import imgFb from '@/assets/images/facebook.jpg'
import imgContact from '@/assets/images/contact.jpg'

import imgGif2 from '@/assets/images/gif 5.gif'
import imgGif3 from '@/assets/images/gif 6.gif'
// import FacebookLinkCard from '/FacebookLinkCard.vue'
</script>
;

<template>
  <body>
    <!--Header-->

    <div class="container">
      <!--row 1-->
      <div class="row">
        <div class="col-2 col-sm-2 pt-4 pb-2">
          <!--logo image-->
          <div class="logo">
            <img :src="imgLogo" alt="logo" height="60px" weight="70px" />
          </div>
        </div>
        <!--end of logo-->

        <!--Title-->

        <div class="col-10 col-sm-10 pt-5 pb-2 text-start">
          <h2>
            <b>About Tiny Tasters</b>
          </h2>
        </div>
        <!--end of title-->
      </div>
    </div>
    <!--End of header-->

    <!--another-->
    <div class="Picture-logo text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <img :src="imgLogo" alt="logo" height="250px" width="250px" />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="title px-3">
        <div class="row align-items-center pt-3">
          <div class="col-3 col-sm-3 text-start">
            <img :src="imgGif3" width="90px" height="60px" frameBorder="0" allowFullScreen />
          </div>
          <div class="col-6 col-sm-6 text-center">
            <h3 class="text-center"><b>ALL ABOUT TINY TASTERS</b></h3>
          </div>
          <div class="col-3 col-sm-3 text-end">
            <img :src="imgGif2" width="85px" height="90px" frameBorder="0" allowFullScreen />
          </div>
        </div>
        <hr />
        <p class="text-center mx-3 pt-0 mt-0">
          Tiny Tasters offers various types of cake for any of your occasions and special events.
          You can choose between a personalized design or a regular one. Book your orders now!
        </p>
        <hr />
      </div>
    </div>
    <div class="container">
      <div class="card rounded-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5631.5826065911315!2d125.52276680071334!3d8.733291416695781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301de61ccaa96b5%3A0x132106887b42572d!2sBalungagan%2C%20Agusan%20del%20Norte!5e0!3m2!1sfil!2sph!4v1734335307859!5m2!1sfil!2sph"
          width=""
          height="130"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-4"
        ></iframe>
        <div class="card-img-overlay rounded-4">
          <br />
          <br />
          <br />
          <h3 class="card-title text-dark"><b>LOCATION:</b></h3>
        </div>
        <div class="card-body">
          <p class="card-text">
            Purok 1 Balungagan, Las Nieves Agusan Del Norte - Llagas Residence
          </p>
        </div>
      </div>
      <br />
      <!-- <a href="https://www.facebook.com/tiny.tasters.75">-->
      <div class="card rounded-4 d-flex">
        <img :src="imgFb" class="card-img-top rounded-4" alt="..." height="130px" />
        <div class="card-img-overlay">
          <br />
          <br />
          <br />
          <h3 class="card-title text-white"><b>FACEBOOK:</b></h3>
        </div>
        <br />
        <h5>Facebook Account: Tiny Tasters</h5>
        <br />
      </div>
      <!-- <div class="card-body">
        <img :src="imgFb" class="card-img-top rounded-4" alt="..." height="140px" />
        <h3 class="card-title text-white"><b>FACEBOOK PAGE LINK:</b></h3>
        <a href="https://www.facebook.com/tiny.tasters.75"> </a>
      </div>-->
      <!-- <div class="card-body">
            <a href="https://www.facebook.com/tiny.tasters.75"
              >https://www.facebook.com/tiny.tasters.75</a
            >
          </div>
        </div>
      </a>

            <FacebookLinkCard :facebookUrl="'https://www.facebook.com/yourFacebookPageName'" />


            <a href="https://www.facebook.com/tiny.tasters.75" class="card-link">
            Follow us on Facebook!: https://www.facebook.com/tiny.tasters.75</a
          >-->

      <!-- <div>
          <a
            href="https://www.facebook.com/tiny.tasters.75"
            target="_blank"
            style="text-decoration: none; color: #3b5998; font-weight: bold"
          >
            https://www.facebook.com/tiny.tasters.75
          </a>
        </div> -->

      <br />
      <div class="card rounded-4 d-flex">
        <img :src="imgContact" class="card-img-top rounded-4" alt="..." height="130px" />
        <div class="card-img-overlay">
          <br />
          <br />
          <br />

          <h3 class="card-title text-dark"><b>CONTACT INFORMATION:</b></h3>
        </div>
        <div class="card-body pb-0 mb-0">
          <p>
            +63473471784 - TNT <br />
            +63909221197 - Globe
          </p>
        </div>
      </div>
    </div>
    <br />

    <br />
    <br />
    <br />

    <!-- Footer -->
    <br />
    <div class="bg-warning-subtle">
      <div class="container-fluid bottom-nav pt-2 pb-2">
        <div class="row text-center">
          <div class="col-3 text-white text-center">
            <RouterLink to="/browsing-1" title="Home">
              <i class="bi bi-house-door-fill"></i><br
            /></RouterLink>
            Home
          </div>
          <div class="col-3 text-white text-center">
            <RouterLink to="/my-bookings" title="Bookings"
              ><i class="bi bi-calendar2-range-fill"></i><br
            /></RouterLink>
            My Bookings
          </div>
          <div class="col-3 text-white text-center">
            <RouterLink to="/profile" title="Profile"
              ><i class="bi bi-person-circle"></i><br
            /></RouterLink>
            Profile
          </div>
          <div class="col-3 text-white text-center pe-4">
            <RouterLink to="/about-tiny-tasters" title="About"
              ><img :src="imgLogo" alt="" width="45px" class="footer-logo" /><br
            /></RouterLink>
            About
          </div>
        </div>
      </div>
    </div>

    <!--End of footer-->
  </body>
</template>

<style scoped>
body {
  background: linear-gradient(to left, orange 0%, orangered 100%);
}

@media screen and(min-width:400px) {
  body {
    background: linear-gradient(to left, orange 0%, orangered 100%);
  }
}
.logo {
  height: auto;
}
@media screen and(min-width:400px) {
  .logo {
    height: auto;
  }
}
.title {
  height: auto;
}
@media screen and(min-width:400px) {
  .title {
    height: auto;
  }
}
.card {
  height: auto;
}
@media (max-width: 992px) {
  .card {
    height: auto;
  }
}
.bottom-nav {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fe6803;
  z-index: 1000;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.bi-house-door-fill {
  color: black;
  font-size: 30px;
}

@media (max-width: 992px) {
  .bi-house-door-fill {
    height: auto;
  }
}

.bi-calendar2-range-fill {
  color: black;
  font-size: 30px;
}
@media (max-width: 992px) {
  .bi-calendar2-range-fill {
    height: auto;
  }
}

.bi-person-circle {
  color: black;
  font-size: 30px;
}
@media (max-width: 992px) {
  .bi-person-circle {
    height: auto;
  }
}
.fa-footer {
  background-color: #fe6803;
}

.footer-logo {
  height: auto;
}
@media (max-width: 992px) {
  .footer-logo {
    height: auto;
  }
}
h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

h5 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding-left: 10px;
}
p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: large;
}
</style>
<!--
<script>
export default {
  components: {
    FacebookLinkCard,
  },
}
</script>
-->
