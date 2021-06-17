/* eslint-disable */
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
          placeholder="Username Or Email"
          readonly
          v-model:value="loginemail"
        />
      </a-form-item>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
     <span><LockFilled /></span>
     <a-input  size="large" maxlength="6" class="password" v-model:value="otpvalue" placeholder="Otp" />
      </a-form-item>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <a-button html-type="submit" type="" size="large" block>
          LOGIN
        </a-button>

      </a-form-item>
      <a-row class="text-lower">
      </a-row>
    </a-form>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import { reactive } from "vue";
import {  LockFilled, MehFilled } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue';
export default {
  name: "Loginotp",
  components: {
  LockFilled,
  MehFilled,
  },
  props: {
    msg: String,
  },
  mounted() {
    this.loginemail = localStorage.getItem("loginemail");
     this.loginname = localStorage.getItem("loginname");
        this.role = localStorage.getItem("role");
  },
  created(){
 console.log(localStorage.getItem('mailloginurl'))
 this.mailurl =localStorage.getItem('mailloginurl')
  },
  data() {
    return {
      mailurl: '',
      isLoading: false,
      formLayout: "horizontal",
      loginname: "",
      email: "",
      password: "",
      id: "",
      loginemail: "",
      otpvalue: "",
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
    stopCarret() {
      var obj = document.getElementById("partitioned");
      obj.addEventListener("keydown", stopCarret);
      obj.addEventListener("keyup", stopCarret);
      if (obj.value.length > 3) {
        setCaretPosition(obj, 3);
      }
    },
    setCaretPosition(elem, caretPos) {
      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move("character", caretPos);
          range.select();
        } else {
          if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
          } else elem.focus();
        }
      }
    },
    login() {
      this.isLoading = true
      this.otpshow = true;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
      var raw = JSON.stringify({
        role: this.role,
        username: this.loginemail,
        otp: this.otpvalue,
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
          console.log(result);
          var data = JSON.parse(result);
          if (data.StatusCode == 200) {
            this.isLoading = false
            console.log(document.cookie);
            if(this.mailurl){
               this.$router.push(this.mailurl)
            }
            else{
        this.$router.push("/dashboard")
            }

          }

           else if(data.StatusCode == 400) {
              message.error(data.Message)
             this.isLoading = false
          }
        })
        .catch((error) => {

          console.log("falseerror", error)});
    },
  },
};
</script>

<style scoped>
.anticon-meh{
   position: absolute;
    top: 50%;
    transform: translatey(-50%);
    z-index: 2;
    left: 16px;
    color: #0055B7;
}
.anticon-lock{
  position: absolute;
    top: 50%;
    transform: translatey(-50%);
    z-index: 2;
    left: 16px;
    color: #0055B7;
}
#partitioned {
  padding-left: 15px;
  letter-spacing: 42px;
  border: 0;
  background-image: linear-gradient(
    to left,
    black 70%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 220px;
  min-width: 220px;
}

#divInner {
  left: 0;
  position: sticky;
}
.linkColor .ant-anchor-link-title {
  color: #ffffff !important;
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

.ant-input {
  width: 92%;
  padding: 6.5px 46px;
  border-radius: 3px;
}
.ant-btn-block {
  color: white;
  width: 92%;
  min-height: 41px;
  background: #ec6393;
  outline: none;
  border: none;
  border-radius: 26px;
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
