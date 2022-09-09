<template>
    <div class="container">
        <Breadcrumbs/>
        <div class="row">
            <div class="col-9">
                <Products :products="products"/>
            </div>
            <div class="col-3">
                <Aside/>
            </div>
        </div>
    </div>
</template>

<script setup>
import Products from "../components/Products.vue";
</script>

<script>
import axios from "axios";
import {useRoute} from "vue-router/dist/vue-router";

export default {
    data() {
        return {
            products: null,
        }
    },
    async mounted() {
        try {
            this.products = (await axios.get(`http://127.0.0.1:8000/api/product-categories/${useRoute().params.categorySlug}`)).data.data.products;
        } catch (error) {
            console.log(error);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
