<template>
<div class="loader loader-1" v-show="isLoading">
          <div class="loader-outter"></div>
          <div class="loader-inner"></div>
        </div>
  <div style="padding: 20px" class="container-fluid appointments" v-if="this.status">

    <a-row>
      <a-col :span="12"> <h1 class="dashboard-heading">Appointments</h1></a-col>
      <a-col :span="12"
        ><div class="search-box">
          <!-- <a-input
            class="searchinput"
            type="text"
            v-model:value="applicationnum"
            placeholder="Please Fill The Application No For the Details"
          /> -->
          <div class="searchinput">
           <a-input-search
      v-model:value="applicationnum"
      placeholder="Search Application No..."

      @search="onSearch"
    />
          </div>
          <a-button @click="search" class="searchbtn"> Search </a-button>
            <a-button @click="reset" class="searchbtn"> Reset</a-button>
          <!-- <router-link :to="`/detail/${applicationnum}`"
            ></router-link
          > -->
        </div></a-col
      >
    </a-row>
    <a-table

      :columns="columns"
      @change="onChange"
       data: dataSource, run, loading, current, pageSize
      :dataSource="data[0]"
      :pagination="{ pageSize: 10,

       }"
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
// import { useRoute } from 'vue-router'
// import { ref } from 'vue'
const columns = [
  {
    title: "Application No",
    dataIndex: "Application_Number",
    //  defaultSortOrder: 'ascend',
    // sorter: (a, b) => a.applicationno - b.applicationno
  },

  {
    title: "Name",
    dataIndex: "Name",
    //  slots: {
    //       filterDropdown: 'filterDropdown',
    //       filterIcon: 'filterIcon',
    //       customRender: 'customRender',
    //     },
    //     onFilter: (value, record) =>
    //       record.Name.toString().toLowerCase().includes(value.toLowerCase()),
    //     onFilterDropdownVisibleChange: visible => {
    //       if (visible) {
    //         setTimeout(() => {
    //           console.log(searchInput.value);
    //           searchInput.value.focus();
    //         }, 0);
    //       }
    //     },
    // sorter: (a, b) => a.Name.length - b.Name.length,
    // sortDirections: ["descend"],
  },

  {
    title: "Email",
    dataIndex: "Email",

    //  onFilter: (value, record) => record.email.indexOf(value) === 0,
    sorter: (c, d) => c.Email.length - d.Email.length,
    sortDirections: ["descend"],
  },
  {
    title: "Relation with child",
    dataIndex: "Relationship",
    filters: [
      {
        text: "Father",
        value: "Father",
      },
      {
        text: "Mother",
        value: "Mother",
      },
      {
        text: "Legal Guardian",
        value: "Legal Guardian",
      },
      {
        text: "Child",
        value: "Child",
      },
      {
        text: "Family Members",
        value: "Family Members",
      },
      {
        text: "Doctor",
        value: "Doctor",
      },
      {
        text: "Family Members",
        value: "Family Members",
      },
      {
        text: "Social Worker",
        value: "Social Worker",
      },
    ],
    onFilter: (value, record) => record.Relationship.indexOf(value) === 0,
    // sorter: (a, b) => a.email.length - b.email.length,
    // sortDirections: ['descend', 'ascend'],
  },

  {
    title: "Status",
    dataIndex: "Status",
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
    // sorter: (a, b) => a.Status.length - b.Status.length,
    // sortDirections: ['descend', 'ascend']
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    slots: { customRender: "action" },
  },
];
// const data1 = []
const data = [
  // {
  //   id: '1',
  //   key: '1',
  //   applicationno: 1,
  //   name: 'John Deo',
  //   email: 'John.deo@gmail.com',
  //   position: 'Father',
  //   status: 'Pending'
  // },
  // {
  //   id: '2',
  //   key: '2',
  //   applicationno: 2,
  //   name: 'Anay John',
  //   email: 'Anay.John@gmail.com',
  //   position: 'Doctor',
  //   status:
  //     'Approved'
  // },
  // {
  //   id: '3',
  //   key: '3',
  //   applicationno: 3,
  //   name: 'John Deo',
  //   email: 'John.deo@gmail.com',
  //   position: 'Doctor',
  //   status: 'Pending'
  // },
  // {
  //   id: '4',
  //   key: '4',
  //   applicationno: 4,
  //   name: 'Anay John',
  //   email: 'Anay.John@gmail.com',
  //   position: 'Father',
  //   status: 'Approved'
  // },
  // {
  //   id: '5',
  //   key: '5',
  //   applicationno: 5,
  //   name: 'John Deo',
  //   email: 'John.deo@gmail.com',
  //   position: 'Father',
  //   status: 'Pending'
  // },
  // {
  //   id: '6',
  //   key: '6',
  //   applicationno: 6,
  //   name: 'Anay John',
  //   email: 'Anay.John@gmail.com',
  //   position: 'Doctor',
  //   status: 'Approved'
  // },
  // {
  //   id: '7',
  //   key: '7',
  //   applicationno: 7,
  //   name: 'John Deo',
  //   email: 'John.deo@gmail.com',
  //   position: 'Father',
  //   status: 'Pending'
  // },
  // {
  //   id: '8',
  //   key: '8',
  //   applicationno: 8,
  //   name: 'Anay John',
  //   email: 'Anay.John@gmail.com',
  //   position: 'Doctor',
  //   status: 'Approved'
  // },
  // {
  //   id: '9',
  //   key: '9',
  //   applicationno: 9,
  //   name: 'John Deo',
  //   email: 'John.deo@gmail.com',
  //   position: 'Doctor',
  //   status: 'Pending'
  // },
  // {
  //   id: '10',
  //   key: '10',
  //   applicationno: 10,
  //   name: 'Anay John',
  //   email: 'Anay.John@gmail.com',
  //   position: 'Father',
  //   status: 'Approved'
  // }
];
const data1 =[

]
// const queryData = params => {
//   return `https://humanpixel-mawau.cs58.force.com/services/apexrest/ApplicationListRestService?role=${this.role}&offsetLimit=0&limit=20`;
// };
function onChange(pagination, filters, sorter, value) {
  this.pagesize = this.pagesize+10
  // console.log(pagination.pageSize)
  //  pagination.pageSize = pagination.pageSize+20
  //  console.log(pagination.pageSize)
  //  this.pagesize = pagination.pageSize
  //  console.log(this.pagesize)
  //  this.current = pagination.current
  //    console.log(pagination.current)
       this.getdata()
  //  console.log("params", pagination, filters, sorter,value)


};
  //  const { data: dataSource, run, loading, current, pageSize } = usePagination(onChange, {
  //     formatResult: res => res.results,
  //     pagination: {
  //       currentKey: 'page',
  //       pageSizeKey: 'results',
  //     },
  //   });
    // const pagination = computed(() => ({
    //   total: 200,
    //   current: current.value,
    //   pageSize: pageSize.value,
    // }));

    // const handleTableChange = (pag, filters, sorter) => {
    //   run({
    //     results: pag.pageSize,
    //     page: pag?.current,
    //     sortField: sorter.field,
    //     sortOrder: sorter.order,
    //     ...filters,
    //   });
    // };
export default {
  name: "Appointment",
  components: {
    SearchOutlined,
  },
created (){
this.loginemail =  localStorage.getItem("loginemail");
    this.loginname = localStorage.getItem("loginname");
    this.role = localStorage.getItem("role");
    // console.log(localStorage.getItem("loginname"));
    // console.log(localStorage.getItem("statuscode"));
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
      // data1,
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
      // console.log(member.length)
var last2 = member.slice(-3);
this.last = last2
// alert(last2);
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
      //         var myHeaders = new Headers();
      //   myHeaders.append("Content-Type", "application/json");
      //   myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
      //  var raw = JSON.stringify({"ApplicationNumber":this.Application_Number});
      //   var requestOptions = {
      //   method: 'POST',
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: 'follow'
      //  };
      //   fetch("https://humanpixel-mawau.cs58.force.com/services/apexrest/DynamicFormRestService", requestOptions)
      //  .then(response => response.text())
      //  .then(result =>{
      //       var EXDATA= JSON.parse(result)
      //       console.log(result);
      //       })
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
          // return this.searchQuery.toLowerCase().split(' ').every(v => item.Name.toLowerCase().includes(v))
        });
      } else {
        // console.log(data[0])
        return this.data[0];
      }
    },
  },
  //  handleSearch (selectedKeys, confirm, dataIndex) {
  //     confirm();
  //     state.searchText = selectedKeys[0];
  //     state.searchedColumn = dataIndex;
  //   }
};
</script>
<style >
.appointments .ant-table-filter-dropdown .ant-dropdown-menu-item {
  text-align: left!important;
}
.appointments .ant-table-wrapper{
  margin-top: 43px;
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
  /* margin-bottom: 43px; */
    float: right;
    background: #ec6393 !important;
    color: white !important;
    border-radius: 26px !important;
    border: none !important;
    width: 121px !important;
    height: 40px !important;
    margin-left: 6px;
}
</style>
>