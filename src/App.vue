<template>
  <div class="p-10">
    <GoogleLogin />
    <GoogleLogout />
    <ProductSubmit />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Products from './components/Products.vue';
import GoogleLogin from './components/GoogleLogin.vue';
import GoogleLogout from './components/GoogleLogout.vue';
import ProductSubmit from './components/ProductSubmit.vue';
</script>

<style scoped>

</style>
