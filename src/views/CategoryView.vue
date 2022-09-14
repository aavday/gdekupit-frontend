<template>
    <div class="container">
        <Breadcrumbs/>
        <CategoriesSlider v-if="childCategories" :categories="childCategories"/>
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
import {useRoute} from "vue-router/dist/vue-router";

export default {
    data() {
        return {
            products: null,
            childCategories: null
        }
    },
    async mounted() {
        try {
            const category = (await axios.get(`http://127.0.0.1:8000/api/product-categories-by-slug/${useRoute().params.categorySlug}`)).data.data
            this.products = category.products;
            this.childCategories = category.child_categories
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
