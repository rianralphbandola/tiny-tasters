<script setup>
import imgLogo from '@/assets/images/tiny taster logo.png'
import imgButton from '@/assets/images/backbutton.png'
</script>

<template>
  <body>
    <!--Header-->

    <div class="container">
      <h1 class="pt-4">
        <RouterLink to="/profile"
          ><img :src="imgButton" width="40px" height="35px" class="ps-2" /></RouterLink
        ><b class="ps-3">My Bookings</b>
      </h1>
    </div>

    <!--End of header-->
    <br /><br /><br />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="app">
            <div class="mt-4" v-if="hasScroll">Scroll on the table</div>
            <div class="table-holder mt-4" @wheel.prevent="wheelHorizontal($event)">
              <div
                class="info"
                v-if="hasScroll"
                @touchmove.prevent="scrollHorizontal($event)"
                :class="{ show: showInfo }"
              >
                Scroll for more &rarr;
              </div>
              <div class="table-responsive" ref="table" @scroll.prevent="scrollHorizontal($event)">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Category</th>
                      <th scope="col">Theme</th>
                      <th scope="col">Design</th>
                      <th scope="col">Flavor</th>
                      <th scope="col">Size</th>
                      <th scope="col">Color</th>
                      <th scope="col">Shape</th>
                      <th scope="col">Toppers</th>
                      <th scope="col">Date-to-Deliver</th>
                      <th scope="col">Time-to-Deliver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Regular Cake Design</td>
                      <td>Regular</td>
                      <td>Basic</td>
                      <td>Red Velvet</td>
                      <td>8 x 4</td>
                      <td>Green</td>
                      <td>Heart</td>
                      <td>Written Dedication</td>
                      <td>2024-12-17</td>
                      <td>2:00PM - 3:00PM</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Personalized Cake Design</td>
                      <td>Disney Princess</td>
                      <td>Elsa</td>
                      <td>Choco Moist</td>
                      <td>10 x 2</td>
                      <td>Blue</td>
                      <td>Circle</td>
                      <td>Printed topper</td>
                      <td>2024-12-05</td>
                      <td>1:00PM - 5:00PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <br />
    <br /><br /><br /><br />
    <br /><br /><br /><br />
    <br /><br /><br /><br />

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
  <!--End of footer-->
</template>

<style scoped>
body {
  background: linear-gradient(to left, orange 0%, orangered 100%);
  margin: 0;
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
w .footer-logo {
  height: auto;
}

h4 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.icon i {
  font-size: 175px;
}

.edit i {
  font-size: 17px;
}
.form-container {
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.card {
  background-color: #e45326;
}

th {
  background-color: black;
  color: white;
}

table {
  white-space: nowrap;
}
/*
table,
td,
th {
  border: 1px solid black;
  border-collapse: collapse;
  overflow-x: scroll;
}
.horizontal-scrollable table {
  overflow-x: scroll;
  white-space: nowrap;
  position: absolute;
}
table {
  font-size: x-large;
  overflow-x: scroll;
}
.horizontal-scrollable > table > tr {
  display: inline-block;
  float: none;
  overflow-x: scroll;
}
/* Decorations */
</style>
