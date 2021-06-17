<template>
  <a-spin v-show="ishow" />
  <a-form
    class="boxe signupforms"
    ref="ruleForm"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <h3 class="Login-text">SIGN UP</h3>
    <div class="row justify-content-center">
      <div class="col-md-5 mb-3" style="position:relative">
          <span><MehFilled /></span>
          <a-input
            size="large"
            v-model:value="form.fname"
            placeholder="First Name"

          />
          <div class="text-danger" v-show="ischeck" v-if="form.fname.trim() == ''">
            Please Fill First Name
          </div>
      </div>
      <div class="col-md-5 mb-4" style="position:relative">
         <span><MehFilled /></span>
          <a-input
            size="large"
            v-model:value="form.lname"
            placeholder="Last Name"

          > </a-input>
          <div class="text-danger" v-show="ischeck" v-if="form.lname.trim() == ''">
            Please Fill Last Name
          </div>
       </div>
      <div class="col-md-5 mb-4" style="position:relative">
        <span><MailFilled/> </span>
          <a-input
            size="large"
            v-model:value="form.email"
            placeholder="Email"
             @change="chechmail()"
          />

          <div class="text-danger" v-show="ischeck" v-if="form.email == ''">
            Please Fill Email Address
          </div>
          <div
            style="color:#dc3545; display:none; font-size:10px transition:1s;"
            id="emailid"
          >
            Please Fill The Valid Email Address
          </div>
       </div>
      <div class="col-md-5 mb-4" style="position:relative">
          <span><MehFilled /></span>
          <a-select
            size="large"
            placeholder="Select a role"
            v-model:value="form.role"
            class="role-select"
          >
            <a-select-option value="Medical Specialist"
              >Medical Specialist</a-select-option
            >
            <a-select-option value="Social Worker"
              >Social Worker</a-select-option
            >
          </a-select>
          <div class="text-danger" v-show="ischeck" v-if="form.role == undefined">
            Please Select Role
          </div>
       </div>
      <div class="col-md-5 mb-4" style="position:relative">
           <span><LockFilled /></span>
          <a-input
            size="large"
            type="password"
            v-model:value="form.password"
            placeholder="Password"
          />
          <div class="text-danger" v-show="ischeck" v-if="form.password == ''">
            Please Fill Password
          </div>
       </div>
      <div class="col-md-5 mb-4" style="position:relative">
       <span><LockFilled /></span>
          <a-input
            size="large"
            type="password"

            v-model:value="form.cpassword"
            placeholder="Confirm Password"
            @keyup="checkCpasswordMessage()"
          />

           <div class="text-danger" v-show="ischeck" v-if="form.cpassword == ''">
            Please Fill Password
          </div>
          <p style="display: none" class="text-danger validemail" id="message">
            Password Does Not Match
          </p>
      </div>
      <div class="col-md-10 text-center">
          <a-button
            size="large"
            type="primary"
            @click="checkpassword()"
            class="signup"
          >
            SIGN UP
          </a-button>
      </div>
      <div class="text-lower">
      </div>
    </div>
  </a-form>
  <div class="thankyou" id="thankyou">
    <div class="thanku_inner_div">
      <h4 @click="thankuclose()">X</h4>
      <h1>Thank You</h1>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { onMounted } from "vue";
import { message } from "ant-design-vue";
import { SmileOutlined, LockFilled, MehFilled,MailFilled } from "@ant-design/icons-vue";
export default {
  components: {
    SmileOutlined,
    LockFilled,
    MehFilled,
    MailFilled
  },
  mounted() {},
  data() {
    return {
      ishow: false,
      ischeck: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      other: "",
      collection : {
        collectionname: '',
        collectionemail: '',

      },
      form: {
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: "",
        role: undefined,
      },

      // rules: {
      //   fname: [
      //     {
      //       required: true,
      //       message: "Please Fill  First name",
      //       whitespace: true,
      //       trigger: "change",
      //     },
      //   ],
      //   lname: [
      //     {
      //       required: true,
      //       message: "Please Fill  Last name",
      //       whitespace: true,
      //       trigger: "change",
      //     },
      //   ],
      //   email: [
      //     {
      //       required: true,
      //       message: "Please Fill Email",
      //       trigger: "change",
      //       whitespace: true,
      //     },
      //   ],
      //   password: [{ required: true, message: "Please Fill Password" }],
      //   cpassword: [
      //     { required: true, message: "Please Fill Confirm Password" },
      //   ],
      //   role: [{ required: true, message: "Please Fill Role" }],
      // },
    };
  },
  methods: {
    checkpassword() {
      if (this.form.cpassword == "") {
        document.getElementById("message").style.display = "none";
        this.onSubmit();
      } else if (this.form.password != this.form.cpassword) {
        document.getElementById("message").style.display = "block";
      } else {
        document.getElementById("message").style.display = "none";
        this.onSubmit();
        return true;
      }
    },
    chechmail() {
       var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (this.form.email == "") {
        document.getElementById("emailid").style.display = "none";
      } else {
        if (filter.test(this.form.email)) {
          document.getElementById("emailid").style.display = "none";
          return true;
        } else {
          document.getElementById("emailid").style.display = "block";
        }
      }
    },
    onSubmit() {
      this.collection.collectionname = this.form.fname
      this.collection.email
      this.ischeck = true;
      this.$refs.ruleForm
            var emailchecker = this.chechmail();
          if (emailchecker == true && this.form.fname.trim() != '' && this.form.lname.trim() !='' && this.form.email !='' && this.form.password !='' && this.form.cpassword !='' && this.form.role !='') {
            this.ishow = true;
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Cookie", "BrowserId=9YlIqB9YEeuz0Q0Xd4eKsw");
            var raw = JSON.stringify({
              FirstName: this.form.fname,
              LastName: this.form.lname,
              Email: this.form.email,
              Role: this.form.role,
              Password: this.form.password,
            });
            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };
            fetch(
              "https://humanpixel-mawau.cs58.force.com/services/apexrest/SignupFormRestService",
              requestOptions
            )
              .then((response) => response.text())
              .then((result) => {
                var resp = JSON.parse(result);
                console.log(resp);
                if (resp.StatusCode == 200) {
                  message.success(resp.Message);
                  document.getElementById("thankyou").style.display = "block";
                  this.ishow = false;
                } else {
                  this.ishow = false;
                  message.warning(resp.Message);
                }

              })
        .catch((error) => {
          console.log("error", error);
        });
          }
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    thankuclose() {
      document.getElementById("thankyou").style.display = "none";
      this.resetForm();
    },
    checkCpasswordMessage() {
      if (this.form.cpassword == "") {
        document.getElementById("message").style.display = "none";
      }
    },
  },
};
</script>
<style>
.signupforms .text-danger {
  text-align: left;
}
#emailid{
  text-align: left;
}
.signupforms
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
  .ant-select-selector {
  border-radius: 5px;
  padding: 0px 46px;
}
.signupforms .anticon-meh {
  position:absolute;
  z-index: 2;
    padding-top: 15px;
    padding-left: 9px;
    color: #0055b7;
}
.signupforms .anticon-lock {
  position:absolute;
 z-index: 2;
   padding-top: 15px;
    padding-left: 9px;
    color: #0055b7;
}
.signupforms .anticon-mail{
  position:absolute;
  z-index: 2;
     padding-top: 15px;
    padding-left: 9px;
    color: #0055b7;
}
.thankyou {
  background: rgba(245, 242, 242, 0.5);
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100vh;
  display: none;
  z-index: 11;
}
.thanku_inner_div {
  background-color: blue;
  width: 50%;
  position: absolute;
  top: 0%;
  left: 21%;
  width: 58%;
  margin: 21px auto;
  padding: 206px 57px;
  box-sizing: border-box;
  text-align: center;
}
.thanku_inner_div > h1 {
  color: white;
}
.thanku_inner_div > h4 {
  position: absolute;
  top: 1%;
  right: 2%;
  color: red;
  cursor: pointer;
}
.linkColor .ant-anchor-link-title {
  color: #ffffff !important;
}
.ant-form-item-control-wrapper {
  width: 100% !important;
}
.ant-anchor-link {
  display: inline-flex;
}
.validemail {
  float: left;
  position: absolute;
  top: 100%;
}
.signupforms .ant-form-item-control {
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
.boxe {
  background: #0055b7;
  width: 58%;
  margin: 21px auto;
  padding: 70px 57px;
  box-sizing: border-box;
}
.Login-text {
  margin-bottom: 20px;
  color: white;
  text-align: center;
}
.text-lower {
  width: 100%;
  color: white;
  font-size: 12px;
}
.boxe .ant-input {
  padding: 7px 46px;
  border-radius: 5px;
}
.boxe .signup {
  color: white;
  min-height: 41px;
  background: #ec6393;
  outline: none;
  border: none;
  border-radius: 26px;
  width: 92%;
margin-top: 12px;
}
.password {
  margin-bottom: 10px 0px;
}
.test {
  width: 49px !important;
  background: black !important;
  border-radius: 50% !important;
  height: 40px !important;
  height: 48px !important;
}
.icon {
  font-size: 15px;
  position: absolute;
  top: 3px;
  left: 17px;
  color: #0055b7;
}
@media only screen and (max-width: 768px) {
  .thanku_inner_div {
    width: 78%;
  }
}
@media only screen and (max-width: 768px) {
  .ant-layout {
    width: 100% !important;
  }
  .boxe[data-v-4e73cc79] {
    width: 100% !important;
  }
  .thanku_inner_div {
    width: 100%;
    left: 0%;
    padding: 321px 57px;
  }
  .boxe input {
    margin-bottom: 10px;
  }
  .ant-form-horizontal {
    width: 100% !important;
  }
}
</style>