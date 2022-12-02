<template>
  <div class="container p-4" id="scroll">
    <!-------------------------- konten1 -------------------------->
    <div class="container d-flex align-item-center mt-5">
      <div class="content-satu d-flex">
        <div class="thubnail-item d-flex flex-column">
          <div
            style="border-radius: 10px"
            class="item-1 d-flex kursi mx-4 shadow p-1 mb-3 mt-1 bg-white"
          >
            <img
              style="border-radius: 7px"
              src="../assets/img/side-1.png"
              alt=""
            />
          </div>
          <div
            style="border-radius: 10px"
            class="item-2 kursi mx-4 shadow p-1 bg-white mb-3"
          >
            <img
              style="border-radius: 7px"
              src="../assets/img/side-3.png"
              alt=""
            />
          </div>
          <div
            style="border-radius: 10px"
            class="item-3 kursi mx-4 shadow p-1 bg-white mb-3"
          >
            <img
              style="border-radius: 7px"
              src="../assets/img/side-2.png"
              alt=""
            />
          </div>
          <div
            style="border-radius: 10px"
            class="item-4 kursi mx-4 shadow p-1 bg-white mb-3"
          >
            <img
              style="border-radius: 7px"
              src="../assets/img/side-1.png"
              alt=""
            />
          </div>
          <div
            style="border-radius: 10px"
            class="item-5 kursi mx-4 shadow p-1 bg-white mb-3"
          >
            <img
              style="border-radius: 7px"
              src="../assets/img/side-3.png"
              alt=""
            />
          </div>
        </div>
        <div
          style="border-radius: 15px"
          class="kursi mx-4 shadow p-3 mb-5 bg-white"
        >
          <img
            style="width: 560px; height: 609px; border-radius: 15px"
            :src="require('@/assets/img/' + imageLink + '.png')"
            alt=""
            id="imgParent"
          />
        </div>

        <div class="deskripsi"></div>
      </div>
      <div class="content-dua">
        <h1>Chair Thatty</h1>
        <p>IDR 12.000.000</p>
        <router-link to="/Form"
          ><button class="mb-3 btn btn-warning text-dark">
            <img
              class="btn-cart"
              src="../assets/img/cart-check.svg"
              alt=""
            />&nbsp;&nbsp;Add to Cart
          </button></router-link
        >
        <hr />
        <p class="about-product mt-4"><strong>About Product</strong></p>
        <p class="about-satu">
          Tailor to a level of perfection synonymous with that of a Savile Row
          suit and with understated quality in the detail, jetty has been
          influenced by timeless 1950s style.
        </p>
        <p class="about-dua">
          Providing a subtle nod to the past, Jetty also provides a perfect
          solution for the way we work today. A comprehensive product family,
          Jetty features a variety of elegant chairs and sofas.
        </p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "galeriComponent",
  props: ["imageLink"],
};
</script>

<style scoped>
button {
  border-radius: 50px;
}
</style>