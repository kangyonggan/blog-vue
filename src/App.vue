<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div content="main">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {Header, Footer},
    name: 'App'
  }

</script>
