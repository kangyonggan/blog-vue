<template>
  <div id="header">
    <div class="container">
      <ul>
        <li v-for="category in categories"
            v-on:click="active(category.code)"
            :class="{'active': category.isActive, icon: category.icon != ''}">
          <a :href="'/#/' + category.code">
            <img v-if="category.icon != ''" :src="'/static/' + category.icon"/>
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
          {name: '关于', isActive:  hash === "about", code: "about", icon: ""},
          {name: '留言', isActive:  hash === "guest", code: "guest", icon: ""},
          {name: '相册', isActive:  hash === "photo", code: "photo", icon: ""},
          {name: '小说', isActive:  hash === "novel", code: "novel", icon: ""},
          {name: '工具', isActive:  hash === "tool", code: "tool", icon: ""},
          {name: '文章', isActive:  hash === "article", code: "article", icon: ""},
          {name: '', isActive: false, code: "", icon: "logo.png"}
        ]
      };
    },
    methods: {
      active: function (code) {
        for (const index in this.categories) {
          const category = this.categories[index];
          category.isActive = category.code === code && category.icon === '';
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
    padding: 0 15px;
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
