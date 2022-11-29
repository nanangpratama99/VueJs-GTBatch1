<template>
        <div style="border-radius: 15px" class="bg-white p-3 justify-content-around pt-0 pb-3">
            <a href="#" class="chairs">
                <img style="border-radius: 10px" class="img" :src="require('@/assets/img/' + cardImage + '.png')" alt="chairs">
            </a>
            <p class="font-weight-bold mt-5 my-0">{{ cardTitle }}</p>
            <p>IDR {{ cardPrice }}</p>
            <button class="btn btn-warning text-white">Buy Now</button>
    </div>
</template>

<script>
export default {
    name : 'cardComponent',
    props : [
        "cardImage", "cardPrice", "cardTitle"
    ]
}
</script>

<style>
</style>