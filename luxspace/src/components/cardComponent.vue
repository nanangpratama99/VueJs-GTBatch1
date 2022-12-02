<template>
  <div
    style="border-radius: 15px"
    class="
      bg-white
      p-3
      justify-content-around
      pt-0
      pb-3
      shadow
      p-3
      mb-5
      bg-white
    "
  >
    <a
      href="#"
      @click.prevent="$emit('changePicture', cardImage)"
      class="chairs"
    >
      <img
        style="border-radius: 10px"
        class="img"
        :src="require('@/assets/img/' + cardImage + '.png')"
        alt="chairs"
      />
    </a>
    <p class="font-weight-bold mt-5 my-0">{{ cardTitle }}</p>
    <p>IDR {{ cardPrice }}</p>
    <button class="btn btn-warning text-white">Buy Now</button>
    <button class="btn btn-outline-danger ml-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-heart-fill mr-2"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        /></svg
      >Save
    </button>
  </div>
</template>

<script>
export default {
  name: "cardComponent",
  props: ["cardImage", "cardPrice", "cardTitle"],
};
</script>

<style>
</style>>