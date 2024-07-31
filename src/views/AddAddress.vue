<script setup lang="ts">
import { ref, computed } from "vue";
import AddressAdd from "@/components/address/add.vue";
const step = ref<"inputs" | "map" | "done">("inputs");
const user = ref({
  firstName: "",
  lastName: "",
  mobile: "",
  phone: "",
  address: ""
});
const map = ref({ lat: null, long: null });
const canSetMap = computed(() => Object.values(user.value).every(Boolean));
const handleStep = () => {

}
</script>

<template>
  <div class="views-add-address">
    <h1 class="views-add-address__title">ثبت آدرس</h1>
    <AddressAdd v-model="user" @submit="handleStep" />
    <div class="views-add-address__submit">
      <button class="views-add-address__submit--button" @click="handleStep">ثبت و ادامه</button>
    </div>
  </div>
</template>

<style lang="scss" scoed>
.views-add-address {
  padding-inline: 1rem;
  padding-bottom: 6rem;

  &__title {
    padding-block: 1.125rem 1rem;
    font-weight: bold;
    color: var(--ac-text-color);
  }

  &__submit {
    padding: 1rem;
    width: 100%;
    background-color: white;
    position: fixed;
    inset: auto 0 0;
    box-shadow: 0 -1px 6px #00000026;

    &--button {
      width: 100%;
      height: 3rem;
      border: none;
      background-color: var(--ac-primary-color);
      border-radius: 0.25rem;
      font-size: 1rem;
      color: white;
    }
  }
}
</style>