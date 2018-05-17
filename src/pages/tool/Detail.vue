<template>
  <div>
    <form class="border">
      <div v-show="tool.code == 'qr'">
        <h3>生成二维码</h3>
        <div class="split"></div>

        <div class="form-group">
          <label class="required">输入URL或其他文本</label>
          <input name="data" placeholder="如：https://kangyonggan.com" v-model="tool.data"/>
        </div>
        <div class="form-group">
          <label class="required">选择二维码大小</label>
          <select name="size" v-model="tool.size">
            <option value=""></option>
            <option v-for="size in 9" :value="size">{{size * 100}} * {{size * 100}}</option>
          </select>
        </div>
      </div>
      <div v-show="tool.code == 'qr2'">
        <h3>解析二维码</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'bazi'">
        <h3>八字、五行</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'xml'">
        <h3>XML格式化</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'idcard'">
        <h3>身份证查询</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'gencard'">
        <h3>生成身份证</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'ascll'">
        <h3>ASCLL码对照表</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'html'">
        <h3>HTML转义字符</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'sql'">
        <h3>SQL格式化</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'json'">
        <h3>JSON格式化</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'js'">
        <h3>JS压缩</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'css'">
        <h3>CSS压缩</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'charset'">
        <h3>编码转换</h3>
        <div class="split"></div>
        开发中
      </div>
      <div v-show="tool.code == 'compare'">
        <h3>properties文件对比</h3>
        <div class="split"></div>
        开发中
      </div>
      <div class="empty-20"></div>
      <div class="split"></div>
      <div class="text-center">
        <div class="empty-10"></div>
        <a class="btn btn-danger" v-on:click="reset($event)">重置</a>
        <a class="btn" v-on:click="submit()">提交</a>
      </div>
    </form>

    <div v-show="result != ''" class="border">
      <p>
        结果：
      </p>

      <div class="split"></div>

      <div class="result">
        <div v-show="tool.code == 'qr'">
          <img :src="result == '' ? '/static/logo.png' : API_ROOT + result" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'

  export default {
    name: 'ToolDetail',
    data() {
      return {
        API_ROOT: process.env.API_ROOT,
        result: '',
        tool: {
          code: '',
          data: '',
          size: ''
        }
      }
    },
    created: function () {
      const code = window.location.hash.substring(7);
      this.tool.code = code;
    },
    methods: {
      reset: function (e) {
        e.target.parentNode.parentNode.reset();
        this.result = '';
      },
      submit: function () {
        this.result = '';
        axios.post(process.env.API_ROOT + "tool", qs.stringify(this.tool), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {
          if (res.status === 200) {
            this.$toast.top(res.data.respMsg);
            if (res.data.respCo === '0000') {
              const code = this.tool.code;
              this.tool = {};
              this.tool.code = code;
              this.result = res.data.result;
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
    padding: 15px 28px 15px 15px;
  }

  .form-group {
    margin-top: 30px;
  }

  label {
    display: inline-block;
    width: 40%;
    text-align: right;
    margin-right: 10px;
  }

  .required:after {
    color: red;
    content: "*";
  }

  input, select {
    margin-top: 5px;
    width: 40%;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 3px;
    transition: border-color 0.2s ease;
    vertical-align: middle !important;
  }

  @media (max-width: 650px) {

    label {
      text-align: left;
      width: 100%;
      margin-right: 0;
    }

    input, select {
      width: 100%;
    }
  }

  p {
    margin-left: 15px;
    font-weight: bold;
  }

  .result {
    padding: 15px;
  }

</style>
