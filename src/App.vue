<template>

        <router-view></router-view>

</template>

<script>
  import Page1 from './views/Page1.vue'
  export default {
    name: 'App',
    components: {
      Page1
    }

  }
</script>
 
<style>
  body{
    background-color: #ffe766;
  }
</style>