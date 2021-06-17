/* eslint-disable */
<template >
  <div class="logo">
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
      <div v-if="relation == 'Legal_Guardian'">
        <a-tooltip placement="left" title="Legal_Guardian">
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img20.svg"
          />
        </a-tooltip>
      </div>
      <div v-if="relation == 'Social_Worker'">
        <a-tooltip placement="left" title="Social Worker">
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img21.svg"
          />
        </a-tooltip>
      </div>
      <div v-if="relation == 'Case_Worker'">
        <a-tooltip placement="left" title="Case Worker">
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img19.svg"
          />
        </a-tooltip>
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
      <div v-if="relation == 'Family_Members'">
        <a-tooltip placement="left" title="Family Members">
          <img
            src="https://phpstack-371465-1221944.cloudwaysapps.com/img/img9.svg"
          />
        </a-tooltip>
      </div>
    </div>
    <a-steps
      :current="current"
      @change="onchange"
      progressDot
      direction="horizontal"
      id="myDiv"
    >
      <a-step v-for="item in steps[0]" :key="item" />
    </a-steps>
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
                    steps[0][current].content.replace("{gender}", childsgender)
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
                          >, mail: PO Box 5006 Burnley Vic 3121, or phone: 1800
                          032 260<br />
                          We would love to stay in touch to keep you informed
                          about the latest Make-A-Wish news, products and
                          services
                        </p>
                      </div>

                      <a-checkbox
                        v-model:checked="checked"
                        @change="checkValueField"
                      >
                        Tick here to be excluded from these types of Make-A-Wish
                        communications. We will still contact you if required by
                        law or to action and confirm any details regarding this
                        application.
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
                        <!-- <div v-if="alldata.name == 'Seventh_Screen_post_code'">
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
                    <div v-else-if="alldata.postCodeIdentifier == 'post_code'">
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
                    <!-- <div v-else-if="alldata.name === 'Third_Screen_post_code'">

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
                            alldata.required === true &&
                            alldata.value.trim() == ''
                          "
                        >
                          {{ alldata.errorMessage }}
                        </div>
                      </div>
                      <div v-else-if="alldata.name === 'social_hospital_name'">
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
                            alldata.required === true &&
                            alldata.value.trim() == ''
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
                            alldata.required === true &&
                            alldata.value.trim() == ''
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
                            alldata.required === true &&
                            alldata.value.trim() == ''
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
                        <span v-if="alldata.required === true" class="required"
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
                    </div>
                    <div
                      v-else-if="
                        this.current == this.autoFillFiels &&
                        alldata.type == 'number'
                      "
                    >
                      <div v-if="alldata.name == 'phone'">
                        <span v-if="alldata.required === true" class="required"
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
                      </div>
                    </div>
                    <div
                      v-else-if="
                        this.current !== this.autoFillFiels &&
                        alldata.type == 'number'
                      "
                    >
                      <div v-if="alldata.name === 'phone'">
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
                      <!-- <div v-else-if="alldata.name === 'post_code'">
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
                          class="text-danger"
                          id="postcodelength"
                          style="display: none; color: #dc3545"
                        >
                          Please enter valid code
                        </div>
                      </div> -->
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
                          relation === 'Legal_Guardian')
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
                        (relation === 'Case_Worker' ||
                          relation === 'Doctor' ||
                          relation === 'Social_Worker')
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
                        relation === 'Family_Members'
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
                          alldata.name === 'referral_signature' &&
                          primaryrelation == 'Child'
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
                    <!-- <div
                        v-else-if="
                          alldata.name === 'referral_signature' &&
                          primaryrelation == ''
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
                    <!-- <div v-else-if="alldata.name == 'comment'">
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
                          primaryrelation == 'Child'
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
                        primaryrelation == 'Child'
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
                    {{ this.dynamicData }}
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
                            <a-select-option v-for="years in year" :key="years">
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
                          to your parent, guardian or other adult to help submit
                          this form for you.
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
                            All information regarding the health of the child in
                            this application required to consider, assess and
                            deliver a wish may be released by any medical
                            service provider to Make-A-Wish and Make-A-Wish may
                            produce a copy of this application to the medical
                            service provider as evidence of that authority and I
                            agree to provide any further consents required by
                            any medical service provider in the form they
                            request;
                          </li>
                          <li>
                            I will not, and will not cause or permit another
                            person to, contact or enter into any discussions or
                            negotiations with third parties or suppliers in
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
                            the contents of the Privacy Statement and I have not
                            been prohibited from disclosing that information;
                          </li>
                          <li>
                            I acknowledge and understand that the cooperation of
                            and input from the child and the parents / guardians
                            are essential to the ability of Make-A-Wish to grant
                            a wish and that any long breaks in or failure of
                            communication and cooperation from the child and
                            their family may lead to suspension or cancellation
                            of the progress of a wish request;
                          </li>
                          <li>
                            I acknowledge that children must be under the age of
                            18 at the time of application, however the actual
                            wish may take place up until they turn 21;
                          </li>
                          <li>
                            I understand that Make-A-Wish has limited resources
                            and is unable to grant all wishes requested, and
                            that that failure to grant a wish is no reflection
                            on the worthiness of the request or the intended
                            recipient of the wish. Make-A-Wish may grant or
                            decline any wish request in their complete and
                            unfettered discretion.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="container">
                    <div
                        v-if="this.current == steps[0].length - 1 &&  this.relation ==='Child'"
                        class="container comment"
                      >
                        <div class="agreement">
                          <div class="">
                           We will be keeping any information you have given us in this form, and will use it to see if we can help with your wish request. We will need to contact your parent or guardian and will also ask them for their permission to keep and use the personal information you have given us.  Tick the box if you agree with this.  If you aren’t sure or don’t agree, please talk to your parent, guardian or other adult to help submit this form for you.
                          </div>
                        </div>
                      </div>
                    <div
                      v-if="this.current == steps[0].length - 1 &&  this.relation !='Child'"
                      class="container comment"
                    >
                      <p class="commentmail">
                        To process your wish application, Make-A-Wish Foundation
                        Australia (Make-A-Wish) needs certain information about
                        you and the wish child.<br />
                        Our Privacy policy at
                        <a href="http://www.makeawish.org.au/privacypolicy"
                          >http://www.makeawish.org.au/privacypolicy</a
                        >
                        explains what we do with this information, how it is
                        handled, how it may be shared, how to access or correct
                        it and our procedure for complaints.<br />
                        Queries may be directed to our Privacy Officer by email:
                        <a href="mailto:privacyofficer@makeawish.org.au "
                          >privacyofficer@makeawish.org.au</a
                        >, mail: PO Box 5006 Burnley Vic 3121, or phone: 1800
                        032 260
                      </p>
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
                            All information regarding the health of the child in
                            this application required to consider, assess and
                            deliver a wish may be released by any medical
                            service provider to Make-A-Wish and Make-A-Wish may
                            produce a copy of this application to the medical
                            service provider as evidence of that authority and I
                            agree to provide any further consents required by
                            any medical service provider in the form they
                            request;
                          </li>

                          <li>
                            I will not, and will not cause or permit another
                            person to, contact or enter into any discussions or
                            negotiations with third parties or suppliers in
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
                            the contents of the Privacy Statement and I have not
                            been prohibited from disclosing that information;
                          </li>
                          <li>
                            I acknowledge and understand that the cooperation of
                            and input from the child and the parents / guardians
                            are essential to the ability of Make-A-Wish to grant
                            a wish and that any long breaks in or failure of
                            communication and cooperation from the child and
                            their family may lead to suspension or cancellation
                            of the progress of a wish request;
                          </li>
                          <li>
                            I acknowledge that children must be under the age of
                            18 at the time of application, however the actual
                            wish may take place up until they turn 21;
                          </li>
                          <li>
                            I understand that Make-A-Wish has limited resources
                            and is unable to grant all wishes requested, and
                            that that failure to grant a wish is no reflection
                            on the worthiness of the request or the intended
                            recipient of the wish. Make-A-Wish may grant or
                            decline any wish request in their complete and
                            unfettered discretion.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> -->
                </div>
                <!-- <div class="steps-action" v-for="btns in 1" :key="btns">
                  <div
                    class="container-fluid signaturepart"
                    v-show="this.current == this.steps[0].length - 1 &&  this.relation !='Child'"
                  >
                    <h1>E-Signature</h1>
                    <span class="required">*</span>
                    <a-button class="" id="sig-clearBtn">
                      Clear
                      <span class="line"> </span>
                    </a-button>
                    <canvas
                      id="sig-canvas"
                      width="620"
                      height="160"
                      @mouseover="sign"
                    >
                      Get a better browser, bro.
                    </canvas>

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
                </div> -->
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
                    v-show="ischeck"
                    v-if="this.current === steps[0].length - 1"
                  >
                    This is required field
                  </div>
                  <div
                    class="container-fluid signaturepart"
                    id="signaturepad"
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
      <!-- <div>
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
      </div> -->
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
            this.current > 1 && this.steps[0][this.current].saveDetails == true
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
    var d = new Date();
    let customDate = d.getFullYear();
    // console.log(customDate);
    // this.year = customDate
    for (let i = 1987; i <= customDate; i++) {
      // // console.log(i)
      this.year.push(i);
      // // console.log(this.year);
    }
    this.getdata();

    this.changedata();
    if (this.data != null) {
      this.editData();
    }
    this.fafundata();
    // console.log(this.relation)
    // console.log(this.primaryrelation)
  },
  // },
  components: {
    Footer,
    MinusCircleOutlined,
    VueGoogleAutocomplete,
  },

  data() {
    return {
      addressschool: "",
      schooladdress: "",
      schoolstatus: false,
      day: "",
      month: "",
      years: "",
      firstfield: "",
      year: [],
      savedetails: [],
      dynamicgender: "",
      dynamicday: "",
      dynamicmonth: "",
      dynamicyear: "",
      primaryrelation: "",
      common: "",
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
    opensignature() {
      document.getElementById("signaturepad").style.display = "block";
    },
    hidesignature() {
      document.getElementById("signaturepad").style.display = "none";
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
      this.dynamicday = value;
      // // console.log(this.day);
    },
    handlechange4(value) {
      // // console.log(value);
      this.dynamicmonth = value;
    },
    handlechange5(value) {
      this.dynamicyear = value;
      // console.log(this.dynamicyear);
    },
    handlechange6(value) {
      this.dynamicgender = value;
    },
    dynamicvalidation() {
      if (this.current === this.dynamicData) {
        //  // console.log(this.savedetails[0].Family[0])
        if (this.savedetails[0].Family[0] != undefined) {
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
                document.getElementById("firstnameerror").style.display =
                  "none";
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
      }
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
        // console.log(dataUrl);
        this.signaturedata = "";
        this.signaturedata = dataUrl;
        sigText.innerHTML = dataUrl;
        // sigImage.setAttribute("src", dataUrl);
        document.getElementById("signtext").value = this.signaturedata;
        if (
          this.relation === "Family_Members" ||
          this.relation === "Case_Worker" ||
          this.relation === "Doctor" ||
          this.relation === "Social_Worker"
        ) {
          // document.getElementById("signtext").value = this.signaturedata;
          document.getElementsByClassName("referralsign")[0].value = dataUrl;
        } else if (
          this.relation === "Mother" ||
          this.relation === "Father" ||
          this.relation === "Legal_Guardian"
        ) {
          // document.getElementById("signtext").value = this.signaturedata;
          document.getElementsByClassName("parentsign")[0].value = dataUrl;
        }
        // document.getElementById("signtext").value = this.signaturedata;
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
    signaturevalidation() {
      if (this.current === this.steps[0].length - 1) {
        for (
          let j = 0;
          j < this.steps[0][this.current].innerfield.length;
          j++
        ) {
          if (
            this.relation === "Mother" ||
            this.relation === "Father" ||
            this.relation === "Legal_Guardian"
          ) {
            if (
              this.steps[0][this.current].innerfield[j].name ==
              "parent_signature"
            ) {
              {
                // console.log(this.relation)
                var x = document.getElementsByClassName("parentsign")[0].value;
                // console.log(x);
                this.steps[0][this.current].innerfield[j].value =
                  document.getElementsByClassName("parentsign")[0].value;
                if (
                  document
                    .getElementsByClassName("parentsign")[0]
                    .value.trim() == "" ||
                  document.getElementsByClassName("parentsign")[0].value ==
                    "data:image/png;base64,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"
                ) {
                  (this.ischeck = true), (this.checkvalue = false);
                  // console.log("under if");
                }
              }
            }
          } else if (this.relation === "Family_Members") {
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
          } else if (
            this.relation === "Case Worker" ||
            this.relation === "Doctor" ||
            this.relation === "Social_Worker"
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
      }
    },
    changedata() {
      this.steps[0].map((data) => {
        data.innerfield.map((alldata) => {
          if (alldata.type === "picklist" && alldata.value === "") {
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
        }
        if (
          this.steps[0][this.current].innerfield[j].name === "schools_address"
        ) {
          var gx = document.getElementById("map5").value;
          var newgx = gx.replace(/[^a-zA-Z ]/g, "");
          this.schooladdress = newgx;
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
      // console.log(addressData);
      // for (let j = 0; j < this.steps[0][this.current].innerfield.length; j++) {
      //   if (
      //     this.steps[0][this.current].innerfield[j].name === "primary_address"
      //   ) {
      //     var gx = document.getElementById("mbap1").value;
      //     var newgx = gx.replace(/[^a-zA-Z ]/g, "");
      //     this.steps[0][this.current].innerfield[j].value = newgx;
      //   }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name === "primary_state"
      //   ) {
      //     var gx = addressData.administrative_area_level_1;
      //     this.steps[0][this.current].innerfield[j].value = gx;
      //   }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name === "childs_address"
      //   ) {
      //     var gx = document.getElementById("map2").value;
      //     var newgx = gx.replace(/[^a-zA-Z ]/g, "");
      //     this.steps[0][this.current].innerfield[j].value = newgx;
      //   }
      //   if (this.steps[0][this.current].innerfield[j].name === "childs_state") {
      //     var gx = addressData.administrative_area_level_1;
      //     this.steps[0][this.current].innerfield[j].value = gx;
      //   }
      //   // if (
      //   //   this.steps[0][this.current].innerfield[j].name ===
      //   //   "Seventh_Screen_post_code"
      //   // ) {
      //   //   var gx = addressData.postal_code;
      //   //   this.steps[0][this.current].innerfield[j].value = gx;
      //   // }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name ===
      //     "doctor_hospital_name"
      //   ) {
      //     var gx = document.getElementById("map3").value;

      //     var newgx = gx.replace(/[^a-zA-Z ]/g, "");

      //     this.steps[0][this.current].innerfield[j].value = newgx;
      //   }
      //   if (
      //     this.steps[0][this.current].innerfield[j].postCodeIdentifier ===
      //     "post_code"
      //   ) {
      //     var gx = addressData.postal_code;
      //     this.steps[0][this.current].innerfield[j].value = gx;
      //   }
      //   // if (
      //   //   this.steps[0][this.current].innerfield[j].name ===
      //   //   "Third_Screen_post_code"
      //   // ) {
      //   //   var gx = addressData.postal_code;
      //   //   this.steps[0][this.current].innerfield[j].value = gx;
      //   // }
      //   // if (
      //   //   this.steps[0][this.current].innerfield[j].name === "schools_post_code"
      //   // ) {
      //   //   var gx = addressData.postal_code;
      //   //   this.steps[0][this.current].innerfield[j].value = gx;
      //   // }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name ===
      //     "social_hospital_name"
      //   ) {
      //     var gx = document.getElementById("map4").value;
      //     var newgx = gx.replace(/[^a-zA-Z ]/g, "");
      //   }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name === "schools_address"
      //   ) {
      //     var gx = document.getElementById("map5").value;
      //     var newgx = gx.replace(/[^a-zA-Z ]/g, "");
      //   }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name === "schools_state"
      //   ) {
      //     var gx = addressData.administrative_area_level_1;
      //     this.steps[0][this.current].innerfield[j].value = gx;
      //   }
      //   if (
      //     this.steps[0][this.current].innerfield[j].name === "parent_address"
      //   ) {
      //     var gx = document.getElementById("map6").value;

      //     var newgx = gx.replace(/[^a-zA-Z ]/g, "");

      //     this.steps[0][this.current].innerfield[j].value = newgx;
      //   }
      //   if (this.steps[0][this.current].innerfield[j].name === "parent_state") {
      //     var gx = addressData.administrative_area_level_1;
      //     this.steps[0][this.current].innerfield[j].value = gx;
      //   }
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
    disabledDate(current) {
      var d = new Date();
      let customDate = d.getFullYear();
      return current && current > moment(customDate, "YYYY");
    },
    checkValueField(e) {
      this.checkedValue = e.target.checked;
    },
    testing(item) {
      for (let i = 0; i < this.steps[0].length; i++) {
        console.log(this.steps[0][1].innerfield[0].name);
        for (let j = 0; j < this.steps[0][i].innerfield.length; j++) {
          //  console.log(this.steps[0][i].innerfield[j].name)
          if (this.steps[0][i].innerfield[j].name == "schools_address") {
            console.log(this.steps[0][i].innerfield[j].value);
            this.schooladdress = this.steps[0][i].innerfield[j].value;
          }
          if (document.body.contains(document.getElementById("map5"))) {
          }
        }
        // setTimeout(() => {
        //     if (
        //      (document.body.contains(document.getElementById("map5")))
        //   ) {
        //     console.log('worked bro')
        //         this.addressschool =  this.steps[0].innerfield[j].value
        //          var newgx = this.addressschool.replace(/[^a-zA-Z ]/g, "");
        //         console.log(newgx)
        //     var check2 = this.steps[0][this.current].innerfield[j].value
        //     console.log(check2)
        //       console.log(this.steps[0][this.current].innerfield[j].value)
        //     console.log(this.steps[0][this.current].innerfield[1].value)
        //     var check1 = this.steps[0][this.current].innerfield[1].value;
        //     console.log(check1)
        //     document.getElementById("map5").value = check1;
        //     if(check1 === ''){
        //       this.schoolstatus = true
        //     }
        //     else{
        //       this.schoolstatus = false
        //     }
        //   }
        // },1000)
      }
      var idvar = setInterval(() => {
        if (document.body.contains(document.getElementById("map5"))) {
          console.log(this.schooladdress);
          if (document.getElementById("map5").value == "") {
            document.getElementById("map5").value = this.schooladdress;
          } else if (document.getElementById("map5").value != "") {
            clearInterval(idvar);
          }
          // if( document.getElementById("map5").value != ''){
          //   clearInterval(idvar);          }
        }
      }, 1000);
      if (this.current > 1) {
        if (
          this.relation === "Mother" ||
          this.relation === "Father" ||
          this.relation === "Legal_Guardian"
        ) {
          var gx = this.steps[0][1].innerfield[0].value;
          var newgx = gx.replace(/[^a-zA-Z ]/g, "");
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
    success() {
      message.success("This is a success message");
    },
    errormessage() {
      message.error("This is an error message");
    },
    getdata(current) {
      console.log(this.data);
      this.isLoading = false;
      this.steps.push(this.data);
      this.primaryrelation = this.data[0].innerfield[0].value;
      if (
        this.relation === "Mother" ||
        this.relation === "Father" ||
        this.relation === "Legal_Guardian"
      ) {
        var gx = this.steps[0][1].innerfield[0].value;
      } else {
        var gx = this.steps[0][2].innerfield[0].value;
      }
      var newgx = gx.replace(/[^a-zA-Z ]/g, "");
      this.firstfield = newgx;
      // console.log(this.firstfield)
      var idvar = setInterval(() => {
        if (document.body.contains(document.getElementById("map1"))) {
          // console.log('exist')
          document.getElementById("map1").value = newgx;
          if (document.getElementById("map1").value != "") {
            clearInterval(idvar);
            this.firstfield = "";
          }
        }
      }, 1000);
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
      // console.log("domain");
      this.dynamicValidateForm.domains.push({
        error: "All fields are required",
        relation: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: undefined,
      });
      // // console.log(this.dynamicValidateForm.domains);
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
            // console.log(this.steps[0][this.current].innerfield[j].value);
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
            this.steps[0][this.current].innerfield[j].name === "parent_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            document.getElementById("map6").value = check1;
          }
          if (document.body.contains(document.getElementById("map5"))) {
            var check1 = this.steps[0][this.current].innerfield[1].value;
            document.getElementById("map5").value = check1;
            if (check1 === "") {
              this.schoolstatus = true;
            } else {
              this.schoolstatus = false;
            }
          }
        }, 100);
      }
      if (this.schoolstatus) {
        // console.log('worked school')
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
      this.dynamicvalidation();
      this.socialvalidation();
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
            document.getElementById("map3").value.trim() === "" &&
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
          // var check1 = this.steps[0][this.current].innerfield[j].value;
          // // console.log(check1);
          // // console.log("childs_address");
          // document.getElementById("map6").value = check1;
        }
        // else if (
        //   this.primaryrelation === "Legal Guardian" &&
        //   this.steps[0][this.current].innerfield[j].name == "parent_signature"
        // ) {
        //   // console.log("legal");
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
        // } else if (
        //   this.primaryrelation === "Family Members" &&
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

        //      if (
        //   this.primaryrelation === "Medical Team" &&
        //   this.steps[0][this.current].innerfield[j].name == "referral_signature"
        // ) {

        //   // console.log(this.primaryrelation)
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
        //  else if (
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
        // else if (
        //   this.primaryrelation === "Medical Team" &&
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
        //  }
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
        }
        // if (this.steps[0][this.current].innerfield[j].type == "date") {
        //   let today = new Date().toLocaleDateString();
        //   // // console.log(today);
        //   // // console.log(this.steps[0][this.current].innerfield[j].value)
        //   if (
        //     this.steps[0][this.current].innerfield[j].required === true &&
        //     (this.steps[0][this.current].innerfield[j].value === "" ||
        //       this.steps[0][this.current].innerfield[j].value === null)
        //   ) {
        //     (this.ischeck = true), (this.checkvalue = false);
        //   }
        // }
        else if (this.steps[0][this.current].innerfield[j].type == "picklist") {
          // let today = new Date().toLocaleDateString();
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
          }
        }
      }
      if (this.checkEmailStatus == true) {
        if (this.checkvalue == true) {
          this.ischeck = false;
          this.handleSubmit();
          if (this.steps[0][this.current].saveDetails != true) {
            if (
              this.current == 3 &&
              this.steps[0][3].innerfield[0].value == "Yes"
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
            // console.log(this.steps[0]);
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
                Family: this.dynamicValidateForm.domains,
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
            this.savedetails.push(saveDetailss);
            // console.log(this.savedetails)
            var data = JSON.stringify(saveDetailss);

            //  // console.log(data);
            //  // console.log("working");
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
                  // console.log(response);
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
                // // console.log(JSON.stringify(response));
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
                // console.log(error);
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
      var idvar = setInterval(() => {
        if (document.body.contains(document.getElementById("map5"))) {
          // console.log( this.schooladdress)
          // console.log('exist')
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
            // console.log("in current");
            document.getElementById("map1").value = check;
            //  hospital1 = "kishan"
          }
          if (
            this.steps[0][this.current].innerfield[j].name === "childs_address"
          ) {
            var check1 = this.steps[0][this.current].innerfield[j].value;
            // console.log(check1);
            // console.log("in childaddress");
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
            var check1 = this.steps[0][this.current].innerfield[j].value;
            // console.log("schools_address");
            document.getElementById("map5").value = check1;
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
    },
    fafundata() {
      this.dyField.map((data) => {
        this.dynamicValidateForm.domains.push(data);
      });
    },
    editData() {
      this.Details = [];
      this.steps[0].map((data, index) => {
        // // console.log(data.saved, index);
        if (
          data.saved == true &&
          data.saveDetails == true &&
          data.groups != "None"
        ) {
          var groupdata = {
            groupName: data.groups,
            index: index,
            status: true,
          };
          this.Details.push(groupdata);
          // console.log(this.Details);
        }
      });
      // console.log(this.steps[0]);
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
      // if (data == "child_lives_with_you") {
      //   if (this.steps[0][3].innerfield[0].value == "No") {
      //     this.steps[0][3].innerfield[0].value = "";
      //     this.steps[0][4].innerfield[1].value = "";
      //     this.steps[0][4].innerfield[2].value = "";
      //   } else {
      //     this.steps[0][4].innerfield[0].value = this.steps[0][1].innerfield[0].value;
      //     this.steps[0][4].innerfield[1].value = this.steps[0][1].innerfield[1].value;
      //     this.steps[0][4].innerfield[2].value = this.steps[0][1].innerfield[2].value;
      //   }
      // }
      return data;
    },
    handleSubmit() {
      this.steps[0].map((data, index) => {
        data.innerfield.map((inData) => {
          if (inData.name == "childs_first_name") {
            //  // console.log(inData.name);
            this.childName = inData.value;
            //  // console.log(inData.value);
          }
          if (inData.type == "checkbox") {
            //  // console.log(inData.value);
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
