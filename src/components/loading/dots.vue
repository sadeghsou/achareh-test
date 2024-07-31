<script setup>
defineProps({ white: Boolean });
</script>
<template>
    <div class="loading-dots" :class="{ 'loading-dots__white': white }">
        <div class="loading-dots__dot rounded-circle"></div>
        <div class="loading-dots__dot rounded-circle"></div>
        <div class="loading-dots__dot rounded-circle"></div>
    </div>
</template>
<style lang="scss" scoped>
@keyframes dots {

    0%,
    100% {
        width: 0.875rem;
        height: 0.875rem;
    }

    50% {
        width: 0.625rem;
        height: 0.625rem;
    }
}

.loading-dots {
    height: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    div {
        background-color: var(--ac-primary-color);
    }

    &__white {
        div {
            background-color: white;
        }
    }

    &__dot {
        width: 0.875rem;
        height: 0.875rem;
        background-color: white;
        animation: dots infinite .8s;

        &:nth-child(2) {
            animation: dots infinite .8s .4s;
        }
    }
}
</style>