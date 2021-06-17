 <template >
  <div class="logo relations">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-6 left">
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img14.svg"
          />
        </div>
        <div class="col-md-6 col-6 refresh text-right">
          <!-- <a-button class="resetbutton" @click="reset"
            ><img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img2.svg"
            />
          </a-button> -->
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
  <div class="loader loader-1" v-show="isLoading">
    <div class="loader-outter"></div>
    <div class="loader-inner"></div>
  </div>
  <a-steps :current="current" class="chooserelation">
    <a-step v-for="item in steps" :key="item.title" :title="item.title" />
  </a-steps>
  <a-divider />
  <div class="allforms">
    <div class="steps-content1 container">
      <div class="wish-application-tittle">
        <h3>Let's get started with your wish application</h3>
        <h4 class="formH4">
          This should only take about 10 minutes to complete, however you can
          come back at anytime to finish the form using the unique application
          number we've emailed you.
        </h4>
      </div>
      <h2 class="mt-4 mb-3 text-center">
        What is your relationship to the child you are applying for?
      </h2>
    </div>
  </div>
  <div class="steps-content selectrelation">
    <div class="radio-content" v-show="form1">
      <a-form-item>
        <a-radio-group v-model:value="pickednew" name="radioGroup">
          <div class="first">
            <a-popover title="Legal Guardian" placement="bottom">
              <template #content class="relationpop">
                <p class="mb-0">Father</p>
                <p class="mb-0">Mother</p>
                <p class="mb-0">Legal Guardian</p>
              </template>
              <a-radio class="" value="Legal Guardian" @click="next">
                <img
                  src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img20.svg"
                />
                <span class="radiovalue">Legal Guardian</span>
              </a-radio>
            </a-popover>
            <a-popover title="Family Members" placement="bottom">
              <template #content>
                <p class="mb-0">Family Members</p>
              </template>
              <a-radio class="" value="Family Members" @click="familymember">
                <img
                  src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img9.svg"
                />
                <span class="radiovalue">Family Members</span>
              </a-radio>
            </a-popover>

            <a-popover title="Medical Team" placement="bottom">
              <template #content>
                <p class="mb-0">Case Worker</p>
                <p class="mb-0">Doctor</p>
                <p class="mb-0">Social Worker</p>
              </template>
              <a-radio class="" value="Medical Team" @click="next">
                <img
                  src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img1.svg"
                />
                <span class="radiovalue">Medical Team</span>
              </a-radio>
            </a-popover>
            <a-popover title="Child" placement="bottom">
              <template #content>
                <p class="mb-0">Child</p>
              </template>
              <a-radio class="" value="Child" @click="child">
                <img
                  src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img13.svg"
                />
                <span class="radiovalue">Child </span></a-radio
              >
            </a-popover>
          </div>
        </a-radio-group>
      </a-form-item>
    </div>
    <a-form
      @submit="handleSubmit"
      class="form form2"
      ref="ruleForm"
      :rules="rules"
    >
      <div class="radio-content" v-show="form2">
        <a-form-item>
          <div class="first">
            <div v-if="this.pickednew === 'Legal Guardian'">
              <a-radio-group v-model:value="picked" name="radioGroup">
                <a-radio class="" value="Mother">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img10.svg"
                  />
                  <span class="radiovalue"> Mother</span>
                </a-radio>
                <a-radio class="" value="Father">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img11.svg"
                  />
                  <span class="radiovalue">Father</span>
                </a-radio>
                <a-radio class="" value="Legal Guardian">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img20.svg"
                  />
                  <span class="radiovalue"> Legal Guardian</span>
                </a-radio>
              </a-radio-group>
            </div>
            <div v-else-if="this.pickednew === 'Family Members'">
              <a-radio-group v-model:value="picked" name="radioGroup">
                <a-radio class="" value="Family Members">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img9.svg"
                  />
                  <span class="radiovalue">Family Member</span>
                </a-radio>
              </a-radio-group>
            </div>
            <div v-else-if="this.pickednew === 'Medical Team'">
              <a-radio-group v-model:value="picked" name="radioGroup">
                <a-radio class="" value="Case Worker">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img19.svg"
                  />
                  <span class="radiovalue">Case Worker</span>
                </a-radio>
                <a-radio class="" value="Doctor">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img1.svg"
                  /><span class="radiovalue"> Doctor</span>
                </a-radio>
                <a-radio class="" value="Social Worker">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img21.svg"
                  />
                  <span class="radiovalue">Social Worker</span>
                </a-radio>
              </a-radio-group>
            </div>
            <div v-else-if="this.pickednew === 'Child'">
              <a-radio-group v-model:value="picked" name="radioGroup">
                <a-radio class="" value="Child">
                  <img
                    src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img13.svg"
                  />
                  <span class="radiovalue">Child </span></a-radio
                >
              </a-radio-group>
            </div>
          </div>
        </a-form-item>
      </div>
      <a-button type="" v-if="current > 0" class="next" html-type="Submit">
        SAVE & NEXT
      </a-button>
      <a-button
        class="prev"
        v-if="current > 0"
        style="margin-left: 8px"
        @click="prev"
        ><img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img4.svg"
      /></a-button>
    </a-form>
  </div>
  <Footer />
</template>
<script>
/* eslint-disable */
import Footer from "../../Public/Footer/Footer";
import axios from "axios";
import { message } from "ant-design-vue";

export default {
  name: "NewApplicationForm",
  components: {
    Footer,
  },
  created() {
    this.applicationNo = localStorage.getItem("applicationNo");
    if (this.applicationNo === null) {
      this.$router.push("/newApplication");
    }
  },
  mounted() {},
  data() {
    return {
      applicationNo: null,
      isLoading: false,
      pickednew: "",
      form1: true,
      form2: false,
      picked: "",
      current: 0,

      steps: [
        {
          title: "First",
          content: "",
        },
        {
          title: "Second",
          content: "Second-content",
        },
      ],
    };
  },
  methods: {
    familymember(){
  this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.form1 = false;
        this.form2 = false;
         localStorage.setItem("primaryrelation", this.pickednew);
          localStorage.setItem("relation", 'Family Members');
         this.$router.push("/wishform");
       console.log('get'+ this.pickednew)
      }, 2000);
    },
    child() {
         this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.form1 = false;
        this.form2 = false;
         localStorage.setItem("primaryrelation", this.pickednew);
          localStorage.setItem("relation", 'Child');
         this.$router.push("/wishform");
       console.log('get'+ this.pickednew)
      }, 2000);
    },
    handleSubmit() {
      if (this.picked != "") {
        this.$router.push("/wishform");
        localStorage.setItem("primaryrelation", this.pickednew);
        localStorage.setItem("relation", this.picked);
      } else {
        message.warning("Please Choose The Relation", [1]);
      }
    },
    next() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.form1 = false;
        this.form2 = true;
        this.current = 1;
       console.log('get'+ this.pickednew)
      }, 2000);
    },
    prev() {
      this.form1 = true;
      this.form2 = false;
      this.current = 0;
    },
  },
};
/* eslint-enable */
</script>
<style >
.ant-popover-inner {
  background-color: #d0e9ff !important;
  background-clip: padding-box !important;
  border-radius: 4px;
  box-shadow: 1px 0px 50px 0 rgb(0 0 0 / 11%) !important;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \9;
}
.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow,
.ant-popover-placement-bottomLeft > .ant-popover-content > .ant-popover-arrow,
.ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
  top: 6px;
  border-top-color: #95ceff;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #95ceff;
  box-shadow: 1px 0px 50px 0 rgb(0 0 0 / 11%);
}
.ant-popover-title {
  min-width: 177px;
  min-height: 32px;
  background: #95ceff;
  margin: 0;
  padding: 5px 16px 4px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  border-bottom: 1px solid #f0f0f0;
}
.newsteps .ant-steps-item-icon {
  display: block !important;
}
.newsteps
  .ant-steps-item-active
  > .ant-steps-item-container
  > .ant-steps-item-content
  > .ant-steps-item-title {
  display: none !important;
}
.newsteps .ant-steps-item {
  margin-right: 0px !important;
}
.newsteps .ant-steps-item-tail {
  position: relative;
  top: 0px;
  left: 0;
  width: 100%;
  padding: 0;
}
.steps-content {
  margin-top: 16px;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.form2 .prev {
  position: absolute !important;
  left: 1%;
  top: 100px !important;
}

.prev:hover {
  border: none !important;
}

.prev img {
  width: 28px;
}
body h3 {
  font: normal normal bold 21px Lato !important;
  color: #0055b7;
  text-transform: capitalize;
}
body h4 {
  color: #75787b;
  font: normal normal normal 19px/31px Lato;
}
.wish-application-tittle {
  border: 1px solid rgb(112 112 112 / 0.17);
  padding: 23px 14px;
  height: 137px;
  border-radius: 4px;
  text-align: center;
}
body h2 {
  font: normal normal bold 24px Lato !important;
  color: #4a4a4a;
  text-transform: capitalize;
}
.steps-content {
  padding-top: 2px !important;
}
.first {
  margin: 10px 0px 20px 0px;
}

.first label:checked:before {
  background: green !important;
}
.ant-radio-checked::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #ec6393;
  border-radius: 50%;
  visibility: hidden;
  -webkit-animation: antRadioEffect 0.36s ease-in-out;
  animation: antRadioEffect 0.36s ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  content: "";
}
.ant-radio-checked .ant-radio-inner {
  border-color: #ec6393 !important;
}
.newsteps .ant-radio-wrapper-checked {
  border: 1px solid #ec6393 !important;
}

.ant-radio-inner::after {
  position: absolute;
  top: 3px;
  left: 3px;
  display: table;
  width: 8px;
  height: 8px;
  background-color: #ec6393 !important;
  border-top: 0;
  border-left: 0;
  border-radius: 8px;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  content: " ";
}
@media (max-width: 480px) {
.chooserelation .ant-steps-item-title{
  /* background:white!important; */
  display: none!important;
  background: none!important;
}
.ant-popover-inner {
  display: none!important;
}
.ant-popover-arrow{
  display: none!important;
}
}
@media only screen and (max-width: 676px) {
  .formH4 {
    font-size: 14px;
  }
  .wish-application-tittle {
    height: auto;
  }
  .form2 .prev {
  position: absolute !important;
  left: 0%;
  top: 117px !important;
  margin-left: -29px!important;
  background: white!important;
}

}
</style>
