<template>
  <div id="">
    <Navbar></Navbar>
    <Breadcumb></Breadcumb>
    <Form></Form>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>
  
  <script>
import Navbar from "../components/navbarComponent.vue";
import Form from "../components/formComponent.vue";
import Footer from "../components/footerComponent.vue";
import Copyright from "../components/copyrightComponent.vue";
import Breadcumb from "@/components/breadcrumbComponent.vue";

export default {
  name: "FormS",
  components: {
    Navbar,
    Breadcumb,
    Form,
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
      this.img = cardImage1;
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
  