<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        v-model="title"
        placeholder="Add Product"
        class="white"
      />
      <br />
      <input
        type="text"
        v-model="price"
        placeholder="Add Price"
        class="white mt-3"
      />
      <br />
      <v-btn type="submit" class="mt-3" depressed color="primary">
        Add
      </v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddProduct",
  data() {
    return {
      title: "",
      price: "",
    };
  },
  methods: {
    ...mapActions(["addProduct"]),
    onSubmit() {
      console.log("click save btn");
      this.addProduct({
        title: this.title,
        price: this.price,
      });
      this.title = "";
      this.price = "";
    },
  },
};
</script>

<style></style>
