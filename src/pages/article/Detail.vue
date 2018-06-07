<template>
  <div class="border">
    <h1>{{article.title}}</h1>
    <div class="split"></div>
    <div class="markdown" v-html="article.content">
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import $ from 'jquery'
  import {prettifyStyle} from '@/common/css/prettify.min.css'
  import {prettify} from '@/common/js/prettify.min.js'

  export default {
    name: 'ArticleDetail',
    data() {
      return {
        article: {}
      }
    },
    created: function () {
      const id = window.location.hash.substring(10);
      let that = this
      this.httpGet("article/" + id, function (data) {
        if (!data.article) {
          data.article = {"title": "文章不存在", content: "<p style='text-align: center'>请联系管理员！</p>"};
        }

        that.load(data.article)
      }, function () {
        that.load({"title": "网络异常", content: "<p style='text-align: center'>请联系管理员！</p>"})
      });
    },
    methods: {
      load: function (article) {
        this.article = article;
        document.title = this.article.title;
        Vue.nextTick(function () {
          $(".markdown a").attr("target", "_blank");
          $(".markdown pre").addClass("prettyprint linenums");
          $(".markdown table").addClass("table table-striped table-bordered table-hover");
          prettyPrint();
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border > h1 {
    text-align: center;
  }
</style>
