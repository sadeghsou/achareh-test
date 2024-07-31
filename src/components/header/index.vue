<script setup>
import HeaderNav from "./nav.vue";
</script>
<template>
    <header class="header">
        <img class="header__logo" src="/logo.png" />
        <HeaderNav class="header__nav" />
    </header>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0.75rem;
    box-shadow: 0 0 4px #00000026;

    &__logo {
        height: 100%;
    }
}
</style>