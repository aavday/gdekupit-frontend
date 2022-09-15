<template>
    <div v-if="this.brands.length !== 0">
        <h2>Производители</h2>
        <div class="row mb-4 font-medium">
            <div class="col-4" v-for="brand in this.brands">
                <router-link :to="{ name: 'brand-page', params: { brandSlug: brand.slug } }">
                    {{ brand.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<script>
export default {
    props: {
        brands: Array
    }
}
</script>

<style scoped>

</style>