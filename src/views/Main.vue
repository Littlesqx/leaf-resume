<style lang="less">
    .el-header {
        border-right: none;
        background: #686868;
        border-bottom: solid 1px #686868;
        -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .main {
        padding: 20px;
        .el-main {
          padding: 0 0 0 20px;
          -webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        }
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
        <float-button @action="preview()"></float-button>
    </el-container>
  </el-container>
</template>

<script>

import HeadMenu from '../components/HeadMenu.vue'
import LeftAside from '../components/LeftAside.vue'
import LineTheme from '../components/resume/line.vue'
import FloatButton from '../components/FloatButton.vue'
import defaultConfig from '../config'

export default {
  data () {
    return {
      profile: this.getProfile(),
      experiences: this.getExperiences(),
      form: {
        profile: this.getProfile(),
        experiences: this.getExperiences(),
        skills: this.getSkills()
      },
      skills: defaultConfig.skills
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
    },
    preview () {
      window.localStorage.setItem('options', JSON.stringify({
        profile: this.profile,
        experiences: this.experiences,
        skills: this.form.skills
      }))
      window.open('#preview')
    },
    getProfile () {
      let config = JSON.parse(window.localStorage.getItem('options')) || defaultConfig
      return config.profile
    },
    getExperiences () {
      let config = JSON.parse(window.localStorage.getItem('options')) || defaultConfig
      return config.experiences
    },
    getSkills () {
      let config = JSON.parse(window.localStorage.getItem('options')) || defaultConfig
      return config.skills
    }
  },
  components: {
    HeadMenu, LeftAside, LineTheme, FloatButton
  },
  created () {
    // eslint-disable-next-line
    console.log(this.cacheConfig)
  }
}
</script>
