<template>
  <div id="header">
    <div class="container">
      <ul>
        <li class="icon" v-on:click="active('')"><a href="/#/"><img src="../assets/logo.png"/></a></li>
        <li v-for="category in categories"
            v-on:click="active(category.code)"
            :class="{'active': category.isActive}">
          <a :href="'/#/' + category.code">
            {{category.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  const hash = window.location.hash.substring(2);
  export default {
    name: 'Header',
    data() {
      return {
        categories: [
          {name: '关于', isActive:  hash === "about", code: "about"},
          {name: '留言', isActive:  hash === "guest", code: "guest"},
          {name: '相册', isActive:  hash === "photo", code: "photo"},
          {name: '小说', isActive:  hash === "novel", code: "novel"},
          {name: '工具', isActive:  hash === "tool", code: "tool"},
          {name: '文章', isActive:  hash === "article", code: "article"}
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
    list-style: none;
    position: absolute;
    margin: 0;
    padding: 0;
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
    font-size: 14px;
    color: #595959;
    text-decoration: none;
    line-height: 58px;
    padding: 0 10px;
  }

  @media (min-width: 600px) {
    a {
      padding: 0 20px;
    }
  }

  a:hover {
    color: #8c8c8c;
  }

  img {
    height: 40px;
    margin-top: 10px;
  }

  .active {
    border-bottom-color: #25b864;
  }

  .icon {
    float: left;
  }
</style>
