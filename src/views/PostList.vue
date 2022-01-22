<template>
  <div>
    <v-container>
      <AddPost @savepost="savepost" />
      <div
        v-for="post in posts"
        :key="post.id"
        class="post-list mt-3 border-radius-5 blue-grey darken-4 white--text pa-5"
      >
        <div class="d-flex justify-space-between">
          <div>
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
          </div>
          <div class="d-flex">
            <router-link :to="`/Post-details/${post.id}`">
            <v-btn depressed color="primary" class="mr-3">
              Details
            </v-btn>
            </router-link>
            <v-btn depressed color="error" @click="deletePost(post.id)">
              Delete
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import AddPost from "../components/AddPost.vue";

export default {
  name: "PostList",
  components: {
    AddPost,
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
      .then((res) => {
        this.posts = res.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
  methods: {
    savepost(newPost){
      const {title, body} = newPost;
      axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body
      })
      .then(res => (this.posts = [...this.posts, res.data]))
      .catch(e => console.log(e));
    },
    deletePost(recordId) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${recordId}`)
      .then(() => {
        this.posts = this.posts.filter(post => post.id !== recordId)})
      .catch(err => {
        console.log(err);
      })
    }
  }
};
</script>

<style></style>
