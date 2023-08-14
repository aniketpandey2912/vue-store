<template>
  <div id="cart_popup">
    <q-dialog :seamless="true" :modelValue="dialogVisibility" position="right">
      <q-card id="cart_card" style="width: 350px">
        <q-card-section>
          <div>
            <h4>Recently Added Items</h4>
          </div>

          <q-space />

          <div id="cart_products" v-for="product in CartStore.cart">
            <div id="cart_product">
              <div id="lhs">
                <img :src="product.imageUrl" :alt="product.name" />
              </div>
              <div id="rhs">
                <p>{{ product.name }}</p>
                <p>{{ product.price }}</p>
                <q-icon name="delete" @click="removeCartItem(product.id)" />
              </div>
            </div>
          </div>

          <router-link to="/orders">
            <div id="place_order">
              <q-btn color="secondary" label="Proceed" />
            </div>
          </router-link>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { useCartStore } from "../../store.js";

const CartStore = useCartStore();

defineProps(["dialogVisibility"]);

const removeCartItem = (prodID) => {
  CartStore.removeCartItem(prodID);
};
</script>
<style scoped>
#cart_card {
  height: 900px;
  width: 400px;
  margin-top: 10%;
}

#cart_product {
  display: flex;
}

#cart_product div {
  border: 1px solid black;
  margin-top: 4%;
}

#lhs {
  display: flex;
  flex: 6;
}

#lhs img {
  width: 90%;
}

#rhs {
  display: flex;
  flex: 4;
  flex-direction: column;
}

#place_order {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>
