<template>
  <v-app>
    <NavBar />
    <v-main class="blue-grey darken-3">
      <v-container>
      <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/Navbar.vue"
export default {
  name: 'App',
  components: {
    NavBar,
  }
};
</script>
