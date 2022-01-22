<template>
  <div>
    <v-container>
      <AddProduct />
      <h3>Products List:</h3>
      <ul>
        <li
          v-for="product in allProducts"
          :key="product.id"
          class="d-flex align-center mt-3"
        >
          {{ product.title }} | {{ product.price }}
          <div>
            <v-btn
              class="mx-3"
              depressed
              color="primary"
              @click="updateProduct(product)"
            >
              Edit
            </v-btn>
            <v-btn
              type="submit"
              depressed
              color="error"
              @click="removeProduct(product.id)"
            >
              Delete
            </v-btn>
          </div>
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddProduct from "../components/AddProduct.vue";

export default {
  name: "VuexTodo",
  components: {
    AddProduct,
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["getProducts", "remove", "update"]),
    removeProduct(recordId) {
      console.log("id", recordId);
      this.remove(recordId);
      this.getProducts();
    },
    updateProduct(product) {
      this.update(product);
      console.log(product);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style></style>
