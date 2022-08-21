<template>
    <div>
        <ProductCard v-for="product in products" :product="product"/>
    </div>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>

<script>
import axios from "axios";

export default {
    data() {
        return {
            loading: true,
            products: null,
        }
    },
    async mounted() {
        try {
            this.products = (await axios.get('http://127.0.0.1:8000/api/products')).data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style scoped>

</style>