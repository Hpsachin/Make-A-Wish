
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
  display: flex;
  justify-content: center;
}
.app_body {
  display: flex;
  margin-top: 1px;
  width: 97%;
  background: white;
}
@media (max-width: 767px) {
  .chat_message{
    /* margin-left: 0; */
      font-size: 11px;
  }
  .chat_reciever {
    font-size: 11px;
  }
  .app_body{
    display: block!important;
  }
}

</style>