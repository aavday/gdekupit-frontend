<template>
    <div class="p-3 product-card border rounded shadow mb-4" v-if="this.reviews">
        <h2 class="mb-2 fw-bold font-big">Отзывы</h2>
        <div>
            <div v-for="review in this.reviews" class="mb-3">
                <p class="fw-bold font-medium">{{ review.name }}</p>
                <p>
                    <StarRating :rating="review.rating"/>
                </p>
                <p>{{ review.review_text }}</p>
                <div class="d-flex">
                    <FontAwesomeIcon :icon="['fas', 'fa-plus']" class="font-big color-green me-3"/>
                    <p>{{ review.pluses }}</p>
                </div>
                <div class="d-flex">
                    <FontAwesomeIcon :icon="['fas', 'fa-minus']" class="font-big color-red me-3"/>
                    <p>{{ review.minuses }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import StarRating from "../components/StarRating.vue";
</script>

<script>
export default {
    props: {
        reviews: Object
    },
}
</script>

<style scoped>

</style>
