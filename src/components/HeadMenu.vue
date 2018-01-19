<style lang="less">
  .head-menu {
    float: right;
  }
</style>

<template>
  <el-menu :default-active="activeIndex" mode="horizontal" class="head-menu" @select="handleSelect">
    <el-menu-item index="1">Leaf-resume</el-menu-item>
    <el-submenu index="2">
        <template slot="title">About</template>
        <el-menu-item index="2-1">Github</el-menu-item>
        <el-menu-item index="2-2">Author</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
