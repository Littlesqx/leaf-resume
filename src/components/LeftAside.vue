<template>
  <el-aside width="386px" class="setting">
            <el-tabs type="border-card">
            <el-tab-pane label="基础信息">
                <el-form ref="form" :model="form" label-width="100px">
                    <div class="topic">
                        <span>基础信息</span>
                    </div>
                    <el-form-item :label="item.label" v-for="(item, index) in profile" :key="index">
                      <el-input type="textarea" v-if="item.key === 'about'" v-model="item.value" :rows="3"></el-input>
                      <el-input v-model="item.value" v-else></el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="项目经历">
                <div class="topic">
                    <span>项目经历</span>
                    <div class="option">
                        <el-button size="mini" plain icon="el-icon-plus" @click="addExperience">新增经历</el-button>
                     </div>
                </div>
                <el-form v-for="(item, index) in experiences" :key="index" label-width="100px">
                  <el-form-item label="项目 / 公司">
                    <el-input v-model="item.company"></el-input>
                  </el-form-item>
                  <el-form-item label="职位">
                    <el-input v-model="item.position"></el-input>
                  </el-form-item>
                  <el-form-item label="时间">
                    <el-input v-model="item.date"></el-input>
                  </el-form-item>
                  <el-form-item label="描述">
                    <el-input type="textarea" v-model="item.description" :rows="3"></el-input>
                  </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="技能清单">
                <div class="topic">
                    <span>技能清单</span>
                    <div class="option">
                      <el-popover ref="popover" placement="right" trigger="click">
                        <el-form :inline="true">
                          <el-form-item>
                            <el-input v-model="skill"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button plain size="small" @click="addSkill">新增</el-button>
                          </el-form-item>
                        </el-form>
                      </el-popover>
                      <el-button size="mini" plain icon="el-icon-plus" v-popover:popover>新增技能</el-button>
                     </div>
                </div>
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="参考技能">
                    <el-checkbox-group v-model="form.skills">
                        <el-checkbox :label="item" name="type" v-for="(item, index) in skills" :key="index">
                        </el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="主题设置">主题设置</el-tab-pane>
            </el-tabs>
        </el-aside>
</template>

<script>
export default {
  props: {
    profile: Array,
    experiences: Array,
    skills: Array,
    form: Object
  },
  data () {
    return {
      skill: ''
    }
  },
  methods: {
    addExperience () {
      this.experiences.push({
        company: '',
        position: '',
        date: '',
        description: ''
      })
    },
    addSkill () {
      this.skills.push(this.skill)
      this.skill = ''
    }
  }
}
</script>
