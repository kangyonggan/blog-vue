<template>
  <div>
    <div class="left">
      <form>
        <input name="key" placeholder="搜索文章标题..." @keydown="search($event)"/>
      </form>

      <List icon="fa fa-list" :pagination="true" title="文章列表" url="/article/list" ref="articleList">
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
      <List icon="fa fa-thumbs-up fa-fw" title="站长推荐" url="/article/top">
        <template slot-scope="app">
          <li v-for="article in app.list" class="compact">
            <a :href="'/#/article/' + article.id">{{article.title}}</a>
          </li>
        </template>
      </List>
      <List icon="fa fa-edit" title="最近编辑" url="/article/edit">
        <template slot-scope="app">
          <li v-for="article in app.list" class="compact">
            <a :href="'/#/article/' + article.id">{{article.title}}</a>
          </li>
        </template>
      </List>
      <List icon="fa fa-bookmark" title="收藏小说" url="/novel/favorite">
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
  import axios from 'axios'
  import List from '../components/List'
  import {formatDate} from '@/common/js/date.js'

  export default {
    components: {List},
    name: 'Index',
    filters: {
      date: function (date) {
        return formatDate(new Date(date), 'yyyy-MM-dd');
      }
    },
    data() {
      return {
        pageObj: {}
      }
    },
    methods: {
      search: function (e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          const title = e.target.value;
          if (title === '') {
            return;
          }

          axios.get(process.env.API_ROOT + "/article/list?title=" + title).then(res => {
            if (res.status === 200) {
              console.log("search");
              this.$refs.articleList.reload(res.data);
            }
          }).catch(error => console.log(error));
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    float: right;
    margin-top: 15px;
  }

  input {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    background: #fff url(../assets/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }

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
