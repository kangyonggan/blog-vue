<template>
  <div>
    <div class="left border">
      <p>
        <i class="fa fa-list"></i>
        文章列表
      </p>

      <div class="split"></div>

      <ul class="list">
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
        <li>
          <div class="line"></div>
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交</a>
          <em>2018-05-12</em>
        </li>
      </ul>

      <ul class="pagination">
        <li class="show"><a href="#">&lt;</a></li>
        <li class="show"><a href="#">1</a></li>
        <li class="active show"><a href="#">2</a></li>
        <li class="show"><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li class="show"><a href="#">&gt;</a></li>
      </ul>
    </div>

    <div class="right border">
      <p>
        <i class="fa fa-thumbs-up fa-fw"></i>
        站长推荐
      </p>

      <div class="split"></div>

      <ul class="list">
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
      </ul>
    </div>

    <div class="right border">
      <p>
        <i class="fa fa-edit"></i>
        最近编辑
      </p>

      <div class="split"></div>

      <ul class="list">
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
        <li class="sm">
          <a href="#">SpringMVC结合拦截器、注解实现简单的防重复提交、注解实现简单的防重复提交</a>
        </li>
      </ul>
    </div>

    <div class="right border">
      <p>
        <i class="fa fa-bookmark"></i>
        收藏小说
        <a class="more">
          <i class="fa fa-plus"></i>
        </a>
      </p>

      <div class="split"></div>

      <ul class="list">
        <li class="sm">
          <div class="line"></div>
          <a href="#">逆天邪神</a>
          <em>火星引力</em>
        </li>
        <li class="sm">
          <div class="line"></div>
          <a href="#">武炼巅峰</a>
          <em>火星引力</em>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .left, .right {
    margin-bottom: 10px;
  }

  p {
    margin-left: 15px;
    font-weight: bold;
  }

  .list {
    list-style: none;
    padding-left: 0;
    margin: 0 15px;
  }

  .list li {
    position: relative;
    height: 40px;
    line-height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .list li.sm {
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .list li .line {
    position: absolute;
    left: 0;
    right: 0;
    top: 20px;
    height: 1px;
    border-bottom: 1px dashed #e8e8e8;
    z-index: 1;
  }

  .list li.sm .line {
    top: 15px;
  }

  .list li a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: absolute;
    left: 0;
    top: 0;
    max-width: 100%;
    z-index: 9999;
    background: #fff;
    padding-right: 10px;
  }

  em {
    position: absolute;
    right: 0;
    top: 0;
    color: #ccc;
    z-index: 9999;
    background: #fff;
    padding-left: 10px;
    font-size: 13px;
  }

  @media (min-width: 650px) {
    .left {
      float: left;
      width: 70%;
    }

    .right {
      float: right;
      width: 27%;
    }
  }

  @media (max-width: 1000px) {
    em, .line {
      display: none;
    }
  }
</style>
