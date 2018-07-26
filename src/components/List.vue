<template>
  <div>
    <div class="border">
      <p>
        <i :class="icon"></i>
        {{listTitle}}
        <a v-show="more != undefined" :href="'/#/' + more">
          <i class="fa fa-plus"></i>
        </a>
      </p>

      <div class="split"></div>

      <ul class="list">
        <slot v-bind:list="list" v-if="list && list.length > 0"></slot>
        <li v-else class="empty">{{result}}</li>
      </ul>

      <ul class="pagination" v-if="pagination && pageInfo.pages > 1">
        <li class="show" v-show="pageInfo.hasPreviousPage"><a v-on:click="jump(pageInfo.prePage)">&lt;</a></li>
        <li v-for="nav in pageInfo.navigatepageNums"
            :class="{active: nav==pageInfo.pageNum, show: nav < pageInfo.pageNum + 2 && nav > pageInfo.pageNum - 2}">
          <a v-on:click="nav!=pageInfo.pageNum && jump(nav)">{{nav}}</a>
        </li>
        <li class="show" v-show="pageInfo.hasNextPage"><a v-on:click="jump(pageInfo.nextPage)">&gt;</a></li>
      </ul>

      <div style="clear:both;height: 1px"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ["icon", "pagination", "pageSize", "title", "url", "more", "sort", "order", "lazy"],
    data() {
      return {
        list: [],
        result: '正在加载...',
        pageInfo: {},
        serverUrl: "",
        listTitle: ""
      }
    },
    created: function () {
      this.listTitle = this.title;
      if (this.url) {
        this.serverUrl = this.url;
        if (!this.lazy) {
          this.jump(1);
        } else {
          this.result = '请先查询'
        }
      } else {
        this.result = '请先查询'
      }
    },
    methods: {
      setSort: function (sort, order) {
        this.sort = sort
        this.order = order
      },
      load: function (url, pageNum, success, failure) {
        let params = url.indexOf('?') > -1 ? "" : "?"
        if (this.sort && this.order) {
          params += "&_sort=" + this.sort + "&_order=" + this.order
        }

        this.serverUrl = url;
        if (this.pagination) {
          params += "&pageNum=" + pageNum;
          if (this.pageSize) {
            params += "&pageSize=" + this.pageSize;
          }
        }
        url += params;

        this.result = '正在加载...';
        let that = this
        this.httpGet(url, function (data) {
          that.reload(data);
          if (success) {
            success(data)
          }
        }, function (respCo) {
          that.result = '加载失败，错误代码：' + respCo
          if (failure) {
            failure()
          }
        })
      },
      jump: function (pageNum) {
        this.load(this.serverUrl, pageNum);
      },
      reload: function (data) {
        if (this.pagination) {
          this.pageInfo = data.pageInfo;
          this.list = this.pageInfo.list;
        } else {
          this.list = data.list;
        }

        if (!this.list || !this.list.length) {
          this.result = '没有内容';
        }

        scroll(0, 0);
      },
      updateTitle: function (title) {
        this.listTitle = title;
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

  .empty {
    text-align: center;
  }

  @media (max-width: 1000px) {
    em, .line {
      display: none;
    }
  }
</style>


