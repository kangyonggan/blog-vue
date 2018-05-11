<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="space-16"></div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from "./components/Header.vue";

  export default {
    components: {Header},
    name: 'App'
  }

</script>

<style>
  body {
    padding: 0;
    margin: 0;
    background: #fafafa;
    font-family: Monospaced Number, Chinese Quote, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  .container {
    max-width: 1056px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  .space-16 {
    clear: both;
    height: 16px;
  }
</style>
