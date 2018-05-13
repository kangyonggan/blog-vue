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
  import Vue from 'Vue'
  import $ from 'jquery'
  import {prettifyStyle} from '@/common/css/prettify.min.css'
  import {prettify} from '@/common/js/prettify.min.js'

  const id = window.location.hash.substring(10);
  export default {
    name: 'ArticleDetail',
    data() {
      return {
        article: {}
      }
    },
    created: function () {
      axios.get("/static/data/article.json?id=" + id).then(res => {
        if (res.status === 200) {
          this.article = res.data;
          Vue.nextTick(function () {
            $(".markdown a").attr("target", "_blank");
            $(".markdown pre").addClass("prettyprint linenums");
            $(".markdown table").addClass("table table-striped table-bordered table-hover");
            prettyPrint();
          })
        }
      }).catch(error => console.log(error));
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border > h1 {
    text-align: center;
  }
</style>
