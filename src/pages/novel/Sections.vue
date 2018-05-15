<template>
  <div>
    <List icon="fa fa-list" :pagination="true" :title="title" ref="novelSections">
      <template slot-scope="app">
        <li v-for="section in app.list" class="compact">
          <div class="line"></div>
          <a :href="'/#/section/' + section.code">{{section.title}}</a>
          <em>{{section.createdTime | date}}</em>
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
    filters: {
      date: function (date) {
        return formatDate(new Date(date), 'yyyy-MM-dd');
      }
    },
    data() {
      return {
        title: "加载中..."
      }
    },
    created: function () {
      const code = window.location.hash.substring(8);
      axios.get(process.env.API_ROOT + "novel/" + code).then(res => {
        if (res.status === 200) {
          if (res.data.respCo === '0000') {
            this.title = res.data.novel.name;
            document.title = res.data.name;
            this.$refs.novelSections.load("novel/" + res.data.code + "/sections", 1);
          } else {
            console.error(res.data.respMsg);
          }
        }
      }).catch(error => console.log(error));
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
