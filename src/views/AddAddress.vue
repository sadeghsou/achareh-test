<script setup>
import { ref, computed } from "vue";
import AddressAdd from "@/components/address/add.vue";
import AddressMap from "@/components/address/map.vue";
import LoadingDots from "@/components/loading/dots.vue";
import AddressSuccess from "@/components/address/success.vue";
import ArrowRight from 'vue-material-design-icons/ArrowRight.vue';
import useApi from "@/composables/useApi";
const step = ref(1); //0 => inputs | 1 => map | 2 => done
const loading = ref(false);
const user = ref({
  firstName: "",
  lastName: "",
  mobile: "",
  phone: "",
  address: "",
  gender: "male"
});
const map = ref({ lat: null, long: null });
const canSetMap = computed(() => Object.values(user.value).every(Boolean));

const submitData = () => {
  if (!user.address, !user.firstName, !user.gender, !user.lastName) {
    console.error('مقادیر بدرستی وارد نشده‌اند');
    loading.value = false;
    return;
  }
  const body = {
    first_name: user.value.firstName,
    last_name: user.value.lastName,
    coordinate_mobile: user.value.mobile,
    coordinate_phone_number: user.value.phone,
    address: user.value.address,
    gender: user.value.gender,
    region: 1,
    lat: map.value.lat,
    lng: map.value.long,
  };
  useApi.post('/address', { ...body })
    .then(({ data }) => {
      step.value = 2
    })
    .catch(error => console.error(error))
    .finally(() => loading.value = false);
}

const handleStep = () => {
  if (step.value === 0 && canSetMap.value) step.value = 1;
  else if (step.value === 1 && Object.values(map.value).every(Boolean)) step.value = 2;
  else if (step.value === 2) {
    loading.value = true;
    submitData();
  }
}
</script>

<template>
  <div class="views-add-address">
    <div class="views-add-address__container">
      <div v-if="step === 1" class="views-add-address__map-top">
        <ArrowRight class="views-add-address__map-top--back" @click="step = 0" />
        <span class="views-add-address__map-top--text">انتخاب موقعیت</span>
      </div>
      <div class="views-add-address__content">
        <template v-if="step === 0">
          <h1 class="views-add-address__title">ثبت آدرس</h1>
          <div class="views-add-address__form">
            <AddressAdd v-model="user" @submit="handleStep" />
          </div>
        </template>
        <template v-else-if="step === 1">
          <AddressMap class="views-add-address__map" :point="{ lat: 35.7219, long: 51.3347 }" />
        </template>
        <template v-else-if="step === 2">
          <AddressSuccess />
        </template>
        <div class="views-add-address__submit" v-if="step !== 2">
          <button class="views-add-address__submit--button" @click="handleStep" :disabled="loading">
            <LoadingDots v-if="loading" white />
            <span v-else>ثبت و ادامه</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoed>
.views-add-address {
  min-height: 100vh;
  min-height: 100svh;

  &__container {
    width: 100%;
    max-width: 806px;
    margin-inline: auto;
  }

  &__content {
    padding-inline: 1rem;
  }

  &__form {
    padding-bottom: 6rem;
  }

  &__title {
    padding-block: 1.125rem 1rem;
    font-weight: bold;
    color: var(--ac-text-color);
  }

  &__map-top {
    width: 100%;
    text-align: center;
    background-color: #FFFFFFCC;
    padding: 0.5rem;
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;

    &--back {
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      inset: 0.5rem 0.5rem 0.5rem 0;
    }

    &--text {
      font-size: 0.75rem;
      color: var(--ac-text-color);
    }
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
      max-width: 224px;
      height: 3rem;
      margin-inline: auto;
      border: none;
      background-color: var(--ac-primary-color);
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        font-size: 1rem;
        color: white;
      }
    }
  }
}
</style>