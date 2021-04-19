
<template>

<div class="app" v-if="username">
<div class="app_body">
<Sidebar/>
<Message v-if="$route.params.id"/>
</div>
</div>
<div v-else>  <router-link :to="'/loginform'"></router-link></div>

</template>
<script>
/* eslint-disable */
import { RightCircleOutlined } from "@ant-design/icons-vue";
import { onMounted, reactive, ref } from "vue";
import db from "../../Firebase/Firebase.js";
import "./Chat.css";
import Sidebar from './sidebar'
import Message from './Message'

export default {
  mounted() {
    console.log("mounted");
    this.username = localStorage.getItem("loginname");
    console.log(this.username);
    this.email = localStorage.getItem("loginemail");
  },
  data() {
    return {
      username: "",
      email: "",
      Login: false,
    };
  },
  components: {
    Sidebar,
    Message,

  }
};
</script>

<style scoped>
.app {
  background: #dadbd3;
  height: 100vh;
  display: grid;
  place-items: center;
}
.app_body {
  display: flex;
  /* height: 90vh; */
  margin-top: -50px;
  width: 90vw;
  background: #ededed;
  box-shadow: -1px 4px 20px -6px rgba(0, 0,0, .7);
}
</style>