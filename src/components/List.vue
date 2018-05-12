<template>
  <div>
    <div class="border">
      <p>
        <i :class="iconClass"></i>
        {{title}}
      </p>

      <div class="split"></div>

      <ul class="list">
        <li v-for="item in items" :class="{compact: compact}">
          <div class="line" v-show="em"></div>
          <a :href="'/#/' + item.href">{{item.title}}</a>
          <em v-show="em">{{item.em}}</em>
        </li>
      </ul>

      <ul class="pagination" v-show="pagination">
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
  </div>
</template>

<script>
  export default {
    name: 'List',
    props: ["float", "iconClass", "pagination", "compact", "em", "title", "items"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

  .list li.compact {
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

  .list li.compact .line {
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

  @media (max-width: 1000px) {
    em, .line {
      display: none;
    }
  }
</style>


