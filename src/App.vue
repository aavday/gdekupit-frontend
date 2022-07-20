<template>
    <header class="header border-bottom navbar-light p-4 shadow">
        <div class="container d-flex align-items-center">
            <div class="d-flex flex-column text-center me-4">
                <router-link :to="{name: 'home'}">
                    <img src="/images/logo.jpg" alt="" class="header-logo">
                </router-link>
                <div class="fw-bold font-medium">Набережные Челны</div>
            </div>
            <div class="border px-2 me-2 rounded d-flex align-items-center header-catalog__btn cursor-pointer">
                <FontAwesomeIcon :icon="['fas', 'fa-bars']" class="text-secondary font-big me-2"/>
                <div>Каталог</div>
            </div>
            <input
                type="search"
                class="px-2 rounded-start header-search border-top border-end-0 border-bottom border-start"
                placeholder="Поиск по товару, например: iPhone 13"
            />
            <div class="px-2 border header-search__btn rounded-end d-flex align-items-center cursor-pointer">
                <FontAwesomeIcon :icon="['fas', 'fa-magnifying-glass']" class="text-secondary font-big"/>
            </div>
            <div class="cursor-pointer d-flex align-items-center">
                <FontAwesomeIcon :icon="['fas', 'fa-user']" class="text-secondary font-big mx-2"/>
                <span>Войти</span>
            </div>
        </div>
    </header>
    <main>
        <RouterView />
    </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>

</style>
