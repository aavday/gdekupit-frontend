<template>
    <div class="container">
        <CategoriesSlider v-if="categories" :categories="categories"/>
        <div class="row">
            <div class="col-9">
                <Products v-if="products" :products="products"/>
            </div>
            <div class="col-3">
                <Aside/>
            </div>
        </div>
    </div>
</template>

<script setup>
import CategoriesSlider from "../components/CategoriesSlider.vue";
import Products from "../components/Products.vue";
</script>

<script>
import axios from "axios";

export default {
    data() {
        return {
            products: null,
            categories: null
        }
    },
    async mounted() {
        try {
            this.products = (await axios.get('http://127.0.0.1:8000/api/products')).data.data;
            this.categories = (await axios.get('http://127.0.0.1:8000/api/product-categories-root')).data.data;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
