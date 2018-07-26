<template>
  <div>
    <form class="border">
      <div>
        <h3>成语查询</h3>
        <div class="split"></div>
        <div class="condition hidden-sm">
          <span class="pull-left">字数：</span>
          <ul class="list pull-left">
            <li v-for="len in 11"  :class="{active: wordLen * 1===len + 2}"><a :href="'/#/phrasal?wordLen=' + (len + 2)">{{len + 2}}字</a></li>
          </ul>
        </div>
        <div class="condition hidden-sm">
          <span class="pull-left">首字母：</span>
          <ul class="list pull-left">
            <li v-for="cw in 26" :class="{active: capitalWord===numToChar(cw)}" ><a
              :href="'/#/phrasal?capitalWord=' + numToChar(cw)">{{cw | numToChar}}</a></li>
          </ul>
        </div>
        <div class="condition hidden-sm">
          <span class="pull-left">类型：</span>
          <ul class="list pull-left">
            <li :class="{active: type===tp}" v-for="(tp, index) in types" :key="index"><a :href="'#/phrasal?type=' + tp">{{tp}}</a></li>
          </ul>
        </div>
        <div class="condition">
          <span class="pull-left">模糊查询：</span>
          <div class="pos">
            <input v-model="name" style="width: 166px;"/>
            <a class="btn pull-left" @click="query()">查询</a>
          </div>
        </div>
      </div>

      <div class="empty-20 clear"></div>
    </form>

    <List icon="fa fa-file-alt" url="phrasal" title="查询结果" :pagination="true" pageSize="50" ref="phrasalList" :lazy=false>
      <template slot-scope="app">
        <li v-for="phrasal in app.list" class="compact">
          <a :href="'/#/phrasal/' + phrasal.id">{{phrasal.name}}</a>
        </li>
      </template>
    </List>
    <div class="empty-20 clear"></div>
  </div>
</template>

<script>
  export default {
    name: 'Phrasal',
    data() {
      return {
        capitalWord: '',
        wordLen: '',
        type: '',
        name: '',
        types: ['ABAB', 'ABAC', 'ABCA', 'ABBC', 'ABCB', 'ABCC', 'ABCD']
      }
    },
    methods: {
      numToChar: function (num) {
        return String.fromCharCode(64 + num)
      },
      query() {
        this.capitalWord = this.$route.query.capitalWord || this.capitalWord
        this.wordLen = this.$route.query.wordLen || this.wordLen
        this.type = this.$route.query.type || this.type
        this.name = this.$route.query.name || this.name

        let that = this
        this.httpGet("phrasal?type=" + that.type + "&capitalWord=" + that.capitalWord + "&wordLen=" + that.wordLen + "&name=" + that.name + "&pageSize=50", function (data) {
          that.$refs.phrasalList.reload(data);
        })
      }
    },
    filters: {
      numToChar: function (num) {
        return String.fromCharCode(64 + num)
      }
    },
    mounted () {
      this.query()
    },
    watch: {
      '$route' (newRoute) {
        this.query()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    padding: 15px 28px 15px 15px;
  }

  .condition {
    margin-top: 15px;
    height: 30px;
    max-height: 50px;
    width: 100%;
    float: left;
  }

  .condition * {
    font-size: 17px;
  }

  .condition span {
    font-weight: bold;
    width: 100px;
    text-align: right;
    margin-right: 20px;
  }

  ul.list {
    list-style: none;
    height: 30px;
    margin: 0;
    padding: 0;
  }

  ul.list li {
    float: left;
    margin: 0 20px 0 0;
    padding: 0;
  }

  ul.list li.active a {
    color: red
  }

  @media (max-width: 1024px) {
    .hidden-sm {
      display: none;
    }
  }

  .pos input {
    float: left;
    width: 34px;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    outline: none;
    padding: 4px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    vertical-align: middle !important;
  }

  .pos a {
    margin-top: 0 !important;
  }

  li.compact {
    display: inline-block;
    width: 20%;
  }

  @media (max-width: 650px) {
    li.compact {
      width: 100%;
    }
  }
</style>
