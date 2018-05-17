<template>
  <div>
    <form class="border">
      <textarea name="content" rows="6" placeholder="相遇便是缘分，留句话吧..." v-model="guest.content"></textarea>
      <input name="realname" placeholder="姓名" v-model="guest.realname"/>
      <input name="email" v-model="guest.email" placeholder="邮箱 (审核后会发邮件通知您)"/>
      <a v-on:click="submit()" class="btn">提交</a>
    </form>

    <List icon="fa fa-comments" :pagination="true" pageSize="5" title="留言板" url="guest">
      <template slot-scope="app">
        <li v-for="gst in app.list">
          <div class="l pull-left">
            <img class="avatar" src="../../assets/default_avatar.png" width="36" height="36"/>
            <p class="ip-info">{{gst.ipInfo}}</p>
          </div>
          <div class="r pull-right">
            <div class="t">
              <div class="pull-left name">{{gst.realname}}</div>
              <div class="pull-right">
                <i class="fa fa-clock"></i>
                {{gst.createdTime | date}}
              </div>
            </div>

            <div class="space-4"></div>

            <div class="clearboth">
              {{gst.content}}
            </div>

            <div v-show="gst.replyMessage != ''">
              <div class="space-4"></div>

              <span class="reply-user">站长回复: </span>{{gst.replyMessage}}
            </div>
          </div>
          <div class="clear"></div>
        </li>
      </template>
    </List>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  import List from '../../components/List'
  import {formatDate} from '@/common/js/date.js'

  export default {
    components: {List},
    name: 'Guest',
    data() {
      return {
        guest: {
          content: '',
          realname: '',
          email: ''
        }
      }
    },
    filters: {
      date: function (date) {
        return formatDate(new Date(date), 'yyyy-MM-dd');
      }
    },
    methods: {
      submit: function () {
        for (var key in this.guest) {
          if (this.guest[key] === '') {
            this.$toast.top('请填写所有字段');
            return;
          }
        }

        axios.post(process.env.API_ROOT + "guest/save", qs.stringify(this.guest), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
          if (res.status === 200) {
            this.$toast.top(res.data.respMsg);
            if (res.data.respCo === '0000') {
              this.guest = {
                content: '',
                realname: '',
                email: ''
              };
            }
          }
        }).catch(error => console.log(error));
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    padding: 15px 28px 15px 15px;
  }

  textarea {
    width: 100%;
    outline: none;
    border: 1px solid #e3e3e3;
    padding: 5px;
    font-size: 14px;
    resize: none;
    border-radius: 3px;
  }

  input {
    min-width: 200px;
    height: 35px;
    line-height: 35px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 3px;
    transition: border-color 0.2s ease;
    vertical-align: middle !important;
  }

  ul{
    padding-left: 0;
    list-style: none;
  }

  h3 {
    text-indent: 20px;
  }

  ul li {
    margin-top: 20px;
    padding-bottom: 15px;
    min-height: 80px;
    padding-right: 10px;
    padding-left: 10px;
    border-bottom: 1px dashed #e8e8e8;
    height: 100%;
    line-height: normal !important;
  }

  ul li:last-child {
    border-bottom: 0;
  }

  ul li .l {
    text-align: center;
    width: 10%;
    margin-right: 2%;
  }

  ul li .l img.avatar {
    border-radius: 100%;
  }

  ul li .l p.ip-info {
    font-size: 10px;
    color: #999;
    margin-top: 5px;
    margin-left: 0;
  }

  ul li .r {
    width: 88%;
  }

  ul li .r .t {
    color: #999;
    height: 30px;
  }

  ul li .r .t .name {
    color: #5188a6;
  }

  ul li .r .reply-user {
    color: #5188a6;
    font-weight: 500;
    margin-top: 20px;
  }

  ul li .r .reply {
    margin-top: 5px;
  }

  @media (max-width: 650px) {
    input {
      width: 100%;
      margin-top: 10px;
    }
  }
</style>
