<template>
    <div class="container p-4">
      <!-------------------------- konten1 -------------------------->
      <div class="container d-flex align-item-center mt-5">
        <div class="content-satu d-flex">
          <div class="thubnail-item d-flex flex-column justify-content-between">
            <div class="item-1 d-flex">
              <img style="border-radius: 7px" src="../assets/img/side-1.png" alt="">
            </div>
            <div class="item-2">
              <img style="border-radius: 7px" src="../assets/img/side-3.png" alt="">
            </div>
            <div class="item-3">
              <img style="border-radius: 7px" src="../assets/img/side-2.png" alt="">
            </div>
            <div class="item-4">
              <img style="border-radius: 7px" src="../assets/img/side-1.png" alt="">
            </div>
            <div class="item-5">
              <img style="border-radius: 7px" src="../assets/img/side-3.png" alt="">
            </div>
          </div>
          <div class="kursi mx-4">
            <img style="border-radius: 15px;" class="" src="../assets/img/chair.png" alt="">
          </div>
          <div class="deskripsi"></div>
        </div>
        <div class="content-dua">
          <h1>Chair Thatty</h1>
          <p>IDR 12.000.000</p>
          <button class="mb-3 btn btn-warning text-dark"><img class="btn-cart" src="../assets/img/cart-check.svg" alt="">&nbsp;&nbsp;Add to Cart</button>
          <hr>
          <p class="about-product mt-4"><strong>About Product</strong></p>
          <p class="about-satu">Tailor to a level of perfection synonymous with that of a Savile Row suit and with understated quality in the detail, jetty has been influenced by timeless 1950s style.</p>
          <p class="about-dua">Providing a subtle nod to the past, Jetty also provides a perfect solution for the way we work today. A comprehensive product family, Jetty features a variety of elegant chairs and sofas.</p>
          <p></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'galeriComponent'
    }
</script>

<style scoped>
  button {
    border-radius: 50px;
  }

</style>