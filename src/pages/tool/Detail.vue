<template>
  <div>
    <form class="border">
      <div v-if="tool.code == 'qr'">
        <h3>生成二维码</h3>
        <div class="split"></div>

        <Input name="data" label="输入URL或其他文本" :required="true" placeholder="如：https://kangyonggan.com" :model="tool"/>

        <Select name="size" label="选择二维码大小" :required="true" placeholder="选择二维码大小" :model="tool">
          <option v-for="size in 9" :value="size">{{size * 100}} * {{size * 100}}</option>
        </Select>
      </div>

      <div v-if="tool.code == 'qr2'">
        <h3>解析二维码</h3>
        <div class="split"></div>

        <Input name="file" type="file" v-on:change="change" label="上传二维码" :required="true" placeholder="选择含有二维码的图片"
               :model="tool"/>
      </div>

      <div v-if="tool.code == 'bazi'">
        <h3>八字、五行</h3>
        <div class="split"></div>
        <Select name="lunar" label="阴/阳历" :required="true" placeholder="选择阴/阳历" :model="tool">
          <option value="0">阴历（小的那个）</option>
          <option value="1">阳历（大的那个）</option>
        </Select>

        <Input type="number" name="year" label="出身年份（1900~2049）：" :required="true" placeholder="例如：1992" :model="tool"/>
        <Input type="number" name="month" label="出生月份（1~12）：" :required="true" placeholder="例如：3" :model="tool"/>
        <Input type="number" name="day" label="出生日期（1~31）：" :required="true" placeholder="例如：17" :model="tool"/>
        <Input type="number" name="hour" label="出生时辰（0~23）：" :required="true" placeholder="例如：17" :model="tool"/>
      </div>

      <div v-if="tool.code == 'xml'">
        <h3>XML格式化</h3>
        <div class="split"></div>
        <Textarea name="data" label="待格式化的XML：" :required="true" placeholder="请输入需要格式化的xml" :model="tool"/>
      </div>

      <div v-if="tool.code == 'idcard'">
        <h3>身份证查询</h3>
        <div class="split"></div>
        <Input name="data" label="待查询的身份证：" :required="true" placeholder="请输入身份证号码" :model="tool"/>
      </div>

      <div v-if="tool.code == 'gencard'">
        <h3>生成身份证</h3>
        <div class="split"></div>
        <Select name="prov" label="选择省份：" placeholder="随机"  :required="true" :model="tool">
          <option v-for="(v, k) in serverData.cityCodes" :value="k">{{v}}</option>
        </Select>
        <Input type="number" name="startAge" label="起始年龄(周岁)：" :required="true" placeholder="默认：20" :model="tool"/>
        <Input type="number" name="endAge" label="截止年龄(周岁)：" :required="true" placeholder="默认：60" :model="tool"/>

        <Select name="sex" label="性别：" placeholder="随机" :required="true" :model="tool">
          <option value="0">男</option>
          <option value="1">女</option>
        </Select>
        <Select name="len" label="身份证位数：" placeholder="随机" :required="true" :model="tool">
          <option value="15">15位</option>
          <option value="18">18位</option>
        </Select>
        <Input type="number" name="count" label="生成数量（1~100）：" placeholder="默认：10" :required="true" :model="tool"/>
      </div>

      <div v-if="tool.code == 'sql'">
        <h3>SQL格式化</h3>
        <div class="split"></div>

        <Select name="dialect" label="选择数据库方言" :required="true" placeholder="选择数据库方言" :model="tool">
          <option value="MySQL">MySQL</option>
          <option value="Oracle">Oracle</option>
          <option value="SQLServer">SQLServer</option>
        </Select>
        <Textarea name="data" label="待格式化的SQL：" :required="true" placeholder="请输入需要格式化的SQL" :model="tool"/>
      </div>

      <div v-if="tool.code == 'json'">
        <h3>JSON格式化</h3>
        <div class="split"></div>
        <Textarea name="data" label="待格式化的JSON：" :required="true" placeholder="请输入需要格式化的JSON" :model="tool"/>
      </div>

      <div v-if="tool.code == 'js'">
        <h3>JS压缩</h3>
        <div class="split"></div>
        <Textarea name="data" label="待压缩的JS：" :required="true" placeholder="请输入需要压缩的JS" :model="tool"/>
      </div>

      <div v-if="tool.code == 'css'">
        <h3>CSS压缩</h3>
        <div class="split"></div>
        <Textarea name="data" label="待压缩的CSS：" :required="true" placeholder="请输入需要压缩的CSS" :model="tool"/>
      </div>

      <div v-if="tool.code == 'charset'">
        <h3>编码转换</h3>
        <div class="split"></div>

        <Select name="charset" label="选择转码方式" :required="true" placeholder="不选不转码" :model="tool">
          <option value="1" >UTF-8 转 GBK</option>
          <option value="2" >UTF-8 转 IOS-8859-1</option>
          <option value="3" >GBK 转 UTF-8</option>
          <option value="4" >GBK 转 IOS-8859-1</option>
          <option value="5" >IOS-8859-1 转 UTF-8</option>
          <option value="6" >IOS-8859-1 转 GBK</option>
          <option value="7" >字符串 转 unicode</option>
          <option value="8" >unicode 转 字符串</option>
        </Select>

        <Textarea name="data" label="待转码的字符串：" :required="true" placeholder="请输入需要转码的字符串" :model="tool"/>
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
        <div v-if="tool.code == 'qr'">
          <img :src="result == '' ? '/static/logo.png' : UPLOAD_ROOT + result"/>
        </div>
        <div v-else-if="tool.code == 'xml' || tool.code == 'json' || tool.code == 'sql' || tool.code == 'js' || tool.code == 'css'">
          <pre><code>{{result}}</code></pre>
        </div>
        <div v-else v-html="result">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from '../../components/form/Input'
  import Select from '../../components/form/Select'
  import Textarea from '../../components/form/Textarea'
  import axios from 'axios'

  export default {
    components: {Input, Select, Textarea},
    name: 'ToolDetail',
    data() {
      return {
        UPLOAD_ROOT: process.env.UPLOAD_ROOT,
        result: '',
        tool: {},
        serverData: {}
      }
    },
    created: function () {
      const code = window.location.hash.substring(7);
      this.tool.code = code;
      if (code === 'gencard') {
        let that = this
        this.httpGet("tool?code=" + code, function (data) {
          that.serverData = data;
        });
      }
    },
    methods: {
      reset: function (e) {
        const code = this.tool.code;
        this.tool = {};
        this.tool.code = code;
        e.target.parentNode.parentNode.reset();
        this.result = '';
      },
      change: function (name, file) {
        this.tool[name] = file;
        if (file) {
          this.tool[name + 'Value'] = file.name;
        } else {
          this.tool[name + 'Value'] = '';
        }
      },
      submit: function () {
        this.result = '';

        var param = new FormData();
        for (var key in this.tool) {
          if (key) {
            param.append(key, this.tool[key]);
          }
        }

        let that = this
        this.httpPost('tool', param, function (data) {
          that.result = data.result;
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    padding: 15px 28px 15px 15px;
  }

  p {
    margin-left: 15px;
    font-weight: bold;
  }

  .result {
    padding: 15px;
  }

</style>
