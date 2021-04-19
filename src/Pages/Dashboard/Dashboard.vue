<template>
 <div class="loader loader-1" v-show="isLoading">
      <div class="loader-outter"></div>
      <div class="loader-inner"></div>
    </div>
  <div style="padding: 20px" class="container-fluid dashboard" v-if="this.status">
    <h1 class="dashboard-heading">Dashboard</h1>
    <a-row :gutter="[24, 24]">
      <a-col :span="8">
        <a-card title="" :bordered="false">
          <a-row type="flex" align="middle">
            <a-col :span="16">
              <div class="left">
                <h2>Pending</h2>
                <h4>{{ Pending }}</h4>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="right">
                <h3><ExclamationCircleOutlined /></h3>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>

      <a-col :span="8">
        <a-card title="" :bordered="false">
          <a-row type="flex" align="middle">
            <a-col :span="16">
              <div class="left">
                <h2>Approved</h2>
                <h4>{{ Approved }}</h4>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="right">
                <h3><CheckCircleFilled /></h3>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card title="" :bordered="false">
          <a-row type="flex" align="middle">
            <a-col :span="16">
              <div class="left">
                <h2>Applied</h2>
                <h4>{{ Applied }}</h4>
              </div>
            </a-col>
            <a-col :span="8">
              <div class="right">
                <h3><ProfileFilled /></h3>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <div class="chartsdata mt-4">
      <div class="filters d-inline">
        <a-range-picker
          v-model:value="value4"
          :format="dateFormat"
          class="dashboard-range"
          @change="checkdata"
        />
        <a-button class="apply" :disabled="isdisable"  @click="apply">Apply </a-button>
        <a-button class="refresh" @click="refresh">Clear Filter</a-button>
      </div>
      <canvas id="planet-chart" v-show="planetchart"></canvas>
      <canvas id="planet-chart1" v-show="planetchart1">Chart</canvas>
    </div>
  </div>
  <div v-else>
    <router-link :to="'/loginform'"></router-link>
  </div>
</template>
<script>
/* eslint-disable */
// import store from '../../store/store'
import "./Dashboard.css";
//  import VueApexCharts from "vue3-apexcharts";
import Chart from "chart.js";
import { ref } from "vue";
import moment from "moment";
// import planetChartData from './chart-data.js';
import { mapGetters, mapActions } from "vuex";
import {
  ExclamationCircleOutlined,
  CheckCircleFilled,
  ProfileFilled,
  ReloadOutlined,
} from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
const dateFormat = "YYYY-MM-DD";
const monthFormat = "YYYY-MM";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
//  var startDate = "2015-08-04";
//  var endDate = "2015-08-12";
var xlabels = [];
var chartdata = [];
var yapplied = [];
var yapproved = [];
var ypending = [];
const planetChartData = {
  type: "bar",
  data: {
    labels: xlabels,
    datasets: [
      {
        label: "Applied",
        data: yapplied,
        backgroundColor: "#EC6393",
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 2,
      },
      {
        label: "Approved",
        data: yapproved,
        backgroundColor: "rgba(0,148,5)",
        //  hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //  borderColor: "rgba(255,99,132,1)",
        // borderWidth: 2,
      },
      {
        label: "Pending",
        data: ypending,
        backgroundColor: "rgba(207,187,4)",
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            // steps: 4,
            stepSize: 1,
            // max: 30,
            userCallback: function (label, index, labels) {
              // when the floored value is the same as the value we have a whole number
              if (Math.floor(label) === label) {
                return label;
              }
            },
          },
          ticks: {
            // beginAtZero: true,
            //  callback: function( index) {
            //     return '';
            // },
          },
        },
      ],
      // xAxes: [
      //   {
      //     display: false, //this will remove all the x-axis grid lines
      //   },
      // ],
    },
  },
};
var xfilterlabels = [];
var testing = [];
var yfilterapplied = [];
var yfilterapproved = [];
var yfilterpending = [];
var filterchartdata = {
  type: "bar",
  data: {
    labels: xfilterlabels,
    datasets: [
      {
        label: "Applied",
        data: yfilterapplied,
        backgroundColor: "#EC6393",
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 2,
      },
      {
        label: "Approved",
        data: yfilterapproved,
        backgroundColor: "rgba(0,148,5)",
        //  hoverBackgroundColor: "rgba(255,99,132,0.4)",
        //  borderColor: "rgba(255,99,132,1)",
        // borderWidth: 2,
      },
      {
        label: "Pending",
        data: yfilterpending,
        backgroundColor: "rgba(207,187,4)",
        // hoverBackgroundColor: "rgba(255,99,132,0.4)",
        // borderColor: "rgba(255,99,132,1)",
        // borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    lineTension: 1,
    scales: {
      yAxes: [
        {
            ticks: {
            beginAtZero: true,
            stepSize: 1,
            userCallback: function (label, index, labels) {
              // when the floored value is the same as the value we have a whole number
              if (Math.floor(label) === label) {
                return label;
              }
            },
          },
           ticks: {
            // beginAtZero: true,
            //  callback: function( index) {
            //     return '';
            // },
          },
        },
      ],
    },
  },
};

export default {
  // props: ['id','width','height','type','title','labels','data', 'fill', 'backgroundColor', 'borderColor', 'borderWidth'],
  name: "Dashboard",
  components: {
    ExclamationCircleOutlined,
    CheckCircleFilled,
    ProfileFilled,
    ReloadOutlined,
  },

  mounted() {
     if (localStorage.getItem("loginname") === null) {
      console.log(localStorage.getItem("loginname"))
      this.$router.push("/loginform");
    }
    else {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "BrowserId=hliLB0jxEeu6r_2Vywr3ng");
    var raw = JSON.stringify({
      username: this.loginemail,
      role: this.role,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "https://humanpixel-mawau.cs58.force.com/services/apexrest/DashboardDetailRestService",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        // this.isLoading = false
         console.log(result)
        var allData = JSON.parse(result);
        console.log(allData)
        if(allData.StatusCode == 200){
           this.Applied = allData.Applied;
        this.Approved = allData.Approved;
        this.Pending = allData.Pending;
        console.log(allData.Data);
        this.chartdata.push(allData.Data);
        console.log(this.chartdata);

        var rangedate = [];
        for (
          let i = 0;
          i < (allData.Data.length < 7 ? allData.Data.length : 7);
          i++
        ) {
          rangedate.push(allData.Data[i]);
        }
        console.log(rangedate);
        if (rangedate.length != 0) {
          for (let i = 0; i < rangedate.length; i++) {
            this.xlabels.pop(rangedate[i].dateValue);
            this.yapplied.pop(rangedate[i].applied);
            this.yapproved.pop(rangedate[i].approved);
            this.ypending.pop(rangedate[i].pending);
          }
        }
        for (let i = 0; i < rangedate.length; i++) {
          this.xlabels.push(rangedate[i].dateValue);
          this.yapplied.push(rangedate[i].applied);
          this.yapproved.push(rangedate[i].approved);
          this.ypending.push(rangedate[i].pending);
        }
        }
        else{
          message.error(allData.Message)
        }
      })
      .then(() => {
        this.isLoading = false;
        this.createChart("planet-chart", this.planetChartData);

        // })
      })
      .catch((error) => console.log("error", error));
    }
    const EXPIRE_TIME = 1000*60*60;
     setTimeout(function () {
      localStorage.removeItem("loginname");
       localStorage.removeItem("loginemail");
         localStorage.removeItem("role");
    }, EXPIRE_TIME);
  },
  created() {
     this.loginemail = localStorage.getItem("loginemail");
    this.loginname = localStorage.getItem("loginname");
    this.role = localStorage.getItem("role");
    // console.log(localStorage.getItem("loginname"));
    // console.log(localStorage.getItem("statuscode"));
      if(localStorage.getItem("loginname") != null){
      this.status = true
    }

  },
  data() {
    return {
      isdisable: true,
      status : false,
      loginemail: '',
      temp: 0,
      planetchart1: false,
      planetchart: true,
      testing,
      chartdata,
      loggedin: "",
      planetChartData,
      filterchartdata,
      xfilterlabels,
      yfilterapplied,
      yfilterapproved,
      yfilterpending,
      role: "",
      Applied: 0,
      Approved: 0,
      Pending: 0,
      xlabels,
      yapplied,
      yapproved,
      ypending,
      dateFormat,
      monthFormat,
      dateFormatList,
      moment,
      isLoading: true,
      value4: []

      // value4: ref([
      //   moment("YYYY-MM-DD", dateFormat),
      //   moment("YYYY-MM-DD", dateFormat),
      // ]),
    };
  },
  methods: {
    checkdata(){
 if(this.value4 != []){
   this.isdisable = false
 }
    },
    createChart(chartId, chartData) {
      const ctx = document.getElementById("planet-chart");
      window.myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        datasets: chartData.datasets,
        options: chartData.options,
      });
    },
    createChart1(chartId, chartData) {
      const ctx = document.getElementById("planet-chart1");
      window.myChart1 = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        datasets: chartData.datasets,
        options: chartData.options,
      });
    },
    refresh() {
      this.planetchart1 = false;
      this.planetchart = true;
      this.value4= []
       this.isdisable = true
      //  this.filterchartdata= null
      // this.xfilterlabels = [];
      // this.yfilterapplied = [];
      // this.yfilterapproved = [];
      // this.yfilterpending = [];
    },
    //     createChart(chartId, chartData) {
    //   const ctx = document.getElementById(chartId);
    //   const myChart = new Chart(ctx, {
    //     type: chartData.type,
    //     data: chartData.data,
    //     datasets:chartData.datasets,
    //     options: chartData.options,
    //   });
    // },

    apply() {
      console.log(this.value4)
      var testing = [];
      for (let x = 0; x < this.temp; x++) {
        this.xfilterlabels.pop();
        this.yfilterapplied.pop();
        this.yfilterapproved.pop();
        this.yfilterpending.pop();
      }
      this.planetchart = false;
      this.planetchart1 = true;
      // var startdate = moment(this.value4[0]);
        var startdate = this.value4[0];
      var newstartdate = startdate.format("YYYY-MM-DD");
      // var enddate = moment(this.value4[1]);
       var enddate = this.value4[1];
      var newenddate = enddate.format("YYYY-MM-DD");
      // console.log(this.chartdata);
      const result = this.chartdata[0].filter((item) => {
        if (item.dateValue >= newstartdate && item.dateValue <= newenddate) {
          testing.push(item);
          // console.log(testing.length);
          this.temp = testing.length;
        }
      });
      for (let x = 0; x < testing.length; x++) {
        this.xfilterlabels.push(testing[x].dateValue);
        this.yfilterapplied.push(testing[x].applied);
        this.yfilterapproved.push(testing[x].approved);
        this.yfilterpending.push(testing[x].pending);
      }
      if (window.myChart1) window.myChart1.destroy();
      setTimeout(() => {
        this.createChart1("planet-chart1", this.filterchartdata);
      });
      this.temp = testing.length;
    },
  },
  computed: {
    //   apply(){
    // }
  },
};
</script>
<style >
.right .anticon-profile {
  font-size: 46px !important;
  color: #ec6393 !important;
}
.filters {
  float: right;
  text-align: right;
  margin: 12px 0px;
}
.chartjs-render-monitor {
  padding: 23px;
  /* display: block; */
  height: 571px;
  width: 1143px;
  margin-top: 32px;
  /* border: 1px solid red; */
}
.chartsdata {
  padding-top: 12px;
  background: white;
  box-shadow: 0px 0px 34px 2px #eceff4;
}
.filters .ant-calendar-picker {
  width: 60% !important;
  margin-bottom: 12px;
}
.filters .apply {
  margin: 0px 12px;
}
</style>
