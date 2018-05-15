<template>
  <div>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    display: inline-block;
    width: 25%;
  }

  @media (max-width: 650px) {
    li {
      width: 100%;
    }
  }
</style>
