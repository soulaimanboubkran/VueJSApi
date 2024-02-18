<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
  }
};
</script>
