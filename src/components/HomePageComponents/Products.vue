<template>
  <div id="products">
    <div
      id="individual_product"
      v-for="product in products"
      @click="showProduct(product.id)"
    >
      <!-- :src is data binding technique to attributes -->
      <img :src="product.imageUrl" :alt="product.name" />
      <p>{{ product.name }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// import FIREBASE Utitlities
import { db, getDocs, collection } from "../../firebase";
// console.log("db:", db);

let products = ref([]);
const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    let product = doc.data();
    product.id = doc.id;
    // console.log(product);
    products.value.push(product);
  });
};

onMounted(async () => {
  await getData();
  console.log("Products:", products.value);
});

// Show single product details
const showProduct = (prodID) => {
  console.log("clicked", prodID);
  router.push(`productDetails/${prodID}`);
};
</script>

<style scoped>
#products {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
}

#products img {
  width: 60%;
  height: 200px;
}

#individual_product {
  background-color: rgb(234, 230, 230);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px;
}
</style>

<!-- For Reference -->
<!-- <template>
  <div id="products">
    <div id="individual_product" v-for="product in products">
      :src is data binding technique to attributes
      <img :src="product.image" :alt="product.title" />
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import productsData from "../../data/products.json";
// console.log(productsData);
let products = productsData;

/*
// API call should be made after component is MOUNTED
let products = ref([]);
onMounted(async () => {
  // USING Fetch
  // let response = await fetch("https://fakestoreapi.com/products");
  // let data = await response.json();
  // console.log("data:", data);
  // products.value = data;

  // Using AXIOS
  let response = await axios.get("https://fakestoreapi.com/products");
  // console.log("response:", response);
  products.value = response.data;
});

*/

// import FIREBASE Utitlities
import { db, getDocs, collection } from "../../firebase";
// console.log("db:", db);

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

onMounted(async () => {
  products = await getData();
  console.log("Data:", products);
});
</script>
<style scoped>
#products {
  margin-top: 3%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3%;
  grid-gap: 3%;
}

#products img {
  width: 60%;
  height: 200px;
}

#individual_product {
  background-color: rgb(234, 230, 230);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px;
}
</style> -->
