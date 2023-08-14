<template>
  <div id="addProduct_form">
    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-input filled v-model="form.name" label="Product Name *" hint="shirt" />

      <q-input
        filled
        type="number"
        v-model="form.price"
        label="Product Price *"
      />

      <q-file
        v-model="file"
        label="Choose Product Image"
        filled
        counter
        :counter-label="counterLabelFn"
        max-files="3"
        multiple
        style="max-width: 300px"
        @update:modelValue="fileUpload"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

import {
  db,
  collection,
  getStorage,
  ref as firebaseRef,
  uploadBytesResumable,
  getDownloadURL,
  addDoc,
} from "../../firebase.js";

const file = ref(null);

const form = reactive({
  name: "",
  price: 0,
  imageUrl: "",
});

const fileUpload = () => {
  console.log("Selected file:", file.value[0]);

  file.value = file.value[0];

  const storage = getStorage();
  const storageRef = firebaseRef(storage, "products/" + file.value.name); // storing xyz.jpg name in "products" folder in Firebase storage

  const uploadTask = uploadBytesResumable(storageRef, file.value); // actually passing the file data

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    () => {
      // Handle successful uploads on complete
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        form.imageUrl = downloadURL;
      });
    }
  );
};

const onSubmit = async () => {
  console.log(form);
  // we have data ready, now we have to store the data in FireStore
  // addDoc(collection(db,"collectionName"), data)
  const docRef = await addDoc(collection(db, "products"), form);
  console.log("Document written with ID: ", docRef.id);
};
</script>

<style scoped>
#addProduct_form {
  width: 50%;
}
</style>
