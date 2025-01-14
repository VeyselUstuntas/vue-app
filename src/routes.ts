import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import ShowBlogs from './components/show-blogs.vue';
import AddBlog from './components/add-blog.vue';
import SingleBlog from './components/single-blog.vue';

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/",component:ShowBlogs},
        {path:"/add-blog",component:AddBlog},
        {path:"/blog/:id",component:SingleBlog},
    ]
});

export default router;

