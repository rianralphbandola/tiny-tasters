<script setup>
import img1 from '@/assets/images/paw patrol.png'
import img2 from '@/assets/images/hello kitty.png'
import img3 from '@/assets/images/spongebob.png'
import img4 from '@/assets/images/peppa pig.png'
import img5 from '@/assets/images/kuromi.png'
import img6 from '@/assets/images/unicorn.png'
import img7 from '@/assets/images/little charmers.png'
import img8 from '@/assets/images/cocomelon.png'

import imgLogo from '@/assets/images/tiny taster logo.png'
import imgGif from '@/assets/images/gif 2.gif'
import imgButton from '@/assets/images/backbutton.png'
</script>

<template>
  <body div class="bg-warning-subtle">
    <div>
      <div class="header">
        <div class="container">
          <div class="row align-items-center py-3">
            <div class="col-3 col-sm-3 text-start">
              <img :src="imgLogo" alt="logo" class="img-fluid" style="max-height: 50px" />
            </div>
            <div class="col-6 col-sm-6 text-center">
              <h4 class="">
                <b>Tiny Tasters</b>
                <br />
                <small> E-Cake Shop</small>
              </h4>
            </div>
            <div class="col-3 col-sm-3 text-end">
              <img :src="imgGif" alt="gif" class="img-fluid" style="max-height: 70px" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--End of header-->

    <!--Search button-->
    <div class="container pt-3">
      <div class="row align-items-center g-0">
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-between"
        >
          <form class="search flex-grow-1 d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="searchb btn btn-sm btn-outline-dark rounded-pill" type="submit">
              <i class="bi bi-search"></i>
            </button>
            <RouterLink to="/booking-form"
              ><button
                class="searchb btn book-now-btn btn-sm btn-outline-dark rounded-pill py-2 ms-2 text-nowrap text-end"
              >
                Book Now
              </button></RouterLink
            >
          </form>
        </div>
      </div>
    </div>

    <!--end of search items-->

    <div class="container">
      <div class="row pt-4 pb-3">
        <div class="col-1 col-sm-1">
          <RouterLink to="/browsing-2"
            ><img :src="imgButton" width="35px" height="30px"
          /></RouterLink>
        </div>
        <div class="container col-10 col-sm-10">
          <h4 class="pt-1"><b>Cartoons</b></h4>
        </div>
      </div>
    </div>

    <!--Row 1-->
    <div class="space container pb-5">
      <div class="row">
        <div class="col-6">
          <RouterLink to="/paw-patrol-details">
            <div class="card mb-3 rounded-4">
              <img :src="img1" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Paw Patrol</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
        <div class="col-6">
          <RouterLink to="/hello-kitty-details">
            <div class="card mb-3 rounded-4">
              <img :src="img2" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Hello Kitty</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
      </div>

      <!--row 1 end-->

      <!--row 2-->
      <div class="row">
        <div class="col-6">
          <RouterLink to="/spongebob-details">
            <div class="card mb-3 rounded-4">
              <img :src="img3" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>SpongeBob </b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>

        <div class="col-6">
          <RouterLink to="/peppa-pig-details">
            <div class="card mb-3 rounded-4">
              <img :src="img4" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Peppa Pig</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
      </div>
      <!--row 2 end-->

      <!--row 3-->
      <div class="row">
        <div class="col-6">
          <RouterLink to="/kuromi-details">
            <div class="card mb-3 rounded-4">
              <img :src="img5" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Kuromi</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
        <div class="col-6">
          <RouterLink to="/unicorn-details">
            <div class="card mb-3 rounded-4">
              <img :src="img6" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Unicorn</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
      </div>
      <!--row 3 end-->

      <!--row 4-->
      <div class="row">
        <div class="col-6">
          <RouterLink to="/little-charmers-details">
            <div class="card mb-3 rounded-4">
              <img :src="img7" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Little Charmers</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
        <div class="col-6">
          <RouterLink to="/cocomelon-details">
            <div class="card mb-3 rounded-4">
              <img :src="img8" class="card-img-top rounded-4" alt="..." />
              <div class="card-img-overlay align-self-end">
                <h5 class="card-title mb-0"><b>Cocomelon</b></h5>
                <small class="card-text"><b>₱800.00 </b> —⭐ 4.5</small>
              </div>
            </div></RouterLink
          >
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <!--row 4 end-->

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
.btn-view {
  color: white;
  font-size: small;
  height: 30px;
  width: 75px;
  margin-left: 50px;
  background-color: orangered;
}
.header {
  background-color: #fe6803;
  background-color: #fe6803;
  text-shadow:
    -1px 0 white,
    0 1px white,
    1px 0 white,
    0 -1px white;
}

@media screen and (max-width: 992px) {
  .header {
    background-color: #fe6803;
    background-color: #fe6803;
    text-shadow:
      -1px 0 white,
      0 1px white,
      1px 0 white,
      0 -1px white;
  }
}
body .whitebody {
  background: white;
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

.bi-calendar2-range-fill {
  color: black;
  font-size: 30px;
}

.bi-person-circle {
  color: black;
  font-size: 30px;
}
.fa-footer {
  background-color: #fe6803;
}

.img-cocomelon {
  height: 1000%;
}

body img {
  height: 100%;
}

.bi-search {
  font-size: 20px;
}

.footer-logo {
  height: auto;
}

.searchb {
  background-color: #fe6803;
  color: white;
}

small {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: medium;
}

.card small {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 12px;
}

h4 {
  font-size: larger;
}

.book button {
  font-size: small;
}

.pic {
  height: auto;
  width: auto;
  background-color: #fee3d2;
}

.card {
  color: white;
}

.card p {
  color: white;
}

.card h2 {
  font-size: large;
  font-family: 'Lucida Handwriting', cursive;
}

.card h4 {
  font-size: medium;
  font-family: 'Lucida Handwriting', cursive;
}

.card h5 {
  color: black;
  font-size: 15px;
  font-family: 'Lucida Handwriting', cursive;
  text-shadow:
    -1px 0 white,
    0 1px white,
    1px 0 white,
    0 -1px white;
}

.card h6 {
  font-size: 15px;
  font-family: 'Lucida Handwriting', cursive;
  color: white;
  text-shadow:
    -1px 0 black,
    0 1px black,
    1px 0 black,
    0 -1px black;
}
.space {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

.card small {
  color: black;
  font-size: x-small;
}
.card {
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }
}
to {
  opacity: 1;
  scale: 1;
}
</style>
