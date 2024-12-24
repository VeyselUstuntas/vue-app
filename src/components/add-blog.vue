<template>
    <div id="add-blog">
        <h2 v-if="!this.submitted">Yeni Blog Post Ekleme Formu</h2>
        <form v-if="!this.submitted" action="#">
            <label for="title">Blog Başlığı</label>
            <input v-model.lazy="blog.title" type="text" required>

            <label for="content">Blog İçeriği</label>
            <textarea v-model.lazy="blog.content"></textarea>

            <div id="checkboxes">
                <label>Çizgi Roman</label>
                <input type="checkbox" value="cizgi-roman" v-model="blog.categories">

                <label>Hikaye</label>
                <input type="checkbox" value="hikaye" v-model="blog.categories">

                <label>Masal</label>
                <input type="checkbox" value="masal" v-model="blog.categories">

                <label>Şiir</label>
                <input type="checkbox" value="siir" v-model="blog.categories">
            </div>

            <div id="authors">
                <label>Yazar:</label>

                <select v-model="this.blog.author">
                    <option value="">Bir Yazar Seçin</option>
                    <template v-for="author in this.authors">
                        <option :value="author">{{ author }}</option>
                    </template>
                </select>
            </div>

            <button v-on:click.prevent="saveBlog" type="submit">Save Blog</button>
        </form>

        <div v-if="this.submitted">
            Tebrikler Mesajınız Başarı ile Alındı
            <button @click="this.submitted=false">New Blog</button>
        </div>

        <div v-if="!this.submitted" id="preview">
            <h3>Blog Ön İzleme</h3>
            <p>Blog Başlığı: {{ this.blog.title }}</p>
            <p>Blog İçeriği: {{ this.blog.content }}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="category in this.blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ this.blog.author }}</p>


        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            base_url: "https://jsonplaceholder.typicode.com/",
            post_url: "posts/",
            blog: {
                title: "",
                content: "",
                categories: [],
                author: ""
            },
            authors: ["Veysel", "Ali", "Mehmet", "İbrahim", "Hasan", "Harun"],
            submitted: false,

        }
    },
    methods: {
        saveBlog() {
            let self = this;
            console.log(this.blog);
            console.log(this.base_url + this.post_url);
            fetch(this.base_url + this.post_url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'content/type'
                },
                body: {
                    userId: 1,
                    title: this.blog.title,
                    body: this.blog.content
                },

            }).then((res) => res.json())
                .then(function (json) {
                    console.log(json);
                    self.submitted = !self.submitted;
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    },
}
</script>

<style scoped>
#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 0 auto;
    max-width: 500px;
}

#add-blog label {
    display: block;
    margin: 20px 0px 10px;
}

#add-blog input[type="text"],
textarea {
    display: block;
    width: 100%;
    padding: 8px;

}

#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin-top: 30px;
}

h3 {
    margin-top: 10px;
}

#checkboxes {
    display: flex;
    justify-content: center;
    align-items: center;
}

#checkboxes input {
    margin-top: 13px;
    margin-right: 20px;
}

#authors {
    margin: 10px 0;
}

#authors select,
#authors label {
    display: inline-block;
    margin-right: 5px;
}
</style>