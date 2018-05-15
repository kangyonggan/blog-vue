<template>
  <div>
    <form>
      <input name="key" placeholder="搜索文章标题..." @keydown="search($event)"/>
    </form>

    <List icon="fa fa-list" :pagination="true" pageSize="7" title="文章列表" url="article" ref="articleList">
      <template slot-scope="app">
        <li v-for="article in app.list">
          <div class="line"></div>
          <a :href="'/#/article/' + article.id">{{article.title}}</a>
          <em>{{article.createdTime | date}}</em>
        </li>
      </template>
    </List>
  </div>
</template>

<script>
  import axios from 'axios'
  import List from '../../components/List'
  import {formatDate} from '@/common/js/date.js'

  export default {
    components: {List},
    name: 'Index',
    filters: {
      date: function (date) {
        return formatDate(new Date(date), 'yyyy-MM-dd');
      }
    },
    methods: {
      search: function (e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          axios.get(process.env.API_ROOT + "article?title=" + e.target.value).then(res => {

            if (res.status === 200) {
              if (res.data.respCo === '0000') {
                this.$refs.articleList.reload(res);
              } else {
                console.error(res.data.respMsg);
              }
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
    min-width: 200px;
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
    background: #fff url(../../assets/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }
</style>
