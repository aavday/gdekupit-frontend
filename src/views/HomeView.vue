<template>
    <div class="container">
        <Breadcrumbs/>
        <CategoriesSlider/>
        <div class="row">
            <div class="col-9">
                <Products/>
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

<style lang="scss" scoped>

</style>
