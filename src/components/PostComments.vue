<template>
  <div>
      <h2 class="white--text mt-3">Post Comments</h2>
    <div
      class="post-list mt-3 border-radius-5 blue-grey darken-4 white--text pa-5"
    v-for="comment in comments" :key="comment.id"
    >
      <div>
        <div class="d-flex">
          <div class="mr-5">
            <img src="@/assets/images/user.svg" width="50px" alt="" />
          </div>
          <div>
            <h3>{{comment.name}}</h3>
            <p class="mb-0">{{comment.body}}</p>
            <p>Email :{{comment.email}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostComments",
  data() {
    return {
        id: this.$route.params.id,
        comments: []
    };
  },
  created() {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${this.id}`)
      .then((res) => {
        this.comments = res.data;
      })
      .catch((e) => {
        console.log("error", e);
      });
  },
};
</script>

<style></style>
