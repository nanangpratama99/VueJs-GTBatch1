<template>
  <nav class="navbar navbar-expand-lg px-5 navbar-light bg-dark">
    <div class="collapse navbar-collapse" id="navbarNav">
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
      </ul>
    </div>
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
</script>