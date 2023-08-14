<template>
  <div>
    <NavbarComponent />
    <AddProductFormComponent />
  </div>
</template>
<script setup>
import NavbarComponent from "../components/HomePageComponents/Navbar.vue";
import AddProductFormComponent from "../components/AdminPageComponents/addProductForm.vue";
</script>
<style scoped></style>

<!-- For reference -->
<!-- <template>
  <div>
    <NavbarComponent />
    <h4>This is Admin Page</h4>
    <input type="text" v-model="form.name" />
    <input type="number" v-model="form.contact" />
    <input type="number" v-model="form.city" />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";

import NavbarComponent from "../components/HomePageComponents/Navbar.vue";

// const name = ref("");
// const contact = ref(0);

const form = reactive({
  name: "",
  contact: "",
  city: "",
});
</script>
<style scoped></style> -->
