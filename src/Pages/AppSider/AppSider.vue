 <template>
  <a-layout-sider
    id="components-layout-demo-custom-trigger"
    v-model:collapsed="collapsed"
    :trigger="null"
     collapsible
     breakpoint="sm"
      collapsedWidth="0"
  >
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => (collapsed = !collapsed)"

    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="() => (collapsed = !collapsed)"
    />
    <a-menu theme="" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <router-link to="/dashboard">
          <span><AppstoreFilled /> </span
          ><span class="menutext"> Dashboard</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="'/newApplication'">
          <span><HeartTwoTone twoToneColor="#fff" /></span
          ><span class="menutext">New Wish</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="3">
        <router-link :to="'/existingApplication'">
          <span><FormOutlined /></span
          ><span class="menutext">Existing Application</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="4" class="test2">
        <router-link :to="'/chat'" @inputData="updateMessage">
          <span><MessageFilled /></span
          ><span class="menutext"> Messages</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="5">
        <router-link :to="'/appointments'">
          <span><ProfileFilled /></span
          ><span class="menutext">Appointments</span></router-link
        >
      </a-menu-item>

      <a-menu-item key="6" class="leftsquare">
        <span @click="logout"><LeftSquareOutlined /> </span
        ><span class="menutext">Logout</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
<script>
/* eslint-disable */
import "./AppSider.css";

import {
  AppstoreFilled,
  FileOutlined,
  FormOutlined,
  LeftSquareOutlined,
  HeartTwoTone,
  ProfileFilled,
  MessageFilled,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
export default {
  name: "AppSider",
  components: {
    AppstoreFilled,
    ProfileFilled,
    MessageFilled,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LeftSquareOutlined,
    FileOutlined,
    HeartTwoTone,
    FormOutlined,
  },
  data() {
    return {
      collapsed: true,
    };
  },
  created() {
    if (localStorage.getItem("loginname") === "") {
      this.$router.push("/loginform");
    }
  },
  methods: {
    logout() {
      window.localStorage.removeItem("loginname");
      this.$router.push("/loginform");
    },
  },
};
</script>
<style scoped>
</style>
