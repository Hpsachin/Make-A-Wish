/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import config from './vue.config.js'
import router from './router/router'
import firebase from './Firebase/Firebase'
// import Vuelidate from 'vuelidate'
import axios from 'axios'
import { reactive, toRefs } from 'vue'
import VueAxios from 'vue-axios'
import store from './store/store'
// import VueApexCharts from "vue3-apexcharts";
// import Chart from 'primevue/chart';
// import VueCookie from  'vue-cookie';
import {
  Layout,
  Button,
  Form,
  Input,
  Icon,
  Menu,
  Card, Row,
  Col,
  Table,
  Avatar,
  Dropdown,
  List,
  Steps,
  Radio,
  Select,
  Spin,
  Drawer,
  Collapse,
  Modal,
  Checkbox,
  DatePicker,
  Tooltip,
  Popover,


} from 'ant-design-vue'
// import store from './store/store'
createApp(App).use(firebase).use(Popover).use(reactive, toRefs).use(VueAxios, axios).use(DatePicker).use(Checkbox).use(Modal).use(Collapse).use(store).use(Drawer).use(Spin).use(Select).use(Radio).use(Steps).use(List).use(Dropdown).use(Avatar).use(Icon).use(Table).use(Row).use(Col).use(Card).use(config).use(Layout).use(Menu).use(router).use(Input).use(Form).use(Button).use(Tooltip).mount('#app')
