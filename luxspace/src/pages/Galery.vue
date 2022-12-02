
<template>
  <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Galery :imageLink="img"></Galery>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Navbar from "@/components/navbarComponent.vue";
import Breadcrumb from "@/components/breadcrumbComponent.vue";
import Galery from "@/components/galeriComponent.vue";
import Footer from "@/components/footerComponent.vue";
import Copyright from "@/components/copyrightComponent.vue";

export default {
  name: "GaleryPage",
  components: {
    Navbar,
    Breadcrumb,
    Galery,
    Footer,
    Copyright,
  },
  data() {
    return {
      img: "chair",
    };
  },
};
</script>

<style>
</style>