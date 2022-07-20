<template>
    <nav style="--bs-breadcrumb-divider: '>>';" aria-label="breadcrumb">
        <ol class="breadcrumb pb-2 pt-4">
            <li class="breadcrumb-item">
                <a href="/">Главная</a>
            </li>
            <li class="breadcrumb-item" aria-current="page">
                <a href="">Сварочное оборудование</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                <a href="">Сварочные аппараты</a>
            </li>
        </ol>
    </nav>
</template>

<script setup>

</script>

<style scoped>
.breadcrumb-item.active a {
    font-weight: bold;
}
</style>
