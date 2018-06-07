<template>
  <div>
    <a v-on:click="sort()" class="update">
      <i class="fa fa-sort"></i>
      倒叙
    </a>
    <a v-on:click="pull()" class="update">
      <i class="fa fa-sync"></i>
      更新
    </a>

    <List icon="fa fa-file-alt" ref="novelSections">
      <template slot-scope="app">
        <li v-for="section in app.list" class="compact">
          <a :href="'/#/section/' + section.code">{{section.title}}</a>
        </li>
      </template>
    </List>
  </div>
</template>

<script>
  export default {
    name: 'NovelSections',
    data() {
      return {
        loading: false,
        order: "desc"
      }
    },
    created: function () {
      const code = window.location.hash.substring(8);

      let that = this
      this.httpGet("novel/" + code, function (data) {
        document.title = data.novel.name;
        that.$refs.novelSections.updateTitle(data.novel.name);
      })
      this.httpGet("section?novelCode=" + code, function (data) {
        that.$refs.novelSections.reload(data);
      })
    },
    methods: {
      pull: function () {
        if (this.loading) {
          this.$toast.top('请不要频繁操作');
          return
        }
        this.loading = true
        const code = window.location.hash.substring(8);

        let that = this
        this.httpPut("novel/" + code + "/pull", function () {
          that.$toast.top('正在更新，请稍后刷新查看最新章节...');
          that.loading = false
        }, function () {
          that.loading = false
        })
      },
      sort: function () {
        if (this.loading) {
          this.$toast.top('请不要频繁操作');
          return
        }
        this.$refs.novelSections.reload({});
        this.loading = true
        const code = window.location.hash.substring(8);
        if (this.order === 'asc') {
          this.order = "desc";
        } else {
          this.order = 'asc';
        }

        let that = this
        this.httpGet("section/?_sort=code&_order="+ this.order +"&novelCode=" + code, function (data) {
          that.$toast.top(data.respMsg);
          that.$refs.novelSections.reload(data);
          that.loading = false
        }, function () {
          that.loading = false
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    display: inline-block;
    width: 25%;
  }

  .update {
    float: right;
    margin-top: 18px;
    margin-right: 20px;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    li {
      width: 100%;
    }
  }
</style>
