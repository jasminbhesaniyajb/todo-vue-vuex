<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn depressed color="primary" @click="formShow">
        Add New Post
      </v-btn>
    </div>
    <div v-if="formSec" class="white border-radius-5 mt-3 pa-5">
      <div>
        <v-form @submit.prevent="addPost">
          <v-text-field
            label="Enter post titlle"
            hide-details="auto"
            v-model="title"
          ></v-text-field>
          <v-textarea
            class="mt-3"
            label="Enter post details"
            auto-grow
            v-model="body"
          ></v-textarea>
          <div class="d-flex justify-center">
            <v-btn depressed color="primary" type="submit" class="px-10">
              Save
            </v-btn>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      formSec: false,
      title: "",
      body: "",
    };
  },
  methods: {
    formShow() {
      this.formSec = !this.formSec;
    },
    addPost() {   
     const newPost = {
       title: this.title,
       body: this.body
     }
    this.$emit("savepost", newPost);
    this.title = "",
    this.body = ""
    }
  },
};
</script>

<style></style>
