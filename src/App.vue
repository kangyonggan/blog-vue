<template>
  <div id="app">
    <div class="main">
      <Header/>
      <div class="container">
        <router-view/>
      </div>
    </div>
    <div id="back-top" class="back-top" @click="backTop">
      <i class="fa fa-angle-double-up"></i>
    </div>
  </div>
</template>

<script>
  import Header from "./pages/default/Header.vue";

  export default {
    components: {Header},
    name: 'App',
    methods: {
      backTop: function () {
        scrollTo(0, 0)
      }
    },
    created: function () {
      // 有滚动条时才显示回到顶部按钮
      window.onscroll = function () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 400) {
          document.getElementById("back-top").style.display = "block";
        } else {
          document.getElementById("back-top").style.display = "none";
        }
      };
    }
  }

</script>

<style>
  .back-top {
    display: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 10;
    width: 45px;
    height: 40px;

    background-color: rgba(0,0,0,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: all .2s ease-in-out;
  }

  .back-top:hover {
    background-color: rgba(0,0,0,.7);
  }

  .back-top i {
    color: #fff;
    font-size: 24px;
    margin-left: 3px;
    padding: 8px 12px;
  }
</style>
