<template>
  <div>
    <v-container>
        <div class="d-flex justify-end">
            <router-link to="/post-list">
            <v-btn depressed color="primary">
              Back
            </v-btn>
            </router-link>
        </div>
      <div class="post-list mt-3 border-radius-5 blue-grey darken-4 white--text pa-5">
        postDetail id {{id}}
        <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
      </div>
      <div>
          <PostComments />
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import PostComments from '../components/PostComments.vue'

export default {
  name: "PostDetails",
  components: {
      PostComments,
  },
  data() {
    return {
      id: this.$route.params.id,
      post: [],
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((res) => {
        this.post = res.data;
      })
      .catch((e) => {
        // this.errors.push(e);
        console.log("error", e);
      });
  },
};
</script>

<style></style>
