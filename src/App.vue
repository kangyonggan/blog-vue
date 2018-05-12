<template>
  <div id="app">
    <div class="main">
      <Header/>
      <div class="container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "./pages/Header.vue";

  export default {
    components: {Header},
    name: 'App'
  }

</script>
