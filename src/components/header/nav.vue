<script setup>
const links = [
    { label: "ثبت آدرس", link: "/add" },
    { label: "مشاهده آدرس‌ها", link: "/" },
];
</script>
<template>
    <nav class="header-nav">
        <RouterLink exactActiveClass="header-nav__link--active" class="header-nav__link" v-for="(link, index) in links"
            :key="`HeaderNavLink${index}`" :to="link.link">{{
                link.label }}</RouterLink>
    </nav>
</template>
<style lang="scss" scoped>
.header-nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &__link {
        font-size: 0.875rem;
        color: var(--ac-primary-color);
        font-weight: bold;

        &--active {
            color: var(--ac-text-color);
        }
    }
}
</style>