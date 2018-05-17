<template>
  <div class="border tools-list">
    <div class="item" v-for="tool in tools">
      <a :href="'/#/tool/' + tool.code">
        <img :src="'/static/tools/' + tool.code + '.png'"/>
        <p>{{tool.name}}</p>
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
          code: 'ascll',
          name: 'ASCLL码对照表'
        }, {
          code: 'html',
          name: 'HTML转义字符'
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
        }, {
          code: 'compare',
          name: 'properties文件对比'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tools-list > .item a {
    display: inline-block;
    padding: 20px 40px;
    text-align: center;
    border: 1px solid #ddd;
    border-radius: 10px;
    color: #333;
    text-decoration: none;
    float: left;
    margin-left: 39px;
    margin-top: 30px;
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
    .tools-list > .item a {
      padding: 15px 40px;
      margin-left: 24px;
      margin-top: 20px;
    }

    .tools-list > .item a img {
      width: 70px;
      height: 70px;
    }

    .tools-list > .item a p {
      margin-top: 5px;
    }
  }
</style>
