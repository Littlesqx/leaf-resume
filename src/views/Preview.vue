<style lang="less">
  body {
    #template {
      width: 22cm;
      #resume-footer {
        position: absolute;
        width: 22cm !important;
      }
    }
  }
</style>

<template>
  <line-theme :options="resumeOptions()"></line-theme>
</template>

<script>
import LineTheme from '../components/resume/line.vue'
export default {
  data () {
    return {
      // eslint-disable-next-line
    }
  },
  methods: {
    resumeOptions () {
      let options = JSON.parse(window.localStorage.getItem('options'))
      let profile = {}
      for (const x of options.profile) {
        profile[x.key] = x.value
      }
      return {
        profile,
        experiences: options.experiences,
        skills: options.skills
      }
    }
  },
  components: {
    LineTheme
  },
  mounted () {
    window.print()
  }
}
</script>
