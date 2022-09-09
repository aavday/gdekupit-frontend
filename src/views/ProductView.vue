<template>
    <div class="container">
        <Breadcrumbs/>
        <div class="row" v-if="!loading">
            <div class="col-9">
                <ul class="nav nav-tabs border-0 mb-4" id="myTab" role="tablist">
                    <li class="nav-item me-3" role="presentation">
                        <button class="nav-link border" id="offers-tab" data-bs-toggle="tab" data-bs-target="#offers" type="button" role="tab" aria-controls="offers" aria-selected="true">
                            Где купить
                        </button>
                    </li>
                    <li class="nav-item me-3" role="presentation">
                        <button class="nav-link border active" id="product-tab" data-bs-toggle="tab" data-bs-target="#product" type="button" role="tab" aria-controls="product" aria-selected="false">
                            Описание
                        </button>
                    </li>
                    <li class="nav-item me-3" role="presentation">
                        <button class="nav-link border" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                            Отзывы
                        </button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade" id="offers" role="tabpanel" aria-labelledby="offers-tab">
                        <ProductOffers v-if="product.offers" :offers="product.offers"/>
                    </div>
                    <div class="tab-pane fade show active" id="product" role="tabpanel" aria-labelledby="product-tab">
                        <ProductCard v-if="product" :product="product"/>
                    </div>
                    <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                        <ProductReviews v-if="product.reviews" :reviews="product.reviews"/>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <Aside/>
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductCard from "../components/ProductCard.vue";
import ProductOffers from "../components/ProductOffers.vue";
import ProductReviews from "../components/ProductReviews.vue";
</script>

<script>
import axios from "axios";
import {useRoute} from "vue-router/dist/vue-router";

export default {
    data() {
        return {
            loading: true,
            product: null,
        }
    },
    async mounted() {
        try {
            this.product = (await axios.get(`http://127.0.0.1:8000/api/products/${useRoute().params.productSlug}`)).data.data;
        } catch (error) {
            console.log(error);
        }

        this.loading = false;
    }
}
</script>

<style lang="scss" scoped>
.nav {
    &-link {
        color: inherit;
        border: none;

        &:hover {
            color: inherit;
        }

        &.active {
            font-weight: bold;
            transition: 0.2s;
            transform: scale(1.1);
        }
    }
}
</style>
