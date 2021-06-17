<template>
<div class="loader loader-1" v-show="isLoading">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
  <div style="padding: 20px" class="container-fluid appointments" v-if="this.status">
    <a-row>
      <a-col :xs="24" :sm="4" :md="6" :lg="12"> <h1 class="dashboard-heading">Appointments</h1></a-col>
      <a-col :xs="24" :sm="4" :md="18" :lg="12"
        ><div class="search-box">
          <div class="searchinput">
           <a-input-search
      v-model:value="applicationnum"
      placeholder="Search Application No..."
      @search="onSearch"
    />
          </div>
          <a-button @click="search" class="searchbtn"> Search </a-button>
            <a-button @click="reset" class="searchbtn"> Reset</a-button>
        </div></a-col
      >
    </a-row>
    <a-table
      :columns="columns"
      @change="onChange"
       data: dataSource, run, loading, current, pageSize
      :dataSource="data[0]"
    >
      <template #action="{ text }">
        <router-link :to="`/detail/${text.Application_Number}`" @click="details"
          >Detail
        </router-link>
      </template>
    </a-table>
  </div>
  <div v-else>   <router-link :to="'/loginform'"></router-link> </div>
</template>
<script>
/* eslint-disable */
import "./Appointments.css";
import { SearchOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import { usePagination } from 'vue-request';
const columns = [
  {
    title: "Application No",
    dataIndex: "Application_Number",
     responsive: ["sm"]
  },

  {
    title: "Name",
    dataIndex: "childName",
     responsive: ["sm"]
  },

  {
    title: "DOB",
    dataIndex: "childDOB",
     responsive: ["sm"],
  },
  // {
  //   title: "Relation with child",
  //   dataIndex: "Relationship",
  //    responsive: ["sm"],
  //   filters: [
  //     {
  //       text: "Father",
  //       value: "Father",
  //     },
  //     {
  //       text: "Mother",
  //       value: "Mother",
  //     },
  //     {
  //       text: "Legal Guardian",
  //       value: "Legal Guardian",
  //     },
  //     {
  //       text: "Child",
  //       value: "Child",
  //     },
  //     {
  //       text: "Family Members",
  //       value: "Family Members",
  //     },
  //     {
  //       text: "Doctor",
  //       value: "Doctor",
  //     },
  //     {
  //       text: "Family Members",
  //       value: "Family Members",
  //     },
  //     {
  //       text: "Social Worker",
  //       value: "Social Worker",
  //     },
  //   ],
  //   onFilter: (value, record) => record.Relationship.indexOf(value) === 0,
  // },

  {
    title: "Status",
    dataIndex: "Status",
     responsive: ["sm"],
    filters: [
      {
        text: "Approved",
        value: "Approved",
      },
      {
        text: "Pending",
        value: "Pending",
      },
      {
        text: "Rejected",
        value: "Rejected",
      },
    ],
    onFilter: (value, record) => record.Status.indexOf(value) === 0,
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    slots: { customRender: "action" },
  },
];
const data = [
];
// const data1 =[

// ]

function onChange(pagination, filters, sorter, value) {
  this.pagesize = this.pagesize+1
      //  this.getdata()
};
export default {
  name: "Appointment",
  components: {
    SearchOutlined,
  },
created (){
this.loginemail =  localStorage.getItem("loginemail");
    this.loginname = localStorage.getItem("loginname");
    this.role = localStorage.getItem("role");
       if(localStorage.getItem("loginname") != null){
      this.status = true
    }
  const EXPIRE_TIME = 1000*60*60;
     setTimeout(function () {
      localStorage.removeItem("loginname");
       localStorage.removeItem("loginemail");
         localStorage.removeItem("role");
    }, EXPIRE_TIME);
},
  mounted() {
    this.getdata()
  },
  data() {
    return {
      pagesize: 20,
      current : 1,
      role : '',
      isLoading:true,
      loginemail:'',
      temp:'',
      ishow: false,
      applicationnum: "",
      searchQuery: null,
      data,
      data1:[],
      status: false,
      columns,
      last: ''
    };
  },
  methods: {
     getdata(){
 if (localStorage.getItem("loginname") === null) {
      console.log(localStorage.getItem("loginname"))
      this.$router.push("/loginform");
    }
else {
    var myHeaders = new Headers();
    var raw = JSON.stringify({ Email:this.loginemail});
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `https://humanpixel-mawau.cs58.force.com/services/apexrest/ApplicationListRestService?role=${this.role}&offsetLimit=0&limit=${this.pagesize}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
      this.isLoading = false
        var data = JSON.parse(result);
         console.log(data.Record)
        this.data = [];
        this.data.push(data.Record);
         this.temp =  this.data
         console.log(this.temp)
        console.log(this.data);
      })
      .catch((error) => console.log("error", error));
}
     },
     onChange,
    reset(){
      console.log(this.temp)
     this.data = this.temp
     this.applicationnum = ''
    },
    getclickeditem() {
      for (let i = 0; i < data.length; i++) {
        console.log(this.$route.params.id);
      }
    },
    search(){
      console.log(this.loginemail)
      var member = this.applicationnum;
var last2 = member.slice(-3);
this.last = last2
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "BrowserId=hliLB0jxEeu6r_2Vywr3ng");

var raw = JSON.stringify({"query": this.last,"username":this.loginemail,"role":this.role});
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://humanpixel-mawau.cs58.force.com/services/apexrest/ApplicationSearchRestService", requestOptions)
  .then(response => response.text())
  .then(result =>{
    var deta = JSON.parse(result);
     console.log(deta)
    if(deta.StatusCode == 200){
       this.data = []
    this.data.push(deta.Record)
    this.ishow = true
    }
    else if(deta.StatusCode != 200){
      message.error(deta.Message)
      this.ishow = false
    }
    })
  .catch(error => {
    this.ishow = false
    console.log('error', error)});
    },
    details() {
              var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
       var raw = JSON.stringify({"ApplicationNumber":this.Application_Number});
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
       };
        fetch("https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService", requestOptions)
       .then(response => response.text())
       .then(result =>{
            var EXDATA= JSON.parse(result)
            console.log(result);
            })
    },
  },
  computed: {
    filteredList: function () {
      return this.data[0].filter((data) => {
        return data;
      });
    },
    resultQuery() {
      if (this.searchQuery) {
        this.data[0].filter((item) => {
          console.log(item);
        });
      } else {
        return this.data[0];
      }
    },
  },
};
</script>
<style >
.appointments .ant-table-filter-dropdown .ant-dropdown-menu-item {
  text-align: left!important;
}
.appointments .ant-table-wrapper{
  margin-top: 43px;
}
.appointments{
  overflow: auto!important;
}
.searchinput {
  margin-bottom: 12px;
  width: 100%;
  display: block;
  text-align: right;
}
.searchinput .ant-input-affix-wrapper{
  width: 45%;
}
.searchbtn{
    float: right;
    background: #ec6393 !important;
    color: white !important;
    border-radius: 26px !important;
    border: none !important;
    width: 121px !important;
    height: 40px !important;
    margin-left: 6px;
}

@media (max-width: 768px) {
.searchinput .ant-input-affix-wrapper {
    width: 63%;
}
}
@media (max-width: 480px) {
    .searchinput .ant-input-affix-wrapper{
        width: 82%!important;
      }
      .searchinput {
       text-align: left!important;
      }
      .searchbtn{
        float: none;
        background: #ec6393 !important;
        color: white !important;
        border-radius: 4px !important;
        border-radius: 25px !important;
        border: none !important;
        width: 87px !important;
        height: 34px !important;
        margin-left: 6px;
        margin-bottom: 7px;

      }
      .filters .ant-calendar-picker{
          width: 91%!important;
      }
}
</style>
>