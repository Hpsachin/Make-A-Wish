<template  >
  <a-layout-header v-if="this.status">
    <a-row type="flex" align="bottom">
      <a-col :span="11">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img14.svg"
        />
      </a-col>
      <a-col :span="13" class="profile">
        <p class="circle"></p>
        <span
          ><GlobalOutlined /><BellFilled /> <span></span
          >{{ loginname }}</span
        >
        <a-dropdown>
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            <DownOutlined />
            <span class="shortname">{{ initials }}</span>
          </a>
          <template #overlay>
            <a-menu class="appheaderdrops">
              <a-menu-item>
                <a href="javascript:;" @click="logout">Logout</a>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </a-col>
    </a-row>
  </a-layout-header>
  <div v-else>
    <router-link :to="'/loginform'"></router-link>
  </div>
</template>
<script>
/* eslint-disable */
import "./AppHeader.css";
// import firebase from '../../Firebase/Firebase'
import {
  BellFilled,
  DownOutlined,
  GlobalOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "AppHeader",

  components: {
    DownOutlined,
    BellFilled,
    GlobalOutlined,
  },
  data() {
    return {
      loginname: "",
      initials: "",
      status: false,
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("loginname");
      window.localStorage.removeItem("loginemail");
      window.localStorage.removeItem("role");
      this.$router.push("/loginform");
    },
  },
  created() {
    //  if(localStorage.getItem('loginname') === '') {
    //        this.$router.push('/loginform')
    //      }
  },
  mounted() {
    const EXPIRE_TIME = 60 * 60 * 1000;
    this.loginname = localStorage.getItem("loginname");
    if (this.loginname != null) {
      this.status = true;
      var nameparts = this.loginname.split(" ");
      this.initials =
        nameparts[0].charAt(0).toUpperCase() +
        "." +
        nameparts[1].charAt(0).toUpperCase();
    }
    setTimeout(function () {
      localStorage.removeItem("loginname");
      // localStorage.removeItem("relation");
    }, EXPIRE_TIME);
  },
};
</script>
<style >
.appheaderdrops {
  text-align: left !important;
}
.shortname {
  background: #f6f9ff;
  border: 1px solid #f6fa21;
  border-radius: 100%;
  padding: 12px;
}
</style>
