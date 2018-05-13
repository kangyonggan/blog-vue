<template>
  <div class="border">
    <h1>{{article.title}}</h1>
    <div class="split"></div>
    <div class="markdown" v-html="article.content">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  const id = window.location.hash.substring(10);
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        article: {}
      }
    },
    created: function () {
      axios.get("http://localhost:8088/article/detail?id=" + id).then(res => {
        if (res.status === 200) {
          this.article = res.data;
        }
      }).catch(error => console.log(error));
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border > h1 {
    text-align: center;
  }
</style>
