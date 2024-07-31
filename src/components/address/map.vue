<script setup lang="ts">
import "@neshan-maps-platform/vue3-openlayers/dist/style.css";
import NeshanMap from "@neshan-maps-platform/vue3-openlayers";
interface AddressMapProps { point: { lat: number, long: number } };
defineProps<AddressMapProps>();
const emit = defineEmits(['update:modelValue']);
const setPoint = ({ coords: [long, lat] }) => {
    emit('update:modelValue', { lat, long })
}
</script>
<template>
    <div class="address-map">
        <div class="address-map__map rounded">
            <NeshanMap defaultType="neshan" mapKey="web.6912007b54c841e391e61876dff16bae" hide-layers hideSearchContainer
                :center="{ latitude: point.lat, longitude: point.long }" :zoom="14" @markersIconCallback="setPoint" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.address-map {

    &__map {
        width: 100%;
        height: calc(100svh - 166px);
        height: calc(100vh - 166px);
        overflow: hidden;
    }
}
</style>