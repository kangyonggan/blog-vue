<template>
  <div>
    <form class="border">
      <div>
        <h3>成语查询</h3>
        <div class="split"></div>
        <div class="condition hidden-sm">
          <span class="pull-left">字数：</span>
          <ul class="list pull-left">
            <li v-for="len in 11"><a :href="'/#/phrasal?wordLen=' + (len + 2)">{{len + 2}}字</a></li>
          </ul>
        </div>
        <div class="condition hidden-sm">
          <span class="pull-left">首字母：</span>
          <ul class="list pull-left">
            <li v-for="capitalWord in 26"><a :href="'/#/phrasal?capitalWord=' + capitalWord">{{capitalWord | numToChar}}</a></li>
          </ul>
        </div>
        <div class="condition hidden-sm">
          <span class="pull-left">类型：</span>
          <ul class="list pull-left">
            <li><a href="/#/phrasal?type=AABB">AABB</a></li>
            <li><a href="/#/phrasal?type=ABAB">ABAB</a></li>
            <li><a href="/#/phrasal?type=ABAC">ABAC</a></li>
            <li><a href="/#/phrasal?type=ABCA">ABCA</a></li>
            <li><a href="/#/phrasal?type=ABBC">ABBC</a></li>
            <li><a href="/#/phrasal?type=ABCB">ABCB</a></li>
            <li><a href="/#/phrasal?type=ABCC">ABCC</a></li>
            <li><a href="/#/phrasal?type=ABCD">ABCD</a></li>
          </ul>
        </div>
        <div class="condition">
          <span class="pull-left">定位查询：</span>
          <div class="pos">
            <input name="pos1"/>
            <input name="pos2"/>
            <input name="pos3"/>
            <input name="pos4"/>
            <a class="btn pull-left">查询</a>
          </div>
        </div>
        <div class="condition">
          <span class="pull-left">模糊查询：</span>
          <div class="pos">
            <input name="name" style="width: 166px;"/>
            <a class="btn pull-left">查询</a>
          </div>
        </div>
      </div>

      <div class="empty-20 clear"></div>
    </form>

    <div class="border result">
      <ul>
        <li v-for="i in 100"><a :href="'/#/phrasal/' + i">不死不休{{i}}</a></li>
      </ul>
      <div class="empty-20 clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Phrasal',
    filters: {
      numToChar: function (num) {
        return String.fromCharCode(64 + num)
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

  .result {
    padding: 20px;
  }

  .result ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .result ul li {
    float: left;
  }

  .result ul li a {
    display: inline-block;
    width: 200px;
    line-height: 34px;
    font-size: 17px;
  }
</style>
