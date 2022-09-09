<template>
    <div class="p-3 product-card border rounded shadow mb-4" v-if="this.offers">
        <h2 class="mb-2 fw-bold font-big">Где купить</h2>
        <div>
            <div v-for="offer in this.offers" class="row align-items-center mb-4">
                <div class="col-1">
                    <img src="/images/product-1.jpg" alt="" class="w-100">
                </div>
                <div class="col-6">
                    <div class="d-flex flex-column">
                        <div class="fw-bold">{{ offer.name }}</div>
                        <div>
                            <a :href="`/merchants/${offer.merchant.slug}`" class="hover-red">{{ offer.merchant.name }}</a>
                            <span> | </span>
                            <span>Доставка из {{ offer.merchant.merchant_city }}</span>
                        </div>
                    </div>
                </div>
                <div class="col-1">
                    <span
                        class="color-rectangle rounded border cursor-pointer"
                        :style="{ backgroundColor: offer.color.color_hex }"
                        :title="offer.color.name"
                    ></span>
                </div>
                <div class="col-3 d-flex flex-column">
                    <div class="fw-bold font-big">
                        {{ offer.price }} руб.
                    </div>
                    <a :href="offer.merchant.merchant_website">
                        <button class="button button-red text-decoration-none rounded">Перейти в магазин</button>
                    </a>
                </div>
                <div class="col-1">
                    <img src="/images/product-1.jpg" alt="" class="w-100">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        offers: Object
    },
}
</script>

<style lang="scss" scoped>
.color-rectangle {
    padding: 5px 15px;

    &:hover {
        transition: 0.1s;
        transform: scale(1.1);
    }
}
</style>
