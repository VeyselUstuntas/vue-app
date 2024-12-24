<template>
  <show-blogs></show-blogs>
  <list-blogs></list-blogs>
</template>

<script>
import AddBlog from "./components/add-blog.vue";
import ListBlogs from "./components/list-blogs.vue";
import ShowBlogs from "./components/show-blogs.vue";

export default {
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    "list-blogs":ListBlogs
  },
  data() {
    return {

    }
  },
}
</script>

<style scoped></style>