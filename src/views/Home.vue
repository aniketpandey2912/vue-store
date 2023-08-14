<template>
  <div>
    <NavbarComponent />
    <BannerComponent welcome_msg="Welcome To Vue Shop" />
    <ProdcutsComponent />
  </div>
</template>
<script setup>
import BannerComponent from "../components/HomePageComponents/Banner.vue";
import NavbarComponent from "../components/HomePageComponents/Navbar.vue";
import ProdcutsComponent from "../components/HomePageComponents/Products.vue";
</script>
<style scoped></style>
