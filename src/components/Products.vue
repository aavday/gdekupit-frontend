<template>
    <div>
        <ProductCard v-if="this.products" v-for="product in this.products" :product="product"/>
    </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<script>
export default {
    props: {
        products: Array
    }
}
</script>

<style scoped>

</style>