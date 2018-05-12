<template>
  <div>
    <div class="left">
      <List iconClass="fa fa-list" :em="true" :pagination="true" title="文章列表" :items="articles"/>
    </div>

    <div class="right">
      <List iconClass="fa fa-thumbs-up fa-fw" :compact="true" title="站长推荐" :items="articles"/>
      <List iconClass="fa fa-edit" :compact="true" title="最近编辑" :items="articles"/>
      <List iconClass="fa fa-bookmark" :em="true" :compact="true" title="收藏小说" :items="novels"/>
    </div>
  </div>
</template>

<script>
  import List from './List'

  export default {
    components: {List},
    name: 'Index',
    data() {
      return {
        articles: [
          {
            title: "SpringMVC结合拦截器、注解实现简单的防重复提交",
            href: "article/1",
            em: "2018-05-12"
          },
          {
            title: "SpringMVC结合拦截器、注解实现简单的防重复提交22222",
            href: "article/1",
            em: "2018-05-12"
          }
        ],
        novels: [
          {
            title: "逆天邪神",
            href: "article/1",
            em: "火星引力"
          },
          {
            title: "武炼巅峰",
            href: "article/1",
            em: "小莫"
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (min-width: 650px) {
    .left {
      float: left;
      width: 70%;
    }

    .right {
      float: right;
      width: 27%;
    }
  }
</style>
