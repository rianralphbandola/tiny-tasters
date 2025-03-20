<script setup></script>

<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tiny Tasters</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <br /><br /><br />
  <h1>Hello World</h1>

  <!-- Centered Navigation Bar -->
  <nav class="navbar navbar-light bg-light fixed-bottom">
    <div class="container justify-content-center">
      <!-- Login Button with Icon -->
      <a href="#" class="btn btn-outline-primary mx-2">
        <i class="bi bi-person-circle"></i> Login
      </a>
      <!-- Register Button with Icon -->
      <a href="#" class="btn btn-outline-primary mx-2">
        <i class="bi bi-person-add"></i> Register
      </a>
    </div>
  </nav>
</template>
