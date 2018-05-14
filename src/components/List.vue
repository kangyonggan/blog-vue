<template>
  <div>
    <div class="border">
      <p>
        <i :class="icon"></i>
        {{title}}
        <a v-show="more != undefined" :href="'/#/' + more">
          <i class="fa fa-plus"></i>
        </a>
      </p>

      <div class="split"></div>

      <ul class="list">
        <slot v-bind:list="list"></slot>
      </ul>

      <ul class="pagination" v-show="pagination && page.pages > 1">
        <li class="show" v-show="page.hasPreviousPage"><a v-on:click="load(page.prePage)">&lt;</a></li>
        <li v-for="nav in page.navigatepageNums"
            :class="{active: nav==page.pageNum, show: nav < page.pageNum + 2 && nav > page.pageNum - 2}">
          <a v-on:click="nav!=page.pageNum && load(nav)">{{nav}}</a>
        </li>
        <li class="show" v-show="page.hasNextPage"><a v-on:click="load(page.nextPage)">&gt;</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'List',
    props: ["icon", "pagination", "title", "url", "more"],
    data() {
      return {
        list: [],
        page: {},
        serverUrl: ""
      }
    },
    created: function () {
      if (this.url) {
        this.serverUrl = this.url;
        this.load(1);
      }
    },
    methods: {
      loadFromUrl: function (url, pageNum) {
        this.serverUrl = url;
        axios.get(process.env.API_ROOT + url + "?pageNum=" + pageNum).then(res => {
          if (res.status === 200) {
            if (this.pagination) {
              this.page = res.data;
              this.list = this.page.list;
            } else {
              this.list = res.data;
            }
          }
        }).catch(error => console.log(error));
      },
      load: function (pageNum) {
        this.loadFromUrl(this.serverUrl, pageNum);
      },
      reload: function (page) {
        this.page = page;
        this.list = page.list;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  p {
    margin-left: 15px;
    font-weight: bold;
  }

  p a {
    float: right;
    margin-right: 10px;
  }

  .list {
    list-style: none;
    padding-left: 0;
    margin: 0 15px;
  }

  .list li {
    position: relative;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .list li.compact {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .list li .line {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    height: 1px;
    border-bottom: 1px dashed #e8e8e8;
    z-index: 1;
  }

  .list li.compact .line {
    top: 15px;
  }

  .list li a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    z-index: 9999;
    background: #fff;
    padding-right: 10px;
  }

  em {
    position: absolute;
    right: 0;
    top: 0;
    color: #ccc;
    z-index: 9999;
    background: #fff;
    padding-left: 10px;
    font-size: 13px;
  }

  @media (max-width: 1000px) {
    em, .line {
      display: none;
    }
  }
</style>


