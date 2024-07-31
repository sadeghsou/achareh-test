<script setup lang="ts">
interface InputTextProps { label: string; placeholder?: string; info?: string; name: string; required?: boolean; modelValue: string; };

withDefaults(defineProps<InputTextProps>(), { placeholder: "", info: "", required: false });
defineEmits(['update:modelValue', 'blured']);

</script>
<template>
    <label class="input-text">
        <div class="input-text__top">
            <span class="input-text__top--label">{{ label }} {{ required ? '' : '(اختیاری)' }}</span>
            <span class="input-text__top--info" v-if="info">{{ info }}</span>
        </div>
        <div class="input-text__field">
            <input class="input-text__field--input" type="text" :placeholder="placeholder" :value="modelValue" :name="name"
                @input="(event: InputEvent) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
                @blur="() => $emit('blured')">
            <span v-if="!!modelValue.trim()" class="input-text__clear rounded-circle"
                @click="() => $emit('update:modelValue', '')">x</span>
        </div>
    </label>
</template>
<style lang="scss" scoped>
.input-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &__top {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &--label {
            font-size: 0.75rem;
            color: var(--ac-text-color);
        }

        &--info {
            color: var(--ac-gray3-color);
            font-size: 0.75rem;
        }
    }

    &__field {
        position: relative;
        border: 1px solid var(--ac-field-border-color);
        border-radius: 0.25rem;
        outline: none;
        padding: 0.625rem;
        transition: border-color .3s;

        &:focus-within {
            border-color: var(--ac-primary-color);
        }

        &--input {
            border: none;
            outline: none;
            font-size: 0.875rem;
        }
    }

    &__clear {
        width: 1.25rem;
        height: 1.25rem;
        font-size: 0.875rem;
        color: white;
        position: absolute;
        left: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--ac-gray2-color);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
    }
}
</style>