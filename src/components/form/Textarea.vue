<template>
  <div class="form-group">
    <label :class="{required: required}" :for="name">{{label}}</label>
    <textarea :name="name" :id="name" rows="8" :placeholder="placeholder" v-model="model[name]"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Textarea',
    props: ["label", "name", "required", "placeholder", "model"]
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
    width: 60%;
    margin-right: 10px;
    margin-left: 20%;
  }

  .required:after {
    color: red;
    content: "*";
  }

  textarea {
    margin-left: 20%;
    width: 60%;
    outline: none;
    border: 1px solid #e3e3e3;
    padding: 5px;
    font-size: 14px;
    resize: none;
    border-radius: 3px;
  }

  @media (max-width: 650px) {
    label {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }

    textarea {
      width: 97%;
      margin-left: 0;
    }
  }
</style>


