<template>
  <header>
    <!-------------------------- Navbar 1 -------------------------->
    <nav class="navbar navbar-light bg-light px-5 nav-link">
      <div>
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="nav-item d-flex">
<<<<<<< HEAD
        <router-link class="nav-link text-dark" to="/galery"
          >Galery</router-link
        >
        <a class="nav-link text-dark" href="#">Catalog</a>
        <a class="nav-link text-dark" href="#">Delivery</a>
        <a class="nav-link text-dark" href="#">Reward</a>
=======
        <router-link class="nav-link text-dark py-0" to="/galery"
          >Galery</router-link
        >
        <router-link to="/" class="nav-link text-dark py-0">Home</router-link>
        <router-link to="/form" class="nav-link text-dark py-0"
          >Shipping</router-link
        >
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
        <img class="img-keranjang" src="../assets/img/cart.svg" alt="" />
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavbarNav",
};
</script>
