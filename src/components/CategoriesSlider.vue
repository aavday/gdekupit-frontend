<template>
    <Splide class="category-slider pb-4 mb-3">
        <SplideSlide v-for="categoryGroup in this.categories">
            <div class="row">
                <div class="col-4 flex-column" v-for="column in categoryGroup">
                    <a
                        class="category-slider__item d-flex flex-column d-flex flex-column text-black border text-decoration-none fw-bold font-medium rounded w-100 p-2 mb-2"
                        v-for="category in column"
                        :href="`/categories/${category.slug}`"
                    >
                        <div class="text-end">{{ category.name }}</div>
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
import {Splide, SplideSlide} from '@splidejs/vue-splide';</script>

<script>
import axios from "axios";

export default {
    data() {
        return {
            loading: true,
            categories: null,
        }
    },
    async mounted() {
        try {
            const categories = (await axios.get('http://127.0.0.1:8000/api/product-categories')).data.data;
            const categoriesColumns = [];

            for (let i = 0; i < categories.length; i += 3) {
                categoriesColumns.push(categories.slice(i, i + 3));
            }

            let categoriesSlides = [];

            for (let i = 0; i < categoriesColumns.length; i += 3) {
                categoriesSlides.push(categoriesColumns.slice(i, i + 3));
            }

            this.categories = categoriesSlides;
        } catch (error) {
            console.log(error);
        }

        this.loading = false;
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