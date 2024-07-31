<script setup lang="ts">
import InputText from "@/components/input/text.vue";
import { ref, computed } from "vue";
interface AddressAddProps { modelValue: { firstName: string; lastName: string; mobile: string; phone: string; address: string; gender: "male" | "femaile" } }

const rules = ref({
    mobile: { fn: (value: string) => (!!value && /09[0-9]{9}/.test(value)), message: 'مقدار تلفن ثابت درست نمی‌باشد', blured: false },
    phone: { fn: (value: string) => (!!value && /0[0-9]{10}/.test(value)), message: 'مقدار تلفن همراه درست نمی‌باشد', blured: false },
    firstName: { fn: (value: string) => (!!value && `${value}`.trim().length >= 3), message: 'این مقدار الزامیست و حداقل 3 کاراکتر', blured: false },
    lastName: { fn: (value: string) => (!!value && `${value}`.trim().length >= 3), message: 'این مقدار الزامیست و حداقل 3 کاراکتر', blured: false },
    address: { fn: (value: string) => (!!value && `${value}`.trim().length >= 10), message: 'این مقدار الزامیست و حداقل 10 کاراکتر', blured: false },
});
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
        <div>
            <InputText @blured="rules.firstName.blured = true" v-model="user.firstName" name="firstName" label="نام"
                placeholder="مثال: محمد" required />
            <span class="address-add__error" v-if="rules.firstName.blured">{{ rules.firstName.fn(user.firstName) ? '' :
                rules.firstName.message }}</span>
        </div>
        <div>
            <InputText @blured="rules.lastName.blured = true" v-model="user.lastName" name="lastName" label="نام خانوادگی"
                placeholder="مثال: محمدی" required />
            <span class="address-add__error" v-if="rules.lastName.blured">{{ rules.lastName.fn(user.lastName) ? '' :
                rules.lastName.message }}</span>
        </div>
        <div>
            <InputText @blured="rules.mobile.blured = true" v-model="user.mobile" name="mobile" label="شماره تلفن همراه"
                placeholder="مثال: 0912212345687" required />
            <span class="address-add__error" v-if="rules.mobile.blured">{{ rules.mobile.fn(user.mobile) ? '' :
                rules.mobile.message }}</span>
        </div>
        <div>
            <InputText @blured="rules.phone.blured = true" v-model="user.phone" name="phone" label="شماره تلفن ثابت"
                placeholder="مثال: 02144256780" />
            <span class="address-add__error" v-if="rules.phone.blured">{{ rules.phone.fn(user.phone) ? '' :
                rules.phone.message }}</span>
        </div>
        <div>
            <InputText @blured="rules.address.blured = true" v-model="user.address" name="address" label="آدرس" required />
            <span class="address-add__error" v-if="rules.address.blured">{{ rules.address.fn(user.address) ? '' :
                rules.address.message }}</span>
        </div>
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
    gap: 1rem;
    flex-direction: column;

    &__error {
        color: var(--ac-error-color);
        font-size: 0.75rem;
    }

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