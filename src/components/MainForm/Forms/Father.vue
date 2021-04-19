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
  <div class="steps allforms">
    <div class="percentage">
      <div v-if="relation == 'Mother'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img10.svg"
        />
      </div>
      <div v-if="relation == 'Father'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img11.svg"
        />
      </div>
      <div v-if="relation == 'Legal_Guardian'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img20.svg"
        />
      </div>
      <div v-if="relation == 'Social_Worker'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img21.svg"
        />
      </div>
      <div v-if="relation == 'Case_Worker'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img19.svg"
        />
      </div>
      <div v-if="relation == 'Doctor'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img1.svg"
        />
      </div>
      <div v-if="relation == 'Child'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img13.svg"
        />
      </div>
      <div v-if="relation == 'Family_Members'">
        <img
          src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img9.svg"
        />
      </div>
    </div>
    <a-steps
      :current="current"
      @change="onchange"
      progressDot
      direction="horizontal"
      id="myDiv"
    >
      <!-- <a-step v-for="item in steps" :key="item" /> -->
      <a-step v-for="item in steps[0]" :key="item" />
    </a-steps>
    <!--  -->
    <div class="steps-content container-fluid">
      <span id="" class="appnumber applicationno">{{ applicationNO }} </span>
      <span
        style="float: right; color: #2970c2; font-weight: 700"
        class="appname applicationNo"
        >Application Number: &nbsp;
      </span>
      <span style="float: "></span>
      <div style="width: 100%; clear: both">
        <div class="loader loader-1" v-show="isLoading">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
        <a-form
          class="form"
          ref="ruleForm"
          :rules="rules"
          :model="dynamicValidateForm"
        >
         <a-button v-if="this.current > 1" @click="prev" class="prev" type="">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img4.svg"
            />
          </a-button>
          <div class="row justify-content-center">
            <div class="row justify-content-center mt-4 mb-5">
              <h2 class="pt-3" id="firstname"></h2>
              <!-- {{ current }}
              {{post_slug}} -->
              <div
                v-for="item in steps.length"
                :key="item"
                :current="current"
                :class="item.cssClass"
              >
                <!-- <h2 v-if="current === 2">
                  {{ steps[0][current].content }} {{ test3 }}?
                </h2> -->
                <!-- <h2 class="heading" v-if='steps[0][current].content.includes("{firstName}")' >{{ steps[0][current].content.replace("{firstName}",steps[0][3].innerfield[0].value ) }}</h2> -->
                <!-- <h2 v-else-if="current === 6">
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
                </h2> -->
                <!-- <h2 v-else>{{ steps[0][current].content }}</h2> -->
                  <h2

                    class="heading"
                    v-if="
                      steps[0][current].content.includes ('{firstName}')&&
                      steps[0][current].content.includes ('{gender}')
                    "
                  >
                   {{this.contentchanged()}}
                          <span v-for="data in common" :key="data">
                     {{data+ "&nbsp;"}}

                   </span>
                  </h2>
                   <h2
                    class="heading"
                    v-else-if="steps[0][current].content.includes('{gender}')"
                  >
                    {{
                      steps[0][current].content.replace(
                        "{gender}",
                        childsgender
                      )
                    }}
                  </h2>
                <h2
                  class="heading"
                  v-else-if="steps[0][current].content.includes('{firstName}')"
                >
                  {{
                    steps[0][current].content.replace(
                      "{firstName}",
                      this.childName
                    )
                  }}
                </h2>
                <h2
                  class="heading"
                  v-else-if="steps[0][current].content.includes('{motherName}')"
                >
                  {{
                    steps[0][current].content.replace(
                      "{motherName}",
                      this.fHName
                    )
                  }}
                </h2>
                <h2 class="heading" v-else>{{ steps[0][current].content }}</h2>
                <div class="row justify-content-center mt-4 mb-5">
                  <div
                    v-for="alldata in steps[0][current].innerfield"
                    :key="alldata"
                    :class="alldata.cssClass"
                  >
                    <!-- <div v-if="alldata.type == 'checkbox'" class="checkboxSection container">

                       <a-checkbox
                          v-model:checked="checked"
                          @change="checkValueField"
                        >
                          Tick here to be excluded from these types of
                          Make-A-Wish communications. We will still contact you
                          if required by law or to action and confirm any
                          details regarding this application.
                        </a-checkbox>
                    </div> -->
                           <div
                        class="checkboxSection container"
                        v-if="alldata.type == 'checkbox'"
                      >
                        <div class="comment">
                          <p class="commentmail">
                            To process your wish application, Make-A-Wish
                            Foundation Australia (Make-A-Wish) needs certain
                            information about you and the wish child.<br />
                            Our Privacy policy at
                            <a href="http://www.makeawish.org.au/privacypolicy"
                              >http://www.makeawish.org.au/privacypolicy</a
                            >
                            explains what we do with this information, how it is
                            handled, how it may be shared, how to access or
                            correct it and our procedure for complaints.<br />
                            Queries may be directed to our Privacy Officer by
                            email:
                            <a href="mailto:privacyofficer@makeawish.org.au "
                              >privacyofficer@makeawish.org.au</a
                            >, mail: PO Box 5006 Burnley Vic 3121, or phone:
                            1800 032 260<br />
                            We would love to stay in touch to keep you informed
                            about the latest Make-A-Wish news, products and
                            services
                          </p>
                        </div>

                        <a-checkbox
                          v-model:checked="checked"
                          @change="checkValueField"
                        >
                          Tick here to be excluded from these types of
                          Make-A-Wish communications. We will still contact you
                          if required by law or to action and confirm any
                          details regarding this application.
                        </a-checkbox>
                      </div>
                    <div
                      v-if="
                        this.current == this.checkaddress &&
                        alldata.type == 'text'
                      "
                    >
                      <div v-if="steps[0][4].innerfield[0].value == 'Yes'">
                        <!-- <div v-if="alldata.name == 'childs_address'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-bind:value="
                              (alldata.value = steps[0][2].innerfield[0].value)
                            "
                            alldata.required="false"
                          />
                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              steps[0][2].innerfield[0].value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div v-if="alldata.name == 'childs_state'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-bind:value="
                              (alldata.value = steps[0][2].innerfield[1].value)
                            "
                            alldata.required="false"
                          />
                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              steps[0][2].innerfield[0].value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div> -->
                      </div>

                      <div v-else-if="steps[0][4].innerfield[0].value == 'No'">
                           <div v-if="alldata.name == 'childs_address'">
                          <span
                            v-if="alldata.required === true"
                            class="required required-radio"
                            >*</span
                          >
                          <vue-google-autocomplete
                            id="map2"
                            classname="form-control mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-on:placechanged="getAddressData"
                            country="aus"
                          >
                            <!-- {{alldata.value}} -->
                          </vue-google-autocomplete>

                          <!-- <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-model:value="alldata.value"
                          /> -->
                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div v-if="alldata.name == 'childs_state'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-model:value="alldata.value"
                            readonly
                          />
                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <!-- <div v-if="alldata.name == 'childs_address'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-model:value="alldata.value"
                          />
                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div v-if="alldata.name == 'childs_state'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-model:value="alldata.value"
                          />
                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div> -->
                      </div>
                    </div>
                    <div
                      v-else-if="
                        this.current == this.checkaddress &&
                        alldata.type == 'number'
                      "
                    >
                      <div v-if="steps[0][4].innerfield[0].value == 'Yes'">
                        <div v-if="alldata.name == 'childs_post_code'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            :value="
                              (alldata.value = steps[0][2].innerfield[2].value)
                            "
                            type="number"
                          />
                        </div>
                      </div>

                      <div v-else-if="steps[0][4].innerfield[0].value == 'No'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"
                          type="number"
                          @change="postcodelength"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                          id="postcodelength"
                          class="text-danger"
                          style="display: none"
                        >
                          Please enter valid code
                        </div>
                      </div>
                    </div>
                    <!-- <div v-else-if="alldata.type == 'textarea'">
                      <span v-if="alldata.required === true" class="required"
                        >*</span
                      >

                        <a-textarea
                        class="commenttextarea"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="2"
                          style="max-height: 110px; min-height: 90px"
                        />
                    </div> -->
                    <div v-else-if="alldata.name == 'comment'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-textarea
                          class="commenttextarea"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="2"
                          style="max-height: 110px; min-height: 90px"
                        />
                      </div>
                      <!-- <div v-else-if="alldata.name == 'parent_signature'">

                        <a-textarea
                          id="signtext"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          style="visibility: hidden"
                        />

                      </div> -->
                      <div
                        v-else-if="
                          alldata.name == 'parent_signature' &&
                          primaryrelation === ('Legal Guardian' || 'Father' || 'Mother')
                        "
                      >
                        <a-textarea
                          id="signtext"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          style="visibility: hidden"
                          class="parentsign"
                        />

                      </div>
                      <div
                        v-else-if="
                          alldata.name == 'referral_signature' &&
                          primaryrelation ===
                            ('Child' || 'Family Members' || 'Case Worker' || 'Social Worker' || 'Doctor')
                        "
                      >
                      <a-textarea
                          id="signtext"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          style="visibility: hidden"
                          class="referralsign"
                        />
                        <!-- <span v-if="alldata.required === true" class="required"
                          >*</span
                        > -->
                        <!-- <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div> -->
                      </div>
                    <div
                      v-else-if="
                        this.current !== this.checkaddress &&
                        alldata.type == 'text'
                      "
                    >
                     <div v-if=" alldata.name === 'doctor_hospital_name'">
                         <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <vue-google-autocomplete
                          id="map3"
                          classname="form-control mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-on:placechanged="getAddressData"
                          country="aus"
                        >

                        </vue-google-autocomplete>

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true && alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                          <div v-else-if=" alldata.name === 'social_hospital_name'">
                             <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <vue-google-autocomplete
                          id="map4"
                          classname="form-control mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-on:placechanged="getAddressData"
                          country="aus"
                        >

                        </vue-google-autocomplete>

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true && alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'primary_address'">
                         <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <vue-google-autocomplete
                          id="map1"
                          classname="form-control mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-on:placechanged="getAddressData"
                          country="aus"
                        >

                        </vue-google-autocomplete>

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true && alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'primary_state'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"
                          v-on:keypress="isLetter($event)"
                          readonly
                        />

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'schools_address'">
                         <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <vue-google-autocomplete
                          id="map5"
                          classname="form-control mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-on:placechanged="getAddressData"
                          country="aus"
                        >

                        </vue-google-autocomplete>

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true && alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'schools_state'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"
                          v-on:keypress="isLetter($event)"
                        />

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                         <div v-else-if="alldata.name === 'parent_address'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >

                          <vue-google-autocomplete
                            id="map6"
                            classname="form-control mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-on:placechanged="getAddressData"
                            country="aus"
                          >
                          </vue-google-autocomplete>

                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true && alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                          <div v-else-if="alldata.name === 'parent_state'">
                              <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :placeholder="alldata.placeholder"
                            v-model:value="alldata.value"
                            v-on:keypress="isLetter($event)"
                          />

                          <div
                            class="text-danger"
                            v-show="ischeck"
                            v-if="
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>

                      <div v-else>
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"

                        />

                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                      <!-- <span v-if="alldata.required === true" class="required"
                        >*</span
                      >
                      <a-input
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        v-model:value="alldata.value"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="
                          alldata.required === true &&
                          alldata.value.trim() == ''
                        "
                      >
                        {{ alldata.errorMessage }}
                      </div> -->
                    </div>
                    <div
                      v-else-if="this.current == 1 && alldata.type == 'number'"
                    >
                      <div v-if="alldata.name == 'phone'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :value="alldata.value"
                          :placeholder="alldata.placeholder"
                          type="number"
                          readonly
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                         class="text-danger"
                          id="phonelength"
                          style="display: none; color: #dc3545"
                        >
                        Not a valid number
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'mobile'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          type="number"
                          @change="mobilelength"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                          class="text-danger"
                          id="mobilelength"
                          style="display: none; color: #dc3545"
                        >
                          Not a valid number
                        </div>
                      </div>
                      <div v-else>
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          type="number"
                          @change="postcodelength"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                          id="postcodelength"
                          class="text-danger"
                          style="display: none"
                        >
                         Please enter valid code
                        </div>
                      </div>
                    </div>
                    <div
                      v-else-if="
                        this.current !== this.checkaddress &&
                        alldata.type == 'number'
                      "
                    >
                      <div v-if="alldata.name == 'phone'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          type="number"
                           @change="phonelength"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                          class="text-danger"
                          id="phonelength"
                          style="display: none; color: #dc3545"
                        >
                         Not a valid number
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'mobile'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          type="number"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                          class="text-danger"
                          id="mobilelength"
                          style="display: none; color: #dc3545"
                        >
                          Not a valid number
                        </div>
                      </div>
                      <div v-else>
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          @change="postcodelength"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                        <div
                          id="postcodelength"
                          class="text-danger"
                          style="display: none"
                        >
                         Please enter valid code
                        </div>
                      </div>
                    </div>
                    <div v-else-if="alldata.type == 'picklist'">
                      <span v-if="alldata.required === true" class="required"
                        >*</span
                      >
                      <a-select
                        v-model:value="alldata.value"
                        :placeholder="alldata.placeholder"
                        option-filter-prop="children"
                        class="mt-3 mb-4"
                      >
                        <a-select-option
                          v-for="option in alldata.options"
                          :value="option.value"
                          :key="option"
                        >
                          {{ option.text }}
                        </a-select-option>
                        {{ alldata.value }}
                      </a-select>
                      <div
                        class="text-danger"
                        id="selecterr"
                        v-show="ischeck"
                        v-if="
                          alldata.required === true &&
                          alldata.value == undefined
                        "
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>
                    <div v-if="alldata.type == 'radio'">
                      <!-- <a-form-item> -->
                      <a-radio-group
                        name="radioGroup"
                        v-model:value="alldata.value"
                        @change="addressNull(alldata.name)"
                      >
                        <span
                          v-if="alldata.required === true"
                          class="required required-radio"
                          >*</span
                        >
                        <a-radio value="Yes">
                          <span class="radiovalue">Yes</span></a-radio
                        >
                        <a-radio class="" value="No"
                          ><span class="No"> No </span></a-radio
                        >
                        <div
                          class="radiomess"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </a-radio-group>
                    </div>
                    <!-- </div> -->
                    <div v-else-if="alldata.type == 'date'">
                      <span
                        v-if="alldata.required === true"
                        class="required required-date"
                        >*</span
                      >
                      <a-date-picker
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        type="date"
                        v-model:value="alldata.value"
                        :disabled-date="disabledDate"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="
                          alldata.required === true &&
                          (alldata.value === '' || alldata.value === null)
                        "
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>

                    <div
                      v-else-if="this.current == 1 && alldata.type == 'email'"
                    >
                      <span v-if="alldata.required === true" class="required"
                        >*</span
                      >
                      <a-input
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        :value="alldata.value"
                        readonly
                        @change="checkmail(alldata.value)"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="
                          alldata.required === true &&
                          alldata.value.trim() == ' '
                        "
                      >
                        {{ alldata.errorMessage }}
                      </div>
                    </div>
                    <div
                      v-else-if="this.current > 1 && alldata.type == 'email'"
                    >
                      <span v-if="alldata.required === true" class="required"
                        >*</span
                      >
                      <a-input
                        class="mt-3 mb-3"
                        :placeholder="alldata.placeholder"
                        v-model:value="alldata.value"
                        @change="checkmail(alldata.value)"
                      />
                      <div
                        class="text-danger"
                        v-show="ischeck"
                        v-if="
                          alldata.required === true &&
                          alldata.value.trim() == ''
                        "
                      >
                        {{ alldata.errorMessage }}
                      </div>
                      <div
                      class="text-danger"
                        v-show="emailvalidation"
                        style=""
                        id="emailid"
                      >
                        Please Fill The Valid Email Address
                      </div>
                    </div>
                  </div>
                  <div v-if="current === this.dynamicData">
                    <div class="dynamicText">
                      <p>
                        This information assists us in delivering a
                        wish,including where any bookings may be needed.For this
                        reason, please ensure you use full legal names of all
                        household members
                      </p>
                    </div>
                    <div
                      v-for="(domain, index) in dynamicValidateForm.domains"
                      :key="domain.key"
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
                            class="mt-3 mb-4"
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
                          />
                        </div>
                        <div class="col-md-8 text-align-center">
                          <a-input
                            v-model:value="domain.relation"
                            placeholder="RELATIONSHIP"
                          />
                        </div>
                      </div>
                      <MinusCircleOutlined
                        v-if="dynamicValidateForm.domains.length >= 1"
                        class="dynamic-delete-button"
                        :disabled="dynamicValidateForm.domains.length === 1"
                        @click="removeDomain(domain)"
                      />
                    </div>
                  </div>
                  <!-- <div class="container">
                    <div
                      v-if="this.current == steps[0].length - 1"
                      class="container comment"
                    >
                      <p>

                        Tick here to be excluded from future Make-A-Wish
                        communications(expect those required by law or to action
                        and confirm your requests). To processes your wish
                        application,Make-A-Wish Australia needs certain
                        information about you.
                      </p>
                      <p>
                        Our Privacy policy at
                        <a href="http://www.makeawish.org.au/privacypolicy"
                          >http://www.makeawish.org.au/privacypolicy</a
                        >
                        explains: what we do with this information; how it is
                        handled; how it may be shared; how to access or correct
                        it; and our procedure for complaints.
                      </p>
                      <p>
                        Queries may be directed to our Privacy Officer by email:
                        <a href="privacyofficer@makeawish.org.au "
                          >privacyofficer@makeawish.org.au</a
                        >,mail: PO Box 5006 Burnley Vic 3121, or phone: 1800 032
                        260
                      </p>
                      <div class="agreement">
                        <h5 class="blue">I agree to the following:</h5>
                        <ul>
                          <li>
                            no promises have been made to me by Make-A-Wish
                            Australia, regarding the requested wish;
                          </li>
                          <li>
                            all wish requests are subject to approval by
                            Make-A-Wish Australia, and must meet all existing
                            conditions and restrictions;
                          </li>
                          <li>
                            all wish requests are subject to approval by
                            Make-A-Wish Australia, and must meet all existing
                            conditions and restrictions;
                          </li>
                          <li>
                            all information required regarding the health of the
                            child in this application may be released by the
                            medical specialist to Make-A-Wish Australia and
                            Make-A-Wish Australia may produce a copy of this
                            application to the medical specialist as evidence of
                            that authority;
                          </li>
                          <li>
                            I will not enter into any discussions or
                            negotiations with third parties or suppliers in
                            relation to the wish,unless I have written
                            permission from Make-A-Wish Australia;
                          </li>
                          <li>
                            I have read and understood the Privacy Statement
                            outlined in this brochure and I consent to the
                            collection,Use and disclousre of personal
                            information in line with the Privacy statement
                          </li>
                          <li>
                            Where i have provied information about another
                            individual, I declare that the individual have been
                            made aware of that fact and of the contents of the
                            Privacy Statement;
                          </li>
                          <li>
                            I acknowledge that a visit from Make-A-Wish
                            volunteers must take place to discuss my child's
                            wish within 12 months of wish application approval;
                          </li>
                          <li>
                            I acknowledge that children must be under age of 18
                            at the time of application, however the actual wish
                            may take place up untill they turn 21
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> -->
                   <div class="container">
                      <div
                        v-if="this.current == steps[0].length - 1"
                        class="container comment"
                      >
                        <p class="commentmail">
                          To process your wish application, Make-A-Wish
                          Foundation Australia (Make-A-Wish) needs certain
                          information about you and the wish child.<br />
                          Our Privacy policy at
                          <a href="http://www.makeawish.org.au/privacypolicy"
                            >http://www.makeawish.org.au/privacypolicy</a
                          >
                          explains what we do with this information, how it is
                          handled, how it may be shared, how to access or
                          correct it and our procedure for complaints.<br />
                          Queries may be directed to our Privacy Officer by
                          email:
                          <a href="mailto:privacyofficer@makeawish.org.au "
                            >privacyofficer@makeawish.org.au</a
                          >, mail: PO Box 5006 Burnley Vic 3121, or phone: 1800
                          032 260
                        </p>
                        <!-- <p class="commentnews">
                          We would love to stay in touch to keep you informed
                          about the latest Make-A-Wish news, products and
                          services
                        </p> -->
                        <div class="agreement">
                          <h5 class="blue">
                            In submitting this application, I agree to the
                            following:
                          </h5>
                          <ul>
                            <li>
                              No promises have been made to me by Make-A-Wish,
                              regarding the requested wish;
                            </li>
                            <li>
                              All wish requests are subject to approval by
                              Make-A-Wish, and must meet all conditions and
                              restrictions applicable at the relevant time;
                            </li>
                            <li>
                              All information regarding the health of the child
                              in this application required to consider, assess
                              and deliver a wish may be released by any medical
                              service provider to Make-A-Wish and Make-A-Wish
                              may produce a copy of this application to the
                              medical service provider as evidence of that
                              authority and I agree to provide any further
                              consents required by any medical service provider
                              in the form they request;
                            </li>
                            <!-- <li>
                            All information required regarding the health of the
                            child in this application may be released by the
                            medical specialist to Make-A-Wish Australia and
                            Make-A-Wish Australia may produce a copy of this
                            application to the medical specialist as evidence of
                            that authority.
                          </li> -->
                            <li>
                              I will not, and will not cause or permit another
                              person to, contact or enter into any discussions
                              or negotiations with third parties or suppliers in
                              relation to the wish, unless I have written
                              permission from Make-A-Wish;
                            </li>
                            <li>
                              I have read and understood the Privacy Statement
                              referred to in this brochure and I consent to the
                              collection, use and disclosure of personal
                              information in accordance with the Privacy
                              Statement;
                            </li>
                            <li>
                              Where I have provided information about another
                              individual, I represent and confirm that the
                              individual has been made aware of that fact and of
                              the contents of the Privacy Statement and I have
                              not been prohibited from disclosing that
                              information;
                            </li>
                            <li>
                              I acknowledge and understand that the cooperation
                              of and input from the child and the parents /
                              guardians are essential to the ability of
                              Make-A-Wish to grant a wish and that any long
                              breaks in or failure of communication and
                              cooperation from the child and their family may
                              lead to suspension or cancellation of the progress
                              of a wish request;
                            </li>
                            <li>
                              I acknowledge that children must be under the age
                              of 18 at the time of application, however the
                              actual wish may take place up until they turn 21;
                            </li>
                            <li>
                              I understand that Make-A-Wish has limited
                              resources and is unable to grant all wishes
                              requested, and that that failure to grant a wish
                              is no reflection on the worthiness of the request
                              or the intended recipient of the wish. Make-A-Wish
                              may grant or decline any wish request in their
                              complete and unfettered discretion.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="steps-action" v-for="btns in 1" :key="btns">
                   <div
                      class="container-fluid signaturepart"
                      v-show="this.current == this.steps[0].length - 1"
                    >
                      <h1>E-Signature</h1>
                      <!-- <p>
                Sign in the canvas below and save your signature as an image!
              </p> -->
                      <span class="required">*</span>
                      <a-button class="" id="sig-clearBtn">
                        Clear
                        <span class="line"> </span>
                      </a-button>
                      <canvas id="sig-canvas" width="620" height="160" @mouseover="sign">
                        Get a better browser, bro.
                      </canvas>

                      <div class="text-danger" v-show="ischeck">
                        This is required field
                      </div>
                      <!-- <button class="btn btn-primary">
                Submit Signature
              </button> -->
                      <!-- <a-button class="" id="sig-clearBtn">
                        <span class="line"> </span>
                        Clear
                      </a-button> -->
                      <a-textarea
                        id="sig-dataUrl"
                        style="visibility: hidden"
                        class="form-control"
                        rows="3"
                      >
                        Data URL for your signature will go here!</a-textarea
                      >

                      <br />
                      <!-- <img id="sig-image"  src="" style="" alt="Your signature will go here!" /> -->
                    </div>
                  <a-button
                    v-if="this.current == steps[0].length - 1"
                    html-type="submit"
                    class="next"
                    @click="next"
                  >
                    Submit
                  </a-button>
                  <div class="mt-3 mb-4">
                    <a-button
                      type=""
                      @click="addDomain"
                      class="plus"
                      v-if="current == this.dynamicData"
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </a-button>
                  </div>
                  <a-button
                    v-if="this.current < steps[0].length - 1"
                    type=""
                    @click="next(done)"
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
      <div>
        <a-dropdown
          :placement="placements"
          class="dropdown"
          v-if="this.current > 1"
        >
          <a-button type="" class="edit" v-if="this.current > 1">
            <span class="pencil"
              ><i class="fa fa-pencil" aria-hidden="true"></i
            ></span>
            Edit
          </a-button>
          <template #overlay class="text-align-center">
            <a-menu>
              <div v-for="item in Details" :key="item">
                <p
                  id="hoverdata"
                  @click="testing(item.groupName)"
                  :class="item.status ? 'pshow' : 'pnone'"
                >
                  {{ item.groupName }}
                </p>
              </div>
            </a-menu>
          </template>
        </a-dropdown>
      </div>
      <a-modal v-model:visible="modal2Visible" centered>
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
                    <g id="like" transform="translate(883.304 576.999)">
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
            <div class="col-md-12 text-center">
              <h2 class="text-white pt-3">Thank You</h2>
            </div>
          </div>
        </div>
      </a-modal>
    </div>
  </div>
  <Footer />
</template>
<script>
/* eslint-disable */
import Footer from "../../Public/Footer/Footer";
import VueGoogleAutocomplete from "vue-google-autocomplete";
import {
  AlertTwoTone,
  LoginOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons-vue";
import { onMounted } from "vue";
import moment from "moment";
import store from "../../../store/store";
import "./Forms.css";
import { message } from "ant-design-vue";
let id = 0;
export default {
  name: "Father",
  props: ["data", "applicationNO", "relation", "dyField", "fHName"],
  created() {
    this.isLoading = true;
  },
  mounted() {
    this.existingappnumber = localStorage.getItem("exappnumber");
    //  this.primaryrelation = localStorage.getItem("primaryrelation");

    this.getdata();
    this.changedata();
    // this.getAddressData();
    // console.log(this.steps[0])
    // paragraph.appendChild(text);
    // this.test3 = localStorage.getItem("firstname");
    // this.email = localStorage.getItem("email");
    // this.phone = localStorage.getItem("phone");
    // console.log("Father");
    // console.log(this.relation);
    // console.log(this.dyField);
    if (this.data != null) {
       this.editData();
    }
    this.fafundata();
  },
  // },
  components: {
    Footer,
    MinusCircleOutlined,
     VueGoogleAutocomplete,
  },

  data() {
    return {
      primaryrelation:'',
      common: '',
      childsgender: "",
      checkEmailStatus: true,
      checkvalue: true,
      presentageValue: "",
      checkedValue: "",
      modal2Visible: false,
      childName: "",
      checkaddress: "",
      existingappnumber: "",
      emailvalidation: false,
      phone: "",
      email: "",
      test3: "",
      isshow: false,
      ischeck: false,
      current: 1,
      steps: [],
      Details: [],
      savesteps: [],
      hoverdata: [],
      value1: null,
      dynamicValidateForm: {
        domains: [],
      },
      checked: false,
      modal2Visible: false,
      placements: ["topLeft"],
      visible: false,
      isLoading: false,
      ismessage: false,
      family: [],
      dynamicData: "",
    };
  },
  methods: {
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
      // var sigImage = document.getElementById("sig-image");
      var clearBtn = document.getElementById("sig-clearBtn");
      var submitBtn = document.getElementById("sig-submitBtn");
      clearBtn.addEventListener(
        "click",
        function (e) {
          clearCanvas();
          sigText.innerHTML = "Data URL for your signature will go here!";
          document.getElementById("signtext").value = "";
          // sigImage.setAttribute("src", "");
        },
        false
      );
      canvas.addEventListener("mouseup", function (e) {
        var dataUrl = canvas.toDataURL();
        console.log(dataUrl);
        this.signaturedata = "";
        this.signaturedata = dataUrl;
        sigText.innerHTML = dataUrl;
        // sigImage.setAttribute("src", dataUrl);
        document.getElementById("signtext").value = this.signaturedata;
         if (this.primaryrelation === "Child") {
          document.getElementsByClassName(
            "referralsign"
          )[0].value = this.signaturedata;
          //  document.getElementById("signtext").value = this.signaturedata;
        } else if (this.primaryrelation === "Legal Guardian") {
          document.getElementsByClassName(
            "parentsign"
          )[0].value = this.signaturedata;
          // document.getElementById("signtext").value = this.signaturedata;
        }
      });
    },
        changedata(){
    this.steps[0].map((data)=>{
     data.innerfield.map((alldata)=>{
    if(alldata.type === 'picklist' && alldata.value === ''){
      alldata.value = undefined
    }
      })
      // data.map((alldata)=>{
      //   console.log(alldata)
      // });
        //  if(data.type === 'picklist'){
        //    console.log(data)
        //  }
    })
    },
     contentchanged(){
      var str = this.steps[0][this.current].content
      var res = str.split(" ");
      res.map((data,index)=>{
       console.log(data)
       if(data === `{firstName}`){
         console.log(index)
          res[index]= this.childName;
       }
        if(data === '{gender}'){
         console.log(index)
          res[index]= this.childsgender;
       }
        if(data === `{firstName}'s`){
         console.log(index)
          res[index]= this.childName + `'s`;
       }
      })
     this.common = res

     console.log(this.common)
    },
    getAddressData(addressData) {
      console.log(addressData);
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (
          this.steps[0][this.current].innerfield[j].name === "primary_address"
        ) {
          var gx = document.getElementById("map1").value;
          //  console.log(gx)
          var newgx = gx.replace(/[^a-zA-Z ]/g, "");

          this.steps[0][this.current].innerfield[j].value = newgx;
        }
        if (
          this.steps[0][this.current].innerfield[j].name === "primary_state"
        ) {

          var gx = addressData.administrative_area_level_1;
          this.steps[0][this.current].innerfield[j].value = gx;
        }
            if (
          this.steps[0][this.current].innerfield[j].name === "childs_address"
        ) {
          var gx = document.getElementById("map2").value;

          var newgx = gx.replace(/[^a-zA-Z ]/g, "");

          this.steps[0][this.current].innerfield[j].value = newgx;
        }
        if (this.steps[0][this.current].innerfield[j].name === "childs_state") {

          var gx = addressData.administrative_area_level_1;
          this.steps[0][this.current].innerfield[j].value = gx;
        }
           if (
          this.steps[0][this.current].innerfield[j].name ===
          "doctor_hospital_name"
        ) {
          var gx = document.getElementById("map3").value;

          var newgx = gx.replace(/[^a-zA-Z ]/g, "");

          this.steps[0][this.current].innerfield[j].value = newgx;
        }
             if (
          this.steps[0][this.current].innerfield[j].name ===
          "social_hospital_name"
        ) {
          var gx = document.getElementById("map4").value;

          var newgx = gx.replace(/[^a-zA-Z ]/g, "");

          // this.steps[0][this.current].innerfield[j].value = newgx;
        }
            if (
          this.steps[0][this.current].innerfield[j].name === "schools_address"
        ) {
          var gx = document.getElementById("map5").value;
          //  console.log(gx)
          var newgx = gx.replace(/[^a-zA-Z ]/g, "");

          // this.steps[0][this.current].innerfield[j].value = newgx;
        }
        if (
          this.steps[0][this.current].innerfield[j].name === "schools_state"
        ) {

          var gx = addressData.administrative_area_level_1;
           this.steps[0][this.current].innerfield[j].value = gx;
        }
        if (
          this.steps[0][this.current].innerfield[j].name === "parent_address"
        ) {
          var gx = document.getElementById("map6").value;

          var newgx = gx.replace(/[^a-zA-Z ]/g, "");

          this.steps[0][this.current].innerfield[j].value = newgx;
        }
        if (this.steps[0][this.current].innerfield[j].name === "parent_state") {
          var gx = addressData.administrative_area_level_1;
          this.steps[0][this.current].innerfield[j].value = gx;
        }
      }
      // }
    },
    phonelength() {
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (this.steps[0][this.current].innerfield[j].name == "phone") {
          if (
            this.steps[0][this.current].innerfield[j].value.toString()
              .length === 10 ||
            this.steps[0][this.current].innerfield[j].value == ""
          ) {
            document.getElementById("phonelength").style.display = "none";
            this.checkvalue = true;
          } else {
            document.getElementById("phonelength").style.display = "block";
            this.checkvalue = false;
          }
        }
      }
    },
    mobilelength() {
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (this.steps[0][this.current].innerfield[j].name == "mobile") {
          if (
            this.steps[0][this.current].innerfield[j].value.toString()
              .length === 10 ||
            this.steps[0][this.current].innerfield[j].value == ""
          ) {
            document.getElementById("mobilelength").style.display = "none";
            this.checkvalue = true;
          } else {
            document.getElementById("mobilelength").style.display = "block";
            this.checkvalue = false;
          }
        }
      }
    },
    postcodelength() {
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (this.steps[0][this.current].innerfield[j].name == "post_code") {
          if (
            this.steps[0][this.current].innerfield[j].value.toString()
              .length >= 4 && this.steps[0][this.current].innerfield[j].value.toString()
              .length <= 6 ||
            this.steps[0][this.current].innerfield[j].value === ""
          ) {
            document.getElementById("postcodelength").style.display = "none";
            this.checkvalue = true;
          } else {
            document.getElementById("postcodelength").style.display = "block";
            this.checkvalue = false;
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name == "childs_post_code"
        ) {
          if (
            this.steps[0][this.current].innerfield[j].value.toString()
              .length >= 4  &&  this.steps[0][this.current].innerfield[j].value.toString()
              .length <= 6 ||
            this.steps[0][this.current].innerfield[j].value === ""
          ) {
            document.getElementById("postcodelength").style.display = "none";
            this.checkvalue = true;
          } else {
            document.getElementById("postcodelength").style.display = "block";
            this.checkvalue = false;
          }
        }
           else if (
          this.steps[0][this.current].innerfield[j].name == "schools_post_code"
        ) {
          if (
           this.steps[0][this.current].innerfield[j].value.toString()
              .length >= 4 && this.steps[0][this.current].innerfield[j].value.toString()
              .length <= 6 ||
            this.steps[0][this.current].innerfield[j].value === ""
          ) {
            document.getElementById("postcodelength").style.display = "none";
            this.checkvalue = true;
          } else {
            document.getElementById("postcodelength").style.display = "block";
            this.checkvalue = false;
          }
        }
      }
    },
    disabledDate(current) {
      // console.log();
      return current && current > moment().endOf("day");
    },
    checkValueField(e) {
      // console.log(e.target.checked);
      this.checkedValue = e.target.checked;
    },
    testing(item) {
      document.getElementById("hoverdata").style.display = "none";
      this.steps[0].map((data, index) => {
        if (data.priority == 1) {
          let temp = {
            index: index,
            groupName: data.groups,
          };
          this.hoverdata.push(temp);
        }
      });
      this.hoverdata.map((data) => {
        if (data.groupName === item) {
          this.current = data.index;
        }
      });
      document.getElementById("hoverdata").style.display = "block";
    },
    onchange(e) {
      // console.log(`checked = ${e.target.checked}`);
    },
    success() {
      message.success("This is a success message");
    },
    errormessage() {
      message.error("This is an error message");
    },
    savedetail3() {},
    getdata(current) {
      this.isLoading = false;
      this.steps.push(this.data);
     this.primaryrelation =this.data[0].innerfield[0].value
      console.log(this.data[0].innerfield[0].value);

      //
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
      console.log("domain");
      this.dynamicValidateForm.domains.push({
        relation: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: undefined,
      });
      // console.log(this.dynamicValidateForm.domains);
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
    next(done) {
         for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
           setTimeout(() => {
          if (
            this.steps[0][this.current].innerfield[j].name === "primary_address"
          ) {
            var check = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map1").value = check;

          }
         else if (
            this.steps[0][this.current].innerfield[j].name === "childs_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map2").value = check1;
          }
           else  if (
          this.steps[0][this.current].innerfield[j].name ===
          "doctor_hospital_name"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map3").value = check1
        }
           else if (
          this.steps[0][this.current].innerfield[j].name ===
          "social_hospital_name"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;

            document.getElementById("map4").value = check1
        }
          else  if (
          this.steps[0][this.current].innerfield[j].name ===
          "schools_address"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;

            document.getElementById("map5").value = check1
        }
         else if (
            this.steps[0][this.current].innerfield[j].name === "parent_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;

            document.getElementById("map6").value = check1;
          }
        }, 100);
      }
      if (done != null) {
        this.presentageValue = 100;
      }
      this.Details.map((data) => {
        if (data.index == this.current) {
          data.status = true;
        }
      });
      var totalList = [];
      this.checkvalue = true;
      this.phonelength();
      this.mobilelength();
      this.postcodelength();
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if(this.steps[0][this.current].innerfield[j].name === 'primary_address'){
          this.steps[0][this.current].innerfield[j].value =document.getElementById("map1").value
          if(document.getElementById("map1").value.trim() == '' &&
            this.steps[0][this.current].innerfield[j].required === true){
             (this.ischeck = true), (this.checkvalue = false);
          }
        }
        else if (
            this.steps[0][this.current].innerfield[j].name === "childs_address"
          ) {
             this.steps[0][this.current].innerfield[j].value =document.getElementById("map2").value
             if(document.getElementById("map2").value.trim()== ''&&
            this.steps[0][this.current].innerfield[j].required === true){
           (this.ischeck = true), (this.checkvalue = false);
             }
          }
           else if (
            this.steps[0][this.current].innerfield[j].name === "doctor_hospital_name"
          ) {
             this.steps[0][this.current].innerfield[j].value = document.getElementById("map3").value
             if((document.getElementById("map3").value.trim() === '' )&&
            this.steps[0][this.current].innerfield[j].required === true){
           (this.ischeck = true), (this.checkvalue = false);
             }
          }
           else if (
            this.steps[0][this.current].innerfield[j].name === "social_hospital_name"
          ) {
             this.steps[0][this.current].innerfield[j].value =document.getElementById("map4").value
             if(document.getElementById("map4").value.trim()== ''&&
            this.steps[0][this.current].innerfield[j].required === true){
           (this.ischeck = true), (this.checkvalue = false);
             }
          }
           else if (
            this.steps[0][this.current].innerfield[j].name === "schools_address"
          ) {
             this.steps[0][this.current].innerfield[j].value =document.getElementById("map5").value
             if(document.getElementById("map5").value.trim()== ''&&
            this.steps[0][this.current].innerfield[j].required === true){
           (this.ischeck = true), (this.checkvalue = false);
             }
          }
            else if (
            this.steps[0][this.current].innerfield[j].name === "parent_address"
          ) {
              this.steps[0][this.current].innerfield[j].value =document.getElementById("map6").value
             if(document.getElementById("map6").value.trim()== ''&&
            this.steps[0][this.current].innerfield[j].required === true){
           (this.ischeck = true), (this.checkvalue = false);
             }
            // var check1 = this.steps[0][this.current].innerfield[j].value;
            // console.log(check1);
            // console.log("childs_address");
            // document.getElementById("map6").value = check1;
          }
         else if (
         this.primaryrelation === ('Legal Guardian' || 'Father' || 'Mother') &&  this.steps[0][this.current].innerfield[j].name == "parent_signature"

        ) {
          console.log('legal')
          // if (this.primaryrelation === "Legal Guardian") {
            var x = document.getElementsByClassName("parentsign")[0].value;
            console.log(x)
            this.steps[0][this.current].innerfield[
              j
            ].value = document.getElementsByClassName("parentsign")[0].value;
            if (
              document.getElementsByClassName("parentsign")[0].value.trim() ==
                "" ||
              document.getElementsByClassName("parentsign")[0].value ==
                "data:image/png;base64,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"
            ) {
              (this.ischeck = true), (this.checkvalue = false);
              console.log('under if')
            }
          // }
        } else if (
          this.primaryrelation === ('Child' || 'Family Members' || 'Case Worker' || 'Social Worker' || 'Doctor') && this.steps[0][this.current].innerfield[j].name == "referral_signature"
        ) {
          console.log('child')
            var x = document.getElementsByClassName("referralsign")[0].value;
            console.log(x);
            this.steps[0][this.current].innerfield[
              j
            ].value = document.getElementsByClassName("referralsign")[0].value;
            if (
              document.getElementsByClassName("referralsign")[0].value.trim() == "" ||
              document.getElementsByClassName("referralsign")[0].value ==
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAACgCAYAAACxIDDDAAAIQ0lEQVR4Xu3WMREAAAwCseLfdG38kCrgQgd2jgABAgQIECBAIC2wdDrhCBAgQIAAAQIEzmDzBAQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAg8MTTAKE/WT0JAAAAAElFTkSuQmCC"
            ) {
              (this.ischeck = true), (this.checkvalue = false);

          }
        }
        if (this.steps[0][this.current].innerfield[j].type == "date") {
          let today = new Date().toLocaleDateString();
          // console.log(today);
          // console.log(this.steps[0][this.current].innerfield[j].value)
          if (
            this.steps[0][this.current].innerfield[j].required === true &&
            (this.steps[0][this.current].innerfield[j].value === "" ||
              this.steps[0][this.current].innerfield[j].value === null)
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        }
           else if (this.steps[0][this.current].innerfield[j].type == 'picklist') {
          // let today = new Date().toLocaleDateString();
          if (
            this.steps[0][this.current].innerfield[j].required === true &&
            this.steps[0][this.current].innerfield[j].value == undefined
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        }
        else {
          if (
            this.steps[0][this.current].innerfield[j].required === true &&
            this.steps[0][this.current].innerfield[j].value.trim() == ""
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        }
      }
       if (this.checkEmailStatus == true) {
      if (this.checkvalue == true) {
        this.ischeck = false;
        this.handleSubmit();
        if (this.steps[0][this.current].saveDetails != true) {
          if (
            this.current == 4 &&
            this.steps[0][4].innerfield[0].value == "Yes"
          ) {
            this.current++;
            this.current++;
          } else {
            this.current++;
          }
          setTimeout(() => {
            this.presentageValue = Math.round(
              (this.current * 100) / this.steps[0].length
            );
            var x = document.getElementById("myDiv");
            x.querySelector(
              ".ant-steps-item-active .ant-steps-item-title"
            ).innerHTML = this.presentageValue + `%`;
          }, 100);
        } else {
          // this.steps[0][0].innerfield[0].value = "Father";
          // let saveDetailss = {
          // Father: this.steps[0],
          // };
           this.steps[0][this.current].saved = true;
           this.editData();
          //  if( this.steps[0][this.current].saved = true){

          //  }
            console.log(this.steps[0])
          let self = this;
          this.isLoading = true;
          var saveDetailss = "";
          if (this.relation == "Mother") {
            saveDetailss = {
              Mother: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Father") {
            saveDetailss = {
              Father: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Legal_Guardian") {
            saveDetailss = {
              Legal_Guardian: this.steps[0],
              family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Social_Worker") {
            saveDetailss = {
              Social_Worker: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Case_Worker") {
            saveDetailss = {
              Case_Worker: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Doctor") {
            saveDetailss = {
              Doctor: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Child") {
            saveDetailss = {
              Child: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          if (this.relation == "Family_Members") {
            saveDetailss = {
              Family_Members: this.steps[0],
              Family: this.dynamicValidateForm.domains,
            };
          }
          var data = JSON.stringify(saveDetailss);
          //  console.log(data);
          //  console.log("working");
          var config = {
            method: "put",
            url: `https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService?applicationNo=${this.applicationNO}&formCompleted=${this.presentageValue}`,
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

              if (response.status == 200) {
                message.success("Data Saved");
                console.log(response);
               if (done != null) {
                     location.replace(
                      "https://www.makeawish.org.au/wishes/apply/thank-you"
                    );
                 }
              }
              if (response.status == 400) {
                this.isLoading = false;
                message.error("Some Thing wrong");
              }
              // console.log(JSON.stringify(response));
            })
            .then((dtat) => {
              this.isLoading = false;
              setTimeout(() => {
                this.presentageValue = Math.round(
                  (this.current * 100) / this.steps[0].length
                );
                var x = document.getElementById("myDiv");
                x.querySelector(
                  ".ant-steps-item-active .ant-steps-item-title"
                ).innerHTML = this.presentageValue + `%`;
              }, 100);
              this.current++;
            })
            .catch(function (error) {
              console.log(error);
              message.error("Some Thing wrong");
              // this.current++
            });
          //  this.current++
        }
      }
       }
    },

    reset() {
      this.Details.map((data) => {
        data.status = false;
      });
      for (let i = 0; i < this.steps.length; i++) {
        for (let j = 0; j < this.steps[i].innerfield.length; j++) {
          this.steps[i].innerfield[j].value = "";
          this.current = 1;
        }
      }
    },
    prev() {
      if (this.current == 6 && this.steps[0][4].innerfield[0].value == "Yes") {
        this.current--;
        this.current--;
      } else {
        this.current--;
      }
         for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        console.log("infor");
        setTimeout(() => {
          if (
            this.steps[0][this.current].innerfield[j].name === "primary_address"
          ) {
            var check = this.steps[0][this.current].innerfield[j].value;
            console.log("in current");
            document.getElementById("map1").value = check;
            //  hospital1 = "kishan"
          }
          if (
            this.steps[0][this.current].innerfield[j].name === "childs_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            console.log(check1);
            console.log("in childaddress");
            document.getElementById("map2").value = check1;
          }
             if (
          this.steps[0][this.current].innerfield[j].name ===
          "doctor_hospital_name"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;
            console.log(check1);
            console.log("doctor_hospital_name");
            document.getElementById("map3").value = check1
        }
            if (
          this.steps[0][this.current].innerfield[j].name ===
          "social_hospital_name"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;
            console.log(check1);
            console.log("social_hospital_name");
            document.getElementById("map4").value = check1
        }
            if (
          this.steps[0][this.current].innerfield[j].name ===
          "schools_address"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;
            console.log(check1);
            console.log("schools_address");
            document.getElementById("map5").value = check1
        }
           if (
          this.steps[0][this.current].innerfield[j].name ===
          "parent_address"
        ) {
          var check1 = this.steps[0][this.current].innerfield[j].value;
            console.log(check1);
            console.log("parent_address");
            document.getElementById("map6").value = check1
        }


        }, 100);
      }
    },
    // hoverdata(e, current) {
    //   for (let i = 0; i < this.steps[0].length; i++) {
    //     if (this.steps[0][i].saveDetails == true) {
    //       // console.log(this.steps[0][i]);
    //       // console.log("hello" + this.steps[0][i].saveDetails);
    //     }
    //   }
    // },
    fafundata() {
      this.dyField.map((data) => {
        // console.log(data);
        this.dynamicValidateForm.domains.push(data);
      });
    },
    editData() {
     this.Details = []
      this.steps[0].map((data, index) => {
        console.log(data.saved,index);
        if (data.saved == true && data.saveDetails == true && data.groups != "None") {
          var groupdata = {
            groupName: data.groups,
            index: index,
            status:true,
          };
          this.Details.push(groupdata);
           console.log(this.Details);
        }
      });
      console.log(this.steps[0])
    },
  checkmail(e) {
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (e == "") {
        this.emailvalidation = false;
        this.checkEmailStatus = true;
      } else {
        if (filter.test(e)) {
          this.emailvalidation = false;
          this.checkEmailStatus = true;
          return true;
        } else {
          this.checkEmailStatus = false;
          this.emailvalidation = true;
        }
      }
    },
    addressNull(data) {
      if (data == "child_lives_with_you") {
        if (this.steps[0][4].innerfield[0].value == "No") {
          this.steps[0][5].innerfield[0].value = "";
          this.steps[0][5].innerfield[1].value = "";
          this.steps[0][5].innerfield[2].value = "";
          // console.log(this.steps[0][5].innerfield[0].name);
        } else {
          this.steps[0][5].innerfield[0].value = this.steps[0][2].innerfield[0].value;
          this.steps[0][5].innerfield[1].value = this.steps[0][2].innerfield[1].value;
          this.steps[0][5].innerfield[2].value = this.steps[0][2].innerfield[2].value;
        }
      }
      return data;
    },
    handleSubmit() {
      this.steps[0].map((data, index) => {
        data.innerfield.map((inData) => {
          if (inData.name == "childs_first_name") {
            //  console.log(inData.name);
            this.childName = inData.value;
            //  console.log(inData.value);
          }
          if (inData.type == "checkbox") {
            //  console.log(inData.value);
            inData.value = this.checkedValue;
          }
             if (inData.name == "childs_gender") {
            if(inData.value === 'Male'){
           this.childsgender = 'His';
            }
            else if(inData.value === 'Female'){
           this.childsgender = 'Her';
            }
            else if(inData.value === 'Other'){
           this.childsgender = 'Their';
            }

            console.log(inData.value);
          }
        });
        // console.log(data.dynamic,index);
        if (data.nextScreenDependent == true) {
          this.checkaddress = index + 1;
        }
        if (data.dynamic == true) {
          this.dynamicData = index;
        }

      });
    },
  },
};
/* eslint-enable */
</script>
 <style >
.required {
  color: red;
  padding-right: 6px;
}
.required-date {
  position: absolute;
  left: 14px;
  top: 32%;
}
.pnone {
  color: #2970c2;
  opacity: 0.4;
  cursor: no-drop;
  pointer-events: none;
}
.pshow {
  cursor: pointer;
  color: #2970c2;
}
.pnone:hover {
  background-color: #ec6393;
}
.editbutton {
  margin-bottom: -5px;
}
.ant-dropdown-menu {
  padding: 5px;
}
.ant-dropdown-placement-topRight {
  /* width: 18%; */
}
@media (max-width: 768px) {
  .appnumber {
    margin-top: 22px;
  }
  #emailid {
    float: left;
    color: #de4074;
  }
}
</style>
