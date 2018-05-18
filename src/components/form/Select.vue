<template>
  <div class="form-group">
    <label :class="{required: required}" :for="name">{{label}}</label>
    <select :name="name" :id="name" :placeholder="placeholder" v-model="model[name]">
      <option value="">{{placeholder}}</option>
      <slot></slot>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'Select',
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
    width: 40%;
    text-align: right;
    margin-right: 10px;
  }

  .required:after {
    color: red;
    content: "*";
  }

  select {
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

  @media (max-width: 650px) {
    label {
      text-align: left;
      width: 100%;
      margin-right: 0;
    }

    select {
      width: 100%;
    }
  }
</style>


