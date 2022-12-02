<template>
  <header>
    <!-------------------------- Navbar 1 -------------------------->
    <nav class="navbar navbar-light bg-light px-5 nav-link">
      <div>
        <img src="../assets/img/logo.png" alt="" />
      </div>
      <div class="nav-item d-flex">
        <router-link class="nav-link text-dark py-0" to="/galery"
          >Galery</router-link
        >
        <router-link to="/" class="nav-link text-dark py-0">Home</router-link>
        <router-link to="/form" class="nav-link text-dark py-0"
          >Shipping</router-link
        >
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
