<script setup>
import img1 from '@/assets/images/personalized cake design.jpg'
import img2 from '@/assets/images/regular cake 3.png'
import imgLogo from '@/assets/images/tiny taster logo.png'
import imgGif from '@/assets/images/gif 2.gif'
import imgGif3 from '@/assets/images/gif 3.gif'
</script>

<template>
  <body class="bg-warning-subtle">
    <!--Header-->
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

    <!-- Personalized Cake Design -->
    <div class="container my-4 pt-5">
      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img1" alt="Cake Image" class="img-fluid card-img rounded-5" />
          </div>

          <!-- Content Section -->
          <div class="col-8">
            <div class="card-body">
              <h6 class="custom-card-title">Personalized Cake Design</h6>
              <div class="text-end">
                <RouterLink to="/browsing-2">
                  <button class="btn btn-view text-center rounded-1 mt-3 mb-2 ms-5 m-4">
                    View
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Personalized Cake Design -->
    <!-- Regular Cake Design -->
    <div class="container my-4 pb-5">
      <div class="card mb-3 custom-card ps-2 py-2 rounded-5">
        <div class="row g-0 align-items-center">
          <!-- Image Section -->
          <div class="col-4">
            <img :src="img2" alt="Cake Image" class="img-fluid card-img rounded-5" />
          </div>

          <!-- Content Section -->
          <div class="col-8 mb-0 pb-0">
            <div class="card-body">
              <h6 class="custom-card-title">Regular Cake Design</h6>
              <div class="text-center">
                <RouterLink to="/regular-browsing">
                  <button class="btn btn-view float-end rounded-1 mt-3 mb-2 ms-5 m-4">View</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="container gif align-items-center">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-between">
            <img
              :src="imgGif3"
              width="100px"
              height="100px"
              frameBorder="0"
              class="text-start"
              allowFullScreen
            />
            <img
              :src="imgGif3"
              width="100px"
              height="100px"
              frameBorder="0"
              class="text-center"
              allowFullScreen
            />
            <img
              :src="imgGif3"
              width="100px"
              height="100px"
              frameBorder="0"
              class="text-end"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
    <!-- End of Regular Cake Design -->

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
</style>
