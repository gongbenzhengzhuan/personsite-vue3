<template>

  <header>
    <h1>个人博客</h1>
    <nav>
      <router-link :to="{name:'Template'}">首页</router-link>
      <!--下边这种方式也可以-->
      <router-link to="/">首页</router-link>
      <router-link to="/create">新建</router-link>

    </nav>
  </header>
</template>

<script>
export default {
  name: "NarbarComponent"
}
</script>

<style scoped>

</style>