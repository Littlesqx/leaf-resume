<style lang="less">
  .head-menu {
    float: right;
    .el-submenu {
      .el-menu-item {
        min-width: 120px;
        overflow: hidden;
      }
    }
  }
</style>

<template>
  <el-menu default-active="#"
          background-color="#686868"
          text-color="#fff"
          active-text-color="#ffd04b" mode="horizontal" class="head-menu" @select="handleSelect">
    <el-menu-item index="#">Leaf-resume</el-menu-item>
    <el-submenu index="#about">
        <template slot="title">About</template>
        <el-menu-item index="https://github.com/Littlesqx/leaf-resume">Github</el-menu-item>
        <el-menu-item index="https://littlesqx.github.io">Author</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleSelect (key) {
      key !== '#' && window.open(key)
    }
  }
}
</script>
