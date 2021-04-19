<template>
  <div style="padding: 20px" class="container-fluid dashboard">
    <h1 class="dashboard-heading">Dashboard</h1>
    <!-- <h1>UserName -- {{gettersAuthData.userName}} </h1>
         <h1>Id  -- {{gettersAuthData.userId}} </h1> -->
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
    <!-- <h1>{{xlabels}} </h1>
<h1> {{clabel}}</h1> -->
    <!-- <a-range-picker v-model:value="rangedate" /> -->
    <a-range-picker v-model:value="value4" :format="dateFormat" />
    <a-button @click="apply">Apply </a-button>
    <!-- <a-button>Cancel </a-button> -->
    <a-button @click="refresh">Refresh </a-button>
    <canvas id="planet-chart" v-show="planetchart"></canvas>
    <canvas id="planet-chart1" v-show="planetchart1">Chart</canvas>
    <!-- <canvas :width="width" :height="height" :id="id"></canvas> -->
  </div>
</template>
<script>
/* eslint-disable */
// import store from '../../store/store'
import "./Dashboard.css";
 import Chart from "chart.js";
import { ref } from "vue";
import moment from "moment";
// import planetChartData from './chart-data.js';
import { mapGetters, mapActions } from "vuex";
import {
  ExclamationCircleOutlined,
  CheckCircleFilled,
  ProfileFilled,
} from "@ant-design/icons-vue";
const dateFormat = "YYYY-MM-DD";
const monthFormat = "YYYY-MM";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
//  var startDate = "2015-08-04";
//  var endDate = "2015-08-12";
const xlabels = [];
const chartdata = [];
const yapplied = [];
const yapproved = [];
const ypending = [];
// const START_DATE = "08/01/2019";
// const END_DATE = "09/01/2019";
// const backgroundColorapplied =
// console.log(chartdata.map( date => {return date.dateValue}))
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
            padding: 25,
          },
        },
      ],
    },
  },
};
const xfilterlabels = [];
const testing = [];
const yfilterapplied = [];
const yfilterapproved = [];
const yfilterpending = [];
const filterchartdata = {
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
            padding: 25,
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
  },

  mounted() {
    console.log(this.allData[0].Data)
    this.chartdata.push(this.allData[0].Data);
       for (let i = 0; i < this.allData[0].Data.length; i++) {
          this.xlabels.push(this.allData[0].Data[i].dateValue);
          this.yapplied.push(this.allData[0].Data[i].applied);
          this.yapproved.push(this.allData[0].Data[i].approved);
          this.ypending.push(this.allData[0].Data[i].pending);
        }
     this.createChart("planet-chart", this.planetChartData);

    // console.log(document.cookie);
    // if (localStorage.getItem("loginname") === null) {
    //   this.$router.push("/loginform");
    // }
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "BrowserId=hliLB0jxEeu6r_2Vywr3ng");
    // var raw = JSON.stringify({
    //   username: "kishansinghkks7@gmail.com",
    //   role: "Medical Specialist",
    // });
    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: "follow",
    // };
    // fetch(
    //   "https://humanpixel-mawau.cs58.force.com/services/apexrest/DashboardDetailRestService",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => {
    //     // console.log(result)
    //     var allData = JSON.parse(result);
    //     this.Applied = allData.Applied;
    //     this.Approved = allData.Approved;
    //     this.Pending = allData.Pending;
    //     console.log(allData.Data);
    //     for (let i = 0; i < allData.Data.length; i++) {
    //       this.xlabels.push(allData.Data[i].dateValue);
    //       this.yapplied.push(allData.Data[i].applied);
    //       this.yapproved.push(allData.Data[i].approved);
    //       this.ypending.push(allData.Data[i].pending);
    //     }
    //     this.chartdata.push(allData.Data);
    //   })
    //   .then(() => {
    //     this.createChart("planet-chart", this.planetChartData);
    //   })
    //   .catch((error) => console.log("error", error));
  },
  created() {
    console.log(localStorage.getItem("loginname"));
    console.log(localStorage.getItem("statuscode"));
    this.role = localStorage.getItem("role");
  },
  data() {
    return {
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
      rangedate: [],
      dateFormat,
      monthFormat,
      dateFormatList,
      moment,
      allData: [{
    "Status": "Success",
    "StatusCode": "200",
    "Profile Details": {
        "Name": "Atul Rai",
        "Email": "kishansinghkks7@gmail.com",
        "Phone": "7827918129",
        "Hospital": "Vedanta Hospital",
        "Department": "Cardiology"
    },
    "Approved": "48",
    "Pending": "4",
    "Applied": "53",
    "Data": [
        {
            "pending": 0,
            "month": "3",
            "dateValue": "2021-03-06",
            "approved": 1,
            "applied": 1
        },
        {
            "pending": 0,
            "month": "3",
            "dateValue": "2021-03-05",
            "approved": 2,
            "applied": 2
        },
        {
            "pending": 0,
            "month": "3",
            "dateValue": "2021-03-04",
            "approved": 3,
            "applied": 3
        },
        {
            "pending": 0,
            "month": "3",
            "dateValue": "2021-03-03",
            "approved": 4,
            "applied": 4
        },
        {
            "pending": 0,
            "month": "3",
            "dateValue": "2021-03-02",
            "approved": 5,
            "applied": 5
        },
        {
            "pending": 0,
            "month": "3",
            "dateValue": "2021-03-01",
            "approved": 6,
            "applied": 6
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-28",
            "approved": 7,
            "applied": 7
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-27",
            "approved": 8,
            "applied": 8
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-26",
            "approved": 5,
            "applied": 5
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-25",
            "approved": 4,
            "applied": 4
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-24",
            "approved": 1,
            "applied": 1
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-22",
            "approved": 1,
            "applied": 2
        },
        {
            "pending": 0,
            "month": "2",
            "dateValue": "2021-02-21",
            "approved": 1,
            "applied": 1
        },
        {
            "pending": 1,
            "month": "2",
            "dateValue": "2021-02-21",
            "approved": 0,
            "applied": 1
        },
        {
            "pending": 1,
            "month": "2",
            "dateValue": "2021-02-15",
            "approved": 0,
            "applied": 1
        },
        {
            "pending": 2,
            "month": "2",
            "dateValue": "2021-02-15",
            "approved": 0,
            "applied": 2
        }
    ]
}],
      value4: ref([
        moment("2021-03-05", dateFormat),
        moment("2021-03-06", dateFormat),
      ]),
    };
  },
  methods: {
    // createChart(chartId, chartData) {
    //   const ctx = document.getElementById(chartId);
    //   const myChart = new Chart(ctx, {
    //     type: chartData.type,
    //     data: chartData.data,
    //     datasets: chartData.datasets,
    //     options: chartData.options,
    //   });
    // },
    refresh() {
      this.planetchart1 = false;
      this.planetchart = true;
      //  this.filterchartdata= null
      // this.xfilterlabels = [];
      // this.yfilterapplied = [];
      // this.yfilterapproved = [];
      // this.yfilterpending = [];
    },
        createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        datasets:chartData.datasets,
        options: chartData.options,
      });
    },
    apply() {
      this.planetchart = false;
      this.planetchart1 = true;
      var startdate = moment(this.value4[0]);
      var newstartdate = startdate.format("YYYY-MM-DD");
      var enddate = moment(this.value4[1]);
      var newenddate = enddate.format("YYYY-MM-DD");
      console.log(this.chartdata);

      const result = this.chartdata[0].filter((item) => {
         var testing = []

        if (item.dateValue >= newstartdate && item.dateValue <= newenddate) {
              // if(testing == []){
           testing.push(item);
          for (let x = 0; x < testing.length; x++) {
            console.log(testing[x]);
            this.xfilterlabels.push(testing[x].dateValue);
            this.yfilterapplied.push(testing[x].applied);
            this.yfilterapproved.push(testing[x].approved);
            this.yfilterpending.push(testing[x].pending);
          }
            // }
        }
      });
       this.createChart("planet-chart1", this.filterchartdata);
    },
  },
  watch: {
  chartData () {
    this.$data._chart.update()
  }
},
  computed: {
    //   apply(){
    // }
  },
};
</script>
<style scoped>
.anticon-profile {
  font-size: 46px !important;
  color: #ec6393 !important;
}
.chartjs-render-monitor {
  padding: 23px;
  display: block;
  height: 571px;
  width: 1143px;
  margin-top: 32px;
  border: 6px solid red;
  background: white;
}
</style>
