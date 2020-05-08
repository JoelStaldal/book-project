<template>
  <div class="bookshelf">
    <h1>8 Classic Childrens books</h1>
    <div class="books-container">
      <router-link
        v-for="book in bookList"
        v-bind:key="book.id"
        v-bind:to="'/book/' + book.id"
      ><BookThumb  
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:color="book.color"
        v-bind:book="book"/></router-link>
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
