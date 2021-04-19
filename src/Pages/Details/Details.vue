<template>
  <div class="loader loader-1" v-show="isLoading">
    <div class="loader-outter"></div>
    <div class="loader-inner"></div>
  </div>
   <router-link  to="/appointments"><div class="back"><ArrowLeftOutlined />  Back</div></router-link>
  <div
    style=""
    class="details"
    v-if="this.isshowfield"
  >

    <h1 class="details-heading">Details</h1>
    <!-- <h1>{{$route.params.Application_Number }}</h1>
    <h1> {{fromChild}}</h1> -->
    <a-collapse
      v-model:activeKey="activeKey"
      v-for="allgroup in grouplist[0]"
      :key="allgroup"
    >
      <a-collapse-panel
        key="1"
        v-bind:header="allgroup"
        v-if="allgroup != 'None'"
        class="headingbullets"
      >
        <div
          v-for="alljsondata in jsondata"
          :key="alljsondata"
          class="alljsondata"
        >
          <div
            v-if="alljsondata.groups === allgroup"
            class="alljsondata.groups"
          >
            <a-form @submit="complete">
              <div class="container">
                <div class="row">
                  <div
                    v-for="innerfields in alljsondata.innerfield"
                    :key="innerfields"
                    class="col-md-4"
                  >
                    <div v-if="innerfields.type === 'text'">
                      <a-form-item :label="innerfields.placeholder">
                        <a-input
                          placeholder=""
                          allow-clear
                          v-model:value="innerfields.value"
                          class="mb-3"
                          readonly
                        />
                      </a-form-item>
                    </div>
                    <div v-if="innerfields.type === 'email'">
                      <a-form-item :label="innerfields.placeholder">
                        <a-input
                          placeholder=""
                          allow-clear
                          v-model:value="innerfields.value"
                          class="mb-3"
                          readonly
                        />
                      </a-form-item>
                    </div>
                    <div v-if="innerfields.type === 'number'">
                      <a-form-item :label="innerfields.placeholder">
                        <a-input
                          placeholder=""
                          allow-clear
                          v-model:value="innerfields.value"
                          class="mb-3"
                          readonly
                        />
                      </a-form-item>
                    </div>
                    <div v-else-if="innerfields.type == 'picklist'">
                      <a-form-item :label="innerfields.placeholder">
                        <a-select
                          option-filter-prop="children"
                          v-bind:placeholder="innerfields.placeholder"
                          v-model:value="innerfields.value"
                          class="mb-3"
                          readonly
                        >
                          <a-select-option
                            v-for="option in innerfields.options"
                            :value="option.value"
                            :key="option"
                            placeholder="Gender"
                            disabled
                          >
                            {{ option.text }}
                          </a-select-option>
                          {{ innerfields.value }}
                        </a-select>
                      </a-form-item>
                    </div>
                    <div v-else-if="innerfields.type == 'date'">
                      <a-form-item :label="innerfields.placeholder">
                        <a-date-picker
                          :placeholder="innerfields.placeholder"
                          type="date"
                          :disabled-date="disabledDate"
                          v-model:value="innerfields.value"
                          class="mb-3"
                          disabled
                        />
                      </a-form-item>
                    </div>
                    <div v-if="innerfields.type == 'radio'">
                      <a-form-item :label="innerfields.placeholder">
                        <a-radio-group
                          :name="innerfields.name"
                          v-model:value="innerfields.value"
                          class="mb-3"
                        >
                          <a-radio disabled="disabled" value="Yes">
                            <span class="radiovalue">Yes</span></a-radio
                          >
                          <a-radio disabled="disabled" class="" value="No"
                            ><span class="No"> No </span></a-radio
                          >
                        </a-radio-group>
                      </a-form-item>
                    </div>
                    <!-- {{innerfields}} -->
                  </div>
                </div>
              </div>
            </a-form>
          </div>
        </div>
      </a-collapse-panel>
    </a-collapse>

    <!-- <a-collapse >
   <a-collapse-panel header="Medical Eligibility"  >
     <a-form @submit="complete">
          <a-row>
              <a-col :span="9" class="inputfield">
      <a-form-item label="Child Condition">
      <a-input
      placeholder=""
      allow-clear
      @change="onChange"
    />
      </a-form-item>
              </a-col>
                  <a-col :span="12" class="inputfield">
      <a-form-item label="Any Specification Related To Medical Condition">
      <a-input  placeholder="" v-model:value="AnyMedicalConditionSpecification"  />
        <div style="color:red; display:none;"  id="MedicalCondition" class="ant-form-explain">  Plesse Fill the Correct Number </div>
      </a-form-item>
              </a-col>
          </a-row>
           <a-row>
              <a-col :span="9" class="inputfield">
      <a-form-item label="Fit For Wish">
      <a-input
      placeholder=""
      allow-clear
      @change="onChange"
      v-model:value="FitForWish"
    />
      </a-form-item>
              </a-col>
                  <a-col :span="12" class="inputfield">
      <a-form-item label="Any Specification Related To Wish">
      <a-input  placeholder="" v-model:value="AnyWishSpecification"/>
      </a-form-item>
              </a-col>
          </a-row>
      </a-form>
      </a-collapse-panel >
      </a-collapse> -->

    <a-collapse class="medical-eligble" >
      <a-collapse-panel header="Medical Eligibility" class="headingbullets"  >
        <a-form @submit="complete">
          <a-row>
            <a-col :span="9" class="inputfield">
              <a-form-item label="Child Condition">
                  <a-input
                  placeholder=""
                  v-model:value="childscondition"
                  v-if="childscondition != null"
                  readonly
                />
                <a-input v-else placeholder=""  v-model:value="ChildsCondition" />
                 <div
                  class="text-danger"
                  v-show="ischeck"
                  v-if="ChildsCondition.trim() == ''"
                >
                  This Field is required
                </div>

              </a-form-item>
            </a-col>
            <a-col :span="12" class="inputfield">
              <a-form-item
                label="Any Specification Related To Medical Condition?"
              >
                <!-- <span
                  v-if="this.medicalSpecification === null"
                  class="required required-radio"
                  >*</span> -->
                <a-input
                  placeholder=""
                  v-model:value="medicalSpecification"
                  v-if="this.medicalSpecification != null"
                  readonly
                />
                <a-input
                  v-else
                  placeholder=""
                  v-model:value="AnyMedicalConditionSpecification"
                />
                <div
                  class="text-danger"
                  v-show="ischeck"
                  v-if="AnyMedicalConditionSpecification.trim() == ''"
                >
                  This Field is required
                </div>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="9" class="inputfield">
              <a-form-item label="Fit For Wish">
                <a-select
                  v-model:value="FitWish"
                  v-if="this.FitWish != null"
                  readonly
                  placeholder=""
                >
                  <a-select-option v-model:value="FitWish">{{
                    FitWish
                  }}</a-select-option>
                  <!-- <a-select-option value="No">No</a-select-option> -->
                </a-select>

                <!-- <a-input
                  readonly
                  placeholder=""
                  allow-clear
                  v-model:value="FitWish"
                  v-if="this.FitWish != null"
                /> -->
                <!-- <a-input
                  v-else
                  placeholder="FitForWish"
                  allow-clear
                  @change="onChange"
                  v-model:value="FitForWish"
                /> -->
                <a-select
                  v-else
                  @change="onChange"
                  v-model:value="FitForWish"
                  placeholder="Please Select"

                >
                  <!-- <option value="" disabled selected>Select your option</option> -->
                  <a-select-option value="Yes">Yes</a-select-option>
                  <a-select-option value="No">No</a-select-option>
                </a-select>

                <div
                  class="text-danger"
                  v-show="ischeck"
                  v-if="FitForWish == ''"
                >
                  This Field is required
                </div>
              </a-form-item>
            </a-col>
            <a-col :span="12" class="inputfield">
              <a-form-item label="Any Specification Related To Wish?">
                <a-input
                  placeholder=""
                  v-model:value="wishSpecification"
                  v-if="this.wishSpecification != null"
                  readonly
                />
                <a-input
                  v-else
                  placeholder=""
                  v-model:value="AnyWishSpecification"
                />
                <div
                  class="text-danger"
                  v-show="ischeck"
                  v-if="AnyWishSpecification.trim() == ''"
                >
                  This Field is required
                </div>
              </a-form-item>
            </a-col>
          </a-row>
           <div class="container-fluid">

            <span class="heading" style="color:rgba(0, 0, 0, 0.85)">E-Signature</span>
             <span style="color:red">*</span>
             <a-button class=""  type="button" id="sig-clearBtn">
             <span class="clear">  Clear </span>
              <span class="line"> </span>
            </a-button>
            <canvas id="sig-canvas" width="605" height="160" @mouseover="sign">
              Get a better browser, bro.
            </canvas>
             <div
                  class="text-danger"
                  v-show="ischeck"
                  v-if="signaturedata == '' || signaturedata == 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAACgCAYAAACxIDDDAAAIQ0lEQVR4Xu3WMREAAAwCseLfdG38kCrgQgd2jgABAgQIECBAIC2wdDrhCBAgQIAAAQIEzmDzBAQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAg8MTTAKE/WT0JAAAAAElFTkSuQmCC'"
                >
                  This Field is required
                </div>
            <!-- <button
              class="btn btn-primary"
              type="button"
              @submit.prevent
              id="sig-submitBtn"
            >
              Submit Signature
            </button> -->

            <a-textarea id="sig-dataUrl" style="visibility:hidden" class="form-control" v-model:value="signaturedata" rows="1">
          </a-textarea
            >
            <br />
          </div>
           <!-- <div
              class="text-danger"
              v-show="ischeck"
              v-if="this.signaturedata ===''"
            >
              This Field is required
            </div> -->
          <!-- <a-button @click="sign"> Start signature</a-button> -->
        </a-form>
      </a-collapse-panel>
    </a-collapse>

    <!-- <a-collapse>
   <a-collapse-panel header="Medical Eligibility">
     <a-form @submit="complete">
          <a-row>
              <a-col :span="9" class="inputfield">
      <a-form-item label="Child Condition">
      <a-input
      placeholder=""
      allow-clear
      @change="onChange"
    />
      </a-form-item>
              </a-col>
                  <a-col :span="12" class="inputfield">
      <a-form-item label="Any Specification Related To Medical Condition">
      <a-input  placeholder="" v-model:value="medicalSpecification"  readonly />
      </a-form-item>
              </a-col>
          </a-row>
           <a-row>
              <a-col :span="9" class="inputfield">
      <a-form-item label="Fit For Wish">
      <a-input
      placeholder=""
      allow-clear
      @change="onChange"
      v-model:value="FitWish"
       readonly
    />
      </a-form-item>
              </a-col>
                  <a-col :span="12" class="inputfield">
      <a-form-item label="Any Specification Related To Wish">
      <a-input  placeholder="" v-model:value="wishSpecification"  readonly/>
      </a-form-item>
              </a-col>
          </a-row>
      </a-form>
      </a-collapse-panel>
      </a-collapse> -->
    <a-col :span="5" class="complete-btn">
      <a-button type="" size="large" block html-type="submit" @click="complete" v-if="this.ApplicationStatus === 'Pending'">
        COMPLETE
      </a-button>
    </a-col>
      <!-- <div v-if="current === this.dynamicData">
                      <div class="dynamicText">
                        <p>
                          This information assists us in delivering a wish,
                          including where any bookings may be needed. For this
                          reason, please ensure you use full legal names of all
                          household members.
                        </p>
                      </div>
                      <div
                        v-for="(domain, index) in dynamicValidateForm.domains"
                        :key="domain.key"
                        :label="index === 0 ? 'Domains' : ''"
                        :name="['domains', index, 'value']"
                      >
                        <div class="row justify-content-center mt-4">
                          <div class="col-md-5 text-align-right">
                            <a-input
                              v-model:value="domain.firstName"
                              placeholder="FIRST NAME"
                              class="mt-3 mb-3"
                            />
                          </div>
                          <div class="col-md-5 text-align-left">
                            <a-input
                              v-model:value="domain.lastName"
                              placeholder="LAST NAME"
                              class="mt-3 mb-3"
                            />
                          </div>
                          <div class="col-md-5 text-align-right">
                            <a-select
                              class="mt-3 mb-3"
                              placeholder="GENDER"
                              v-model:value="domain.gender"
                            >
                              <a-select-option value="male">
                                Male
                              </a-select-option>
                              <a-select-option value="female">
                                Female
                              </a-select-option>
                              <a-select-option value="other">
                                Other
                              </a-select-option>
                            </a-select>
                          </div>
                          <div class="col-md-5 text-align-left">
                            <a-date-picker
                              class="mt-3 mb-3"
                              placeholder="DOB"
                              type="date"
                              v-model:value="domain.dob"
                              :disabled-date="disabledDate"
                              id="staticcalender"
                            />
                          </div>
                          <div class="col-md-8 text-align-center">
                            <a-input
                              v-model:value="domain.relation"
                              placeholder="RELATIONSHIP"
                              class="mt-3 mb-3"
                            />
                          </div>
                        </div>
                        <MinusCircleOutlined
                          v-if="index >= 1"
                          class="dynamic-delete-button"
                          :disabled="dynamicValidateForm.domains.length === 1"
                          @click="removeDomain(domain)"
                        />
                      </div>
                    </div> -->
  </div>
  <div v-else>
    <h1>No Record Found With These Details.</h1>
  </div>
</template>
<script>
/* eslint-disable */
// import Test from '../../components/Public/Test/Test.vue'
// import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import { message } from "ant-design-vue";
import store from "../../store/store";
import "./Details.css";
import {ArrowLeftOutlined} from "@ant-design/icons-vue"
export default {
  // setup () {
  //   const id = ref('')
  //   const route = useRoute()
  //   id.value = route.params.id
  //   console.log(route.params)
  // },
  name: "Details",
  components: {
   ArrowLeftOutlined
  },
  created() {
    this.getdata();
    //  localStorage.clear();
    // this.medicalSpecification=localStorage.getItem('any')
    //  this.wishSpecification =localStorage.getItem('any1')
    //  this.FitWish=localStorage.getItem('any2')
  },
  mounted() {
 console.log(this.dynamicField)
  },
  data() {
    return {
      childscondition: '',
      signaturedata: '',
      fromChild: "",
      ApplicationStatus: "",
      isLoading: true,
      isshowfield: "",
      statuscode: "",
      error: "",
      ischeck: false,
      detaildata: [],
      alldatas: "",
      medicalSpecification: "",
      wishSpecification: "",
      FitWish: "",
      AnyMedicalConditionSpecification: "",
      AnyWishSpecification: "",
      FitForWish: "",
      ChildsCondition: '',
      jsondata: "",
      dynamicField: "",
      relation: "",
      primaryName: "",
      data: [],
      grouplist: [],
      domains: [
        { relation: "", firstName: "", lastName: "", dob: "", gender: "" },
      ],
      text: "First",
      // activeKey: ['1']
      template1: "Second",
      // activeKey1: ['2']
    };
  },
  methods: {
    getdata() {
      this.isLoading = true;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "BrowserId=9YlIqB9YEeuz0Q0Xd4eKsw");
      var raw = JSON.stringify({
        ApplicationNumber: this.$route.params.Application_Number,
        Email: "true",
        Dashboard: true,
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
          console.log(result);

          var alldata = JSON.parse(result);
          console.log(alldata);
          this.ApplicationStatus = alldata.ApplicationStatus;
          this.error = alldata.Status;
          this.isLoading = false;
          if (alldata.StatusCode == 200) {
            this.isLoading = false;
            this.isshowfield = true;
            this.primaryName = alldata.primaryContactName;
            this.medicalSpecification =
              alldata.Record.AnyMedicalConditionSpecification;
            this.wishSpecification = alldata.Record.AnyWishSpecification;
            this.FitWish = alldata.Record.FitForWish;
            this.childscondition = alldata.Record.ChildsCondition;
            this.signaturedata = alldata.Record.DoctorSignature
            console.log(this.medicalSpecification);
            console.log(this.wishSpecification);
            console.log(this.FitWish);
            // console.log(this.wishSpecification);
            this.grouplist.push(alldata.Record.GroupList);
            //  console.log(this.grouplist)
            if (alldata.Record.Case_Worker.length != 0) {
              console.log("Case_Worker");
              this.jsondata = alldata.Record.Case_Worker;
              // this.detaildata.push(this.jsondata)
              this.dynamicField=alldata.Record.Family;
              this.relation = "Case_Worker";
              this.isShow = true;
            } else if (alldata.Record.Doctor.length != 0) {
              // console.log("Doctor");
              this.jsondata = alldata.Record.Doctor;
              // this.detaildata.push(this.jsondata)
              this.dynamicField=alldata.Record.Family;
              this.relation = "Doctor";
              this.isShow = true;
            } else if (alldata.Record.Family_Members.length != 0) {
              // console.log("Family_Members");
              this.jsondata = alldata.Record.Family_Members;
              console.log( alldata.Record.Family_Members);
              // this.detaildata.push(this.jsondata)
              this.dynamicField=alldata.Record.Family;
              this.relation = "Family_Members";
              this.isShow = true;
            } else if (alldata.Record.Father.length != 0) {
              // console.log("Father");
              this.jsondata = alldata.Record.Father;
              //  this.detaildata.push(this.jsondata)
               this.dynamicField=alldata.Record.Family;
              this.relation = "Father";
              this.isShow = true;
            } else if (alldata.Record.Legal_Guardian.length != 0) {
              // console.log("Legal_Guardian");
              this.jsondata = alldata.Record.Legal_Guardian;
              // this.detaildata.push(this.jsondata)
               this.dynamicField=alldata.Record.Family;
              this.relation = "Legal_Guardian";
              this.isShow = true;
            } else if (alldata.Record.Mother.length != 0) {
              // console.log("Mother");
              this.jsondata = alldata.Record.Mother;
              // this.detaildata.push(this.jsondata)
              //  console.log(this.jsondata[0].groups);
               this.dynamicField=alldata.Record.Family;
              // console.log(this.dynamicField)
              this.relation = "Mother";
              this.isShow = true;
            } else if (alldata.Record.Social_Worker.length != 0) {
              // console.log("Social_Worker");
              this.jsondata = alldata.Record.Social_Worker;
              // this.detaildata.push(this.jsondata)
               this.dynamicField=alldata.Record.Family;
              this.relation = "Social_Worker";
              //  console.log(EXDATA.Record.Family);
              this.isShow = true;
            } else if (alldata.Record.Family.length != 0) {
              // console.log("Family");
              this.jsondata = alldata.Record.Family;
              // this.detaildata.push(this.jsondata)
               this.dynamicField=alldata.Record.Family;
              this.relation = "Family";
              // console.log(EXDATA.Record.Family);
              this.isShow = true;
            } else if (alldata.Record.Child.length != 0) {
              // console.log("Family");
              this.jsondata = alldata.Record.Child;
              this.dynamicField=alldata.Record.Family;
              this.relation = "Child";
              // console.log(EXDATA.Record.Child);
              this.isShow = true;
            }
          }

          this.data.push(result);
        })
        .catch((error) => console.log("error", error));
    },
    sign() {
      window.requestAnimFrame = (function (callback) {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimaitonFrame ||
          function (callback) {
            window.setTimeout(callback, 1000 / 60);
          }
        );
      })();

      var canvas = document.getElementById("sig-canvas");
      var ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#222222";
      ctx.lineWidth = 4;

      var drawing = false;
      var mousePos = {
        x: 0,
        y: 0,
      };
      var lastPos = mousePos;

      canvas.addEventListener(
        "mousedown",
        function (e) {
          drawing = true;
          lastPos = getMousePos(canvas, e);
        },
        false
      );

      canvas.addEventListener(
        "mouseup",
        function (e) {
          drawing = false;
        },
        false
      );

      canvas.addEventListener(
        "mousemove",
        function (e) {
          mousePos = getMousePos(canvas, e);
        },
        false
      );

      // Add touch event support for mobile
      canvas.addEventListener("touchstart", function (e) {}, false);

      canvas.addEventListener(
        "touchmove",
        function (e) {
          var touch = e.touches[0];
          var me = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(me);
        },
        false
      );

      canvas.addEventListener(
        "touchstart",
        function (e) {
          mousePos = getTouchPos(canvas, e);
          var touch = e.touches[0];
          var me = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(me);
        },
        false
      );

      canvas.addEventListener(
        "touchend",
        function (e) {
          var me = new MouseEvent("mouseup", {});
          canvas.dispatchEvent(me);
        },
        false
      );

      function getMousePos(canvasDom, mouseEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: mouseEvent.clientX - rect.left,
          y: mouseEvent.clientY - rect.top,
        };
      }

      function getTouchPos(canvasDom, touchEvent) {
        var rect = canvasDom.getBoundingClientRect();
        return {
          x: touchEvent.touches[0].clientX - rect.left,
          y: touchEvent.touches[0].clientY - rect.top,
        };
      }

      function renderCanvas() {
        if (drawing) {
          ctx.moveTo(lastPos.x, lastPos.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
          lastPos = mousePos;
        }
      }

      // Prevent scrolling when touching the canvas
      document.body.addEventListener(
        "touchstart",
        function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        },
        false
      );
      document.body.addEventListener(
        "touchend",
        function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        },
        false
      );
      document.body.addEventListener(
        "touchmove",
        function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        },
        false
      );

      (function drawLoop() {
        requestAnimFrame(drawLoop);
        renderCanvas();
      })();

      function clearCanvas() {
        canvas.width = canvas.width;
      }

      // Set up the UI
      var sigText = document.getElementById("sig-dataUrl");
      //  var sigImage = document.getElementById("sig-image");
      var clearBtn = document.getElementById("sig-clearBtn");
      var SubmitBtn = document.getElementById("sig-submitBtn");
      clearBtn.addEventListener(
        "click",
        function (e) {
          clearCanvas();
          sigText.innerHTML = "";
          document.getElementById("sigText").value = ''
          // sigImage.setAttribute("src", "");
        },
        false
      );
      canvas.addEventListener(
        "mouseup",
        function (e) {
          var dataUrl = canvas.toDataURL();
          console.log(dataUrl);
          // this.signaturedata = dataUrl
           sigText.innerHTML = dataUrl;
          // this.signaturedata = sigText.innerHTML;
          // console.log(this.signaturedata);
          // sigImage.setAttribute("src", dataUrl);
        },
        //
        false
      );
    },
    complete() {
      this.signaturedata = document.getElementById('sig-dataUrl').innerHTML
      console.log(this.signaturedata)
      // console.log(this.FitForWish)
      // this.signaturedata =document.getElementById('sig-dataUrl').innerHTML
      // console.log(this.signaturedata)
      //  console.log(document.getElementById('sig-dataUrl').innerHTML);
      if (this.AnyMedicalConditionSpecification === "") {
        this.ischeck = true;
      }
      else if (this.signaturedata === "" || this.signaturedata === "data:image/png;base64,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" ) {
        this.ischeck = true;
      }
     else if (this.AnyWishSpecification === "") {
        this.ischeck = true;
      }
     else if (this.FitForWish === "") {
        this.ischeck = true;
      }
      else if (this.ChildsCondition === "") {
        this.ischeck = true;
      }
     else if (
        this.AnyMedicalConditionSpecification &&
        this.AnyWishSpecification &&
        this.FitForWish &&
        this.ChildsCondition != ''
      ) {
        this.ischeck = false;
      }
      // if (this.signaturedata === "") {
      //   this.ischeck = true;
      // }
      if (this.ischeck === false) {
        console.log(this.relation);
        console.log(this.jsondata)
        var saveDetailss = "";
        if (this.relation == "Mother") {
          console.log(this.jsondata)
          saveDetailss = {
            Mother: this.jsondata,
            // Family: this.dynamicValidateForm.domains,
            AnyMedicalConditionSpecification: this.AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
            ChildsCondition:this.ChildsCondition,
             DoctorSignature:this.signaturedata
          }
        }
        if (this.relation == "Father") {
          console.log(this.jsondata)
          saveDetailss = {
            Father: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
             ChildsCondition:this.ChildsCondition,
             DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains,
          }
        }
        if (this.relation == "Legal_Guardian") {
          console.log(this.jsondata)
          saveDetailss = {
            Legal_Guardian: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
            ChildsCondition:this.ChildsCondition,
              DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains,
          }
        }
        if (this.relation == "Social_Worker") {
          console.log(this.jsondata)
          saveDetailss = {
            Social_Worker: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
             ChildsCondition:this.ChildsCondition,
               DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains,
          }
        }
        if (this.relation == "Case_Worker") {
          console.log(this.jsondata)
          saveDetailss = {
            Case_Worker: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
             ChildsCondition:this.ChildsCondition,
               DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains
          }
        }
        if (this.relation == "Doctor") {
          console.log(this.jsondata)
          saveDetailss = {
            Doctor: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
             ChildsCondition:this.ChildsCondition,
               DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains,
          }
        }
        if (this.relation == "Child") {
          saveDetailss = {
            Child: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
             ChildsCondition:this.ChildsCondition,
               DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains,
          }
        }
        if (this.relation == "Family_Members") {
          console.log(this.jsondata);
          saveDetailss = {
            Family_Members: this.jsondata,
            AnyMedicalConditionSpecification: this
              .AnyMedicalConditionSpecification,
            AnyWishSpecification: this.AnyWishSpecification,
            FitForWish: this.FitForWish,
             ChildsCondition:this.ChildsCondition,
               DoctorSignature:this.signaturedata
            // Family: this.dynamicValidateForm.domains,
          }
        }
        console.log(saveDetailss);
        // console.log(saveDetailss.AnyMedicalConditionSpecification)
        var data = JSON.stringify(saveDetailss);
        // console.log(data);
        var config = {
          method: "put",
          url: `https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService?applicationNo=${this.$route.params.Application_Number}`,
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
                console.log(response);
            //  console.log(JSON.parse(response));
            if (response.data.StatusCode == 200) {
              message.success("Data Saved");
            }
            //  console.log(this.AllData)
          })
          .catch(function (error) {
               message.error('Something Went Wrong')
  console.log(error);
self.isLoading = false;
          });
      }
    },
  },
};
</script>
<style>
.details .ant-collapse {
border: none;
}
.details {
 width: 96%;
    padding: 20px;
    background: white;
    margin: auto;
    box-shadow: 0px 0px 34px 2px #eceff4;
    border-radius: 5px;
}
.medical-eligble .ant-form-item-label > label::after {
  content: "*";
  position: relative;
  top: 0.5px;
  margin: 0 8px 0 1px;
  color: red;
}
.details .line{
 display: block;
    /* background: red; */
    /* border: 1px solid #004CA4; */
    /* width: 1px; */
    padding: 0px 11px 0px 20px;
    /* padding: 0px; */
}
.details .clear {
  display: block;
}
.details #sig-clearBtn {
left: 29%;
    padding: 0px;
    border: none;
    margin-bottom: 10px;
    /* border-bottom: 1px solid black; */
}
#sig-canvas {
  border: 1px solid #cccccc;
  border-radius: 3px;
  cursor: crosshair;
   margin: 0px 0px 22px 0px;
  display: block;
}
/* #sig-dataUrl {
  display: none;
} */
.anticon-arrow-left{
  padding-right: 3px;
}
.back{
  display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    background: white;
    color: #0055B7;
    /* margin: auto; */
    padding: 2px 8px;
    height: 30px;
    border-radius: 3px;
    margin: 10px 0px;
}
</style>
