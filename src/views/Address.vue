<script setup>
import AddressCard from "@/components/address/card.vue";
import LoadingDots from "@/components/loading/dots.vue";
import useApi from "@/composables/useApi";
import { ref } from "vue";
const loading = ref(false);
const addresses = ref([]);

const getAddresses = () => {
  loading.value = true;
  useApi.get('/address')
    .then(({ data }) => {
      addresses.value = [...data];
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => { loading.value = false; })
};

getAddresses();

</script>

<template>
  <div class="views-address">
    <div class="views-address__container">
      <h1 class="views-address__title">آدرس‌ها و مشخصات</h1>
      <LoadingDots v-if="loading" />
      <AddressCard v-else class="views-address__card" v-for="(address, index) in addresses" :key="`AddressCard${index}`"
        :address="address" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.views-address {
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  min-height: 100vh;
  min-height: 100svh;

  &__title {
    margin-top: 1.625rem;
    color: var(--ac-text-color);
  }

  &__container {
    width: 100%;
    max-width: 806px;
    margin-inline: auto;
  }
}
</style>
