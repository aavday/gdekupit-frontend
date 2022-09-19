<template>
    <div class="container">
        <Breadcrumbs/>
        <CategoriesSlider v-if="childCategories" :categories="childCategories"/>
        <Brands v-if="brands" :brands="brands"></Brands>
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
import Brands from "../components/Brands.vue";
</script>

<script>
import axios from "axios";
import {useRoute} from "vue-router/dist/vue-router";

export default {
    data() {
        return {
            products: null,
            childCategories: null,
            brands: null
        }
    },
    async mounted() {
        try {
            const category = (await axios.get(`http://127.0.0.1:8000/api/product-categories-by-slug/${useRoute().params.categorySlug}`)).data.data
            this.childCategories = category.child_categories
            this.brands = category.brands
            this.products = category.products;

            this.childCategories.forEach(category => {
                this.pushProductsFromChildCategory(category);
                this.pushBrandsFromChildCategory(category);
            });
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        pushProductsFromChildCategory(category) {
            category.products.forEach(product => this.products.push(product))

            category.child_categories.forEach(category => {
                this.pushProductsFromChildCategory(category);
            });
        },
        pushBrandsFromChildCategory(category) {
            category.brands.forEach(product => this.brands.push(product))

            category.child_categories.forEach(category => {
                this.pushBrandsFromChildCategory(category);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
