<template>
   
        <div style="border-radius: 12px" class="bg-white p-3 justify-content-around pt-4">
            <a href="#" class="chairs">
                <img class="img" :src="require('@/assets/img/' + cardImage + '.png')" alt="chairs">
            </a>
            <p class="font-weight-bold mt-3 my-0">{{ cardTitle }}</p>
            <p>IDR {{ cardPrice }}</p>
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