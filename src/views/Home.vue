<template>
  <div class="home">
    <h1>THIS IS HOME</h1>
    <button v-on:click="showJson">Click</button>
  </div>
</template>

<script>

export default {
  name: 'Home',

  methods: {
    showJson(){
      console.log(this.$root.myBookDB.books)
    }
  }
}

</script>
