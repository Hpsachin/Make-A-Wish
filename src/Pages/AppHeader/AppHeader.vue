<template  >
  <a-layout-header v-if="this.status">
    <a-row type="flex" align="bottom">
      <a-col :lg="11" :xs="24">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img14.svg"
        />
      </a-col>
      <a-col :lg="13" :xs="24" class="profile">
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
      visible:false
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("loginname");
      window.localStorage.removeItem("loginemail");
      window.localStorage.removeItem("role");
      window.localStorage.removeItem("mailloginurl");
      this.$router.push("/loginform");
    },
  },
  created() {
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
@media (max-width: 480px) {
  .anticon-global{
    display: none!important;
  }
  .anticon-bell{
    display: none!important;
  }
.profile {
/* display: none!important; */
}
}
</style>
