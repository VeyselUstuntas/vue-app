<template>
  <app-header></app-header>
  <router-view></router-view>
</template>

<script>
import { RouterView } from "vue-router";
import AddBlog from "./components/add-blog.vue";
import ListBlogs from "./components/list-blogs.vue";
import ShowBlogs from "./components/show-blogs.vue";
import Header from "./components/header.vue";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    "list-blogs":ListBlogs,
    "app-header":Header
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped></style>