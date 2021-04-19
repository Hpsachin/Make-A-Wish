<template>
  <div class="box forgotpassword">
    <a-form :layout="formLayout" :model="form" @submit="handleSubmit">
      <h3 class="Login-text">FORGOT PASSWORD?</h3>
      <h5 class="instruction">
        Enter your registered email below to receive password reset instruction
      </h5>
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
        <i class="fa fa-envelope icon" aria-hidden="true"></i>
        <a-input
          size="large"
          class=""
          placeholder="EMAIL"
          v-model:value="email"
        />
         <span class="text-danger" v-show="ischeck" v-if="email === ''"> Please Fill The  Email Address </span>
        <div style="color:red; display:none; font-size:10px transition:1s;"  id="emailid">Please Fill The Valid Email Address </div>
      </a-form-item>
       <a-form-item id="loginrole">
          <ProjectFilled />
          <a-select
            size="large"
            placeholder="Select a role"
            v-model:value="value"
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
          <!-- <a-form-item >
             <ProjectFilled />
       <a-select size="large" placeholder="Select a role" v-model:value="value" class="role-select"
    >
    <a-select-option value="Medical Specialist">Medical Specialist</a-select-option>
    <a-select-option value="Social Worker">Social Worker</a-select-option>
  </a-select>
   <span class="text-danger" v-show="ischeck" v-if="value === ''"> Please Select The Role</span>
  </a-form-item> -->
      <a-form-item :wrapper-col="formItemLayout.wrapperCol">
         <!-- {{value.value}}  -->
        <a-button html-type="Submit" size="large" block>
          RESET PASSWORD
        </a-button>
      </a-form-item>
    </a-form>
    <!-- <a-col :span="24" align="center" class="lower-text">
      <div>
        <span style="color: white">Remember password Login?</span>
        <a-anchor-link style="color: white" class="linkColor" />
      </div>
    </a-col> -->
  </div>
</template>
<script>
/* eslint-disable */
import { DownOutlined, ProjectFilled } from '@ant-design/icons-vue'
import { message } from "ant-design-vue";
export default {
  name: "Forgot",
  components: {
    DownOutlined,
    ProjectFilled
  },

  props: {
    msg: String,
  },
  data() {
    return {
      ischeck: false,
       placements: [ 'bottomCenter'],
      checkmail: false,
      formLayout: "horizontal",
      email: "",
      value: undefined,
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
  },
  methods: {
    // handleChange (value) {
    //   console.log(`selected ${value}`);
    // },
    //  handleBlur() {
    //   console.log('blur');
    // },
    //  handleFocus () {
    //   console.log('focus');
    // },
    handleSubmit() {
      this.ischeck = true
      if(this.ischeck=== true){
        // console.log(this.value)
        var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
       var raw = JSON.stringify({"role": this.value,"username":this.email, });
       var requestOptions = {
       method: 'PUT',
       headers: myHeaders,
       body: raw,
       redirect: 'follow'
   };
   fetch("https://humanpixel-mawau.cs58.force.com/services/apexrest/LoginFormRestService", requestOptions)
  .then(response => response.text())
  .then(result =>{
     var value = JSON.parse(result)
    // console.log(value);
    if(value.StatusCode==200){
      localStorage.setItem('resetemail',this.email)
      localStorage.setItem('resetrole', this.value)
       message.success(" Reset link has been sent to your email id");
  //       var myHeaders = new Headers();
  //      myHeaders.append("Content-Type", "application/json");
  //      myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
  //     //  var raw = JSON.stringify({"role":"Medical Specialist","username":this.email, password: this.password });
  //      var requestOptions = {
  //      method: 'PUT',
  //      headers: myHeaders,
  //     //  body: raw,
  //      redirect: 'follow'
  //  };
  //  fetch("https://humanpixel-mawau.cs58.force.com/services/apexrest/LoginFormRestService?id=00T0l000009WoGZEA0", requestOptions)
  // .then(response => response.text())
  // .then(result =>{
  //   var valu =JSON.parse(result)
  //   console.log(valu);
  //   if(valu.StatusCode==200){
  //    alert('correctforgot')
  //   }else{
  //      alert('incorrectforgot')
  //   }
  //    }
  // )
  // .catch(error => console.log('error', error));
    }
    // else
    // {
    //    message.error("Something Wrong");
    // }
     }
  )
  .catch(error => message.error("Something Wrong"));
           }

        // })
      //  document.getElementById("emailid").style.display = "none";
      // }
    },
    // chechmail() {
    //   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //   if (this.email === "" ) {
    //     this.checkmail = true
    //      document.getElementById("emailid").style.display = "none";
    //   } else {

    //     if (filter.test(this.email)) {
    //      document.getElementById("emailid").style.display = "none";
    //          this.checkmail = false
    //       // return true;
    //     } else {
    //        this.checkmail = true
    //      document.getElementById("emailid").style.display = "block";
    //     }
    //   }

    //   this.handleSubmit();
    // },
  },
};
</script>

<style >
.forgotpassword .ant-select{
width: 92%;
margin-right: 8px;
}
.forgotpassword  .ant-form-item{
  margin-bottom: 18px;
}
.forgotpassword  .ant-form-item-control{
  line-height: 24px;
}
.forgotpassword .text-danger{
float: left;
padding-left: 25px;
}
/* .role-select{
  width: 100%;
  border-radius: 5px;
} */
#emailid{
  text-align: left;
}
.linkColor .ant-anchor-link-title {
  color: #ffffff !important;
}

.forgotpassword .ant-anchor-link {
  display: inline-flex;
}
.forgotpassword .ant-form-item-control {
  zoom: 1.1 !important;
}
.signup-button {
  background: inherit;
  border: none;
  box-shadow: none;
}
.forgotpassword .ant-form-item {
  margin-bottom: 25px;
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
.forgotpassword .ant-input {
  width: 92%;
  padding: 6.5px 46px;
  border-radius: 3px;
}
.forgotpassword .ant-btn-block {
  color: white;
  width: 92%;
  min-height: 41px;
  background: #ec6393;
  outline: none;
  border: none;
  border-radius: 26px;
}
.forgotpassword .fa-envelope {
  font-size: 15px;
  position: absolute;
  top: 3px;
  left: 17px;
  z-index: 9;
  color: #0055b7;
}
.forgotpassword .anticon-project {
position: relative;
    /* top: 0%; */
    transform: translatey(-26%);
    z-index: 2;
    margin-bottom: 0px;
    left: 31px;
    color: #0055b7;
}
/* .forgotpassword
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input)
  .ant-select-selector {
  padding: 0px 43px !important;
  border-radius: 5px;
} */
.forgotpassword .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector{
padding: 0px 43px !important;
    border-radius: 5px;
}
.instruction {
  color: white;
  margin: 45px 0px 49px 0px;
}
</style>
