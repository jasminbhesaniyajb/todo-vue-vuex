<template>
  <nav>
    <v-app-bar color="deep-purple accent-4" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vue task</v-toolbar-title>
      <router-link to="/" class="white--text mx-3">Home</router-link>
      <router-link to="/post-list" class="white--text me-3">PostList</router-link>
      <router-link to="/Vuex-todo" class="white--text me-3">Vuex-todo</router-link>
      <router-link to="/login" class="white--text">Login</router-link>
      <v-spacer></v-spacer>
      <v-navigation-drawer
      v-model="drawer"
      app
      absolute
      bottom
      temporary
    >
      <v-list
        nav
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>about</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-app-bar>
  </nav>
</template>
<script>
export default {
    data(){
        return {
            drawer: false,
        }
    }
}
</script>