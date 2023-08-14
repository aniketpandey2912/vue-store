<template lang="">
  <div>
    <CartPopupComponent :dialogVisibility="dialogVisibility" />
    <div id="navbar">
      <div id="lhs">Home</div>
      <div id="rhs">
        <div>Account</div>
        <div id="cart">
          <q-icon
            name="shopping_cart"
            @click="dialogVisibility = !dialogVisibility"
          />
          <div id="cart_count">{{ CartStore.cartCount }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartPopupComponent from "../CartComponents/cartPopup.vue";
import { useCartStore } from "../../store.js";
import { ref } from "vue";
const CartStore = useCartStore();

const dialogVisibility = ref(false);
</script>

<style scoped>
#navbar {
  display: flex;
  height: 70px;
  align-items: center;
  font-size: 130%;
  border-bottom: 1px solid black;
}

#lhs {
  display: flex;
  flex: 3;
  align-items: center;
}

#rhs {
  display: flex;
  flex: 7;
  align-items: center;
  justify-content: flex-end;
  gap: 10%;
}

#cart {
  display: contents;
  align-items: center;
}

#cart_count {
  padding-bottom: 12px;
}
</style>
