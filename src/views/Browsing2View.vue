<script setup>
import img1 from '@/assets/images/disney princess.jpg'
import img2 from '@/assets/images/superheroes.jpg'
import img3 from '@/assets/images/flowerbut.jpg'
import img4 from '@/assets/images/barbie 2.jpg'
import img5 from '@/assets/images/games.jpg'
import img6 from '@/assets/images/cartoon 2.jpg'

import imgLogo from '@/assets/images/tiny taster logo.png'
import imgGif from '@/assets/images/gif 2.gif'
import imgButton from '@/assets/images/backbutton.png'
</script>

<template>
  <body class="bg-warning-subtle">
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

    <!--end of header-->
    <div class="container">
      <div class="row pt-4">
        <div class="col-1 col-sm-2">
          <RouterLink to="/browsing-1"
            ><img :src="imgButton" width="35px" height="30px"
          /></RouterLink>
        </div>
        <div class="container col-10 col-sm-10">
          <h5 class="pt-1"><b>Personalized Cake Design</b></h5>
        </div>
      </div>
    </div>

    <!-- Disney Characters -->
    <div class="container my-4 pt-0">
      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img1" alt="Cake Image" class="img-fluid card-img rounded-5" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h5 class="custom-card-title">Disney Characters</h5>
              <div class="text-end">
                <RouterLink to="/browsing-3">
                  <button class="btn btn-view text-center rounded-1 mt-3 mb-2 ms-5 m-4">
                    View
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--End of Disney Characters-->

      <!-- Super Heroes-->

      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img2" alt="Cake Image" class="img-fluid card-img rounded-5 p-1" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h5 class="custom-card-title">Superheroes</h5>
              <div class="text-center">
                <RouterLink to="/browsing-4">
                  <button class="btn btn-view float-end rounded-1 mt-3 mb-2 ms-5 m-4">View</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--End of Super Heroes-->

      <!--Flowers and Butterflies-->

      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img3" alt="Cake Image" class="img-fluid card-img rounded-5 p-1" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h5 class="custom-card-title">Flowers and Butterflies</h5>
              <div class="text-center">
                <RouterLink to="/browsing-5">
                  <button class="btn btn-view float-end rounded-1 mt-3 mb-2 ms-5 m-4">View</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--End of Flowers and Butterflies-->

      <!--Barbie-->

      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img4" alt="Cake Image" class="img-fluid card-img rounded-5 p-1" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h5 class="custom-card-title">Barbie</h5>
              <div class="text-center">
                <RouterLink to="/browsing-6">
                  <button class="btn btn-view float-end rounded-1 mt-3 mb-2 ms-5 m-4">View</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--End of Barbie-->

      <!--Games-->

      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img5" alt="Cake Image" class="img-fluid card-img rounded-5 p-1" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h5 class="custom-card-title">Games</h5>
              <div class="text-center">
                <RouterLink to="/browsing-7">
                  <button class="btn btn-view float-end rounded-1 mt-3 mb-2 ms-5 m-4">View</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--End of Games-->

      <!--Cartoons-->

      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img6" alt="Cake Image" class="img-fluid card-img rounded-5 p-1" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h5 class="custom-card-title">Cartoons</h5>
              <div class="text-center">
                <RouterLink to="browsing-8">
                  <button class="btn btn-view float-end rounded-1 mt-3 mb-2 ms-5 m-4">View</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--End of Cartoons-->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- Footer -->
    <br />
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
  text-shadow:
    -1px 0 white,
    0 1px white,
    1px 0 white,
    0 -1px white;
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

h4 {
  font-size: larger;
}

.book button {
  font-size: small;
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
