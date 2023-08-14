<template>
  <div>
    <NavbarComponent />
    <q-form id="orders_form" class="q-gutter-md" @submit="onSubmit">
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your contact"
        lazy-rules
      />
      <q-input
        filled
        v-model="form.address"
        label="Your address *"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useCartStore } from "../store";
import NavbarComponent from "../components/HomePageComponents/Navbar.vue";
import { collection, addDoc, db } from "../firebase";

const cartStore = useCartStore();

const form = reactive({
  name: "",
  contact: "",
  address: "",
  order: cartStore.cart,
  total: cartStore.cartCount,
});

const onSubmit = async () => {
  const docRef = await addDoc(collection(db, "orders"), form);
  console.log(docRef);
};
</script>
<style scoped>
#orders_form {
  width: 50%;
}
</style>
