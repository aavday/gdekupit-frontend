<template>
    <div class="d-flex">
        <div v-if="fullStars">
            <FontAwesomeIcon
                @click="$emit('input', star)"
                class="rating-star" :icon="['fas', 'fa-star']"
                v-for="star in fullStars"
                :key="'full-' + star"
            />
        </div>
        <div v-if="halfStar">
            <FontAwesomeIcon
                class="rating-star" :icon="['fas', 'fa-star-half-alt']"
                v-if="halfStar"
            />
        </div>
        <div v-if="emptyStars">
            <FontAwesomeIcon
                @click="$emit('input', star)"
                class="rating-star" :icon="['far', 'fa-star']"
                v-for="star in emptyStars"
                :key="'empty-' + star"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "StarRating",
    props: {
        rating: Number
    },
    computed: {
        halfStar() {
            const fraction = Math.round((this.rating - Math.floor(this.rating)) * 100);

            return fraction > 0 && fraction < 50;
        },
        fullStars() {
            return Math.round(this.rating);
        },
        emptyStars() {
            return 5 - Math.ceil(this.rating);
        }
    }
}
</script>

<style scoped>
</style>
