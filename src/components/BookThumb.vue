<template>
<article class="book-thumb" v-bind:style="{background: color}">
    <div class="cover-back"></div>
    <div class="book-data-container">
        <h2>{{title}}</h2>
        <p>{{author}}</p>
    </div>
</article>
</template>
<script>
export default {
    name: "BookThumb",
    props: {
        id: Number,
        title: String,
        author: String,
        color: String
    }
}
</script>

<style scoped>
.book-thumb {
    margin: 1rem;
    height: 13rem;
    width: 10rem;
    position:relative;
    border-radius: 3px;
}
.cover-back {
    position: absolute;
    left: 0.4rem;
    height: 13rem;
    width: 2px;
    background: rgb(41,41,41);
}
.book-data-container {
    color: white;
    text-align: left;
    margin-top: 9rem;
    margin-left: 0.8rem;
}
h2 {
    font-size: 1rem;
    margin-bottom: -0.9rem;
}
p {
    font-size: 0.7rem;
}    
</style>