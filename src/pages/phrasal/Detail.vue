<template>
  <div>
    <div class="border" style="padding: 20px;">
      <h1>{{phrasal.name}}</h1>
      <div v-if="phrasal.id">
        <div class="line"><span>读音：</span>{{phrasal.spelling}}</div>
        <div class="line"><span>详细解释：</span>{{phrasal.definition}}</div>
        <div class="line"><span>出处：</span>{{phrasal.source}}</div>
        <div class="line"><span>示例：</span>{{phrasal.example}}</div>
        <div class="empty-20"></div>

        <div v-if="phrasalList.length > 0">
          <div class="split"></div>
          <div class="empty-20"></div>
          <h2>成语接龙</h2>
          <ul>
            <li v-for="item in phrasalList"><a :href="'/#/phrasal/' + item.id">{{item.name}}</a></li>
          </ul>
        </div>
      </div>

      <div class="empty-20 clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PhrasalDetail',
    data() {
      return {
        phrasal: {},
        phrasalList: []
      }
    },
    mounted() {
      this.query()
    },
    methods: {
      query: function () {
        let id = this.$route.params.id
        let that = this
        this.httpGet("phrasal/" + id, function (data) {
          if (!data.phrasal) {
            data.phrasal = {"name": "成语不存在", content: "<p style='text-align: center'>请联系管理员！</p>"};
          }

          that.load(data.phrasal, data.phrasalList)
          scrollTo(0, 0)
        }, function () {
          that.load({"name": "网络异常", content: "<p style='text-align: center'>请联系管理员！</p>"}, [])
        });
      },
      load: function (phrasal, phrasalList) {
        this.phrasal = phrasal;
        this.phrasalList = phrasalList
        document.title = this.phrasal.name;
      }
    },
    watch: {
      '$route' (newRoute) {
        this.query()
      }
    }
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
