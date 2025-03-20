<script setup>
import imgButton from '@/assets/images/backbutton.png'
import imgLogo from '@/assets/images/tiny taster logo.png'
</script>

<template>
  <body>
    <!--Header-->

    <div class="container">
      <h1 class="pt-4">
        <RouterLink to="/profile"
          ><img :src="imgButton" width="40px" height="35px" class="ps-2" /></RouterLink
        ><b class="ps-3">Profile</b>
      </h1>
    </div>
    <!--End of header-->
    <div class="container px-4">
      <div class="card rounded-4 d-flex justify-content-center align-items-center">
        <div class="image-upload-container text-center">
          <div class="avatar-section mb-3">
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="User Avatar"
              class="avatar-img rounded-circle align-items-center"
              style="width: 150px; height: 150px; margin: 0 auto; object-fit: cover"
            />
            <div
              v-else
              class="default-avatar d-flex justify-content-center align-items-center rounded-circle"
              style="width: 150px; height: 150px; margin: 0 auto; background-color: #f0f0f0"
            >
              <p class="mb-0">No Image</p>
            </div>
          </div>

          <input
            type="file"
            @change="onImageUpload"
            class="form-control mb-3"
            style="max-width: 200px; margin: 0 auto"
          />
        </div>
      </div>
    </div>

    <br />

    <div class="container pb-3 px-4">
      <div class="card rounded-4">
        <div class="card-body">
          <h1 class="text-white">Profile Information:</h1>
        </div>

        <div class="container px-4">
          <div class="row g-3 align-items-center">
            <div class="col-4 col-sm-4">
              <label for="inputPassword6" class="col-auto col-form-label">Name: </label>
            </div>
            <div class="col-8 col-sm-8">
              <input
                type="text"
                id="inputPassword6"
                class="form-control rounded-pill"
                value="Babida"
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
            <h3>Location Address</h3>
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
          <div class="row g-3 align-items-center pb-4">
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
      </div>
      <br />

      <RouterLink to="/profile"
        ><div class="container d-grid">
          <div class="text-center">
            <button class="btn btn-success" type="button">Save</button>
          </div>
        </div></RouterLink
      >
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

.footer-logo {
  height: auto;
}

h4 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.icon i {
  font-size: 175px;
}

.edit i {
  font-size: 25px;
}
.form-container {
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.image-upload-container {
  text-align: center;
  margin-top: 20px;
}

.avatar-section {
  margin-bottom: 20px;
}

.avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.default-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

input[type='file'] {
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ff3d00;
}

.card {
  background-color: #e45326;
}
</style>

<script>
export default {
  data() {
    return {
      imageUrl: null, // Holds the uploaded image URL
    }
  },
  methods: {
    // Handle image upload
    onImageUpload(event) {
      const file = event.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imageUrl = e.target.result // Set the image URL
        }
        reader.readAsDataURL(file)
      }
    },
    // Reset the image to default
    resetImage() {
      this.imageUrl = null
    },
  },
}
</script>
