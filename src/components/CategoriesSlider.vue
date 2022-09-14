<template>
    <Splide class="category-slider pb-4 mb-3" v-if="categoriesForSlider.length !== 0">
        <SplideSlide v-for="categorySlide in categoriesForSlider">
            <div class="row">
                <div class="col-4 flex-column" v-for="category in categorySlide">
                    <RouterLink
                        class="category-slider__item d-flex flex-column d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded w-100 p-2 mb-2"
                        :to="{ name: 'category-detail', params: { categorySlug: category.slug } }"
                    >
                        <div class="text-end">{{ category.name }}</div>
                        <div class="mh-0 h-100">
                            <img src="/images/product-1.jpg" alt="" class="mh-0 h-100">
                        </div>
                    </RouterLink>
                </div>
            </div>
        </SplideSlide>
    </Splide>
</template>

<script setup>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
</script>

<script>
export default {
    props: {
        categories: Array
    },
    computed: {
        categoriesForSlider() {
            let categoriesSlides = [];

            for (let i = 0; i < this.categories.length; i += 9) {
                categoriesSlides.push(this.categories.slice(i, i + 9));
            }

            return categoriesSlides;
        }
    }
}
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
    }
}
</style>