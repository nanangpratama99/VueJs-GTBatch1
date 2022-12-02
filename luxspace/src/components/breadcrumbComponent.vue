<template>
  <nav class="navbar navbar-expand-lg px-5 navbar-light bg-dark">
<<<<<<< HEAD
    <div class="collapse navbar-collapse" id="navbarNav">
=======
    <!-- <div class="collapse navbar-collapse" id="navbarNav">
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link text-white" href="#">Home /&nbsp;</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Office Room /&nbsp;</a>
        </li>

        <router-link to="/" v-show="breadLink == '/form'">
          <li class="nav-item">
            <a class="nav-link disabled text-white" href="#">Detail</a>
          </li>
        </router-link>
<<<<<<< HEAD
      </ul>
    </div>
=======

      </ul>
    </div> -->

    <a class="detail ml-5" href="#">Home /&nbsp;</a>
    <a class="detail" href="#">Office Room /&nbsp;</a>
    <router-link to="/" v-show="breadLink == '/'" class="detail"
      ><b>Detail</b></router-link
    >
    <router-link to="/" v-show="breadLink == '/Form'" class="detail"
      >Detail</router-link
    >
    <router-link to="/galery" v-show="breadLink == '/galery'" class="detail"
      ><b>Galery</b></router-link
    >
    <router-link to="/form" v-show="breadLink == '/form'" class="detail"
      >&nbsp;<b>Shipping Form</b></router-link
    >
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
  </nav>
</template>

<script>
export default {
  name: "breadCrumb",
  data() {
    return {
      breadLink: this.$route.path,
    };
  },
};
<<<<<<< HEAD
</script>
=======
</script>

<style scoped>
.detail {
  color: rgb(255, 255, 255);
  text-decoration: none;
}
</style>
>>>>>>> 477db31c4abc7a2c28b07ae7bb673ccfdb78e604
