/* eslint-disable */
<template >
  <div class="logo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 left">
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img14.svg"
          />
        </div>
        <div class="col-md-6 refresh text-right">
          <a-button class="resetbutton" @click="reset"
            ><img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img2.svg"
            />
          </a-button>
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img3.svg"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="steps allforms">
    <div class="percentage">
      <img
        src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img20.svg"
      />
    </div>
    <a-steps
      :current="current"
      progressDot
      direction="horizontal"
      id="myDiv"
    >
      <!-- <a-step v-for="item in steps" :key="item" /> -->
      <a-step v-for="item in steps[0]" :key="item"  />
    </a-steps>

    <!--  -->
    <div class="steps-content container-fluid">
      <span id="applicationno"> </span>
      <span style="float: right; color: #042f55"
        >Application Number: &nbsp;
      </span>
      <!-- <h2>{{$store.state.users}}</h2> -->
      <div style="width: 100%; clear: both">
        <div class="loader loader-1" v-show="isLoading">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
        <a-form
          @submit="handleSubmit"
          class="form"
          ref="ruleForm"
          :rules="rules"
          :model="dynamicValidateForm"
        >
          <div class="row justify-content-center">
            <div class="row justify-content-center mt-4 mb-5">
              <h2 class="pt-3" id="firstname"></h2>
              {{ current }}
              <div
                v-for="item in steps.length"
                :key="item"
                :current="current"
                :class="item.cssClass"
              >
                <h2 v-if="current === 2">
                  {{ steps[0][current].content }} {{ test3 }}?
                </h2>
                <h2 v-else-if="current === 4">
                  {{ steps[0][current].content }}
                  {{ steps[0][3].innerfield[0].value }}
                </h2>
                <h2 v-else-if="current === 6">
                  {{ steps[0][current].content }}
                  {{ steps[0][3].innerfield[0].value }}
                </h2>
                <h2 v-else-if="current === 7">
                  {{ steps[0][current].content }}
                  {{ steps[0][3].innerfield[0].value }}
                </h2>
                <h2 v-else-if="current === 12">
                  {{ steps[0][current].content }}
                  {{ steps[0][3].innerfield[0].value }}
                </h2>
                <h2 v-else>{{ steps[0][current].content }}</h2>
                <div class="row justify-content-center mt-4 mb-5">
                  <!-- <div v-for="check in 1" :key="check"> -->
                  <!-- <div v-for="dynamic in steps[0][7].innerfield" :key="dynamic"  :class="dynamic.cssClass"> -->
                  <!-- </div> -->
                  <!-- </div> -->
                  <!--  -->
<div
                    v-for="alldata in steps[0][current].innerfield"
                    :key="alldata"
                    :class="alldata.cssClass"
                  >
                    <div v-if="alldata.type == 'checkbox'">
                      <a-checkbox v-model:checked="checked" @change="onchange">
                      </a-checkbox>
                    </div>

                    <div
                      v-else-if="alldata.type == 'text'"
                    >
                      <a-input
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        v-model:value="alldata.value"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="alldata.required === true && alldata.value === ''"
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>
                    <div
                      v-else-if="alldata.type == 'number'"
                    >
  <a-input
                          class="mt-3 mb-3"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true && alldata.value === ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>

                    <div v-else-if="alldata.type == 'picklist'">
                      <a-select
                        option-filter-prop="children"
                        class="mt-3 mb-4"
                        v-bind:placeholder="alldata.placeholder"
                        v-model:value="alldata.value"
                      >
                        <a-select-option
                          v-for="option in alldata.options"
                          :value="option.value"
                          :key="option"
                          placeholder="Gender"
                        >
                          {{ option.text }}
                        </a-select-option>
                        {{ alldata.value }}
                      </a-select>
                      <div
                        class="text-danger"
                        id="selecterr"
                        v-show="ischeck"
                        v-if="alldata.required === true && alldata.value === ''"
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>
                    <div v-if="alldata.type == 'radio'">
                      <!-- <a-form-item> -->
                      <a-radio-group
                        name="radioGroup"
                        v-model:value="alldata.value"
                      >
                        <a-radio value="Yes">
                          <span class="radiovalue">Yes</span></a-radio
                        >
                        <a-radio class="" value="No"
                          ><span class="No"> No </span></a-radio
                        >
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true && alldata.value === ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </a-radio-group>
                    </div>
                    <!-- </div> -->
                    <div v-else-if="alldata.type == 'date'">
                      <a-date-picker
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        type="date"
                        v-model:value="alldata.value"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="alldata.required === true && alldata.value === ''"
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>
                    <div
                      v-else-if="alldata.type == 'email'"
                    >
                      <a-input
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        v-model:value="alldata.value"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="alldata.required === true && alldata.value === ''"
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>
                  </div>

                  <!-- </div> -->
                </div>
                <!-- </div> -->
                <div class="steps-action" v-for="btns in 1" :key="btns">
                  <!-- {{ this.current }} -->
                  <a-button
                    v-if="this.current > 1"
                    @click="prev"
                    class="prev"
                    type=""
                  >
                    <img
                      src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img4.svg"
                    />
                  </a-button>
                  <a-button
                    v-if="this.current == steps[0].length - 1"
                    html-type="submit"
                    class="next"
                  >
                    Done
                  </a-button>
                  <div class="mt-3 mb-4">
                    <a-button
                      type=""
                      @click="addDomain"
                      class="plus"
                      v-if="current == 7"
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </a-button>
                  </div>
                  <a-button
                    v-if="this.current < steps[0].length - 1"
                    type=""
                    @click="next"
                    class="next"
                  >
                    SAVE & NEXT
                  </a-button>
                </div>
              </div>
            </div>
          </div>
        </a-form>
      </div>
      <a-button type="" @click="showDrawer" class="edit">
        <span class="pencil"
          ><i class="fa fa-pencil" aria-hidden="true"></i
        ></span>
        Edit
      </a-button>
      <a-drawer
        :placement="placement"
        :closable="false"
        :visible="visible"
        @close="onClose"
      >
        <a-steps class="" @change="onChange" :current="current">
          <a-step v-for="item in steps[0]" :key="item" :title="item.title">
          </a-step>
        </a-steps>
        <a-button class="closebtn" @click="onClose">
          <i class="fa fa-times" aria-hidden="true"></i>
        </a-button>
      </a-drawer>
      <div>
         <!-- <a-button type="" @click="showDrawer" class="edit">
     <span class="pencil"><i class="fa fa-pencil" aria-hidden="true"></i></span> Edit
  </a-button>
  <a-drawer
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
<a-steps
      :current="current"
      @change="onchange"
      progressDot
      direction="horizontal"
    >
      <a-step v-for="item in steps[0]" :key="item" :title="item.title" />
    </a-steps>

      <a-button class="closebtn" @click="onClose">
      <i class="fa fa-times" aria-hidden="true"></i>
      </a-button>
  </a-drawer> -->
        <!-- <div v-for="placement in placements" :key="placement" class="drops">
          <a-dropdown :placement="placement">
            <a-button
              type=""
              @click="showDrawer"
              class="edit"
              v-if="this.current > 1"
            >
              <span class="pencil"
                ><i class="fa fa-pencil" aria-hidden="true"></i
              ></span>
              Edit
            </a-button>
            <template #overlay>
              <a-menu>
                 <a-menu-item>
              <a-steps
                :current="current"
                direction="verticle"
                id="myDiv"
                @change="onChange"
                class=""
              >
                <a-step v-for="item in steps[0]" :key="item" :title="item.title" />
              </a-steps>
                 </a-menu-item>
              <a-button class="closebtn" @click="onClose">
                <i class="fa fa-times" aria-hidden="true"></i>
              </a-button>
               </a-menu>
               <a-menu>
                <a-steps v-for="check in steps[0]" :key="check">
                  <a-menu-item
                    v-if="check.saveDetails == true"
                    :current="current"
                  >
                    <a href="#" @click="hoverdata(check.groups)">
                      {{ check.groups }}</a
                    >
                  </a-menu-item>
                </a-steps>
              </a-menu>

              <a-menu>
                <div v-for="check in steps[0]" :key="check">
                  <a-menu-item
                    v-if="check.saveDetails == true"
                    :current="current"
                  >
                    <a href="#" @click="hoverdata(check.groups)">
                      {{ check.groups }}</a
                    >
                  </a-menu-item>
                </div>
              </a-menu>
            </template>
          </a-dropdown>
        </div> -->
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
/* eslint-disable */
import Footer from "../../Public/Footer/Footer";
import {
  AlertTwoTone,
  LoginOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons-vue";
import { onMounted } from "vue";
import { message } from "ant-design-vue";
import store from "../../../store/store";
// import useAxios from 'vue3-use-axios'
import "./Forms.css";
let id = 0;
export default {
  name: "LegalGuardian",
  created() {
    this.isLoading = true;
    console.log("Legal_Guardian" + JSON.stringify(store.state.something));
  },
  mounted() {
    this.getdata();
    var paragraph = document.getElementById("applicationno");
    var text = document.createTextNode(localStorage.getItem("applicationno"));
    paragraph.appendChild(text);
    this.test3 = localStorage.getItem("firstname");
    this.email = localStorage.getItem("email");
    this.phone = localStorage.getItem("phone");
    console.log("Legal_Guardian");
    this.savedetail3();
  },
  // },
  components: {
    Footer,
    MinusCircleOutlined,
  },

  data() {
    return {
      phone: "",
      email: "",
      test3: "",
      isshow: false,
      ischeck: false,
      current: 1,
      steps: [],
      savesteps: [],
      value1: null,
      dynamicValidateForm: {
        domains: [],
      },
      checked: false,
      modal2Visible: false,
      placements: ["topLeft"],
      visible: false,
      isLoading: false,
    };
  },
  methods: {
     onchange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    savedetail3() {},
    getdata(current) {
      this.axios
        .get(
          "https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Origin": true,
              "Content-Type": "application/json",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
          }
        )
        .then((res) => {
          this.steps.push(res.data.Legal_Guardian);
          console.log(res.data);
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    onChecked(e) {
      checked = `${e.target.checked}`;
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(current) {
      this.current = current;
    },
    next(current) {
      //  console.log(this.steps[0]);
      var totalList = [];
      var checkvalue = true;
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (
          this.steps[0][this.current].innerfield[j].required === true &&
          this.steps[0][this.current].innerfield[j].value === ""
        ) {
          // alert("error");
          (this.ischeck = true), (checkvalue = false);
        } else {
          // console.log('hello'+this.steps[0][this.current].innerfield[j].value)
          // this.steps[0][this.current].innerfield[j].value == this.steps[0][this.current].innerfield[j].value
        }
        // console.log(this.steps[0]);
      }
      if (checkvalue == true) {
        (this.ischeck = false), this.current++;
        setTimeout(() => {
          const stepsValue = Math.round(
            (this.current * 100) / this.steps[0].length
          );
          var x = document.getElementById("myDiv");
          x.querySelector(
            ".ant-steps-item-active .ant-steps-item-title"
          ).innerHTML = stepsValue + `%`;
        }, 100);
        //  this.steps[0][0].innerfield[0].value = "Father";
          let saveDetails = {
          Father: this.steps[0],
          };
          var data = JSON.stringify(saveDetails);
          var config = {
            method: "put",
            url:
              `https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService?applicationNo=${this.paragraph}`,
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Origin": true,
              "Content-Type": "application/json",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
            data: data,
          };
          axios(config)
            .then(function (response) {
             message.success("This is a success message")
              console.log(JSON.stringify(response));
              console.log(response);
            })
            .catch(function (error) {
              message.error("This is an error message");
              // console.log(error);
            });
      }
    },
    handleSubmit() {},
    reset() {
      for (let i = 0; i < this.steps.length; i++) {
        for (let j = 0; j < this.steps[i].innerfield.length; j++) {
          this.steps[i].innerfield[j].value = "";
        }
      }
    },
    prev() {
      this.current--;
    },
    hoverdata(e, current) {
      //  console.log(this.steps[0][0].saveDetails)
      for (let i = 0; i < this.steps[0].length; i++) {
        //  console.log(this.steps[0][i].saveDetails)
        if (this.steps[0][i].saveDetails == true) {
          console.log(this.steps[0][i]);
          console.log("hello" + this.steps[0][i].saveDetails);
        }
      }
    },
  },
};

/* eslint-enable */
</script>
 <style >
</style>
