<template>
  <div>
    <div class="logo">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 left">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img14.svg"
            />
          </div>
          <div class="col-md-6 refresh text-right">
            <a-button @click="resetForm"
              ><img
                src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img2.svg"
              />
            </a-button>
            <a-tooltip placement="left" title="Help">
              <!-- <a-button>Align edge / 边缘对齐</a-button> -->
              <img
                src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img3.svg"
              />
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>
    <section class="section2 newapplicationsection">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7">
            <h1>Welcome</h1>
          </div>
          <div class="col-lg-10 col-md-8 col-10">
            <h2>Please provide us your full name and contact details</h2>
            <div class="loader loader-1" v-show="isLoading">
              <div class="loader-outter"></div>
              <div class="loader-inner"></div>
            </div>
            <a-form
              layout="inline"
              :model="form"
              ref="ruleForm"
              :rules="rules"
              class="mainForm"
            >
              <div class="row justify-content-center">
                <div class="col-md-6 text">
                  <a-form-item ref="Fname" name="Fname">
                    <span class="required">*</span>
                    <a-input
                      class="mt-3 mb-2"
                      placeholder="First Name"
                      v-model:value="form.Fname"
                    />
                    <div
                      class="text-danger text-left"
                      v-show="ischeck"
                      v-if="form.Fname.trim() == ''"
                    >
                      Please Fill First Name
                    </div>
                    <div
                      style="display: none; color: #dc3545"
                      id="namespace"
                      class="ant-form-explain"
                    >
                      Spaces Are Not Allowed
                    </div>
                  </a-form-item>
                </div>
                <div class="col-md-6 text1">
                  <a-form-item ref="Lname" name="Lname">
                    <span class="required">*</span>
                    <a-input
                      class="mt-3 mb-2"
                      placeholder="Last Name"
                      v-model:value="form.Lname"
                    />
                    <div
                      class="text-danger"
                      v-show="ischeck"
                      v-if="form.Lname.trim() == ''"
                    >
                      Please Fill Last Name
                    </div>
                    <!-- <div
                      style="display: none; color: #dc3545"
                      class="ant-form-explain"
                      id="namespaceApp"
                    >
                      Spaces Are Not Allowed
                    </div> -->
                  </a-form-item>
                </div>
                <div class="col-md-6 text">
                  <a-form-item ref="Phone" name="Phone">
                    <span class="required">*</span>
                    <a-input
                      class="mt-3 mb-2"
                      type="number"
                      v-model:value="form.Phone"
                      placeholder="Phone"
                      maxlength="10"
                      @change="checkphonelength()"
                      oninput="javascript: if (this.value.length > this.maxLength)  this.value = this.value.slice(0, this.maxLength);"
                    />
                    <div
                      class="text-danger"
                      v-show="ischeck"
                      v-if="form.Phone == ''"
                    >
                      Please Fill Phone Number
                    </div>
                    <div id="phoneid" style="display: none" class="text-danger">
                      Not A Valid Number
                    </div>
                  </a-form-item>
                </div>
                <div class="col-md-6 text1">
                  <a-form-item ref="Email" name="Email">
                    <span class="required">*</span>
                    <a-input
                      class="mt-3 mb-2"
                      v-model:value="form.Email"
                      placeholder="Email"
                      @change="chechmail()"
                    />
                    <div
                      class="text-danger"
                      v-show="ischeck"
                      v-if="form.Email == ''"
                    >
                      Please Fill Email Address
                    </div>
                  </a-form-item>
                  <div
                    style="color:#dc3545; display:none; font-size:10px transition:1s;"
                    id="emailid"
                  >
                    Please Fill The Valid Email Address
                  </div>
                </div>
                <div class="col-md-8 button">
                  <a-button
                    class="next"
                    @click="handleSubmit()"
                    html-type="submit"
                  >
                    Continue
                  </a-button>
                </div>
              </div>
              <div>
                <a-modal
                  v-model:visible="isModle"
                  centered
                  :maskClosable="false"
                >
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-md-12 text-center">
                        <div class="thumb-image">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="145.393"
                            height="184"
                            viewBox="0 0 145.393 184"
                          >
                            <g
                              id="Group_169"
                              data-name="Group 169"
                              transform="translate(-883.304 -543)"
                            >
                              <g
                                id="like"
                                transform="translate(883.304 576.999)"
                              >
                                <g
                                  id="Group_38"
                                  data-name="Group 38"
                                  transform="translate(0 10.667)"
                                >
                                  <g id="Group_37" data-name="Group 37">
                                    <path
                                      id="Path_3"
                                      data-name="Path 3"
                                      d="M145.392,93.965a13.46,13.46,0,0,0-3.944-9.535,15.041,15.041,0,0,0,3.877-11.565c-.709-7.7-7.645-13.734-15.8-13.734H92.106C93.96,53.5,96.928,43.186,96.928,34.9c0-13.14-11.165-24.232-18.174-24.232a19.026,19.026,0,0,0-10.977,3.689,3.031,3.031,0,0,0-1.139,2.369V37.268l-17.453,37.8-.721.369V74.276a3.03,3.03,0,0,0-3.029-3.029H15.145A15.159,15.159,0,0,0,0,86.392v48.464A15.158,15.158,0,0,0,15.145,150H33.319a15.179,15.179,0,0,0,14.254-10.014,39.491,39.491,0,0,0,16.036,3.956h55.607a13.936,13.936,0,0,0,13.727-10.577,13.675,13.675,0,0,0-1.09-9.105,13.579,13.579,0,0,0,6.064-18.174A13.576,13.576,0,0,0,145.392,93.965Zm-12.776,7.475a3.029,3.029,0,0,0-1.732,5.216,7.505,7.505,0,0,1-4.319,12.958,3.029,3.029,0,0,0-1.732,5.216,7.491,7.491,0,0,1,2.193,7.227,7.838,7.838,0,0,1-7.809,5.828H63.609c-4.919,0-13.17-2.308-16.029-5.174a3.032,3.032,0,0,0-5.174,2.145,9.1,9.1,0,0,1-9.087,9.087H15.145a9.1,9.1,0,0,1-9.087-9.087V86.392A9.1,9.1,0,0,1,15.145,77.3H42.406v3.029a3.042,3.042,0,0,0,1.442,2.581,3.1,3.1,0,0,0,2.944.127l6.058-3.029a3.024,3.024,0,0,0,1.393-1.436L72.417,39.2a3.086,3.086,0,0,0,.279-1.272V18.367a12.774,12.774,0,0,1,6.058-1.642c3.32,0,12.116,8.251,12.116,18.174,0,10.662-5.8,26.031-5.858,26.183a3.024,3.024,0,0,0,2.829,4.107h41.685c5.052,0,9.341,3.617,9.765,8.233a9.05,9.05,0,0,1-4.313,8.572,3.033,3.033,0,0,0,.206,5.276,7.5,7.5,0,0,1-2.568,14.169Z"
                                      transform="translate(0 -10.667)"
                                      fill="#fff"
                                    />
                                  </g>
                                </g>
                                <g
                                  id="Group_40"
                                  data-name="Group 40"
                                  transform="translate(42.406 77.305)"
                                >
                                  <g id="Group_39" data-name="Group 39">
                                    <path
                                      id="Path_4"
                                      data-name="Path 4"
                                      d="M152.362,245.333a3.03,3.03,0,0,0-3.029,3.029v54.522a3.029,3.029,0,1,0,6.058,0V248.362A3.03,3.03,0,0,0,152.362,245.333Z"
                                      transform="translate(-149.333 -245.333)"
                                      fill="#fff"
                                    />
                                  </g>
                                </g>
                              </g>
                              <rect
                                id="Rectangle_334"
                                data-name="Rectangle 334"
                                width="9"
                                height="25"
                                rx="4.5"
                                transform="translate(958 543)"
                                fill="#fff"
                              />
                              <rect
                                id="Rectangle_335"
                                data-name="Rectangle 335"
                                width="9"
                                height="25"
                                rx="4.5"
                                transform="matrix(0.719, 0.695, -0.695, 0.719, 990.946, 553.382)"
                                fill="#fff"
                              />
                              <rect
                                id="Rectangle_336"
                                data-name="Rectangle 336"
                                width="9"
                                height="25"
                                rx="4.5"
                                transform="matrix(0.719, -0.695, 0.695, 0.719, 927.579, 559.634)"
                                fill="#fff"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <!-- <div class="col-md-12 text-center">
             <h2 class="text-white  pt-3">  Generated</h2>
           </div> -->
                      <div class="col-md-12 text-center">
                        <h2 class="text-white pt-3 application">
                          Your Application Number : {{ applicationNumber }}
                        </h2>
                      </div>
                      <div class="col-md-8 text-center pt-4">
                        <p class="text-white text-white-para">
                          We have emailed your unique application number so that
                          you may come back to your saved application at a later
                          time.
                        </p>
                      </div>
                      <div class="col-md-12 text-center pt-3">
                        <router-link to="/newApplicationForm">
                          <a-button type="" class="next" html-type="Submit">
                            <span>Continue</span>
                          </a-button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </a-modal>
              </div>
            </a-form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
/* eslint-disable */
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
export default {
  components: {
    UserOutlined,
    LockOutlined,
  },
  data() {
    return {
      ischeck: false,
      isLoading: false,
      isModle: false,
      applicationNumber: "",
      form: {
        Fname: "",
        Lname: "",
        Phone: "",
        Email: "",
      },
      rules: {
        // Lname: [
        //   { required: true, message: "Please Fill Last Name ", trigger:'blur' },
        // ],
        // Fname: [
        //   { required: true, message: 'Please Fill First Name', trigger: '' },
        //   // { min: 2,  message: 'This is not valid name', trigger: 'onkeyup' },
        // ],
        // Email: [
        //   { required: true, message: 'Please Fill Email Address',trigger:'change'},
        // ],
        // Phone: [
        //   { required: true, message: 'Please Fill Phone Number',trigger:'change'},
        // ],
      },
    };
  },
  methods: {
    //     removeSpaces(string) {
    //       console.log('chl gya')
    //  var checked = string.split(' ').join('');
    //  console.log(checked)
    // },
    // isLetter(e) {
    //   let char = String.fromCharCode(e.keyCode); // Get the character
    //   if (/^[A-Za-z]+$/.test(char)) return true;
    //   // Match with regex
    //   else e.preventDefault(); // If not match, don't add to input text
    // },
    checkphonelength() {
      if (this.form.Phone == "") {
        document.getElementById("phoneid").style.display = "none";
        return false;
      }
      if (this.form.Phone.toString().length === 10) {
        document.getElementById("phoneid").style.display = "none";
        return true;
      } else {
        document.getElementById("phoneid").style.display = "block";
      }
    },
    chechmail() {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (this.form.Email == "") {
        document.getElementById("emailid").style.display = "none";
      } else {
        if (filter.test(this.form.Email)) {
          document.getElementById("emailid").style.display = "none";
          return true;
        } else {
          document.getElementById("emailid").style.display = "block";
        }
      }
    },
    handleSubmit() {
      // console.log(this.form.phone.length)
      this.ischeck = true;
      // this.$refs.ruleForm.validate().then(() => {
      if (this.ischeck === true) {
        // var fname = this.validatespace();
        // var lname = this.validatespaceapp();
        var emailchecker = this.chechmail();
        var numbercheck = this.checkphonelength();
        if (
          emailchecker == true &&
          this.form.Lname.trim() != "" &&
          this.form.Fname.trim() != "" &&
          numbercheck == true
        ) {
          this.isLoading = true;
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
          var raw = JSON.stringify({
            Type: "new",
            FirstName: this.form.Fname,
            LastName: this.form.Lname,
            Email: this.form.Email,
            Phone: this.form.Phone,
          });
          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
          };
          fetch(
            "https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              var valu = JSON.parse(result);
              console.log(valu);
              if (valu.StatusCode == 200) {
                this.applicationNumber = valu.Record.ApplicationNumber;
                // const EXPIRE_TIME = 1000 * 60 * 60;
                // localStorage.setItem(
                //   "applicationNo",
                //   JSON.stringify({
                //     data: valu.Record.ApplicationNumber,
                //   })
                // );
                //  localStorage.setItem(
                //   "phone",
                //   JSON.stringify({
                //     data: this.form.Phone,
                //   })
                // );
                // localStorage.setItem(
                //   "email",
                //   JSON.stringify({
                //     data: this.form.Email,
                //   })
                // );
                // localStorage.setItem(
                //   "Fname",
                //   JSON.stringify({
                //     data: this.form.Fname,
                //   })
                // );

                localStorage.setItem(
                  "applicationNo",
                  valu.Record.ApplicationNumber
                );
                localStorage.setItem("phone", this.form.Phone);
                localStorage.setItem("email", this.form.Email);
                localStorage.setItem("Fname", this.form.Fname);
                this.isModle = true;
                this.isLoading = false;
              } else {
                this.isLoading = false;
                message.error("Somthing Wrong");
              }
            })
            .catch((error) => console.log("error", error));
        }
      }
      //  });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      document.getElementById("emailid").style.display = "none";
    },
    // validatespace() {
    //   if (this.form.Fname == "") {
    //     document.getElementById("namespace").style.display = "none";
    //   } else {
    //     if (this.form.Fname.trim() == "") {
    //       document.getElementById("namespace").style.display = "block";
    //       return false;
    //     } else {
    //       document.getElementById("namespace").style.display = "none";
    //       return true;
    //     }
    //   }
    // },
    // validatespace() {
    //   if (this.form.Phone == "") {
    //     document.getElementById("namespace").style.display = "none";
    //   } else {
    //     if (this.form.Phone.trim() == "") {
    //       document.getElementById("namespace").style.display = "block";
    //       return false;
    //     } else {
    //       document.getElementById("namespace").style.display = "none";
    //       return true;
    //     }
    //   }
    // },
    // validatespaceapp() {
    //   if (this.form.Lname == "") {
    //     document.getElementById("namespaceApp").style.display = "none";
    //   } else {
    //     if (this.form.Lname.trim() == "") {
    //       document.getElementById("namespaceApp").style.display = "block";
    //       return false;
    //     } else {
    //       document.getElementById("namespaceApp").style.display = "none";
    //       return true;
    //     }
    //   }
    // },
  },
};
</script>
<style >
#phoneid {
  text-align: left;
}
.newapplicationsection .text-danger {
  float: left;
  margin-top: -17px;
}
.application {
  font: normal normal bold 27px Lato !important;
}
.newapplicationsection .required {
  position: absolute;
  top: -6px;
  left: -11px;
}
.section2 {
  text-align: center;
  height: 450px;
}
.section2 h1 {
  font: normal normal bold 32px Lato;
  letter-spacing: 0px;
  color: #0055b7;
}
.section2 h2 {
  font: normal normal bold 24px Lato !important;
  color: #4a4a4a;
}
.text {
  text-align: right;
}
.text1 {
  text-align: left;
}
.text1 input {
  width: 100%;
  border-radius: 5px;
}
.text input {
  width: 100%;
  border-radius: 5px;
}
.ant-form-inline .ant-form-item-with-help {
  margin-bottom: 2px !important;
}
.button {
  margin-top: 42px;
}
.text2 input {
  border-radius: 5px;
}
.ant-modal-content {
  background-color: #0055b7 !important;
}
.ant-modal {
  width: 60% !important;
}
.ant-modal-close-x {
  display: none;
  /* width: 23px !important;
  height: 23px !important;
  line-height: 14px !important;
  text-align: center;
  border: 2px solid white;
  color: white;
  border-radius: 50%;
  font-size: 14px !important;
  margin: 20px; */
}
.text-white-para {
  font-size: 23px;
}
.ant-modal-footer {
  display: none;
}
.ant-modal-body {
  padding: 32px 24px 24px 24px;
}
.refresh .ant-btn {
  border: none;
}
.loader {
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0.9;
  z-index: 999;
  position: fixed;
  background: currentColor;
  cursor: progress;
}
.loader-1 .loader-outter {
  position: absolute;
  border: 4px solid #f50057;
  border-left-color: transparent;
  border-bottom: 0;
  width: 55px;
  height: 55px;
  left: calc(50% - 27px);
  top: calc(50% - 28px);
  border-radius: 50%;
  -webkit-animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}
.ant-form-inline .ant-form-item {
  display: block;
}
.loader-1 .loader-inner {
  position: absolute;
  border: 4px solid #f50057;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: calc(50% - 20px);
  top: calc(50% - 20px);
  border-right: 0;
  border-top-color: transparent;
  -webkit-animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41)
    infinite;
  animation: loader-1-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;
}
@keyframes loader-1-outter {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loader-1-inner {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@media only screen and (max-width: 480px) {
  .section2 .required {
    position: absolute;
    top: -4px;
    left: -13px;
  }
  .text1 input {
    width: 100%;
  }
  .text input {
    width: 100%;
  }
}
@media only screen and (max-width: 676px) {
  .ant-modal {
    width: 100% !important;
  }
  .ant-form-inline .ant-form-item-with-help {
    margin-bottom: 0% !important;
  }
}
</style>