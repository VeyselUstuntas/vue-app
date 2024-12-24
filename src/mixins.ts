import { defineComponent } from "vue";
import type { IBlog } from "./IBlog";

export default defineComponent({
    data(){
        return{
            keyword:"" as string,
            blogs:[] as IBlog[]

        }
    },
    computed:{
        searchBlog():any{
            if(!this.keyword){
                return this.blogs;
            }
            return this.blogs.filter((blog:any) => blog.title.toLowerCase().includes(this.keyword.toLowerCase()));
        }
    }
});