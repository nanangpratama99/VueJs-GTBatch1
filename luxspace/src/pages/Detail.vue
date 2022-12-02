<template>
  <div id="">
    <!--------------------------- Navbar --------------------------->
    <Navbar></Navbar>
    <!--------------------------- Bread Crumb --------------------------->
    <Breadcrumb></Breadcrumb>
    <!------------------------- Galeri Komponent ------------------------->
    <Galery :imageLink="img"></Galery>
    <!----------------------- Slidebar Component ----------------------->
    <Slider @changePicture="ambilDariSlider"></Slider>
    <!-------------------------- Footer Component -------------------------->
    <Footer></Footer>
    <!-- Copyritht Component -->
    <Copyright></Copyright>
  </div>
</template>
  
  <script>
import Navbar from "../components/navbarComponent.vue";
import Breadcrumb from "../components/breadcrumbComponent.vue";
import Galery from "../components/galeriComponent.vue";
import Slider from "../components/sliderComponent.vue";
import Footer from "../components/footerComponent.vue";
import Copyright from "../components/copyrightComponent.vue";

export default {
  name: "DetailS",
  components: {
    Navbar,
    Breadcrumb,
    Galery,
    Slider,
    Footer,
    Copyright,
  },

  // Return nilai slider
  data() {
    return {
      img: "chair",
    };
  },

  // Function ambil data Slider
  methods: {
    ambilDariSlider: function (cardImage1) {
      (this.img = cardImage1),
        document
          .getElementById("scroll")
          .scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
  
  <style>
/* #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
</style>
  