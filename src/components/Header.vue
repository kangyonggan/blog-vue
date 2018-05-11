<template>
  <div id="header">
    <div class="container">
      <a href="/#/" id="title">
        <img src="../assets/logo.png"/>
        康永敢的博客
      </a>
      <ul>
        <li><a href="/#/guest">留言</a></li>
        <li><a href="/#/about">关于</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    height: 60px;
    border-bottom: 1px solid #e8e8e8;
  }

  ul {
    list-style: none;
    margin: 0;
    float: right;
  }

  li {
    float: right;
    border-top: 2px solid #fff;
    margin-right: 16px;
    padding: 0 15px;
  }

  img {
    height: 30px;
    margin-top: 15px;
    float: left;
    margin-right: 10px;
  }

  #title {
    font-size: 20px;
  }

  a {
    font-size: 14px;
    color: #444;
    text-decoration: none;
    line-height: 62px;
  }

  a:hover {
    color: #777;
  }

  .active {
    border-top-color: #25b864;
  }
</style>
