<template>
    <div id="">
      <!--------------------------- Navbar --------------------------->
      <Navbar></Navbar>
      <!--------------------------- Bread Crumb --------------------------->
      <breadCrumb></breadCrumb>
      <!------------------------- Galeri Komponent ------------------------->
      <galeriComponentVue :imageLink="img"></galeriComponentVue>
      <!----------------------- Slidebar Component ----------------------->
      <sliderComponentVue @changePicture="ambilDariSlider"></sliderComponentVue>
      <!-------------------------- Footer Component -------------------------->
      <footerComponentVue></footerComponentVue>
      <!-- Copyritht Component -->
      <copyrightComponentVue></copyrightComponentVue>
  </div>
  </template>
  
  <script>
  import Navbar from '../components/navbarComponent.vue';
  import breadCrumb from '../components/breadcrumbComponent.vue';
  import galeriComponentVue from '../components/galeriComponent.vue';
  import sliderComponentVue from '../components/sliderComponent.vue';
  import footerComponentVue from '../components/footerComponent.vue';
  import copyrightComponentVue from '../components/copyrightComponent.vue';
  
  export default {
    name: 'DetailS',
    components: {
      Navbar,
      breadCrumb,
      galeriComponentVue,
      sliderComponentVue,
      footerComponentVue,
      copyrightComponentVue
    },
  
    // Return nilai slider
    data(){
      return{
        img : "chair"
      }
    },
  
    // Function ambil data Slider
    methods : {
      ambilDariSlider : function(cardImage1){
        this.img = cardImage1
      }
    }
  }
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
  