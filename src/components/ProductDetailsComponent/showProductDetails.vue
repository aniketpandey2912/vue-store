<template>
  <div>
    <h1>Product Details</h1>
    <div id="individual_product">
      <div id="left">
        <!-- :src is data binding technique to attributes -->
        <img :src="product.imageUrl" :alt="product.name" />
      </div>
      <div id="right">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
        <q-btn
          id="addToCart_btn"
          color="secondary"
          label="ADD TO CART"
          @click="addToCart(product)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { db, doc, getDoc } from "../../firebase.js";
import { useRoute } from "vue-router";

import { useCartStore } from "../../store";

const route = useRoute();
const { addToCart } = useCartStore();
let product = ref({});
onMounted(async () => {
  const docRef = doc(db, "products", route.params.prodID);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let item = docSnap.data();
    item.id = docSnap.id;
    product.value = item;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

  console.log(product);
});
</script>
<style scoped>
#products img {
  width: 60%;
  height: 200px;
}

#individual_product {
  display: flex;
  margin-top: 5%;
}

#left {
  display: flex;
  flex: 4;
}

#right {
  display: flex;
  flex: 6;
  flex-direction: column;
  margin-left: 3%;
  font-size: 180%;
}

#left > img {
  height: 70%;
}

#addToCart_btn {
  width: 15%;
}
</style>
