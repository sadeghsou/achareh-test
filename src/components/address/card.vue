<script setup lang="ts">
interface AddressCardProps { address: { first_name: string; last_name: string; gender: string; coordinate_mobile: string; coordinate_phone_number?: string; address: string; } }
defineProps<AddressCardProps>();
</script>
<template>
    <div class="address-card rounded card">
        <div class="address-card__item">
            <span class="address-card__item--title">نام و نام خانوادگی</span>
            <span class="address-card__item--value">{{ address.first_name }} {{ address.last_name }}</span>
        </div>
        <div class="address-card__item">
            <span class="address-card__item--title">جنسیت</span>
            <span class="address-card__item--value">{{ address.gender }}</span>
        </div>
        <div class="address-card__item">
            <span class="address-card__item--title">شماره تلفن همراه</span>
            <span class="address-card__item--value">{{ address.coordinate_mobile }}</span>
        </div>
        <div class="address-card__item">
            <span class="address-card__item--title">شماره تلفن ثابت</span>
            <span class="address-card__item--value">{{ address.coordinate_phone_number || '-' }}</span>
        </div>
        <div class="address-card__item">
            <span class="address-card__item--title">آدرس</span>
            <span class="address-card__item--value">{{ address.address }}</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.address-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    * {
        font-size: 0.75rem;
        line-height: 1.25rem;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:last-child {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.625rem;
            padding-top: 1rem;
            border-top: 1px solid var(--ac-gray5-color);
        }

        &--title {
            color: #9B9B9B;
        }

        &--value {
            color: #37474F;
        }
    }
}
</style>