<template>
<article class="book-large" v-bind:style="{background: color}">
    <div class="cover-back"></div>
    <div class="book-data-container">
        <h1>{{title}}</h1>
        <h4>{{author}}</h4>
    </div>
</article>
</template>
<script>
export default {
    name: "BookLarge",
    props: {
        id: Number,
        title: String,
        author: String,
        color: String
    }
}
</script>

<style scoped>
.book-large {
    margin: 1rem;
    height: 26rem;
    width: 20rem;
    position:relative;
    border-radius: 6px;
}
.cover-back {
    position: absolute;
    left: 0.8rem;
    height: 26rem;
    width: 4px;
    background: rgb(41,41,41);
}
.book-data-container {
    color: white;
    text-align: left;
    margin-left: 2rem;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
}
h1, h4 {
    color: black;
    margin: 0;
}

h1 {
    font-size: 2rem;
}
  
</style>