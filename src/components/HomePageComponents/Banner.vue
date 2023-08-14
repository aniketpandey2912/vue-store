<template lang="">
  <div id="welocme_div">
    <h1>{{ welcome_msg }}</h1>
  </div>
</template>
<script setup>
defineProps(["welcome_msg"]);
</script>
<style scoped>
#welocme_div {
  display: flex;
  height: 200px;
  color: rgb(53, 121, 77);
  border-bottom: 1px solid black;
  align-items: center;
  justify-content: center;
}

h1 {
  font-weight: 500;
  font-size: 3rem;
}
</style>
