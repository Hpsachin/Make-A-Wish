<template>
  <div class="box login-box">
    <div class="loader loader-1" v-show="isLoading">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
    <a-form :layout="formLayout" @submit="login">
      <h3 class="Login-text">LOGIN</h3>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <span><MehFilled /></span>
        <a-input
          size="large"
          placeholder="Email"
          v-model:value="email"
        />
        <span class="text-danger" v-show="ischeck" v-if="email === ''"> Please Fill The  Email Address </span>
      </a-form-item>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <!-- <i class="fa fa-lock" aria-hidden="true"></i> -->
        <span><LockFilled /></span>
        <a-input
          size="large"
          type="password"
          class=""
          placeholder="Password"
          v-model:value="password"
        />
          <span class="text-danger" v-show="ischeck" v-if="password === ''"> Please Fill The Password </span>
      </a-form-item>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <a-form-item id="loginrole">
          <ProjectFilled />
          <a-select
            size="large"
            placeholder="Select a role"
            v-model:value="role"
            class="role-select"
          >
            <a-select-option value="Medical Specialist"
              >Medical Specialist</a-select-option
            >
            <a-select-option value="Social Worker"
              >Social Worker</a-select-option
            >
          </a-select>
          <span class="text-danger" v-show="ischeck" v-if="role === undefined "> Please Select role </span>
        </a-form-item>
        <a-button html-type="submit" type="" size="large" block>
          LOGIN
        </a-button>
        <!-- <router-link :to="'/chat'"> </router-link> -->
        <!--    -->
      </a-form-item>
      <a-row class="text-lower">
        <!-- <a-col :span="12" align="left">
          <i class="fa fa-check-square" aria-hidden="true"></i>
       <span>Remember me?</span>
       </a-col> -->
        <a-col :span="12" align="left">
          <span style="color: white"
            ><router-link style="color: white" to="/forgotform">
              Forgot Password ?</router-link
            ></span
          >
        </a-col>
      </a-row>
    </a-form>
    <!-- signup form -->
    <!-- <a-col :span="24" align="center" class="lower-text">
          <div>
            <span style="color:white" >Don't have an account?   <router-link to='/signup'> Signup</router-link></span>

          <a-anchor-link
      style="color:white"
      class="linkColor"
    />
          </div>
     </a-col> -->
  </div>
</template>
<script>
/* eslint-disable */
// import firebase from '../../../Firebase/Firebase'
import axios from "axios";
// import store from  '../../../store/store'
import { mapActions, mapGetters } from "vuex";
import { reactive } from "vue";
import { message } from "ant-design-vue";
import { LockFilled, MehFilled, ProjectFilled } from "@ant-design/icons-vue";
export default {
  name: "Login",
  components: {
    LockFilled,
    MehFilled,
    ProjectFilled,
  },
  props: {
    msg: String,
  },
  mounted() {
    // localStorage.clear()
  },
  data() {
    return {
      isLoading: false,
      ischeck: false,
      formLayout: "horizontal",
      email: "",
      password: "",
      id: "",
      role: undefined,
      otpshow: false,
      // login: false
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 24 },
          }
        : {};
    },
    ...mapGetters("auth", {
      getterLoginStatus: "getLoginStatus",
    }),
  },
  methods: {
    ...mapActions("auth", {
      actionLogin: "login",
    }),
    login() {
      this.isLoading= true
      this.otpshow = true;
       this.ischeck = true
      //  alert('hii')
      //  await this.actionLogin({ "role": "Medical Specialist", username:this.email, password:this.password});
      //      if(this.getterLoginStatus === 'success'){
      //       //  alert('login sucess');
      //       console.log('saved')
      //       //  console.log(response)
      //         this.$router.push("/dashboard");
      //      }else{
      //        alert('failed to login')
      //      }
      //  const response = await axios.post('https://humanpixel-mawau.cs58.force.com/services/apexrest/LoginFormRestService', {
      //      username: this.email,
      //      password: this.password,
      //     "role": "Medical Specialist"
      //  })
      //  console.log(response)
      if(this.ischeck === true){
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
      var raw = JSON.stringify({
        role: this.role,
        username: this.email,
        password: this.password,
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch(
        "https://humanpixel-mawau.cs58.force.com/services/apexrest/LoginFormRestService",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          // console.log(result);
          var data = JSON.parse(result);
          // console.log(data);
          if (data.StatusCode == 200) {
            console.log(data)
            this.isLoading = false
            // console.log(data.Name);
            // console.log()
            //  localStorage.setItem(
            //       "role",
            //       JSON.stringify({
            //         // time: new Date(),
            //         data: this.role,
            //       })
            //     );
            //        localStorage.setItem(
            //       "loginname",
            //       JSON.stringify({
            //         // time: new Date(),
            //         data: data.Name,
            //       })
            //     );

            //      localStorage.setItem(
            //       "loginemail",
            //       JSON.stringify({
            //         // time: new Date(),
            //         data: data.Username,
            //       })
            //     );
            localStorage.setItem("loginemail", data.Username);
              localStorage.setItem("role", this.role);
            localStorage.setItem("loginname", data.Name);
             message.success("Otp has been sent to your emaild ");
                   this.$router.push("/loginotp");

            //        var now = new Date();
            // var time = now.getTime();
            // var expireTime = time + 1000*36000;
            // now.setTime(expireTime);
            //             // document.cookie = `username=${data.Name}; expires=Thu, 28 Feb 2021 9:00:00 UTC" `
            //                 document.cookie = `username=${data.Name}; expires='+now.toUTCString()+' `
            //          console.log (document.cookie);
            // document.cookie ='username= hello; expires=Thu, 18 Dec 2021 12:00:00 UTC';
            // console.log(document.cookie)

            // this.$router.push('/loginotp')
            //  this.$store.state.loggedIn = true
            //  if(this.$store.state.loggedIn === true){
            //  alert(this.$store.state.loggedIn)
            //  this.$router.push('/dashboard')
            //  this.id = data.Record.Id
            //  localStorage.setItem('Id', data.Record.Id);
            //  }
            //  else{
            //    alert(this.$store.state.loggedIn)
            //  }
          } else {
            // this.$router.push("/loginform");
           message.error("Something Wrong");
           this.isLoading = false
          }
        })
        .catch((error) => message.error("Something Wrong"));
        this.isLoading = false
    }
    }
  },
};
</script>

<style>
/* .ant-select-selector{
padding: 0px 43px!important;
} */
/* .login-box .role-select{
  padding: 0px 43px!important;
    border-radius: 5px;
} */
.login-box .ant-form-item-control-wrapper{
  position: relative;
}
.login-box .ant-form-item{
  margin-bottom: 20px;
}
.login-box .ant-form-item-control{
  line-height: 24px;
}
.login-box .text-danger{
float: left;
padding-left: 33px;
}
.login-box
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
  .ant-select-selector {
  padding: 0px 43px !important;
  border-radius: 5px;
}
.login-box .anticon-project {
position: relative;
    /* top: 0%; */
    transform: translatey(-26%);
    z-index: 2;
    margin-bottom: 0px;
    left: 31px;
    color: #0055b7;
}
.login-box .anticon-meh {
 position: relative;
    /* top: 0%; */
    transform: translatey(-26%);
    z-index: 2;
    margin-bottom: 0px;
    left: 31px;
    color: #0055b7;
}
.login-box .anticon-lock {
   position: relative;
    /* top: 0%; */
    transform: translatey(-26%);
    z-index: 2;
    margin-bottom: 0px;
    left: 31px;
    color: #0055b7;
}
.linkColor .ant-anchor-link-title {
  color: #ffffff !important;
}
.login-box .ant-select {
  width: 92%;
}
.ant-anchor-link {
  display: inline-flex;
}
.ant-form-item-control {
  zoom: 1.1 !important;
}
.signup-button {
  background: inherit;
  border: none;
  box-shadow: none;
}
.ant-form-item {
  margin-bottom: 14px;
}
.signup-link {
  display: inline-flex;
}
.box {
  background: #0055b7;
  width: 50%;
  margin: 21px auto;
  padding: 70px 57px;
  box-sizing: border-box;
  text-align: center;
}
.Login-text {
  margin-bottom: 20px;
  color: white;
}
.text-lower {
   margin: 18px 22px 18px 36px;
  color: white;
  font-size: 12px;
}

.login-box .ant-input {
  width: 92%;
  padding: 6.5px 46px;
  border-radius: 3px;
}
.box .ant-btn-block {
  color: white;
  width: 88%;
  min-height: 41px;
  background: #ec6393;
  outline: none;
  border: none;
  border-radius: 26px;
  margin-top: 10px;
}
.password {
  margin: 14px 0px;
}
.test {
  width: 49px !important;
  background: black !important;
  border-radius: 50% !important;
  height: 40px !important;
  height: 48px !important;
}
.fa-user {
  font-size: 15px;
  position: absolute;
  top: 3px;
  left: 17px;
  z-index: 9;
  color: #0055b7;
}
.fa-lock {
  font-size: 15px;
  position: absolute;
  top: 3px;
  left: 17px;
  z-index: 9;
  color: #0055b7;
}
.fa-check-square {
  position: absolute;
  left: -18px;
  top: 3px;
  font-size: 15px;
}
</style>
