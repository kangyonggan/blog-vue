<template>
  <div id="header">
    <ul>
      <li class="icon" v-on:click="active('')">
        <a href="/#/">
          <img src="/static/logo.png"/>
          <span class="hidden">康永敢</span>
        </a>
      </li>
      <li v-for="category in categories"
          v-on:click="active(category.code)"
          :class="{'active': category.isActive}">
        <a :href="'/#/' + category.code">
          {{category.name}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  const hash = window.location.hash.substring(2);
  export default {
    name: 'Header',
    data() {
      return {
        categories: [
          {name: '关于', isActive: hash === "about", code: "about"},
//          {name: '留言', isActive: hash === "guest", code: "guest"},
//          {name: '相册', isActive: hash === "photo", code: "photo"},
          {name: '小说', isActive: hash === "novel", code: "novel"},
//          {name: '工具', isActive: hash === "tool", code: "tool"}
        ]
      };
    },
    methods: {
      active: function (code) {
        for (const index in this.categories) {
          const category = this.categories[index];
          category.isActive = category.code === code;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #header {
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #e8e8e8;
  }

  ul {
    max-width: 1056px;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    list-style: none;
    position: absolute;
    left: 10px;
    right: 10px;
    height: 60px;
  }

  li {
    float: right;
    border-bottom: 2px solid #fafafa;
    text-align: center;
  }

  a {
    line-height: 58px;
    padding: 0 8px;
  }

  @media (min-width: 650px) {
    a {
      padding: 0 20px;
    }

    #header ul li a span {
      display: block;
    }
  }

  @media (max-width: 800px) {
    input {
      display: none;
    }
  }

  img {
    height: 40px;
    margin-top: 10px;
    float: left;
  }

  ul li a span {
    float: left;
    font-size: 20px;
    margin-left: 5px;
  }

  .active {
    border-bottom-color: #25b864;
  }

  .icon {
    float: left;
  }
</style>
