<template>
  <div class="mt-5">
    <v-form @submit.prevent="submit">
      <v-text-field
        label="user name"
        :rules="rules"
        hide-details="auto"
        v-model="login.userName"
      ></v-text-field>
      <v-text-field
        label="password"
        :rules="rules"
        hide-details="auto"
        v-model="login.password"
      ></v-text-field>
      <v-btn depressed color="primary" type="submit" class="mt-5">
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import {supabase} from '../../supabase'
export default {
  name: 'Login',
  data() {
    return {
      login: {
        userName: "",
        password: ""
      },
    };
  },
  methods: {
   async submit()  {
       await supabase.auth.signIn({
          email: this.login.userName,
          password: this.login.password,
        });
        console.log("login successfully");
    },
  },
};
</script>

<style lang="scss" scoped></style>
