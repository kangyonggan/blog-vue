<template>
  <div>
    <div class="left">
      <List icon="fa fa-list" :pagination="true" title="文章列表" url="/static/data/articles-page.json">
        <template slot-scope="app">
          <li v-for="article in app.list">
            <div class="line"></div>
            <a :href="'/#/article/' + article.id">{{article.title}}</a>
            <em>{{article.createdTime | date}}</em>
          </li>
        </template>
      </List>
    </div>

    <div class="right">
      <List icon="fa fa-thumbs-up fa-fw" title="站长推荐" url="/static/data/articles.json">
        <template slot-scope="app">
          <li v-for="article in app.list" class="compact">
            <a :href="'/#/article/' + article.id">{{article.title}}</a>
          </li>
        </template>
      </List>
      <List icon="fa fa-edit" title="最近编辑" url="/static/data/articles.json">
        <template slot-scope="app">
          <li v-for="article in app.list" class="compact">
            <a :href="'/#/article/' + article.id">{{article.title}}</a>
          </li>
        </template>
      </List>
      <List icon="fa fa-bookmark" title="收藏小说" url="/static/data/novels.json">
        <template slot-scope="app">
          <li v-for="novel in app.list" class="compact">
            <div class="line"></div>
            <a :href="'/#/novel/' + novel.id">{{novel.name}}</a>
            <em>{{novel.author}}</em>
          </li>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
  import List from '../components/List'
  import {formatDate} from '@/common/js/date.js'

  export default {
    components: {List},
    name: 'Index',
    filters: {
      date: function (date) {
        return formatDate(new Date(date), 'yyyy-MM-dd');
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
