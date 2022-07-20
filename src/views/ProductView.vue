<template>
    <div class="container">
        <Breadcrumbs/>
        <CategoriesSlider/>
        <div class="row">
            <div class="col-9">
                <ProductCard v-for="item in 3"/>
            </div>
            <div class="col-3">
                <Aside/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import CategoriesSlider from "../components/CategoriesSlider.vue";
</script>

<style lang="scss" scoped>

</style>
