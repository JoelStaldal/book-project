<template>
  <div class="bookshelf">
    <h1>8 Classic Childrens books</h1>
    <div class="books-container">
      <router-link
        v-for="book in bookList"
        v-bind:key="book.id"
        v-bind:to="'/book/' + book.id">
        <Book 
        v-bind:book="book"
        v-bind:class="{bookThumb: isActive}"/>
        </router-link>
    </div>
  </div>
</template>

<script>
import Book from "../components/Book"

export default {
  name: 'BookShelf',
  components: {
    Book
  },
  data(){
    return {
      isActive: true
    }
  },
  computed: {
    bookList(){
      return this.$store.state.bookDB
    }
  }
}

</script>
<style scoped>
.books-container {
  margin: 0 auto;
  max-width: 600px;
  display: grid;
  grid-template-areas: 
  "BOOK BOOK BOOK BOOK"
  "BOOK BOOK BOOK BOOK";
}
.Book {
  grid-area: BOOK;
}
.bookThumb {
  color: white;
  width: 8rem;
  height: 10rem;
  border-radius: 3px;
}
a {
  text-decoration: none;
}
</style>
