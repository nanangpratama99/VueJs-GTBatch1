<!-- <template> -->
    <!-------------------------- konten-2 -------------------------->
<!-- <div class="konten-dua bg-light py-5 px-5 text-dark">
  <h4>Complete Your Room</h4>
  <h4 class="mb-4">With What We Designed</h4>

  <div class="d-flex justify-content-around">
    <div style="border-radius: 15px" class="bg-img-katalog p-3 pb-5 bg-white">
      <img src="../assets/img/chair-1.png" alt="">
      <h6>Cangkir Mauttie</h6>
      <p>IDR 89.300.000</p>
    </div>
    <div style="border-radius: 15px" class="bg-img-katalog p-3 pb-5 bg-white">
      <img src="../assets/img/chair-2.png" alt="">
      <h6>Cangkir Mauttie</h6>
      <p>IDR 14.500.000</p>
    </div>
    <div style="border-radius: 15px" class="bg-img-katalog p-3 pb-5 bg-white">
      <img src="../assets/img/chair-3.png" alt="">
      <h6>Cangkir Mauttie</h6>
      <p>IDR 22.000.000</p>
    </div>
    <div style="border-radius: 15px" class="bg-img-katalog p-3 pb-5 bg-white">
      <img src="../assets/img/chair-4.png" alt="">
      <h6>Cangkir Mauttie</h6>
      <p>IDR 12.000.000</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'sliderComponent'
}

</script> -->

<template>
  <div class="p-5 mt-5 " id="bg-card">
      <h3>Completed Your Room</h3>
      <h3>With What We Designed</h3>
      <div class="d-flex justify-content-between mt-4">
          <Card v-for="(item, index) in arrCardTitle"
          :key="index"
          :card-title="item"
          :card-price="arrCardPrice[index]"
          :card-image="arrCardImage[index]"></Card>
      </div>
  </div>
</template>

<script>
import Card from './cardComponent.vue';
export default {
  name : 'sliderComponent',
  components : {
      Card
  },
  data() {
      return{
          arrCardTitle : ["Cangkir Mauttie", "Saman Kakka", "Lino Dino", "Syail Ammeno"],
          arrCardPrice : ["89.300.000", "14.500.000", "IDR 22.000.000", "IDR 12.000.000"],
          arrCardImage : ["chair-4", "chair-3", "chair-2", "chair-1"]
      }
  }
}
</script>

<style scoped>
#bg-card {
    background-color: rgba(242, 242, 242, 0.655);
}
</style>