<template>
  <div id="">
    <Navbar></Navbar>
    <Breadcumb></Breadcumb>
    <Form></Form>
<<<<<<< HEAD
=======
    <SuccessForm class="d-none"></SuccessForm>
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>
  
  <script>
import Navbar from "../components/navbarComponent.vue";
import Form from "../components/formComponent.vue";
import Footer from "../components/footerComponent.vue";
import Copyright from "../components/copyrightComponent.vue";
<<<<<<< HEAD
import Breadcumb from "@/components/breadcrumbComponent.vue";
=======
import Breadcumb from "../components/breadcrumbComponent.vue";
import SuccessForm from "../components/successForm.vue";
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604

export default {
  name: "FormS",
  components: {
    Navbar,
    Breadcumb,
    Form,
    Footer,
    Copyright,
<<<<<<< HEAD
=======
    SuccessForm,
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
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
  