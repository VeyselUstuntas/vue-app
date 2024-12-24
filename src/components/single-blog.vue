<!-- directives -->
<script setup lang="ts">
const vRainbow = {
    mounted: (el: HTMLElement) => el.style.color = "#" + Math.random().toString().slice(2, 8)
}
</script>

<template>
    <div id="single-blogs">
        <div class="single-blog">
            <div class="blog">
                <h2 v-rainbow>{{ upperCaseTitleC(blog.title) }}</h2>
                <p>{{ blog.body }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { Url } from '@/url';
import type { IBlog } from "@/IBlog";
import mixins from "@/mixins";

export default defineComponent({
    data() {
        return {
            id: this.$route.params.id as string,
            blog:{} as IBlog
        }
    },
    methods: {
        upperCaseTitle(title: string) {
            return title.toUpperCase();
        }
    },
    computed: {
        upperCaseTitleC() {
            return (title: string) => title.toUpperCase();
        },
    },
    created() {
        let self = this;
        const uri:string = Url.getFullPostUrl();
        fetch(uri + self.id, {
            method: "GET",
            headers: {
                "Content-Type": "content/type"
            }
        })
            .then((res) => res.json())
            .then((json) => {
                self.blog = json;
            })
            .catch((err) => console.log(err))
    },
    // mixins
    mixins: [mixins]

});
</script>

<style scoped>

.single-blog{
    max-width: 800px;
    margin: 0 auto;
    padding: 10px;
}
</style>