// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Popover,
  Tooltip,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Slider,
  Icon,
  Row,
  Col,
  Badge,
  Card,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading
} from 'element-ui'

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Loading.directive)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
