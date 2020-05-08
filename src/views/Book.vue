<template>
  <div class="book">
    <div class="info-container">
      <div class="largeBook">
        <router-link v-bind:to="'/bookshelf'"><button class="back-btn"></button></router-link>
      <BookLarge
        v-bind:title="book.title"
        v-bind:author="book.author"
        v-bind:color="book.color"
      />
      </div>
      <article class="book-info">
        <h1>{{book.title}}</h1>
        <h3>{{book.author}}</h3>
        <p>{{book.plot}}</p>
        <div class="info-box">
          <p>Audience: {{book.audience}}</p>
          <p>First published: {{book.year}}</p>
          <p>Pages: {{book.pages}}</p>
          <p>Publisher: {{book.publisher}}</p> 
        </div>
        <button class="read-it-btn">Oh, I want to read it!</button>
      </article>
    </div>
  </div>
</template>
<script>

// import BookThumb from '../components/BookThumb'
import BookLarge from '../components/BookLarge'

export default {
  name: "Book",
  components: {
    // BookThumb: BookThumb
    BookLarge: BookLarge
  },
  data(){
    return {
      bookList: this.$root.bookDB
    }
  },
  computed: {
    book(){
      return this.$root.getBook(this.$route.params.myParam)
    }
  }
}
</script>
<style scoped>
.info-container {
  padding: 1rem;
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  align-items: center;
  background: rgb(31,31,31);
  color: white;
}
.largeBook {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
a {
  height: 2rem;
  width: 2rem;
  margin-left: 2rem;
}
.back-btn {
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: rgb(127,127,127);
  background-size: cover;
  background-image: url('../img/arrow-back-circle-outline.svg');
  background-color: rgb(127,127,127);
}
.book-info {
  padding: 2rem;
  text-align: left;
}
.info-box {
  background: rgb(41,41,41);
  height: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}
.info-box p {
  margin: 0;
  margin-left: 1rem;
}
.read-it-btn {
  margin-top: 1rem;
  height: 3rem;
  width: 10rem;
  font-size: 0.9rem;
  border-radius: 5px;
  font-weight: bold;
}
h1 {
  font-size: 2rem;
  margin: 0;
}
h3 {
  margin: 0;
}
</style>