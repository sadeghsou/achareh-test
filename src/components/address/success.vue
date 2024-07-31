<script setup lang="ts">
import Check from "vue-material-design-icons/Check.vue";
</script>
<template>
    <div class="address-success">
        <div class="address-success__icon rounded-circle">
            <Check size="1rem" />
        </div>
        <span class="address-success__text">اطلاعات شما با موفقیت ثبت شد</span>
        <RouterLink class="address-success__link rounded" to="/">مشاهده اطلاعات</RouterLink>
    </div>
</template>
<style lang="scss" scoped>
.address-success {
    height: 100vh;
    height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;

    &__icon {
        width: 2rem;
        height: 2rem;
        border: 1px solid var(--ac-gray4-color);
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__text {
        font-size: 0.875rem;
        color: var(--ac-text-color);
        margin-top: 0.5rem;
        margin-bottom: 2.5rem;
    }

    &__link {
        width: 100%;
        border: 2px solid var(--ac-primary-color);
        background-color: transparent;
        color: var(--ac-primary-color);
        padding-block: 0.75rem;
        text-align: center;
    }
}
</style>