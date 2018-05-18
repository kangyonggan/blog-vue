<template>
  <div class="border tools-list">
    <div class="item" v-for="tool in tools">
      <a :href="'/#/tool/' + tool.code">
        <img :src="'/static/tools/' + tool.code + '.png'"/>
        <p class="nowrap">{{tool.name}}</p>
      </a>
    </div>
    <div class="clear empty-20"></div>
  </div>
</template>

<script>
  export default {
    name: 'Tool',
    data() {
      return {
        tools: [{
          code: 'qr',
          name: '生成二维码'
        }, {
          code: 'qr2',
          name: '解析二维码'
        }, {
          code: 'bazi',
          name: '八字、五行'
        }, {
          code: 'xml',
          name: 'XML格式化'
        }, {
          code: 'idcard',
          name: '身份证查询'
        }, {
          code: 'gencard',
          name: '生成身份证'
        }, {
          code: 'sql',
          name: 'SQL格式化'
        }, {
          code: 'json',
          name: 'JSON格式化'
        }, {
          code: 'js',
          name: 'JS压缩'
        }, {
          code: 'css',
          name: 'CSS压缩'
        }, {
          code: 'charset',
          name: '编码转换'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tools-list > .item {
    height: 240px;
    width: 240px;
    text-align: center;
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  .tools-list > .item a {
    margin-top: 28px;
    display: inline-block;
    text-align: center;
    color: #333;
    text-decoration: none;
  }

  .tools-list > .item a img {
    display: inline-block;
    width: 140px;
    height: 140px;
  }

  .tools-list > .item a p {
    margin-top: 10px;
  }

  @media (max-width: 650px) {
    .tools-list > .item {
      width: 110px;
      height: 100px;
      margin-top: 10px;
      margin-left: 10px;
    }
    .tools-list > .item a {
      margin-top: 10px;
    }

    .tools-list > .item a img {
      width: 60px;
      height: 60px;
    }

    .tools-list > .item a p {
      margin-top: 5px;
    }
  }
</style>
