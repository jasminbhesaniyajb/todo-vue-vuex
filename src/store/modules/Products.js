import axios from "axios";

const state = {
  products: [],
};
const getters = {
  allProducts: (state) => state.products,
};
const actions = {
  async getProducts({ commit }) {
    const response = await axios.get("http://localhost:8081/Products");
    commit("setProducts", response.data);
  },
  async addProduct({ commit }, newProduct) {
    const response = await axios.post(
      "http://localhost:8081/Products",
      newProduct
    );
    commit("AddNewProduct", response.data);
  },
  async remove({ commit }, id) {
    await axios.delete(`http://localhost:8081/Products/${id}`);
    commit("removeProduct", id);
    this.getProducts;
  },
  async update({ commit }, id) {
    await axios.get(`http://localhost:8081/Products/${id}`);
    commit("updateProduct", id);
    this.getProducts;
  },
};
const mutations = {
  setProducts: (state, products) => (state.products = products),
  AddNewProduct: (state, newProduct) => state.products.push(newProduct),
  removeProduct: (state, id) =>
    state.products.filter((product) => product.id !== id),
  // updateProduct: (state, id) => state.products.find(id),
};
export default {
  state,
  getters,
  actions,
  mutations,
};
