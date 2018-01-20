<template>
    <div class="button" @click="action()">
      <i class="el-icon-download"></i>
    </div>
</template>
<style lang="less">
  @button-width: 55px;
  .button {
    position: fixed;
    bottom: @button-width;
    right: @button-width;
    background: #e6a23c;
    width: @button-width;
    height: @button-width;
    border-radius: 30px;
    opacity: 0.8;
    cursor: pointer;
    transition: .3s;
    &:hover {
      opacity: 1;
    }

    i {
      text-align: center;
      line-height: @button-width;
      width: @button-width;
      font-size: 1.2rem;
      font-weight: 800;
      color: #fff;
    }
  }
</style>
<script>
export default {
  data () {
    return {
      // eslint-disable-next-line
    }
  },
  methods: {
    action () {
      this.$emit('action')
    }
  }
}
</script>
