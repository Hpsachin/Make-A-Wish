/* eslint-disable */
<template>
  <!-- <div> -->
  <div class="loader loader-1" v-show="isLoading">
    <div class="loader-outter"></div>
    <div class="loader-inner"></div>
  </div>
  <div v-if="this.status">
    <div class="logo">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-6 left MAW-logo">
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <div class="steps allforms">
      <div class="percentage">
        <div v-if="relation == 'Mother'">
          <a-tooltip placement="left" title="Mother">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img10.svg"
            />
          </a-tooltip>
        </div>
        <div v-if="relation == 'Father'">
          <a-tooltip placement="left" title="Father">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img11.svg"
            />
          </a-tooltip>
        </div>
        <div v-if="relation == 'Legal Guardian'">
          <a-tooltip placement="left" title="Legal Guardian">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img20.svg"
            />
          </a-tooltip>
        </div>
        <div v-if="relation == 'Social Worker'">
          <a-tooltip placement="left" title="Social Worker">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img21.svg"
            />
          </a-tooltip>
        </div>
        <div v-if="relation == 'Case Worker'">
          <a-tooltip placement="left" title="Case Worker">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img19.svg"
          /></a-tooltip>
        </div>
        <div v-if="relation == 'Doctor'">
          <a-tooltip placement="left" title="Doctor">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img1.svg"
            />
          </a-tooltip>
        </div>

        <div v-if="relation == 'Child'">
          <a-tooltip placement="left" title="Child">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img13.svg"
            />
          </a-tooltip>
        </div>
        <div v-if="relation == 'Family Members'">
          <a-tooltip placement="left" title="Family Members">
            <img
              src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img9.svg"
            />
          </a-tooltip>
        </div>
      </div>
      <a-steps :current="current" progressDot direction="horizontal" id="myDiv">
        <a-step v-for="item in steps[0]" :key="item" />
      </a-steps>

      <!--  -->
      <div class="steps-content container-fluid">
        <span style="float: right" class="applicationno">{{
          this.applicationNo
        }}</span>
        <span style="float: right; color: #0057b8" class="applicationNo"
          >Application Number: &nbsp;
        </span>
        <div style="width: 100%; clear: both">
          <a-form
            @submit="handleSubmit"
            class="form"
            ref="ruleForm"
            :model="dynamicValidateForm"
          >
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
            <div class="row justify-content-center">
              <div class="row justify-content-center mt-4 mb-5">
                <div
                  v-for="item in steps.length"
                  :key="item"
                  :current="current"
                  :class="item.cssClass"
                >
                  <h2
                    class="heading common-heading"
                    v-if="
                      steps[0][current].content.includes('{firstName}') &&
                      steps[0][current].content.includes('{gender}')
                    "
                  >
                    {{ this.contentchanged() }}
                    <span v-for="data in common" :key="data">
                      {{ data + "&nbsp;" }}
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
                    v-else-if="
                      steps[0][current].content.includes('{firstName}')
                    "
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
                    v-else-if="
                      steps[0][current].content.includes('{motherName}')
                    "
                  >
                    {{
                      steps[0][current].content.replace("{motherName}", fname)
                    }}
                  </h2>

                  <h2 class="heading" v-else>
                    {{ steps[0][current].content }}
                  </h2>
                  <div class="row justify-content-center mt-4 mb-5 mainWrapper">
                    <div
                      v-for="alldata in steps[0][current].innerfield"
                      :key="alldata"
                      :class="alldata.cssClass"
                    >
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
                        <div v-if="steps[0][3].innerfield[0].value == 'No'">
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
                            </vue-google-autocomplete>
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
                        </div>
                      </div>
                      <div
                        v-else-if="
                          this.current == this.checkaddress &&
                          alldata.type == 'number'
                        "
                      >
                        <div v-if="steps[0][3].innerfield[0].value == 'No'">
                          <div v-if="alldata.postCodeIdentifier == 'post_code'">
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
                          <!-- <div
                            v-if="alldata.name == 'Seventh_Screen_post_code'"
                          >
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
                          </div> -->
                          <!--  -->
                          <!-- <span
                            v-if="alldata.required === true"
                            class="required required-radio"
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
                          </div> -->
                        </div>
                      </div>
                      <div
                        v-else-if="alldata.postCodeIdentifier == 'post_code'"
                      >
                        <span v-if="alldata.required === true" class="required"
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
                      <!-- <div
                        v-else-if="alldata.name === 'Third_Screen_post_code'"
                      >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"
                          readonly
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
                          class="text-danger"
                          id="postcodelength"
                          style="display: none; color: #dc3545"
                        >
                          Please enter valid code
                        </div>
                      </div> -->
                      <!-- <div v-else-if="alldata.name === 'schools_post_code'">

                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"
                          readonly
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
                          class="text-danger"
                          id="postcodelength"
                          style="display: none; color: #dc3545"
                        >
                          Please enter valid code
                        </div>
                      </div> -->
                      <div
                        v-else-if="
                          this.current != this.checkaddress &&
                          alldata.type == 'text'
                        "
                      >
                        <div v-if="alldata.name === 'doctor_hospital_name'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div
                          v-else-if="alldata.name === 'social_hospital_name'"
                        >
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div v-else-if="alldata.name === 'primary_address'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div v-else-if="alldata.name === 'primary_state'">
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
                        <div v-else-if="alldata.name === 'schools_address'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                              alldata.required === true &&
                              alldata.value.trim() == ''
                            "
                          >
                            {{ alldata.errorMessage }}
                          </div>
                        </div>
                        <div v-else-if="alldata.name === 'schools_state'">
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
                              alldata.required === true &&
                              alldata.value.trim() == ''
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

                        <div v-else>
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
                      </div>
                      <div
                        v-else-if="
                          this.current == this.autoFillFiels &&
                          alldata.type == 'number'
                        "
                      >
                        <div v-if="alldata.name == 'phone'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
                            >*</span
                          >
                          <a-input
                            class="mt-3 mb-3"
                            :value="(alldata.value = this.phone)"
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
                            class=""
                            id="phonelength"
                            style="display: none; color: #dc3545"
                          >
                            Not a valid number
                          </div>
                        </div>
                        <div v-else-if="alldata.name === 'mobile'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                        <!-- <div v-else-if="alldata.name === 'post_code'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                            class="text-danger"
                            id="postcodelength"
                            style="display: none; color: #dc3545"
                          >
                            Please enter valid code
                          </div>
                        </div> -->

                        <div v-else>
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                        </div>
                      </div>
                      <div
                        v-else-if="
                          this.current !== this.autoFillFiels &&
                          alldata.type == 'number'
                        "
                      >
                        <div v-if="alldata.name === 'phone'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                            <span class="required">*</span>
                            {{ alldata.errorMessage }}
                          </div>
                          <div
                            id="mobilelength"
                            class="text-danger"
                            style="display: none"
                          >
                            Not a valid number
                          </div>
                        </div>
                        <div v-else-if="alldata.name === 'post_code'">
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                            class="text-danger"
                            id="postcodelength"
                            style="display: none; color: #dc3545"
                          >
                            Please enter valid code
                          </div>
                        </div>
                        <div v-else>
                          <span
                            v-if="alldata.required === true"
                            class="required"
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
                      <div
                        v-else-if="
                          alldata.name == 'parent_signature' &&
                          (relation === 'Mother' ||
                            relation === 'Father' ||
                            relation === 'Legal Guardian')
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
                          alldata.name === 'referral_signature' &&
                          (relation === 'Case Worker' ||
                            relation === 'Doctor' ||
                            relation === 'Social Worker')
                        "
                      >
                        <a-textarea
                          id="signtext"
                          style="visibility: hidden"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          class="referralsign"
                        />
                      </div>
                      <div
                        v-else-if="
                          alldata.name === 'referral_signature' &&
                          relation === 'Family Members'
                        "
                      >
                        <a-textarea
                          id="signtext"
                          style="visibility: hidden"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          class="referralsign"
                        />
                      </div>
                      <!-- <div
                        v-else-if="
                          alldata.name == 'parent_signature' &&
                          primaryrelation === 'Legal Guardian'
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
                          alldata.name === 'referral_signature' &&
                          primaryrelation === 'Family Members'
                        "
                      >
                        <a-textarea
                          id="signtext"
                          style="visibility: hidden"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          class="referralsign"
                        />
                      </div>
                      <div
                        v-else-if="
                          alldata.name === 'referral_signature' &&
                          primaryrelation == 'Medical Team'
                        "
                      >
                        <a-textarea
                          id="signtext"
                          style="visibility: hidden"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                          :rows="1"
                          class="referralsign"
                        />
                      </div> -->
                      <div v-else-if="alldata.type == 'picklist'">
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-select
                          option-filter-prop="children"
                          class="mt-3 mb-3 placeholder"
                          v-model:value="alldata.value"
                          :placeholder="alldata.placeholder"
                        >
                          <a-select-option
                            v-for="option in alldata.options"
                            :value="option.value"
                            :key="option"
                          >
                            {{ option.text }}
                          </a-select-option>
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
                        <a-radio-group
                          :name="alldata.name"
                          @change="addressNull(alldata.name)"
                          v-model:value="alldata.value"
                        >
                          <div
                            v-if="alldata.required === true"
                            class="requiredradio required"
                          >
                            *
                          </div>
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
                      <div v-else-if="alldata.type == 'date'">
                        <span
                          v-if="alldata.required === true"
                          class="required required-date"
                          >*</span
                        >
                        <!-- <a-select
                          style="width: 240px"
                          @change="handlechange"
                          placeholder="Day"
                        >
                          <a-select-option v-for="item in 31" :key="item">
                            {{ item }}
                          </a-select-option>
                        </a-select>
                        <a-select
                          style="width: 240px"
                          @change="handlechange1"
                          placeholder="Month"
                        >
                          <a-select-option v-for="month in 12" :key="month">
                            {{ month }}
                          </a-select-option>
                        </a-select>
                        <a-select
                          style="width: 240px"
                          @change="handlechange2"
                          placeholder="Year"
                        >
                          <a-select-option v-for="years in year" :key="years">
                            {{ years }}
                          </a-select-option>
                        </a-select> -->
                        <a-date-picker
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          type="date"
                          :disabled-date="disabledDate"
                          v-model:value="alldata.value"
                        />
                        <div
                          class="text-danger"
                          v-show="ischeck"
                          v-if="
                            alldata.required === true &&
                            (alldata.value === '1899-11-31' ||
                              alldata.value === '')
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>

                      <div
                        v-else-if="
                          this.current == this.autoFillFiels &&
                          alldata.type == 'email'
                        "
                      >
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          :value="(alldata.value = this.email)"
                          readonly
                          type="email"
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
                      <div
                        v-else-if="
                          this.current !== this.autoFillFiels &&
                          alldata.type == 'email'
                        "
                      >
                        <span v-if="alldata.required === true" class="required"
                          >*</span
                        >
                        <a-input
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          v-model:value="alldata.value"
                          @change="checkmail(alldata.value)"
                          type="email"
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
                        <p
                          v-show="emailvalidation"
                          class="text-danger"
                          id="emailid"
                        >
                          Please fill the valid email address
                        </p>
                      </div>
                    </div>
                    <div v-if="current === this.dynamicData">
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
                              @change="dynamicvalidation"
                              id="dynamicfirstname"
                            />
                          </div>
                          <div class="col-md-5 text-align-left">
                            <a-input
                              v-model:value="domain.lastName"
                              placeholder="LAST NAME"
                              class="mt-3 mb-3"
                              @change="dynamicvalidation"
                              id="dynamiclastname"
                            />
                          </div>
                          <div class="col-md-5 text-align-right">
                            <a-select
                              class="mt-3 mb-3"
                              placeholder="GENDER"
                              v-model:value="domain.gender"
                              id="dynamicgender"
                              @change="dynamicvalidation"
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
                            <!-- <a-select
                              style="width: 240px"
                              @change="dynamicvalidation"
                              id="day"
                              placeholder="Day"
                              v-model:value="domain.day"
                            >
                              <a-select-option v-for="item in 31" :key="item">
                                {{ item }}
                              </a-select-option>
                            </a-select>
                            <a-select
                              style="width: 240px"
                              @change="dynamicvalidation"
                              id="month"
                              placeholder="Month"
                              v-model:value="domain.month"
                            >
                              <a-select-option v-for="month in 12" :key="month">
                                {{ month }}
                              </a-select-option>
                            </a-select>
                            <a-select
                              style="width: 240px"
                              @change="dynamicvalidation"
                              id="year"
                              placeholder="Year"
                              v-model:value="domain.year"
                            >
                              <a-select-option
                                v-for="years in year"
                                :key="years"
                              >
                                {{ years }}
                              </a-select-option>
                            </a-select> -->
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
                              id="dynamicrelation"
                              @change="dynamicvalidation"
                            />
                          </div>
                        </div>
                        <div
                          v-if="
                            (domain.firstName == '' &&
                              domain.lastName == '' &&
                              domain.relation == '' &&
                              domain.gender == undefined) ||
                            (domain.firstName != '' &&
                              domain.lastName != '' &&
                              domain.gender != undefined &&
                              domain.relation != '')
                          "
                        ></div>
                        <div v-else class="text-danger">{{ domain.error }}</div>
                        <MinusCircleOutlined
                          v-if="index >= 1"
                          class="dynamic-delete-button"
                          :disabled="dynamicValidateForm.domains.length === 1"
                          @click="removeDomain(domain)"
                        />
                      </div>
                    </div>
                    <div class="container">
                      <div
                        v-if="
                          this.current == steps[0].length - 1 &&
                          this.relation === 'Child'
                        "
                        class="container comment"
                      >
                        <div class="agreement">
                          <div class="">
                            We will be keeping any information you have given us
                            in this form, and will use it to see if we can help
                            with your wish request. We will need to contact your
                            parent or guardian and will also ask them for their
                            permission to keep and use the personal information
                            you have given us. Tick the box if you agree with
                            this. If you aren’t sure or don’t agree, please talk
                            to your parent, guardian or other adult to help
                            submit this form for you.
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="
                          this.current == steps[0].length - 1 &&
                          this.relation != 'Child'
                        "
                        class="container comment"
                      >
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
                    <div class="hideondesktop">
                      <a-button
                        v-if="this.current === steps[0].length - 1"
                        class="next"
                        id="openbutton"
                        style=""
                        @click="opensignature"
                      >
                        Signature
                      </a-button>
                    </div>
                    <div
                      class="text-danger hideondesktop"
                      v-if="this.current === steps[0].length - 1"
                      v-show="ischeck"
                    >
                      This is required field
                    </div>
                    <div
                      id="signaturepad"
                      class="container-fluid signaturepart"
                      v-show="
                        this.current == this.steps[0].length - 1 &&
                        this.relation != 'Child'
                      "
                    >
                      <div class="signaturewrapper">
                        <h1>E-Signature</h1>
                        <span class="required">*</span>
                        <a-button class="" id="sig-clearBtn">
                          Clear
                          <span class="line"> </span>
                        </a-button>
                        <div class="row">
                               <div class="col-md-12 signaturecolumn">
                               <canvas
                              id="sig-canvas"
                              width="620"
                              height="160"
                              @mouseover="sign"
                              class=""
                            >
                              Get a better browser, bro.
                            </canvas>
                           </div>
                        </div>
                        <div class="text-danger" v-show="ischeck">
                          This is required field
                        </div>
                        <a-textarea
                          id="sig-dataUrl"
                          style="visibility: hidden"
                          class="form-control"
                          rows="3"
                        >
                          Data URL for your signature will go here!</a-textarea
                        >
                        <br />
                        <div class="hideondesktop">
                          <a-button class="next" @click="hidesignature"
                            >Submit</a-button
                          >
                        </div>
                      </div>
                    </div>
                    <div v-if="this.current === steps[0].length - 1">
                      <div style="visibility: hidden">
                        {{ (this.showdone = true) }}
                      </div>
                    </div>
                    <div v-else>
                      <div style="visibility: hidden">
                        {{ (this.showdone = false) }}
                      </div>
                    </div>
                    <a-button
                      html-type="submit"
                      class="next Done"
                      @click="next"
                      v-show="showdone"
                    >
                      Submit
                    </a-button>
                    <div class="mt-3 mb-4">
                      <a-button
                        type=""
                        @click="addDomain"
                        class="plus"
                        v-if="current === this.dynamicData"
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
        <a-dropdown
          :placement="placements"
          v-if="
            this.current > 1 && this.steps[0][this.current].saveDetails == true
          "
        >
          <a-button
            type=""
            class="edit"
            v-if="
              this.current > 1 &&
              this.steps[0][this.current].saveDetails == true
            "
          >
            <span class="pencil"
              ><i class="fa fa-pencil" aria-hidden="true"></i
            ></span>
            Edit
          </a-button>
          <template #overlay class="text-align-center">
            <a-menu>
              <div v-for="item in Details" :key="item" class="editbutton">
                <p
                  id="hoverdata"
                  @click="testing(item.groupName, item.index)"
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
    <Footer />
  </div>
  <div v-else>
    <router-link :to="'/newApplication'"></router-link>
  </div>
  <!-- </div> -->
</template>
<script>
/* eslint-disable */
import Footer from "../../Public/Footer/Footer";
import { MinusCircleOutlined } from "@ant-design/icons-vue";
import moment from "moment";
import VueGoogleAutocomplete from "vue-google-autocomplete";

import "./Forms.css";
import { message } from "ant-design-vue";
let id = 0;
export default {
  name: "Mother",
  beforeCreate() {},
  created() {
    this.isLoading = true;
    this.applicationNo = localStorage.getItem("applicationNo");
    this.fname = localStorage.getItem("Fname");
    this.email = localStorage.getItem("email");
    this.phone = localStorage.getItem("phone");
    this.primaryrelation = localStorage.getItem("primaryrelation");
    this.relation = localStorage.getItem("relation");
    // console.log(this.primaryrelation);
    const EXPIRE_TIME = 1000 * 60 * 60;
    // console.log(this.applicationNo);
    if (this.applicationNo != null) {
      // console.log("if");
      this.getdata();
    } else {
      // console.log("else");
      this.$router.push("/newApplication");
    }
    setTimeout(function () {
      localStorage.removeItem("applicationNo");
      localStorage.removeItem("Fname");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
      localStorage.removeItem("relation");
      localStorage.removeItem("primaryrelation");
    }, EXPIRE_TIME);
  },
  mounted() {
    // console.log(this.relation)
    // console.log(this.status + "status");
    //     var x = new Date(2018, 11, 24);
    // // console.log(x.getDate()  + "/" + (x.getMonth() + 1)+ "/" + x.getFullYear());
    // // console.log(x)
    var d = new Date();
    let customDate = d.getFullYear();
    // console.log(customDate);
    // this.year = customDate
    for (let i = 1987; i <= customDate; i++) {
      // // console.log(i)
      this.year.push(i);
      // // console.log(this.year);
    }
  },
  components: {
    Footer,
    MinusCircleOutlined,
    VueGoogleAutocomplete,
  },

  data() {
    return {
      schooladdress: "",
      dynamicgender: "",
      dynamicday: "",
      dynamicmonth: "",
      dynamicyear: "",
      savedetails: [],
      dates: [],
      year: [],
      day: "",
      month: "",
      years: "",
      primaryrelation: "",
      signaturedata: "",
      ReferralSignature: "",
      showdone: false,
      common: "",
      childsgender: "",
      isLoading: false,
      status: false,
      checkvalue: true,
      stepslength: "",
      fieldcheck: false,
      checkyes: false,
      presentageValue: "",
      checkedValue: "",
      checked: false,
      buttonWidth: 70,
      autoFillFiels: "",
      childName: "",
      checkaddress: "",
      checkEmailStatus: true,
      modal2Visible: false,
      relation: "",
      applicationNo: null,
      Details: [],
      phone: "",
      email: "",
      fname: "",
      isshow: false,
      ischeck: false,
      current: 1,
      steps: [],
      hoverdata: [],
      dynamicValidateForm: {
        domains: [
          {
            error: "All fields are required",
            relation: "",
            firstName: "",
            lastName: "",
            dob: "",

            gender: undefined,
          },
        ],
      },
      placements: ["topLeft"],
      dynamicData: "",
      emailvalidation: false,
    };
  },
  methods: {

    opensignature() {
      document.getElementById("signaturepad").style.display = "block";
    },
    hidesignature() {
      document.getElementById("signaturepad").style.display = "none";
    },
    socialvalidation() {
      if (
        this.steps[0][this.current].groups === "Social Worker Details" &&
        this.steps[0][this.current].priority === 1
      ) {
        for (
          let i = 0;
          i < this.steps[0][this.current].innerfield.length;
          i++
        ) {
          if (
            this.steps[0][this.current].innerfield[0].value === undefined &&
            this.steps[0][this.current].innerfield[1].value === "" &&
            this.steps[0][this.current].innerfield[2].value === "" &&
            this.steps[0][this.current].innerfield[3].value === "" &&
            this.steps[0][this.current].innerfield[4].value === ""
          ) {
            this.checkvalue = true;
          } else if (
            this.steps[0][this.current].innerfield[0].value != undefined &&
            this.steps[0][this.current].innerfield[1].value != "" &&
            this.steps[0][this.current].innerfield[2].value != "" &&
            this.steps[0][this.current].innerfield[3].value != "" &&
            this.steps[0][this.current].innerfield[4].value != ""
          ) {
          } else {
            // this.steps[0][this.current].innerfield[i].required =true
            this.ischeck = true;
            this.checkvalue = false;
            this.steps[0][this.current].innerfield[0].required = true;
            this.steps[0][this.current].innerfield[0].errorMessage =
              "This is a required field.";
            this.steps[0][this.current].innerfield[1].required = true;
            this.steps[0][this.current].innerfield[1].errorMessage =
              "This is a required field.";
            this.steps[0][this.current].innerfield[2].required = true;
            this.steps[0][this.current].innerfield[2].errorMessage =
              "This is a required field.";
            this.steps[0][this.current].innerfield[3].required = true;
            this.steps[0][this.current].innerfield[3].errorMessage =
              "This is a required field.";
            this.steps[0][this.current].innerfield[4].required = true;
            this.steps[0][this.current].innerfield[4].errorMessage =
              "This is a required field.";
            // alert("else");
          }
        }
      }
      // for(let j=0 ; j <this.steps[0][this.current].length; j++){
      //   // console.log(this.steps[0][this.current][j].ToScreen)
      //   if(this.steps[0][j].ToScreen === 'Seventeen'){
      //     alert('get')
      //   }
      // }
    },
    dynamicvalidation() {
      if (this.current === this.dynamicData) {
        // console.log(this.savedetails[0].Family[0].firstName);
        for (let i = 0; i < this.savedetails[0].Family.length; i++) {
          // console.log(this.savedetails[0].Family[i]);
          if (
            this.savedetails[0].Family[i].firstName == "" &&
            this.savedetails[0].Family[i].lastName == "" &&
            this.savedetails[0].Family[i].relation == "" &&
            this.savedetails[0].Family[i].dob == "" &&
            this.savedetails[0].Family[i].gender == undefined
          ) {
            this.checkvalue = true;
            if (this.savedetails[0].Family[i].firstName !== "") {
              document.getElementById("firstnameerror").style.display = "none";
            }
            if (this.savedetails[0].Family[i].lastName !== "") {
              document.getElementById("lastnameerror").style.display = "none";
            }
            if (this.savedetails[0].Family[i].relation !== "") {
              document.getElementById("relationerror").style.display = "none";
            }
            if (this.savedetails[0].Family[i].gender !== undefined) {
              document.getElementById("gendererror").style.display = "none";
            }
            if (this.savedetails[0].Family[i].dob !== "") {
              document.getElementById("dayerror").style.display = "none";
            }
          } else if (
            this.savedetails[0].Family[i].firstName != "" &&
            this.savedetails[0].Family[i].lastName != "" &&
            this.savedetails[0].Family[i].gender != undefined &&
            this.savedetails[0].Family[i].relation != "" &&
            this.savedetails[0].Family[i].dob != ""
          ) {
            this.checkvalue = true;
            // console.log("else if");
          } else {
            this.checkvalue = false;
            // console.log("else");
          }
        }
      }
    },
    signaturevalidation() {
      if (this.current == this.steps[0].length - 1) {
        // console.log(this.relation)
        for (
          let j = 0;
          j < this.steps[0][this.current].innerfield.length;
          j++
        ) {
          if (
            this.relation === "Mother" ||
            this.relation === "Father" ||
            this.relation === "Legal Guardian"
          ) {
            if (
              this.steps[0][this.current].innerfield[j].name ==
              "parent_signature"
            ) {
              // console.log(this.relation)
              var x = document.getElementsByClassName("parentsign")[0].value;
              // console.log(x);
              this.steps[0][this.current].innerfield[j].value =
                document.getElementsByClassName("parentsign")[0].value;
              if (
                document.getElementsByClassName("parentsign")[0].value.trim() ==
                  "" ||
                document.getElementsByClassName("parentsign")[0].value ==
                  "data:image/png;base64,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"
              ) {
                (this.ischeck = true), (this.checkvalue = false);
                // console.log("under if");
              }
            }
          } else if (this.relation === "Family Members") {
            // console.log('Family Members1')
            if (
              this.steps[0][this.current].innerfield[j].name ==
              "referral_signature"
            ) {
              // console.log('Family Members2')
              // console.log(this.relation)
              var x = document.getElementsByClassName("referralsign")[0].value;
              // console.log(x);
              this.steps[0][this.current].innerfield[j].value =
                document.getElementsByClassName("referralsign")[0].value;
              if (
                document
                  .getElementsByClassName("referralsign")[0]
                  .value.trim() == "" ||
                document.getElementsByClassName("referralsign")[0].value ==
                  "data:image/png;base64,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"
              ) {
                // console.log('Family Members3')
                (this.ischeck = true), (this.checkvalue = false);
              }
            }
          } else if (
            this.relation === "Case Worker" ||
            this.relation === "Doctor" ||
            this.relation === "Social Worker"
          ) {
            if (
              this.steps[0][this.current].innerfield[j].name ==
              "referral_signature"
            ) {
              // console.log(this.relation)
              var x = document.getElementsByClassName("referralsign")[0].value;
              // console.log(x);
              this.steps[0][this.current].innerfield[j].value =
                document.getElementsByClassName("referralsign")[0].value;
              if (
                document
                  .getElementsByClassName("referralsign")[0]
                  .value.trim() == "" ||
                document.getElementsByClassName("referralsign")[0].value ==
                  "data:image/png;base64,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"
              ) {
                (this.ischeck = true), (this.checkvalue = false);
              }
            }
          }
        }
        // for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        //  if (
        //     this.primaryrelation === "Legal Guardian"
        // ) if(this.steps[0][this.current].innerfield[j].name == "parent_signature"){
        //   {
        //   // console.log(this.relation)
        //   var x = document.getElementsByClassName("parentsign")[0].value;
        //   // console.log(x);
        //   this.steps[0][this.current].innerfield[
        //     j
        //   ].value = document.getElementsByClassName("parentsign")[0].value;
        //   if (
        //     document.getElementsByClassName("parentsign")[0].value.trim() ==
        //       "" ||
        //     document.getElementsByClassName("parentsign")[0].value ==
        //       "data:image/png;base64,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"
        //   ) {
        //     (this.ischeck = true), (this.checkvalue = false);
        //     // console.log("under if");
        //   }
        //   }
        // }  else if (
        //    this.primaryrelation === 'Family Members'
        // ) {
        //   if( this.steps[0][this.current].innerfield[j].name == "referral_signature"){
        //   // console.log(this.relation)
        //   var x = document.getElementsByClassName("referralsign")[0].value;
        //   // console.log(x);
        //   this.steps[0][this.current].innerfield[
        //     j
        //   ].value = document.getElementsByClassName("referralsign")[0].value;
        //   if (
        //     document.getElementsByClassName("referralsign")[0].value.trim() ==
        //       "" ||
        //     document.getElementsByClassName("referralsign")[0].value ==
        //       "data:image/png;base64,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"
        //   ) {
        //     (this.ischeck = true), (this.checkvalue = false);
        //   }
        //   }
        // }
        // else if (
        //    this.primaryrelation === "Medical Team"
        // ) {
        //   if(this.steps[0][this.current].innerfield[j].name == "referral_signature"){
        //  // console.log(this.relation)
        //   var x = document.getElementsByClassName("referralsign")[0].value;
        //   // console.log(x);
        //   this.steps[0][this.current].innerfield[
        //     j
        //   ].value = document.getElementsByClassName("referralsign")[0].value;
        //   if (
        //     document.getElementsByClassName("referralsign")[0].value.trim() ==
        //       "" ||
        //     document.getElementsByClassName("referralsign")[0].value ==
        //       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAmwAAACgCAYAAACxIDDDAAAIQ0lEQVR4Xu3WMREAAAwCseLfdG38kCrgQgd2jgABAgQIECBAIC2wdDrhCBAgQIAAAQIEzmDzBAQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAgYLD5AQIECBAgQIBAXMBgixckHgECBAgQIEDAYPMDBAgQIECAAIG4gMEWL0g8AgQIECBAgIDB5gcIECBAgAABAnEBgy1ekHgECBAgQIAAAYPNDxAgQIAAAQIE4gIGW7wg8QgQIECAAAECBpsfIECAAAECBAjEBQy2eEHiESBAgAABAgQMNj9AgAABAgQIEIgLGGzxgsQjQIAAAQIECBhsfoAAAQIECBAgEBcw2OIFiUeAAAECBAgQMNj8AAECBAgQIEAgLmCwxQsSjwABAgQIECBgsPkBAgQIECBAgEBcwGCLFyQeAQIECBAgQMBg8wMECBAgQIAAgbiAwRYvSDwCBAgQIECAgMHmBwgQIECAAAECcQGDLV6QeAQIECBAgAABg80PECBAgAABAgTiAgZbvCDxCBAgQIAAAQIGmx8gQIAAAQIECMQFDLZ4QeIRIECAAAECBAw2P0CAAAECBAgQiAsYbPGCxCNAgAABAgQIGGx+gAABAgQIECAQFzDY4gWJR4AAAQIECBAw2PwAAQIECBAgQCAuYLDFCxKPAAECBAgQIGCw+QECBAgQIECAQFzAYIsXJB4BAgQIECBAwGDzAwQIECBAgACBuIDBFi9IPAIECBAgQICAweYHCBAgQIAAAQJxAYMtXpB4BAgQIECAAAGDzQ8QIECAAAECBOICBlu8IPEIECBAgAABAgabHyBAgAABAgQIxAUMtnhB4hEgQIAAAQIEDDY/QIAAAQIECBCICxhs8YLEI0CAAAECBAgYbH6AAAECBAgQIBAXMNjiBYlHgAABAgQIEDDY/AABAgQIECBAIC5gsMULEo8AAQIECBAg8MTTAKE/WT0JAAAAAElFTkSuQmCC"
        //   ) {
        //     (this.ischeck = true), (this.checkvalue = false);
        //   }
        //   }
        // }
        // }
      }
    },
    handlechange(value) {
      this.day = value;
      // console.log(this.day);
    },
    handlechange1(value) {
      // console.log(value);
      this.month = value;
    },
    handlechange2(value) {
      // console.log(value);
      this.years = value;
    },
    handlechange3(value) {
      this.dynamicday = "";
      this.dynamicday = value;
    },
    handlechange4(value) {
      this.dynamicmonth = "";
      this.dynamicmonth = value;
    },
    handlechange5(value) {
      this.dynamicyear = "";
      this.dynamicyear = value;
      // console.log(this.dynamicyear);
    },
    handlechange6(value) {
      this.dynamicgender = "";
      this.dynamicgender = value;
    },
    changedata() {
      this.steps[0].map((data) => {
        data.innerfield.map((alldata) => {
          if (alldata.type === "picklist") {
            alldata.value = undefined;
          }
        });
      });
    },
    contentchanged() {
      var str = this.steps[0][this.current].content;
      var res = str.split(" ");
      res.map((data, index) => {
        // console.log(data);
        if (data === `{firstName}`) {
          // console.log(index);
          res[index] = this.childName;
        }
        if (data === "{gender}") {
          // console.log(index);
          res[index] = this.childsgender;
        }
        if (data === `{firstName}'s`) {
          // console.log(index);
          res[index] = this.childName + `'s`;
        }
      });
      this.common = res;

      // console.log(this.common);
    },
    getAddressData(addressData) {
      // console.log(addressData);
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (
          this.steps[0][this.current].innerfield[j].name === "primary_address"
        ) {
          var gx = document.getElementById("map1").value;
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
          this.steps[0][this.current].innerfield[j].postCodeIdentifier ===
          "post_code"
        ) {
          var gx = addressData.postal_code;
          this.steps[0][this.current].innerfield[j].value = gx;
        }

        if (
          this.steps[0][this.current].innerfield[j].name === "schools_state"
        ) {
          var gx = addressData.administrative_area_level_1;
          this.steps[0][this.current].innerfield[j].value = gx;
        }
        // if (
        //   this.steps[0][this.current].innerfield[j].name ===
        //   "Seventh_Screen_post_code"
        // ) {
        //   var gx = addressData.postal_code;
        //   this.steps[0][this.current].innerfield[j].value = gx;
        // }
        // if (
        //   this.steps[0][this.current].innerfield[j].name ===
        //   "Third_Screen_post_code"
        // ) {
        //   var gx = addressData.postal_code;
        //   this.steps[0][this.current].innerfield[j].value = gx;
        // }
        if (
          this.steps[0][this.current].innerfield[j].name === "schools_post_code"
        ) {
          var gx = addressData.postal_code;
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
          this.steps[0][this.current].innerfield[j].value = newgx;
        }
        if (
          this.steps[0][this.current].innerfield[j].name === "schools_address"
        ) {
          var gx = document.getElementById("map5").value;
          var newgx = gx.replace(/[^a-zA-Z ]/g, "");
          // this.steps[0][this.current].innerfield[j].value = newgx;
          // var gx = document.getElementById("map5").value;
          // var newgx = gx.replace(/[^a-zA-Z ]/g, "");
          this.schooladdress = newgx;
          // // console.log(this.schooladdress)
          //  this.steps[0][this.current].innerfield[j].value = newgx
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
    disabledDate(current) {
      // var year = d.getFullYear();
      // return  current > moment().endOf('year');
      var d = new Date();
      let customDate = d.getFullYear();
      return current && current > moment(customDate, "YYYY");
    },
    testing(item) {
      if (this.current > 1) {
        if (
          this.relation === "Mother" ||
          this.relation === "Father" ||
          this.relation === "Legal_Guardian"
        ) {
          var gx = this.steps[0][1].innerfield[0].value;
          var newgx = gx.replace(/[^a-zA-Z ]/g, "");
          // document.getElementById("map1").value =  newgx
          //  // console.log(this.firstfield)
          var idvar = setInterval(() => {
            if (document.body.contains(document.getElementById("map1"))) {
              // console.log('exist')
              document.getElementById("map1").value = newgx;
              if (document.getElementById("map1").value != "") {
                clearInterval(idvar);
              }
            }
          }, 1000);
        }
      }
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
          this.ReferralSignature = res.data.ReferralSignature;
          if (this.relation == "Mother") {
            this.steps.push(res.data.Mother);
            // console.log(res.data.Mother);
            this.changedata();
          }
          if (this.relation == "Father") {
            this.steps.push(res.data.Father);
            // console.log(res.data.Father);
            this.changedata();
          }
          if (this.relation == "Legal Guardian") {
            this.steps.push(res.data.Legal_Guardian);
            // console.log(res.data.Legal_Guardian);
            this.changedata();
          }
          if (this.relation == "Social Worker") {
            this.steps.push(res.data.Social_Worker);
            // console.log(res.data.Social_Worker);
            this.changedata();
          }
          if (this.relation == "Case Worker") {
            this.steps.push(res.data.Case_Worker);
            // console.log(res.data.Case_Worker);
            this.changedata();
          }
          if (this.relation == "Doctor") {
            this.steps.push(res.data.Doctor);
            // console.log(res.data.Doctor);
            this.changedata();
          }
          if (this.relation == "Child") {
            this.steps.push(res.data.Child);

            // console.log(res.data.Child);
            this.changedata();
          }
          if (this.relation == "Family Members") {
            this.steps.push(res.data.Family_Members);
            // console.log(res.data.Family_Members);
            this.changedata();
          }
          this.isLoading = false;
          this.status = true;
          this.editData();
          this.stepslength = this.steps[0].length;
        })
        .catch((err) => {
          // console.log(err);
        });
    },
    sign() {
      console.log('working')
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
      var clearBtn = document.getElementById("sig-clearBtn");
      var submitBtn = document.getElementById("sig-submitBtn");
      clearBtn.addEventListener(
        "click",
        function (e) {
          clearCanvas();
          sigText.innerHTML = "Data URL for your signature will go here!";
          document.getElementById("signtext").value = "";
        },
        false
      );
      canvas.addEventListener("mouseup", function (e) {
        var dataUrl = canvas.toDataURL();
        // console.log(dataUrl);
        this.signaturedata = "";
        this.signaturedata = dataUrl;
        sigText.innerHTML = dataUrl;
        document.getElementById("signtext").value = this.signaturedata;
        if (
          this.relation === "Family Members" ||
          this.relation === "Case Worker" ||
          this.relation === "Doctor" ||
          this.relation === "Social Worker"
        ) {
          // document.getElementById("signtext").value = this.signaturedata;
          document.getElementsByClassName("referralsign")[0].value = dataUrl;
        } else if (
          this.relation === "Mother" ||
          this.relation === "Father" ||
          this.relation === "Legal Guardian"
        ) {
          // document.getElementById("signtext").value = this.signaturedata;
          document.getElementsByClassName("parentsign")[0].value = dataUrl;
        }
        // if (
        //   this.primaryrelation === "Family Members" ||
        //   "Medical Team"
        // ) {
        //   // document.getElementById("signtext").value = this.signaturedata;
        //   document.getElementsByClassName("referralsign")[0].value = dataUrl;
        // } else if (this.primaryrelation === "Legal Guardian") {
        //   // document.getElementById("signtext").value = this.signaturedata;
        //   document.getElementsByClassName("parentsign")[0].value = dataUrl;
        // }
      });
    },
    checkValueField(e) {
      this.checkedValue = e.target.checked;
    },
    removeDomain(item) {
      let index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      // this.dynamicgender = '';
      // this.dynamicday = '';
      // this.dynamicmonth = '';
      // this.dynamicyear = '';
      this.dynamicValidateForm.domains.push({
        error: "All fields are required",
        relation: "",
        firstName: "",
        lastName: "",
        gender: undefined,
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
    phonelength() {
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (
          this.steps[0][this.current].innerfield[j].name == "phone" ||
          this.steps[0][this.current].innerfield.field === "PC_Phone__c"
        ) {
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
            this.steps[0][this.current].innerfield[j].value.toString().length ==
              4 ||
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
            this.steps[0][this.current].innerfield[j].value.toString().length ==
              4 ||
            this.steps[0][this.current].innerfield[j].value === ""
          ) {
            document.getElementById("postcodelength").style.display = "none";
            this.checkvalue = true;
          } else {
            document.getElementById("postcodelength").style.display = "block";
            this.checkvalue = false;
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name == "schools_post_code"
        ) {
          if (
            this.steps[0][this.current].innerfield[j].value.toString().length ==
              4 ||
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
    next(done) {
      var idvar = setInterval(() => {
        if (document.body.contains(document.getElementById("map5"))) {
          // console.log('exist')
          // console.log(this.schooladdress)
          if (document.getElementById("map5").value == "") {
            document.getElementById("map5").value = this.schooladdress;
          } else if (document.getElementById("map5").value != "") {
            clearInterval(idvar);
          }
          // if( document.getElementById("map5").value != ''){
          //   clearInterval(idvar);          }
        }
      }, 1000);
      //         if (document.body.contains(document.getElementById("map5"))) {
      // // console.log(document.getElementById('map5').value)
      // document.getElementById('map5').value = "yourNewValue";
      //   // console.log(this.steps[0][this.current].innerfield)
      //         }

      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        // console.log(this.steps[0][this.current].innerfield[j].name)
        setTimeout(() => {
          if (
            this.steps[0][this.current].innerfield[j].name === "primary_address"
          ) {
            var check = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map1").value = check;
          } else if (
            this.steps[0][this.current].innerfield[j].name === "childs_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map2").value = check1;
          } else if (
            this.steps[0][this.current].innerfield[j].name ===
            "doctor_hospital_name"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map3").value = check1;
          } else if (
            this.steps[0][this.current].innerfield[j].name ===
            "social_hospital_name"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map4").value = check1;
          } else if (
            this.steps[0][this.current].innerfield[j].name === "schools_address"
          ) {
            // if(document.getElementById("map5").value != ''){
            // var check1 = this.steps[0][this.current].innerfield[j].value;
            // document.getElementById("map5").value = check1;
            // // console.log(this.schooladdress)
            // var check1 =this.schooladdress
            var check8 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map5").value = check8;
            // }
            // else{
            //   this.steps[0][this.current].innerfield[j].value = ''
            // }
          } else if (
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
      // this.dynamicvalidation();
      this.handleSubmit();
      this.phonelength();
      this.mobilelength();
      this.postcodelength();
      this.socialvalidation();
      this.dynamicvalidation();
      this.signaturevalidation();
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        if (
          this.steps[0][this.current].innerfield[j].name === "primary_address"
        ) {
          this.steps[0][this.current].innerfield[j].value =
            document.getElementById("map1").value;
          if (
            document.getElementById("map1").value.trim() == "" &&
            this.steps[0][this.current].innerfield[j].required === true
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name === "childs_address"
        ) {
          this.steps[0][this.current].innerfield[j].value =
            document.getElementById("map2").value;
          if (
            document.getElementById("map2").value.trim() == "" &&
            this.steps[0][this.current].innerfield[j].required === true
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name ===
          "doctor_hospital_name"
        ) {
          this.steps[0][this.current].innerfield[j].value =
            document.getElementById("map3").value;
          if (
            document.getElementById("map3").value.trim() == "" &&
            this.steps[0][this.current].innerfield[j].required === true
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name ===
          "social_hospital_name"
        ) {
          this.steps[0][this.current].innerfield[j].value =
            document.getElementById("map4").value;
          if (
            document.getElementById("map4").value.trim() == "" &&
            this.steps[0][this.current].innerfield[j].required === true
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name === "schools_address"
        ) {
          this.steps[0][this.current].innerfield[j].value =
            document.getElementById("map5").value;
          if (
            document.getElementById("map5").value.trim() == "" &&
            this.steps[0][this.current].innerfield[j].required === true
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else if (
          this.steps[0][this.current].innerfield[j].name === "parent_address"
        ) {
          this.steps[0][this.current].innerfield[j].value =
            document.getElementById("map6").value;
          if (
            document.getElementById("map6").value.trim() == "" &&
            this.steps[0][this.current].innerfield[j].required === true
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        }

        // else if (
        //   this.primaryrelation === "Child" &&
        //   this.steps[0][this.current].innerfield[j].name == "referral_signature"
        // ) {
        //   // console.log("child");
        //   var x = document.getElementsByClassName("referralsign")[0].value;
        //   // console.log(x);
        //   this.steps[0][this.current].innerfield[
        //     j
        //   ].value = document.getElementsByClassName("referralsign")[0].value;
        //   if (
        //     document.getElementsByClassName("referralsign")[0].value.trim() ==
        //       "" ||
        //     document.getElementsByClassName("referralsign")[0].value ==
        //       "data:image/png;base64,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"
        //   ) {
        //     (this.ischeck = true), (this.checkvalue = false);
        //   }
        // }
        else if (this.steps[0][this.current].innerfield[j].type == "date") {
          // var x = new Date(this.years, this.month, this.day);
          // var date = x.getFullYear() + "-" + x.getMonth() + "-" + x.getDate();
          // this.steps[0][this.current].innerfield[j].value = date;
          if (
            this.steps[0][this.current].innerfield[j].required === true &&
            this.steps[0][this.current].innerfield[j].value === ""
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else if (
          this.steps[0][this.current].innerfield[j].type == "picklist"
        ) {
          if (
            this.steps[0][this.current].innerfield[j].required === true &&
            this.steps[0][this.current].innerfield[j].value == undefined
          ) {
            (this.ischeck = true), (this.checkvalue = false);
          }
        } else {
          if (
            this.steps[0][this.current].innerfield[j].required === true &&
            this.steps[0][this.current].innerfield[j].value.trim() == ""
          ) {
            (this.ischeck = true), (this.checkvalue = false);
            // console.log("required");
          }
        }
      }
      if (this.checkEmailStatus == true) {
        if (this.checkvalue) {
          this.ischeck = false;
          if (this.steps[0][this.current].saveDetails == !true) {
            if (
              this.current == 3 &&
              this.steps[0][3].innerfield[0].value == "Yes"
            ) {
              this.current++;
              this.current++;
            } else {
              this.phonelength();
              if (this.checkvalue) {
                this.current++;
              }
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
            let self = this;
            this.isLoading = true;
            this.steps[0][0].innerfield[0].value = this.relation;
            this.steps[0][this.current].saved = true;
            // console.log(this.steps[0]);
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
            if (this.relation == "Legal Guardian") {
              saveDetailss = {
                Legal_Guardian: this.steps[0],
                Family: this.dynamicValidateForm.domains,
              };
            }
            if (this.relation == "Social Worker") {
              saveDetailss = {
                Social_Worker: this.steps[0],
                Family: this.dynamicValidateForm.domains,
              };
            }
            if (this.relation == "Case Worker") {
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
            if (this.relation == "Family Members") {
              saveDetailss = {
                Family_Members: this.steps[0],
                Family: this.dynamicValidateForm.domains,
              };
            }
            // // console.log(saveDetailss);
            this.savedetails.push(saveDetailss);
            // console.log(this.savedetails);
            // for(let i=0; i<=this.savedetails;i++){
            //   // console.log(i)
            // }
            var data = JSON.stringify(saveDetailss);
            var data = JSON.parse(data);
            var config = {
              method: "put",
              url: `https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService?applicationNo=${this.applicationNo}&formCompleted=${this.presentageValue}`,
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
                // console.log(response);
                if (response.status == 200) {
                  message.success("Data Saved");
                  if (done != null) {
                    setTimeout(() => {
                      location.replace(
                        "https://www.makeawish.org.au/wishes/apply/thank-you"
                      );
                    });
                  }
                }
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
                message.error("Some Thing Wrong");
                // console.log(error);
                self.isLoading = false;
              });
          }
        }
      }
    },
    handleSubmit() {
      this.steps[0].map((data, index) => {
        if (data.groups == "Your Details") {
          data.innerfield.map((inData) => {
            if (inData.name == "phone") {
              this.autoFillFiels = index;
            }
          });
        }
        data.innerfield.map((inData) => {
          if (inData.name == "childs_first_name") {
            this.childName = inData.value;
          }
          if (inData.type == "checkbox") {
            inData.value = this.checkedValue;
          }

          if (inData.name == "childs_gender") {
            if (inData.value === "Male") {
              this.childsgender = "His";
            } else if (inData.value === "Female") {
              this.childsgender = "Her";
            } else if (inData.value === "Other") {
              this.childsgender = "Their";
            }
            // console.log(inData.value);
          }
        });

        if (data.nextScreenDependent == true) {
          this.checkaddress = index + 1;
        }
        if (data.dynamic == true) {
          this.dynamicData = index;
        }
      });
    },
    reset() {
      this.Details.map((data) => {
        data.status = false;
      });

      for (let i = 0; i < this.steps[0].length; i++) {
        for (let j = 0; j < this.steps[0][i].innerfield.length; j++) {
          this.steps[0][i].innerfield[j].value = "";
          this.current = 1;
        }
      }
    },
    prev() {
      var idvar = setInterval(() => {
        if (document.body.contains(document.getElementById("map5"))) {
          // // console.log( this.schooladdress)
          // // console.log('exist')
          if (document.getElementById("map5").value == "") {
            document.getElementById("map5").value = this.schooladdress;
          } else if (document.getElementById("map5").value != "") {
            clearInterval(idvar);
          }
        }
      }, 1000);
      if (this.current == 5 && this.steps[0][3].innerfield[0].value == "Yes") {
        this.current--;
        this.current--;
      } else {
        this.current--;
      }
      for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
        // console.log("infor");
        setTimeout(() => {
          if (
            this.steps[0][this.current].innerfield[j].name === "primary_address"
          ) {
            var check = this.steps[0][this.current].innerfield[j].value;
            // // console.log("in current");
            document.getElementById("map1").value = check;
          }
          if (
            this.steps[0][this.current].innerfield[j].name === "childs_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            // // console.log(check1);
            // // console.log("in childaddress");
            document.getElementById("map2").value = check1;
          }
          if (
            this.steps[0][this.current].innerfield[j].name ===
            "doctor_hospital_name"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            // console.log(check1);
            // console.log("doctor_hospital_name");
            document.getElementById("map3").value = check1;
          }
          if (
            this.steps[0][this.current].innerfield[j].name ===
            "social_hospital_name"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            // console.log(check1);
            // console.log("social_hospital_name");
            document.getElementById("map4").value = check1;
          }
          if (
            this.steps[0][this.current].innerfield[j].name === "schools_address"
          ) {
            var check = this.steps[0][this.current].innerfield[j].value;
            // console.log("in current schooladdress");
            document.getElementById("map5").value = check;
            //             var gx =this.steps[0][this.current].innerfield[j].value
            //    var newgx = gx.replace(/[^a-zA-Z ]/g, "");
            //  var idvar = setInterval(() => {
            //     if (document.body.contains(document.getElementById("map5"))) {
            //       // console.log('exist')
            //       document.getElementById("map5").value =  newgx;
            //       if( document.getElementById("map5").value != ''){
            //         clearInterval(idvar);
            //       }
            //     }
            //   }, 1000);
          }
          if (
            this.steps[0][this.current].innerfield[j].name === "parent_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            // console.log(check1);
            // console.log("parent_address");
            document.getElementById("map6").value = check1;
          }
        }, 100);
      }
      // }
    },
    editData() {
      this.steps[0].map((data, index) => {
        if (data.groups == "Your Details") {
          data.innerfield.map((inData) => {
            if (inData.name == "phone") {
              this.autoFillFiels = index;
            }
          });
        }
        if (data.priority == 1 && data.groups != "None") {
          var groupdata = {
            groupName: data.groups,
            index: index,
            status: false,
          };
          this.Details.push(groupdata);
        }
      });
    },

    checkmail(e) {
      var filter =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
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
      // console.log(data);
      if (data == "child_lives_with_you") {
        if (this.steps[0][3].innerfield[0].value == "No") {
          this.steps[0][4].innerfield[0].value = "";
          this.steps[0][4].innerfield[1].value = "";
          this.steps[0][4].innerfield[2].value = "";
        } else {
          this.steps[0][4].innerfield[0].value =
            this.steps[0][1].innerfield[0].value;
          this.steps[0][4].innerfield[1].value =
            this.steps[0][1].innerfield[1].value;
          this.steps[0][4].innerfield[2].value =
            this.steps[0][1].innerfield[2].value;
        }
      }
      return data;
    },
  },
};

/* eslint-enable */
</script>
 <style >
.commenttextarea {
  margin-top: 24px;
}
#sig-clearBtn .line {
  display: block;
  padding: 0px 11px 0px 20px;
}
#sig-dataUrl {
  display: block !important;
}
#sig-clearBtn {
  left: 16%;
  padding: 0px;
  border: none;
  margin-bottom: 10px;
}
.steps #sig-canvas {
  border: 1px solid #cccccc;
  border-radius: 15px;
  cursor: crosshair;
  margin: 0px auto 22px auto;
}
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
  color: black;
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
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
