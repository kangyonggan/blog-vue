<template>
  <div>
    <div class="left border">
      <div class="center">
        <img src="../../assets/me.jpg"/>
        <p>
          康永敢
        </p>
      </div>

      <div class="split"></div>

      <ul>
        <li>
          <i class="fa fa-phone" aria-hidden="true"></i>
          18516690317
        </li>
        <li>
          <i class="fa fa-home" aria-hidden="true"></i>
          上海市嘉定区江桥镇
        </li>
        <li>
          <i class="fab fa-qq" aria-hidden="true"></i>
          2825176081
        </li>
        <li>
          <i class="fab fa-weixin" aria-hidden="true"></i>
          Brave_Kang
        </li>
        <li>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          java@kangyonggan.com
        </li>
        <li>
          <i class="fab fa-github" aria-hidden="true"></i>
          <a href="https://github.com/kangyonggan" target="_blank">https://github.com/kangyonggan</a>
        </li>
      </ul>

    </div>

    <div class="right border">
      <p>
        康永敢，男，全日制本科毕业生，家在安徽省蚌埠市怀远县，现在在上海漂泊，职业是java程序猿，主要从事互联网金融行业。爱好：走路吃饭时看小说，有空就敲敲代码做些小玩意，比如iOS版的小说APP，比如博客网站等。
      </p>
      <p>
        励志做一个全栈攻城狮，奈何学海无涯啊。最近都在研究vue+spring cloud微服务，目前已经用于我的博客中了，真正的是杀鸡用牛刀，不过也没办法，公司项目没用微服务，我只能在个人博客中玩玩了。
      </p>
      <p>
        下一步我再把k8s和docker用进来练练手。当我励志学习某技术时，感觉学海无涯，当我攻克下来时又感觉空虚寂寞。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .left {
    margin-bottom: 10px;
  }

  .left img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-top: 15px;
  }

  .right {
    padding: 10px;
  }

  .right p {
    text-indent: 40px;
    line-height: 27px;
  }

  ul {
    list-style: none;
    padding: 0 10px;
  }

  li {
    line-height: 30px;
    color: #8c8c8c;
    overflow: hidden;
  }

  .fa, .fab {
    width: 20px;
    text-align: right;
    margin-right: 10px;
  }

  a {

  }

  @media (min-width: 650px) {
    .left {
      float: left;
      width: 30%;
    }

    .right {
      float: right;
      width: 66%;
    }
  }

</style>
