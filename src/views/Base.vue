<style lang="less">
    .el-header {
        border-right: none;
        border-bottom: solid 1px #e6e6e6;
    }
    .main {
        padding: 20px;
        .topic {
            display: inline-block;
            width: 100%;
            margin-top: 10px;
            margin-bottom: 10px;
            span {
                float: left;
                display: block;
            }
            .option {
                float: right;
            }
        }
        .el-checkbox {
            margin-right: 30px;
            margin-left: 0;
        }
    }
</style>

<template>
  <el-container>
    <el-header>
        <head-menu></head-menu>
    </el-header>
    <el-container class="main">
        <left-aside :profile="profile" :experiences="experiences" :skills="skills" :form="form"></left-aside>
        <el-main>
          <line-theme :options="resumeOptions()"></line-theme>
        </el-main>
        <float-button></float-button>
    </el-container>
  </el-container>
</template>

<script>

import HeadMenu from '../components/HeadMenu.vue'
import LeftAside from '../components/LeftAside.vue'
import LineTheme from '../components/resume/line.vue'
import FloatButton from '../components/FloatButton.vue'
import config from '../config'

export default {
  data () {
    return {
      profile: config.profile,
      experiences: config.experiences,
      skills: config.skills,
      form: {
        profile: config.profile,
        experiences: config.experiences,
        skills: []
      }
    }
  },
  methods: {
    resumeOptions () {
      let profile = {}
      for (const x of this.profile) {
        profile[x.key] = x.value
      }
      return {
        profile,
        experiences: this.experiences,
        skills: this.form.skills
      }
    }
  },
  components: {
    HeadMenu, LeftAside, LineTheme, FloatButton
  },
  created () {
    // eslint-disable-next-line
  }
}
</script>
