<script setup lang="ts">
    const vRainbow = {
        mounted:(el:HTMLElement) => el.style.color = "#" + Math.random().toString().slice(2,8) 
    }
</script>

<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderi Başlıkları</h1>
        <input class="search" type="text" placeholder="Bloglarda Ara" v-model="keyword">
        <div class="single-blog">
            <template v-for="blog in searchBlog">
                <div class="blog">
                    <h2 v-rainbow>{{upperCaseTitleC(blog.title)}}</h2>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Url } from '@/url';
import type { IBlog } from "@/IBlog";
import mixins from "@/mixins";

export default defineComponent( {
    data() {
        return {
            blogs: [] as IBlog[],
            keyword:""
        }
    },
    methods:{
        upperCaseTitle(title:string){
            return title.toUpperCase();
        }
    },
    computed:{
        upperCaseTitleC(){
            return (title:string) => title.toUpperCase();
        },
    },
    created() {
        let self = this;
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
    mixins:[mixins]

});
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