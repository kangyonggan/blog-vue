<template>
  <div>
    <div class="left">
      <List icon="fa fa-list" title="小说分类" url="category?type=NOVEL">
        <template slot-scope="app">
          <li v-for="(category, index) in app.list" :class="{'compact': true, active:actives[index]}">
            <a class="category" v-on:click="changeCategory(category, index, app.list.length)">{{category.name}}</a>
          </li>
        </template>
      </List>
    </div>
    <div class="right">
      <form>
        <input name="key" placeholder="搜索小说名称或作者姓名..." @keydown="search($event)"/>
      </form>

      <List icon="fa fa-book" :pagination="true" title="小说列表" url="novel" ref="novelList">
        <template slot-scope="app">
          <li v-for="novel in app.list" class="compact">
            <div class="line"></div>
            <a :href="'/#/novel/' + novel.code">{{novel.name}}</a>
            <em>{{novel.author}}</em>
          </li>
        </template>
      </List>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import List from '../../components/List'

  export default {
    components: {List},
    name: 'Novel',
    data() {
      return {
        actives: []
      }
    },
    methods: {
      search: function (e) {
        if (e.keyCode === 13) {
          e.preventDefault();
          var key = e.target.value;
          axios.get(process.env.API_ROOT + "novel?key=" + key).then(res => {
            if (res.status === 200) {
              if (res.data.respCo === '0000') {
                this.$refs.novelList.reload(res);
              } else {
                console.error(res.data.respMsg);
              }
            }
          }).catch(error => console.log(error));
          if (!key) {
            key = "小说列表";
          }
          this.actives = [];
          this.$refs.novelList.updateTitle(key);
        }
      },
      changeCategory: function (category, index, size) {
        this.actives = new Array(size);
        this.actives[index] = true;
        this.$refs.novelList.updateTitle(category.name);
        axios.get(process.env.API_ROOT + "novel?categoryCode=" + category.code).then(res => {
          if (res.status === 200) {
            if (res.data.respCo === '0000') {
              this.$refs.novelList.reload(res);
            } else {
              console.error(res.data.respMsg);
            }
          }
        }).catch(error => console.log(error));
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

  p {
    margin-left: 15px;
    font-weight: bold;
  }

  p a {
    float: right;
    margin-right: 10px;
  }

  .category {
    width: 90%;
    cursor: pointer;
    display: block;
    text-indent: 20px;
  }

  .active a {
    color: #42b983;
  }

  .active .category:before {
    border-color: transparent transparent transparent #42b983;
  }

  .category:before {
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    content: "";
    overflow: hidden;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px;
    border-color: transparent transparent transparent #666;
  }

  @media (min-width: 650px) {
    .left {
      float: left;
      width: 23%;
    }

    .right {
      float: right;
      width: 73%;
    }
  }
</style>
