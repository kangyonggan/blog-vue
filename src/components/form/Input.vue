<template>
  <div class="form-group">
    <label :class="{required: required}" :for="name">{{label}}</label>
    <input v-if="type!='file'" :type="type" :name="name" :id="name" :placeholder="placeholder" v-model="model[name]" />
    <input v-if="type=='file'" v-show="false" :type="type" :name="name" :id="name" :placeholder="placeholder" @change="change"/>
    <input v-if="type=='file'" v-show="true" readonly :id="name + '-input'" v-model="model[name + 'Value']" :placeholder="placeholder" @click="click"/>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: ["label", "name", "required", "placeholder", "model", "type"],
    methods: {
      click: function () {
        const input = document.getElementById(this.name);
        input.click();
      },
      change: function (e) {
        const file = e.target.files[0];
        if (!file) {
          this.$emit('change', this.name, null);
          return;
        }
        const imgSize = file.size / 1024;
        if(imgSize > 1024){
          this.$toast('请上传大小不要超过1M的图片');
          e.target.value = '';
          this.$emit('change', this.name, null);
          return;
        }

        this.$emit('change', this.name, file);
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-group {
    margin-top: 10px;
  }

  label {
    margin-top: 15px;
    height: 34px;
    line-height: 40px;
    display: inline-block;
    width: 40%;
    text-align: right;
    margin-right: 10px;
  }

  .required:after {
    color: red;
    content: "*";
  }

  input {
    width: 40%;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 3px;
    transition: border-color 0.2s ease;
    vertical-align: middle !important;
  }

  input[readonly] {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    label {
      text-align: left;
      width: 100%;
      margin-right: 0;
    }

    input {
      width: 100%;
    }
  }
</style>


