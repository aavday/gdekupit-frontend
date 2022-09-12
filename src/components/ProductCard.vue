<template>
    <div class="p-3 product-card border rounded shadow mb-4">
        <router-link
            class="product-card__title text-decoration-none mb-2 fw-bold font-big"
            :to="{ name: 'product-detail', params: { productSlug: this.product.slug } }"
        >
            {{ this.product.name }}
        </router-link>
        <div class="row d-flex justify-content-between">
            <div class="col-4">
                <img
                    src="/images/product-1.jpg"
                    alt="Сварочный аппарат-инвертор Ресанта MIG/MAG R29000 I"
                    class="border rounded w-100"
                >
            </div>
            <div class="col-4">
                <ul class="product-card__characteristics">
                    <li>
                        Характеристика...1
                    </li>
                    <li>
                        Характеристика...2
                    </li>
                    <li>
                        Характеристика...3
                    </li>
                    <li>
                        Характеристика...4
                    </li>
                    <li>
                        Характеристика...5
                    </li>
                    <li>
                        Характеристика...6
                    </li>
                    <li>
                        Характеристика...7
                    </li>
                </ul>
            </div>
            <div class="col-4 text-end">
                <div class="product-card__price fw-bold font-medium" v-if="this.product.price_from">ЦЕНА ОТ {{ this.product.price_from }} рублей</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: Object
    },
}
</script>

<style scoped>

</style>
