<template>
  <div class="detail-pay">
    <a href="javascript:" @click="click">赏 <small>1分钱</small></a>

    <div v-if="!isHiddenPay">
      <div class="channel">
        <img src="/static/alipay.png" @mouseover="mouseover('alipay')" @mouseout="mouseout"/>
        <div id="alipay">支付宝打赏</div>
      </div>
      <div class="channel">
        <img src="/static/chatpay.png" @mouseover="mouseover('chatpay')" @mouseout="mouseout"/>
        <div id="chatpay">微信打赏</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pay',
    data() {
      return {
        isHiddenPay: true,
        taskPay: null,
        degPay: 0,
        temp: 10,
        textId: ''
      }
    },
    methods: {
      click: function () {
        this.isHiddenPay = !this.isHiddenPay;
      },
      mouseover: function (textId) {
        this.textId = textId
        this.payOut()
        this.taskPay = setInterval(this.payIn, 5);
      },
      mouseout: function () {
        this.payOut()
      },
      payOut: function () {
        if (this.taskPay) {
          clearInterval(this.taskPay);
        }
        this.degPay = 0;
        let t = document.getElementById(this.textId);
        t.style.transform = "rotate(" + this.degPay + "deg)";
        t.style.webkitTransform = "rotate(" + this.degPay + "deg)";
        t.style.OTransform = "rotate(" + this.degPay + "deg)";
        t.style.MozTransform = "rotate(" + this.degPay + "deg)";
      },
      payIn: function () {
        this.degPay += this.temp;
        if (this.degPay >= 50 || this.degPay <= -50) {
          this.temp *= -1;
        }

        let t = document.getElementById(this.textId);
        t.style.transform = "rotate(" + this.degPay + "deg)";
        t.style.webkitTransform = "rotate(" + this.degPay + "deg)";
        t.style.OTransform = "rotate(" + this.degPay + "deg)";
        t.style.MozTransform = "rotate(" + this.degPay + "deg)";
      }
    }
  }
</script>

<style scoped>

  .detail-pay {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .detail-pay > a {
    display: inline-block;
    text-align: center;
    width: 80px;
    height: 35px;
    line-height: 35px;
    text-decoration: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 400;
    font-style: normal;
    font-variant: normal;
    font-stretch: normal;
    font-size: 18px;
    font-family: "Microsoft Yahei";
    background: #f44336;
  }

  .detail-pay > a:hover {
    color: #fff;
    text-decoration: none;
  }

  .detail-pay > a small {
    font-size: 10px;
    font-weight: 100;
  }

  .detail-pay > div {
    margin-top: 25px;
    text-align: center;
  }

  .detail-pay > div > div.channel {
    display: inline-block;
    margin-right: 80px;
    margin-left: 80px;
  }

  .detail-pay > div > div.channel > img {
    width: 180px;
    height: 180px;
    padding: 5px;
    border: 1px solid #e7e7e7;
  }

  .detail-pay > div > div.channel > div {
    height: 100px;
    width: 100px;
    margin: 0 auto;
    line-height: 100px;
    border-radius: 100%;
  }
</style>
