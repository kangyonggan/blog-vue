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
      axios.get(process.env.API_ROOT + "article/" + id).then(res => {
        if (res.status === 200) {
          if (res.data.respCo === '0000') {
            if (!res.data.article) {
              res.data.article = {"title": "文章不存在", content:"<p style='text-align: center'>请联系管理员！</p>"};
            }

            this.article = res.data.article;
            document.title = this.article.title;
            Vue.nextTick(function () {
              $(".markdown a").attr("target", "_blank");
              $(".markdown pre").addClass("prettyprint linenums");
              $(".markdown table").addClass("table table-striped table-bordered table-hover");
              prettyPrint();
            })
          } else {
            console.error(res.data.respMsg);
          }
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
