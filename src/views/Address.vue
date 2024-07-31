<script setup>
import AddressCard from "@/components/address/card.vue";
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
    <h1 class="views-address__title">آدرس‌ها و مشخصات</h1>
    <AddressCard class="views-address__card" v-for="(address, index) in addresses" :key="`AddressCard${index}`"
      :address="address" />
  </div>
</template>
<style lang="scss" scoped>
.views-address {
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;

  &__title {
    margin-top: 1.625rem;
    color: var(--ac-text-color);
  }
}
</style>
