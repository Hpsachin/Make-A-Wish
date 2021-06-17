/* eslint-disable */
<template>
  <section class="section1">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <a-form>
          <a-form-item>
            <a-input placeholder="Firstname"> </a-input>
          </a-form-item>
          <a-form-item>
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
          </a-form-item>
          <a-button
            html-type="submit"
            class="next"
            @click="next"

          >
            Submit
          </a-button>
        </a-form>
      </div>
    </div>
  </section>
  <!-- <router-link  to="/child"><div class="back">  Back</div></router-link> -->
</template>
<script>
/* eslint-disable */
export default {
  name: "Consentvalidation",
  data() {
    return {
      day: "",
      month: "",
      years: "",
      year: [],
    };
  },
  mounted() {
    var d = new Date();
    let customDate = d.getFullYear();
    console.log(customDate);
    for (let i = 1987; i <= customDate; i++) {
      this.year.push(i);
    }
  },
  methods: {
    handlechange(value) {
      this.day = value;
      console.log(this.day);
    },
    handlechange1(value) {
      console.log(value);
      this.month = value;
    },
    handlechange2(value) {
      console.log(value);
      this.years = value;
    },
  },
};
</script>