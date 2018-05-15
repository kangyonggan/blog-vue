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
  import axios from 'axios'

  export default {
    name: 'Section',
    data() {
      return {
        section: {}
      }
    },
    created: function () {
      const code = window.location.hash.substring(10);
      axios.get(process.env.API_ROOT + "section/" + code).then(res => {
        if (res.status === 200) {
          if (!res.data.section) {
            res.data.section = {"title": "章节不存在", content:"<p style='text-align: center'>请联系管理员！</p>"};
          }

          this.section = res.data.section;
          document.title = this.section.title;
        }
      }).catch(error => console.log(error));
    },
    methods: {
      prev: function () {
        axios.get(process.env.API_ROOT + "/section/" + this.section.code + "/prev").then(res => {
          if (res.status === 200) {
            if (!res.data.section) {
              window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname + "#/" + "novel/" + this.section.novelCode;
              return;
            }
            this.section = res.data.section;
            document.title = this.section.title;
            scrollTo(0, 0);
          }
        }).catch(error => console.log(error));
      },
      next: function () {
        axios.get(process.env.API_ROOT + "/section/" + this.section.code + "/next").then(res => {
          if (res.status === 200) {
            if (!res.data.section) {
              window.location.href = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname + "#/" + "novel/" + this.section.novelCode;
              return;
            }
            this.section = res.data.section;
            document.title = this.section.title;
            scrollTo(0, 0);
          }
        }).catch(error => console.log(error));
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
