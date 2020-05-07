<template>
  <div class="bookshelf">
    <h1>8 Classic Childrens books</h1>
    <div class="books-container">
      <BookThumb 
      v-for="book in bookList"
      v-bind:key="book.id"
      v-bind:id="book.id"
      v-bind:title="book.title"
      v-bind:author="book.author"
      v-bind:color="book.color"
      v-on:click="someMethod"
      />
    </div>
  </div>
</template>

<script>
import BookThumb from "../components/BookThumb"

export default {
  name: 'BookShelf',
  components: {
    BookThumb: BookThumb
  },
  data(){
    return {
      bookList: this.$root.bookDB
    }
  },
  methods: {
    someMethod(){
      console.log("Här")
    }
  }
}

</script>
<style scoped>
.books-container {
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
