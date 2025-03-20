<script setup>
import img10 from '@/assets/images/mickey mouse.png'
import imgLogo from '@/assets/images/tiny taster logo.png'
import imgGif from '@/assets/images/gif 2.gif'
import imgButton from '@/assets/images/backbutton.png'
</script>

<template>
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

  <!--End of row 1-->

  <div>
    <div class="card">
      <img :src="img10" class="card-img-top object-fit-cover rounded-0" alt="" />
      <div class="card-img-overlay">
        <RouterLink to="/browsing-3"
          ><img :src="imgButton" width="40px" height="35px"
        /></RouterLink>
      </div>
    </div>
  </div>
  <body class="pic pb-5 bg-white">
    <!--Search button final-->

    <div class="container pt-3 d-grid">
      <div class="row">
        <!--ratings-->
        <div class="col-4 col-sm-4">
          <h6 class="price mt-2">₱ 800.00-2,000.00</h6>
        </div>
        <div class="col-5 col-sm-5">
          <div class="rating pb-1">
            <span
              v-for="star in stars"
              :key="star"
              :class="['star', { active: star <= currentRating, disabled }]"
              @click="!disabled && updateRating(star)"
            >
              ★
            </span>
          </div>
        </div>

        <!--Ratings end-->

        <div class="col-2 col-sm-2 mt-2 me-3">
          <RouterLink to="/booking-form">
            <button class="searchb btn book-now-btn btn-sm btn-outline-dark rounded-pill">
              Book
            </button></RouterLink
          >
        </div>
      </div>
    </div>

    <br />

    <div class="rounded-box rounded-3 mx-3">
      <h1><b>Minnie Mouse</b></h1>

      <p>
        This is a wonderful Disney Character-themed cake, Minnie Mouse! It would be perfect for your
        birthday parties or any special occasions for your younger ones. This cake is sure to be a
        hit with any Disney fans! Below are the available flavors, sizes, toppers, shapes, and
        colors.
      </p>
    </div>

    <div class="container rounded-4 py-4">
      <div class="row mx-2">
        <div
          class="column py-4 rounded-4"
          style="background: linear-gradient(to left, orange 0%, orangered 100%)"
        >
          <h2>Flavor</h2>
          <small class="text-start">
            <li>Choco Moist</li>
            <li>Red Velvet</li>
            <li>Butter Cake</li></small
          >
          <hr />
          <h2>Toppers</h2>
          <small>
            <li>Printed</li>
            <li>Dedication</li>
            <li>Candle</li></small
          >
        </div>
        <div
          class="column py-4 rounded-4"
          style="background: linear-gradient(to left, orange 0%, orangered 100%)"
        >
          <h2>Size</h2>
          <small>
            <li>10 x 2</li>
            <li>8 x 4</li>
            <li>6 x 5</li></small
          >
          <hr />
          <h2>Shape</h2>
          <small>
            <li>Circle</li>
            <li>Heart</li>
            <li>Tall Cakes</li></small
          >
        </div>
        <div
          class="column py-4 rounded-4"
          style="background: linear-gradient(to left, orange 0%, orangered 100%)"
        >
          <h2>Color</h2>
          <small>
            <li>Blue</li>
            <li>Black</li>
            <li>Yellow</li>
            <li>Violet</li>
            <li>Orange</li>
            <li>Green</li>
            <li>Brown</li>
            <li>Pink</li></small
          >
        </div>
      </div>
    </div>
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
.header {
  background-color: #fe6803;
  text-shadow:
    -1px 0 white,
    0 1px white,
    1px 0 white,
    0 -1px white;
}
.searchb {
  background-color: #fe6803;
  color: white;
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

.footer-logo img {
  height: 10px;
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
.pic {
  height: auto;
  width: auto;
  background-color: #fee3d2;
}

body {
  background-color: #eee;
}

.rating {
  display: flex;
  font-size: 25px;
}
.star {
  cursor: pointer;
  padding: 2px;
  color: #ccc;
}
.star.active {
  color: #f39c12;
}
.star.disabled {
  cursor: not-allowed;
}
.rounded-box {
  padding: 15px 15px;
  font-family: 'Lucida Handwriting', cursive;
  font-size: 24px;
  font-weight: bold;
  color: black;
  background-color: #fadadd;
  text-align: left;
  display: inline-block;
}

.rounded-box p {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: medium;
}

hr {
  border: solid;
  border-color: black;
}
.card {
  background: linear-gradient(to left, orange 0%, orangered 100%);
  color: black;
  width: fit-content;
}

.card small {
  font-size: smaller;
}
.column {
  float: left;
  width: 33.33%;
  height: auto; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
</style>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentRating: this.value,
    }
  },
  computed: {
    stars() {
      return Array.from({ length: this.max }, (_, i) => i + 1)
    },
  },
  methods: {
    updateRating(star) {
      this.currentRating = star
      this.$emit('input', star)
    },
  },
}
</script>
