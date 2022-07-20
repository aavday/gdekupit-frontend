<template>
    <Splide class="category-slider pb-4 mb-3">
        <SplideSlide v-for="item in 3">
            <div class="row">
                <div class="col-3 flex-column">
                    <a
                        class="category-slider__item d-flex flex-column d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded w-100 p-2 mb-2"
                        v-for="item in 3"
                    >
                        <div class="text-end">Аппараты ручной дуговой сварки (ММА)</div>
                        <div class="mh-0 h-100">
                            <img src="/images/product-1.jpg" alt="" class="mh-0 h-100">
                        </div>
                    </a>
                </div>
                <div class="col-3">
                    <a class="category-slider__item d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded category-slider__item-double w-100 p-2 mb-2">
                        <div class="text-end">Cварочные полуавтоматы (MIG/MAG)</div>
                        <div class="mh-0 h-100">
                            <img src="/images/product-1.jpg" alt="" class="mh-0 h-100">
                        </div>
                    </a>
                    <a class="category-slider__item d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded w-100 p-2 mb-2">
                        <div class="text-end">Сварочные источники и трактора (SAW)</div>
                        <div class="mh-0 h-100">
                            <img src="/images/product-1.jpg" alt="" class="mh-0 h-100">
                        </div>
                    </a>
                </div>
                <div class="col-6">
                    <a class="category-slider__item d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded category-slider__item-double w-100 p-2 mb-2">
                        <div class="text-end">Сварочные полуавтоматы (MIG/MAG)</div>
                        <div class="mh-0 h-100">
                            <img src="/images/product-1.jpg" alt="" class="mh-0 h-100">
                        </div>
                    </a>
                    <a class="category-slider__item d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded w-100 p-2 mb-2">
                        <div class="text-end">Сварочные источники и трактора (SAW)</div>
                        <div class="mh-0 h-100">
                            <img src="/images/product-1.jpg" alt="" class="mh-0 h-100">
                        </div>
                    </a>
                </div>
            </div>
        </SplideSlide>
    </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
</script>

<style lang="scss">
.category-slider {
    .splide__arrow {
        width: 3rem;
        height: 3rem;

        &--prev {
            left: -4rem;
        }

        &--next {
            right: -4rem;
        }
    }

    &__item {
        margin-bottom: calc(var(--bs-gutter-x) * .5 * 2);
        margin-top: calc(var(--bs-gutter-x) * .5 * 2);
        display: block;
        height: 150px;

        &-double {
            height: calc(300px + calc(var(--bs-gutter-x) * .5 * 2));
        }
    }
}
</style>