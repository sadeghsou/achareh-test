<script setup lang="ts">
import InputText from "@/components/input/text.vue";
import { ref, computed } from "vue";
interface AddressAddProps { modelValue: { firstName: string; lastName: string; mobile: string; phone: string; address: string; } }
const props = defineProps<AddressAddProps>();
const emit = defineEmits(['update:modelValue', 'submit']);
const user = computed({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val)
})

</script>
<template>
    <form class="address-add card" @submit.prevent="() => $emit('submit')">
        <span class="address-add__title">لطفا مشخصات و آدرس خود را وارد کنید</span>
        <InputText v-model="user.firstName" name="firstName" label="نام" placeholder="مثال: محمد" required />
        <InputText v-model="user.lastName" name="lastName" label="نام خانوادگی" placeholder="مثال: محمدی" required />
        <InputText v-model="user.mobile" name="mobile" label="شماره تلفن همراه" placeholder="مثال: 0912212345687"
            required />
        <InputText v-model="user.phone" name="phone" label="شماره تلفن ثابت" placeholder="مثال: 02144256780" />
        <InputText v-model="user.address" name="address" label="آدرس" required />
        <div class="address-add__gender">
            <span>جنسیت</span>
            <label>
                <input type="radio" name="gender" value="female" />
                <span class="rounded-circle"></span>
                <span>خانم</span>
            </label>
            <label>
                <input type="radio" name="gender" value="male" />
                <span class="rounded-circle"></span>
                <span>آقا</span>
            </label>
        </div>
    </form>
</template>
<style lang="scss" scoped>
.address-add {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    display: flx;
    flex-direction: column;
    gap: 1rem;

    &__title {
        font-size: 0.75rem;
        font-weight: bold;
        color: var(--ac-text-color)
    }

    &__gender {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        &>span {
            font-size: 0.75rem;
            color: var(--ac-text-color);
        }

        label {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            input {
                display: none;
            }

            span {
                &:nth-child(2) {
                    transition: background .3s;
                    border: 0.125rem solid white;
                    box-shadow: 0 0 0 0.125rem var(--ac-primary-color);
                    width: 0.75rem;
                    height: 0.75rem;
                }

                &:last-child {
                    font-size: 0.75rem;
                    color: var(--ac-text-color);
                }
            }

            input:checked+span {
                background-color: var(--ac-primary-color);
            }
        }

    }
}
</style>