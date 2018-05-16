<template>
  <div>
    <a v-on:click="sort()" class="update">
      <i class="fa fa-sort"></i>
      排序
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
  import axios from 'axios'
  import List from '../../components/List'
  import {formatDate} from '@/common/js/date.js'

  export default {
    components: {List},
    name: 'NovelSections',
    data() {
      return {
        order: "desc"
      }
    },
    filters: {
      date: function (date) {
        return formatDate(new Date(date), 'yyyy-MM-dd');
      }
    },
    created: function () {
      const code = window.location.hash.substring(8);
      axios.get(process.env.API_ROOT + "novel/" + code).then(res => {
        if (res.status === 200) {
          if (res.data.respCo === '0000') {
            document.title = res.data.novel.name;
            this.$refs.novelSections.updateTitle(res.data.novel.name);
          } else {
            console.error(res.data.respMsg);
          }
        }
      }).catch(error => console.log(error));


      axios.get(process.env.API_ROOT + "section/?novelCode=" + code).then(res => {

        if (res.status === 200) {
          if (res.data.respCo === '0000') {
            this.$refs.novelSections.reload(res);
          } else {
            console.error(res.data.respMsg);
          }
        }
      }).catch(error => console.log(error));
    },
    methods: {
      pull: function () {
        const code = window.location.hash.substring(8);
        axios.get(process.env.API_ROOT + "novel/" + code + "/pull").then(res => {
          if (res.status === 200) {
            this.$toast.top('正在更新，请稍后刷新查看最新章节...');
          }
        }).catch(error => console.log(error));
      },
      sort: function () {
        const code = window.location.hash.substring(8);
        if (this.order === 'asc') {
          this.order = "desc";
        } else {
          this.order = 'asc';
        }
        axios.get(process.env.API_ROOT + "section/?sort=code&order="+ this.order +"&novelCode=" + code).then(res => {

          if (res.status === 200) {
            if (res.data.respCo === '0000') {
              this.$toast.top(res.data.respMsg);
              this.$refs.novelSections.reload(res);
            } else {
              console.error(res.data.respMsg);
            }
          }
        }).catch(error => console.log(error));
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
