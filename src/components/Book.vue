<template>
<div class="book" v-bind:style="{background: book.color}">
    <div class="book-container">
        <h1>{{book.title}}</h1>
        <p>{{book.author}}</p>
    </div>
</div>
</template>
<script>
export default {
    name: "Book",
    props: {
        book: Object
    }
}
</script>

<style scoped>
</style>