<template>
    <div class="button" @click="download">
      <i class="el-icon-download"></i>
    </div>
</template>
<style lang="less">
  @button-width: 55px;
  .button {
    position: fixed;
    bottom: @button-width;
    right: @button-width;
    background: #3a8ee6;
    width: @button-width;
    height: @button-width;
    border-radius: 30px;
    opacity: 0.7;
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
const JsPDF = require('jspdf')
const html2canvas = require('html2canvas')
export default {
  data () {
    return {
      // eslint-disable-next-line
    }
  },
  methods: {
    download () {
      const dom = document.getElementById('template')
      html2canvas(dom, {
        onrendered: (canvas) => {
          let page = canvas.toDataURL('image/jepg', 1.0)
          let pdf = new JsPDF('', 'pt', 'a4')
          pdf.addImage(page, 'JPEG', 0, 0, 595.28, 592.28 / canvas.width * canvas.height)
          pdf.save('stone.pdf')
        }
      })
    }
  }
}
</script>
