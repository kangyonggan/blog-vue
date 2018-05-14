<template>
  <div>
    <form>
      <input name="key" placeholder="搜索小说名称或作者姓名..." @keydown="search($event)"/>
    </form>

    <List icon="fa fa-book" :pagination="true" title="小说列表" url="/novel/list" ref="novelList">
      <template slot-scope="app">
        <li v-for="novel in app.list">
          <div class="line"></div>
          <a :href="'/#/novel/' + novel.code">{{novel.name}}</a>
          <em>{{novel.author}}</em>
        </li>
      </template>
    </List>
  </div>
</template>

<script>
  import axios from 'axios'
  import List from '../components/List'
  export default {
    components: {List},
    name: 'Novel',
    methods: {
      search: function (e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          axios.get(process.env.API_ROOT + "/novel/list?key=" + e.target.value).then(res => {
            if (res.status === 200) {
              this.$refs.novelList.reload(res.data);
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
    background: #fff url(../assets/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }
</style>
