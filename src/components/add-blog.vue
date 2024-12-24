<template>
    <div id="add-blog">
        <h2>Yeni Blog Post Ekleme Formu</h2>
        <form action="#">
            <label for="title">Blog Başlığı</label>
            <input v-model.lazy="blog.title" type="text" required>

            <label for="content">Blog İçeriği</label>
            <textarea v-model.lazy="blog.content"></textarea>

        </form>

        <div id="preview">
            <h3>Blog Ön İzleme</h3>
            <p>Blog Başlığı: {{ this.blog.title }}</p>
            <p>Blog İçeriği: {{ this.blog.content }}</p>
            <p></p>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            blog: {
                title: "",
                content: ""
            }
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
</style>