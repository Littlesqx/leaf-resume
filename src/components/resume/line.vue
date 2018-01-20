<template>
<div class="resume" id="template">
    <div id="resume-header">
        <div id="header-left">
            <h1 id="name">
                {{options.profile.name}}
                <span>{{options.profile.position}}</span>
            </h1>
            <div id="info-flex">
                <span v-if="options.profile.email" id="email"><a :href='"mailto:" + options.profile.email'>
                  <i class="fa fa-envelope" aria-hidden="true"></i> {{options.profile.email}}</a>
                </span>
                <span v-if="options.profile.phone" id="phone">
                  <i class='fa fa-phone-square' aria-hidden="true"></i> {{options.profile.phone}}
                </span>
                <span v-if="options.profile.website" id="website">
                  <a :href='options.profile.website'>
                    <i class="fa fa-home" aria-hidden="true"></i> {{options.profile.website}}
                  </a>
                </span>
                <span v-if="options.profile.github" id="github">
                  <a :href='"https://github.com/" + options.profile.github'>
                    <i class="fa fa-github" aria-hidden="true"></i> {{options.profile.github}}
                  </a>
                </span>
            </div>
        </div>
        <div id="header-right">
            <div id="headshot"></div>
        </div>
    </div>
    <div id="resume-body">
        <div id="education-container">
            <h2 id="education-title">Education</h2>
            <div class="spacer"></div>
            <div class="education">
                <h2 class="education-description">{{options.profile.description}}</h2>
                <p>
                  <span class="degree" v-if="options.profile.degree">{{options.profile.degree}} | </span>
                  <span class="education-timeperiod">{{options.profile.timeperiod}}</span>
                </p>
            </div>
        </div>
        <div id="experience-container">
            <h2 id="experience-title">Experience</h2>
            <div class="spacer"></div>
            <div class="experience" v-for="(experience, index) in options.experiences" :key="index" v-if="experience.date">
                <h2 class="company">{{experience.company}}</h2>
                <p class="job-info"><span class="job-title">{{experience.position}} | </span><span class="experience-timeperiod">{{experience.date}}</span></p>
                <p class="job-description" v-if="experience.description">{{experience.description}}</p>
            </div>
        </div>
        <div id="skills-container" v-if="options.skills != []">
            <h2 id="skills-title">Skill</h2>
            <div class="spacer"></div>
            <!-- <p id="skill-description">{{person.knowledge}}</p> -->
            <ul id="skill-list">
                <li class="skill" v-for="(skill, index) in options.skills" :key="index">
                  <span class="list-item-black">
                    {{skill}}
                  </span>
                </li>
            </ul>
        </div>
    </div>
    <div id="resume-footer">
        <div v-if="options.profile.about">
            <h2>About</h2>
            <p>{{options.profile.about}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    options: Object
  },
  created () {
    console.log(this.options)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@text-purple: #333;
#template {
    box-sizing: border-box;
    font-family:'Open Sans', sans-serif;
    h1, h2 {
        /*font-family:'Open Sans Condensed', sans-serif;*/
        margin:0;
        color: @text-purple;
    }

    #name {
        span {
            font-size: 22px;
        }
    }

    p {
        margin:0;
        font-size: 13px;
        letter-spacing: .5px;
        word-wrap:break-word;
    }

    ul li {
        color:@text-purple;
        font-size:12px;
    }

    a {
        color:#FFF;
        text-decoration:none;
    }

    .list-item-black {
        color:black;
    }

    #resume-header {
        color: white;
        height: 115px;
        background-color: #757575;
        box-shadow: inset 0px 0px 200px #333;
        padding: 40px 100px 25px;

        #header-left {
            /*width: 465px;*/
            width:100%;
            float: left;
            h1 {
                font-size:56px;
                color:white;
                text-transform:uppercase;
                line-height:56px;
            }
            h2 {
                font-size:22px;
                color:white;
            }
            #info-flex {
                display:flex;
                margin-top:10px;
                font-size:14px;

                span {
                    margin-right:25px;
                }
                i {
                    margin-right:5px;
                }
            }
        }
    }

    #resume-body {
        padding: 10px 100px;

        #experience-title, #education-title, #skills-title {
            font-size:26px;
            text-transform:uppercase;
        }

        .experience {
            margin: 10px 0 10px 50px;
            ul {
                margin: 5px 0 0 0;
            }
        }

        .company, .education-description {
            font-size:20px;
        }

        .job-info {
            margin-bottom:5px;
        }

        .job-title, .degree {
            font-weight:700;
            color: @text-purple;
            font-size:16px;
        }

        .experience-timeperiod, .education-timeperiod {
            font-weight:100;
            color: @text-purple;
            font-size:16px;
        }

        .education {
            margin: 10px 0 10px 50px;
        }

        #skill-list {
            column-count: 3;
            list-style-position: inside;
            ul li {
                font-size:14px;
            }
        }

        #education-container, #skills-container {
            margin-top: 20px;
        }
        #skill-description {
            margin-left: 38px;
        }
    }
    #resume-footer {
        padding: 20px 100px;
        height: 135px;
        background-color: #757575;
        box-shadow: inset 0px 0px 100px #333;
        box-sizing: border-box;
        bottom: 0px;
        width: 100%;
        h2, p {
            color:white;
        }
    }

}

.spacer {
    width:100%;
    border-bottom:1px solid @text-purple;
    margin:5px 0 10px;

}
</style>
