<template>
    <!-------------------------- Footer -------------------------->
<footer >
  <div class="text-center my-5">
    <img src="../assets/img/logo.png" alt="">
  </div>
  <div>
    <div class="d-flex justify-content-around m-5 p-5">
      <div class="overview d-flex flex-column">
        <h5>Overview</h5>
        <a class="p-0 nav-link text-dark" href="">Shipping</a>
        <a class="p-0 nav-link text-dark" href="">Refund</a>
        <a class="p-0 nav-link text-dark" href="">Promotion</a>
      </div>
      <div class="company d-flex flex-column">
        <h5>Company</h5>
        <a class="p-0 nav-link text-dark" href="">About</a>
        <a class="p-0 nav-link text-dark" href="">Career</a>
        <a class="p-0 nav-link text-dark" href="">Contact Us</a>
      </div>
      <div class="explore d-flex flex-column">
        <h5>Explore</h5>
        <a class="p-0 nav-link text-dark" href="">Terms and Conds</a>
        <a class="p-0 nav-link text-dark" href="">Privacy & Policy</a>
        <a class="p-0 nav-link text-dark" href="">For Developer</a>
      </div>
      <div>
  <h5>Special Letter</h5>
    <form class="form-inline">
      <input class="form-control mr-sm-3 bg-warning" type="email" placeholder="Your email address" aria-label="Search">
      <button class="btn btn-warning pt-1">
        <img src="../assets/img/send.svg" alt="">
      </button>
    </form>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
    export default {
        name: 'footerComponent'
    }
</script>