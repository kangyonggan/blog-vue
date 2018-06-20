<template>
  <div class="border">
    <h1>{{article.title}}</h1>
    <div class="split"></div>
    <div class="markdown" v-html="article.content">
    </div>
    <div class="split"></div>
    <div class="toolbar">
      <a @click="prev" v-if="prevArticle">&lt; {{prevArticle.title}}</a>
      <a @click="next" v-if="nextArticle" class="r">{{nextArticle.title}} &gt;</a>
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
        article: {},
        prevArticle: null,
        nextArticle: null
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      '$route' (newRoute) {
        this.init()
      }
    },
    methods: {
      init () {
        let id = this.$route.params.id
        let that = this
        this.httpGet("article/" + id, function (data) {
          if (!data.article) {
            data.article = {"title": "文章不存在", content: "<p style='text-align: center'>请联系管理员！</p>"};
          }

          that.load(data.article)
          that.prevArticle = data.prevArticle
          that.nextArticle = data.nextArticle
          scrollTo(0, 0)
        }, function () {
          that.load({"title": "网络异常", content: "<p style='text-align: center'>请联系管理员！</p>"})
        });
      },
      load: function (article) {
        this.article = article;
        document.title = this.article.title;
        Vue.nextTick(function () {
          $(".markdown a").attr("target", "_blank");
          $(".markdown pre").addClass("prettyprint linenums");
          $(".markdown table").addClass("table table-striped table-bordered table-hover");
          prettyPrint();
        })
      },
      prev: function () {
        this.$router.push({
          name: 'ArticleDetail',
          params: {id: this.prevArticle.id}
        })
      },
      next: function () {
        this.$router.push({
          name: 'ArticleDetail',
          params: {id: this.nextArticle.id}
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
  .toolbar {
    padding: 8px;
  }
  .toolbar a {
    display: inline-block;
    max-width: 45%;
    height: 20px;
    overflow: hidden;
  }
  .r {
    float: right;
  }
</style>
