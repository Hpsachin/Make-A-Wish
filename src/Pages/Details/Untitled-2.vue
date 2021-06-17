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
                          <div
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
                          </div>
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
                      </div>
                      <div v-else-if="alldata.name === 'schools_post_code'">
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
                      </div>
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
                      </div>
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
                        <a-select
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
                        </a-select>
                        <!-- <a-date-picker
                          class="mt-3 mb-3"
                          :placeholder="alldata.placeholder"
                          type="date"
                          :disabled-date="disabledDate"
                          v-model:value="alldata.value"
                        /> -->

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
                      {{this.dynamicData}}
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
                            <a-select
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
                            </a-select>
                            <!-- <a-date-picker
                              class="mt-3 mb-3"
                              placeholder="DOB"
                              type="date"
                              v-model:value="domain.dob"
                              :disabled-date="disabledDate"
                              id="staticcalender"
                            /> -->
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
                           domain.day == '' &&
                            domain.month == '' &&
                            domain.relation == '' &&
                            domain.year == '' &&
                            domain.gender == undefined) || (domain.firstName != '' &&
                           domain.lastName != '' &&
                        domain.gender != undefined &&
                       domain.relation != '' &&
                        domain.day != '' &&
                        domain.month != '' &&
                          domain.year != '')
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