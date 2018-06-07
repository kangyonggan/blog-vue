<template>
  <div class="border">
    <h1>{{section.title}}</h1>
    <div class="split"></div>
    <div class="tool" v-show="section.title != '章节不存在'">
      <a class="left" v-on:click="prev()">&lt; 上一章</a>
      <a class="center" :href="'/#/novel/' + section.novelCode">章节目录</a>
      <a class="right" v-on:click="next()">下一章 &gt;</a>
    </div>
    <div class="split"></div>
    <div class="content" v-html="section.content"></div>
    <div class="split"></div>
    <div class="tool" v-show="section.title != '章节不存在'">
      <a class="left" v-on:click="prev()">&lt; 上一章</a>
      <a class="center" :href="'/#/novel/' + section.novelCode">章节目录</a>
      <a class="right" v-on:click="next()">下一章 &gt;</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Section',
    data() {
      return {
        loading: false,
        section: {
          content: '正在加载...'
        }
      }
    },
    created: function () {
      const code = window.location.hash.substring(10);

      if (!this.start()) {
        return;
      }

      let that = this
      this.httpGet("section/" + code, function (data) {
        if (!data.section) {
          data.section = {"title": "章节不存在", content:"<p style='text-align: center'>请联系管理员！</p>"};
        }

        that.section = data.section;
        document.title = that.section.title;
        that.loading = false;
      }, function (respCo) {
        that.section = {
          content: '加载失败，错误代码：' + respCo
        }
        that.loading = false;
      })
    },
    methods: {
      start: function () {
        if (this.loading) {
          this.$toast.top('请不要频繁操作');
          return false
        }
        this.loading = true;

        this.section.content = '正在加载...'
        return true;
      },
      prev: function () {

        if (!this.start()) {
          return;
        }

        let that = this
        this.httpGet("/section/" + this.section.code + "/prev", function (data) {
          if (!data.section) {
            window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname + "#/" + "novel/" + that.section.novelCode;
            return;
          }
          that.section = data.section;
          document.title = that.section.title;
          scrollTo(0, 0);
          that.loading = false;
        }, function (respCo) {
          that.section = {
            content: '加载失败，错误代码：' + respCo
          }
          that.loading = false;
        })
      },
      next: function () {

        if (!this.start()) {
          return;
        }

        let that = this
        this.httpGet("/section/" + this.section.code + "/next", function (data) {
          if (!data.section) {
            window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname + "#/" + "novel/" + that.section.novelCode;
            return;
          }
          that.section = data.section;
          document.title = that.section.title;
          scrollTo(0, 0);
          that.loading = false;
        }, function (respCo) {
          that.section = {
            content: '加载失败，错误代码：' + respCo
          }
          that.loading = false;
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

  .content {
    padding: 15px;
  }

  .tool {
    height: 40px;
    position: relative;
    padding: 0 10px;
  }

  a {
    height: 40px;
    line-height: 40px;
    cursor: pointer;
  }

  .left {
    float: left;
  }

  .right {
    float: right;
  }

  .center {
    position: absolute;
    left: 50%;
    top: 0;
  }
</style>
