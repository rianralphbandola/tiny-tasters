<script setup>
import imgLogo from '@/assets/images/tiny taster logo.png'
</script>

<template>
  <body>
    <!--Header-->

    <div class="container-fluid">
      <h1 class="px-4 pt-4">
        <b>Profile</b>
      </h1>
    </div>

    <!--End of header-->

    <div class="icon container text-center pb-1">
      <i class="bi bi-person-circle"></i>
    </div>
    <RouterLink to="/edit-profile"
      ><div class="edit text-center">
        <button type="button" class="btn btn-dark pt-2">
          Edit Profile <i class="bi bi-pencil-square"></i>
        </button></div
    ></RouterLink>

    <br />
    <div class="container pb-3 p-3">
      <div class="card rounded-4">
        <div class="card-body">
          <p class="card-text"></p>

          <h1 class="text-black">Profile Information:</h1>
        </div>
        <fieldset disabled>
          <div class="container px-4">
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="disabledTextInput" class="col-auto form-label">Name: </label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="text"
                  id="disabledTextInput"
                  class="form-control rounded-pill"
                  aria-disabled="disabled"
                  value="Normei L. Babida"
                />
              </div>
            </div>

            <br />
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-auto col-form-label">Gender:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="gender"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  value="Female"
                />
              </div>
            </div>
            <br />
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-form-label">Email Address:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="Email Address"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  value="normeibabida@gmail.com"
                />
              </div>
              <br />
              <h3>Location Address:</h3>
            </div>
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-form-label">Street:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="Street"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  aria-describedby="passwordHelpInline"
                  value="Balungagan"
                />
              </div>
            </div>
            <br />
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-form-label">Barangay:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="Barangay"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  aria-describedby="passwordHelpInline"
                  value="Las Nieves"
                />
              </div>
            </div>
            <br />
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-form-label">Province:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="Province"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  aria-describedby="passwordHelpInline"
                  value="Agusan Del Norte"
                />
              </div>
            </div>
            <br />
            <div class="row g-3 align-items-center">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-form-label">ZIP code:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="ZIP code"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  aria-describedby="passwordHelpInline"
                  value="8610"
                />
              </div>
            </div>
            <br />
            <div class="row g-3 align-items-center pb-3">
              <div class="col-4 col-sm-4">
                <label for="inputPassword6" class="col-form-label">Contact Number:</label>
              </div>
              <div class="col-8 col-sm-8">
                <input
                  type="Number"
                  id="inputPassword6"
                  class="form-control rounded-pill"
                  aria-describedby="passwordHelpInline"
                  value="09123456789"
                />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <br />

      <div class="container d-grid">
        <div class="text-center">
          <RouterLink to="/"
            ><button class="btn btn-danger" type="button">Log out</button></RouterLink
          >
        </div>
      </div>
    </div>

    <br /><br />
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
  </body>
  <!--End of footer-->
</template>

<style scoped>
body {
  background: linear-gradient(to left, orange 0%, orangered 100%);
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
</style>
