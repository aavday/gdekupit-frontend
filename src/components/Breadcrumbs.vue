<template>
    <nav style="--bs-breadcrumb-divider: '>>';" aria-label="breadcrumb">
        <ol class="breadcrumb pb-2 pt-4">
            <li class="breadcrumb-item">
                <a href="/">Главная</a>
            </li>
            <li
                class="breadcrumb-item"
                aria-current="page"
                v-if="breadcrumbs"
                v-for="item in breadcrumbs"
            >
                <RouterLink :to="{ name: item.routeName, params: item.routeParams }">
                    {{ item.name }}
                </RouterLink>
            </li>
        </ol>
    </nav>
</template>

<script setup>

</script>

<script>
import axios from "axios";

export default {
    data() {
        return {
            breadcrumbs: []
        }
    },
    async mounted() {
        const paths = document.location.href.match('(http[s]?:\\/\\/)?([^\\/\\s]+\\/)(.*)')[3].split('/');

        switch(paths[0]) {
            case 'products':
                try {
                    const product = (await axios.get(`http://127.0.0.1:8000/api/products-by-slug/${paths[1]}`)).data.data;

                    this.addBreadcrumb(product.category.name, 'category-page', { categorySlug: product.category.slug })
                    this.addBreadcrumb(product.name, 'product-page', { productSlug: product.slug })
                } catch(error) {
                    console.log(error);
                }

                break;

            case 'categories':
                try {
                    const category = (await axios.get(`http://127.0.0.1:8000/api/product-categories-by-slug/${paths[1]}`)).data.data;

                    this.addBreadcrumb(category.name, 'category-page', { categorySlug: category.slug })
                } catch(error) {
                    console.log(error);
                }

                break;

            case 'brands':
                try {
                    const brand = (await axios.get(`http://127.0.0.1:8000/api/product-brands-by-slug/${paths[1]}`)).data.data;

                    this.addBreadcrumb(brand.name, 'brand-page', { brandSlug: brand.slug })
                } catch(error) {
                    console.log(error);
                }

                break;
        }
    },
    methods: {
        addBreadcrumb(name, routeName, routeParams) {
            this.breadcrumbs.push({
                name: name,
                routeName: routeName,
                routeParams: routeParams
            });
        }
    }
}
</script>

<style scoped>
.breadcrumb-item a.router-link-active {
    font-weight: bold;
}
</style>
