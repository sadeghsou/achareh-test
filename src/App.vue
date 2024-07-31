<script setup>
import Header from "@/components/header/index.vue";
</script>
<template>
  <Header />
  <main class="app-main">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.app-main {
  background-color: var(--ac-background-color);
}
</style>
