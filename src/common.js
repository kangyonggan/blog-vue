import axios from 'axios'
import Vue from 'vue'

// 定义全局方法
Vue.prototype.httpGet = httpGet
Vue.prototype.httpPost = httpPost
Vue.prototype.httpPut = httpPut

function httpGet(url, success, failure) {
  axios.get(process.env.API_ROOT + url).then(res => {
    if (res.status === 200) {
      if (res.data.respCo === '0000') {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data.respCo)
        }
        this.$toast(res.data.respMsg);
      }
    }
  }).catch(() => {
    if (failure) {
      failure('9996')
    }
    this.$toast('网络异常，请稍后再试！');
  })
}

function httpPost(url, data, success, failure) {
  axios.post(process.env.API_ROOT + url, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    if (res.status === 200) {
      if (res.data.respCo === '0000') {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data.respCo)
        }
        this.$toast(res.data.respMsg);
      }
    }
  }).catch(() => {
    if (failure) {
      failure('9996')
    }
    this.$toast('网络异常，请稍后再试！');
  });
}

function httpPut(url, success, failure) {
  axios.put(process.env.API_ROOT + url, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    if (res.status === 200) {
      if (res.data.respCo === '0000') {
        if (success) {
          success(res.data)
        }
      } else {
        if (failure) {
          failure(res.data.respCo)
        }
        this.$toast(res.data.respMsg);
      }
    }
  }).catch(() => {
    if (failure) {
      failure('9996')
    }
    this.$toast('网络异常，请稍后再试！');
  });
}
