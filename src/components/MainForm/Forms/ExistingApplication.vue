<template>
  <div v-if="isShow == true">
    <Father
      :data="jsondata"
      :applicationNO="this.existingform.applicationNO"
      :relation="this.relation"
      :dyField="this.dynamicField"
      :fHName="this.firstHeadingName"
    />
  </div>
  <div v-else>
    <div>
      <div class="logo">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 left">
              <img
                src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img14.svg"
              />
            </div>
            <div class="col-md-6 refresh text-right reset">
              <!-- <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img2.svg"
          /> -->
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
      <section class="section2 welcomeback">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-7">
              <h1 class="welcome">Welcome Back</h1>
            </div>
            <div class="col-lg-10 col-md-8 col-10 formMainDiv">
              <h2 class="heading">
                Please complete the below details to continue with your
                application.
              </h2>
              <a-form
                ref="ruleForm"
                :model="existingform"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
                class="mainForm"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div>
                      <a-form-item
                        ref="name"
                        name="name"
                        @keyup="validatespace()"
                      >
                        <span class="required">*</span>
                        <a-input
                          v-model:value="existingform.name"
                          placeholder="First Name"
                          class="mt-3 mb-2 exist"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="existingform.name === ''"
                        >
                          Please Fill Name
                        </div>
                        <div
                          style="display: none; color: #dc3545"
                          class="ant-form-explain"
                          id="namespace"
                        >
                          Please Fill first Name
                        </div>
                      </a-form-item>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div>
                      <a-form-item
                        ref="applicationNO"
                        name="applicationNO"
                        @keyup="applicationmessage()"
                      >
                        <span class="required">*</span>
                        <a-input
                          v-model:value="existingform.applicationNO"
                          placeholder="Application No"
                          class="mt-3 mb-2 exist"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="existingform.applicationNO === ''"
                        >
                          Please Fill Application Number
                        </div>
                        <div
                          style="color: red; display: none"
                          id="number"
                          class="ant-form-explain"
                        >
                          Please Fill the Correct Number
                        </div>
                      </a-form-item>
                    </div>
                  </div>
                  <div class="col-md-12 w-100">
                    <a-form-item
                      ref="email"
                      name="email"
                      @keyup="chechmail()"
                      class="w-100"
                    >
                      <span class="required">*</span>
                      <a-input
                        v-model:value="existingform.email"
                        placeholder="Email"
                        class="mb-2 existemail"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="existingform.email === ''"
                      >
                        Please Fill Email Address
                      </div>
                      <div
                        style="color: #dc3545; display: none"
                        class="ant-form-explain"
                        id="emailid"
                      >
                        Please Fill The Valid Email Address
                      </div>
                    </a-form-item>
                  </div>
                  <a-form-item class="button">
                    <a-button type="primary" class="next" @click="onSubmit">
                      Submit
                    </a-button>
                  </a-form-item>
                </div>
              </a-form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import Father from "./Father.vue";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      ischeck: false,
      nameSpaceCheck: false,
      dynamicField: "",
      firstHeadingName: "",
      relation: "",
      isShow: false,
      other: "",
      existingform: {
        name: "",
        applicationNO: "",
        email: "",
      },
      // rules: {
      //   name: [
      //     { required: true, message: "Please Fill Name ",trigger:'change' },
      //   ],
      //   applicationNO: [
      //     { required: true, message: "Please Fill Application Number", trigger:'change'
      //     },
      //   ],
      //   email: [
      //     { required: true, message: 'Please Fill Email Address',trigger:'change'},
      //   ],
      // },
      jsondata: "",
    };
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true;
      // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
      document.getElementById("emailid").style.display = "none";
      document.getElementById("namespace").style.display = "none";
      document.getElementById("number").style.display = "none";
    },
    chechmail() {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (this.existingform.email == "") {
        document.getElementById("emailid").style.display = "none";
      } else {
        if (filter.test(this.existingform.email)) {
          document.getElementById("emailid").style.display = "none";
          return true;
        } else {
          document.getElementById("emailid").style.display = "block";
        }
      }
    },
    onSubmit() {
      this.ischeck = true;
      if (this.ischeck === true) {
        var nameDate = this.validatespace();
        var checkEmail = this.chechmail();
        if (nameDate == true && checkEmail == true) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
          var raw = JSON.stringify({
            Dashboard: false,
            FirstName: this.existingform.name,
            Email: this.existingform.email,
            ApplicationNumber: this.existingform.applicationNO,
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
              var EXDATA = JSON.parse(result);
              if (EXDATA.StatusCode == 200) {
                this.firstHeadingName = EXDATA.primaryContactName;
                if (EXDATA.Record.Case_Worker.length != 0) {
                  this.jsondata = EXDATA.Record.Case_Worker;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Case_Worker";
                  this.isShow = true;
                } else if (EXDATA.Record.Doctor.length != 0) {
                  this.jsondata = EXDATA.Record.Doctor;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Doctor";
                  this.isShow = true;
                } else if (EXDATA.Record.Family_Members.length != 0) {
                  this.jsondata = EXDATA.Record.Family_Members;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Family_Members";
                  this.isShow = true;
                } else if (EXDATA.Record.Father.length != 0) {
                  this.jsondata = EXDATA.Record.Father;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Father";
                  this.isShow = true;
                } else if (EXDATA.Record.Legal_Guardian.length != 0) {
                  this.jsondata = EXDATA.Record.Legal_Guardian;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Legal_Guardian";
                  this.isShow = true;
                } else if (EXDATA.Record.Mother.length != 0) {
                  this.jsondata = EXDATA.Record.Mother;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Mother";
                  this.isShow = true;
                } else if (EXDATA.Record.Social_Worker.length != 0) {
                  this.jsondata = EXDATA.Record.Social_Worker;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Social_Worker";
                  this.isShow = true;
                } else if (EXDATA.Record.Family.length != 0) {
                  this.jsondata = EXDATA.Record.Family;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Family";
                  this.isShow = true;
                } else if (EXDATA.Record.Child.length != 0) {
                  this.jsondata = EXDATA.Record.Child;
                  this.dynamicField = EXDATA.Record.Family;
                  this.relation = "Child";
                  this.isShow = true;
                }
              } else if (EXDATA.StatusCode == 400) {
                message.error("Something Went Wrong");
              } else if (EXDATA.StatusCode == 201) {
                message.error("Something Went Wrong");
              }
            })
            .catch((error) => console.log("error", error));
        }
      }
    },
    validatespace() {
      if (this.existingform.name == "") {
        document.getElementById("namespace").style.display = "none";
      } else {
        if (this.existingform.name.trim() == "") {
          document.getElementById("namespace").style.display = "block";
          return false;
        } else {
          document.getElementById("namespace").style.display = "none";
          return true;
        }
      }
    },
    applicationmessage() {
      if (this.existingform.applicationNO == "") {
        document.getElementById("number").style.display = "none";
      }
    },
  },
  components: {
    Father,
  },
};
</script>
<style >
.welcomeback .required {
  position: absolute;
  top: -9px;
  left: -11px;
}
.welcomeback .text-danger {
  float: left;
  margin-top: -17px;
}
input {
  border-radius: 5px !important;
}
.ant-form-item-control-wrapper {
  width: 100% !important;
}
.mainForm {
  width: 50%;
  margin: auto;
}
.ant-form-explain {
  float: left;
}
@media only screen and (max-width: 768px) {
  .button {
    margin-top: 21px;
  }
  .mainForm {
    width: 100%;
    margin: auto;
  }
  .welcome {
    font-size: 35px !important;
    margin-bottom: 2px !important;
  }
  .reset {
    position: absolute;
  }
  .section2 h2 {
    font-size: 20px !important;
  }
}
</style>