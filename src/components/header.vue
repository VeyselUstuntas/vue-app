<template>
    <nav class="navbar">
        <ul>
            <li>
                <router-link to="/">Blog List</router-link >
            </li>

            <li>
                <router-link  to="/add-blog">Add Blog</router-link >
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    background-color: rgb(43, 43, 43);
}

.navbar ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

.navbar li {
    margin: 5px 10px 5px 10px;
    padding: 10px;
}

.navbar a{
    text-decoration: none;
    color: #e2e2e2;
    font-size: 20px;
    font-weight: 500;

}

.router-link-active{
    background: #e2e2e2;
    color: #000 !important;
    padding: 10px;  
    border-radius: 10px;
    padding: 10px;

}
</style>