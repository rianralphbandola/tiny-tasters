<script setup>
import imgLogo from '@/assets/images/tiny taster logo.png'
</script>

<template>
  <body class="bg-body-tertiary pb-5">
    <div id="app">
      <!-- Loader Component -->

      <div v-if="isLoading" class="loading-container d-flex flex-column">
        <img
          :src="imgLogo"
          height="100px"
          width="100px"
          class="spinning-image-back-and-forth"
          id="myimage"
        />
        <br />

        <div class="dot-spinner">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
      <br />
      <br />

      <div class="container">
        <div class="card text-bg-warning bg-opacity-25 mx-3 rounded-4">
          <div class="card-body py-4">
            <div class="row">
              <!--image of header-->
              <div class="my-element col-md-8 col-lg-5 py-5 px-2 text-center">
                <img :src="imgLogo" class="wipe rounded-5 img-fluid" height="320px" width="320" />
              </div>
              <!-- end of image-->

              <!--username-->

              <div class="  ">
                <i class="bi bi-person-circle pe-2"></i>
                <label for="exampleFormControlInput1" class="form-label"><b>Username</b></label>
                <input
                  type="username"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your username"
                  v-model="name"
                  required
                />

                <!--end of username-->
                <br />
                <!--password-->
                <i class="bi bi-lock-fill pe-2"></i>
                <label for="exampleFormControlInput1" class="form-label"><b>Password</b></label>
                <input
                  type="password"
                  class="form-control mb-4"
                  id="exampleFormControlInput1"
                  placeholder="Enter your password"
                  v-model="email"
                  required
                />
              </div>
              <br />
              <!--end of password-->

              <!--button-->

              <RouterLink to="/browsing-1" class="text-decoration-none"
                ><div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">LOG IN</button>
                </div></RouterLink
              >
              <!--end of button-->

              <p>
                <a
                  href="#"
                  class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  ><center>Forgot Password?</center></a
                >
              </p>

              <br />

              <p>
                <center>
                  Don't have an account?
                  <RouterLink to="/register"> <b> Sign Up </b></RouterLink>
                </center>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.container p text {
  color: white;
}
.container {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  background: linear-gradient(to left, orange 0%, orangered 100%);
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  animation-name: inherit;
  animation-duration: 4s;
  animation-delay: 2s;
}
span {
  color: aliceblue;
  font-size: small;
}
.form-check {
  color: aliceblue;
  font-size: small;
}
.btn {
  background-color: orangered;
  color: white;
  border-radius: 30px;
  border-color: orangered;
  font-size: medium;
  display: inline;
  height: 65px;
}
.btn:hover {
  color: white;
}
.form-control {
  border-radius: 20px;
  padding: 12px;
}
/* Full page loader container */
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: orange;
  z-index: 9999;
}

/* Loading dots animation */
.dot-spinner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80px;
}

.dot {
  width: 15px;
  height: 15px;
  background-color: #3498db;
  border-radius: 50%;
  animation: bounce 3s infinite ease-in-out;
}

.dot:nth-child(1) {
  background-color: red;
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background-color: #f72c5b;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
  background-color: #b03052;
}
.dot:nth-child(4) {
  animation-delay: 0.6s;
  background-color: #640d5f;
}

@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes wipe {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}

.my-element img {
  animation-name: wipe;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
.spinning-image-back-and-forth {
  animation: spin-back-and-forth 8s linear infinite;
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-range: end;
  animation-duration: 6s;
}

@keyframes spin-back-and-forth {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>

<script>
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000) //
  },
}
</script>
