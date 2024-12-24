<template>
    <div id="show-blogs">
        <h1>Tüm Blog Gönderileri</h1>
        <div class="single-blog">
            <template v-for="blog in this.blogs">
                <div class="blog">
                    <h2>{{blog.title}}</h2>
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
            blogs: []
        }
    },
    created() {
        self = this;
        fetch(Url.BASE_URL + Url.POST_URL, {
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
    }
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
</style>