<template>
  <div>
    <div class="border" style="padding: 20px;">
      <h1>毕恭毕敬</h1>
      <div class="line"><span>读音：</span>bì gōng bì jìng</div>
      <div class="line"><span>详细解释：</span>形容态度十分恭敬。</div>
      <div class="line"><span>出处：</span>《诗经·小雅·小弁》：“维桑与梓，必恭敬止，靡瞻匪父，靡依匪母。”</div>
      <div class="line"><span>示例：</span>他～地将书递给了老师，请求解答两个疑难问题</div>
      <div class="empty-20"></div>
      <div class="split"></div>
      <div class="empty-20"></div>
      <h2>成语接龙</h2>
      <ul>
        <li v-for="i in 8"><a href="/#/phrasal/2">敬如上宾</a></li>
      </ul>

      <div class="empty-20 clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhrasalDetail'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .border * {
    font-size: 17px;
  }
  .border h1 {
    font-size: 26px;
  }
  .border h2 {
    font-size: 22px;
  }
  .border span {
    font-weight: bold;
  }
  .line {
    margin-top: 18px;
  }

  ul {
    list-style: none;
  }

  li {
    float: left;
  }

  li a {
    display: inline-block;
    width: 200px;
    line-height: 34px;
    font-size: 17px;
  }
</style>
