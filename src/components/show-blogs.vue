<script setup>
    const vRainbow = {
        mounted:(el) => el.style.color = "#" + Math.random().toString().slice(2,8) 
    }
</script>

<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <input class="search" type="text" placeholder="Bloglarda Ara" v-model="keyword">
        <div class="single-blog">
            <template v-for="blog in searchBlog">
                <div class="blog">
                    <h2 v-rainbow>{{$filters.upperCaseFilter(blog.title)}}</h2>
                    <p>{{blog.body}}</p>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import { Url } from '@/url';

export default {
    data() {
        return {
            blogs: [],
            keyword:""
        }
    },
    methods:{
        upperCaseTitle(title){
            return title.toUpperCase();
        }
    },
    computed:{
        upperCaseTitleC(){
            return (title) => title.toUpperCase();
        },
        searchBlog(){
            return this.blogs.filter(blog => blog.title.match(this.keyword));
        }
    },
    created() {
        self = this;
        fetch(Url.getFullPostUrl(), {
            method: "GET",
            headers: {
                "Content-Type": "content/type"
            }
        })
            .then((res) => res.json())
            .then((json) => {
                this.blogs = json.slice(0,10);
            })
            .catch((err) => console.log(err))
    },

}
</script>

<style scoped>
#show-blogs{
    width: 70%;
    margin: 0 auto; 
    box-sizing: border-box;

}

#show-blogs .blog{
    background-color: #e2e2e2;
    padding: 20px;
    margin: 10px;
    border-radius: 1rem;
}

.search{
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
}
</style>