<template>
 <div class="box"  >
   <h1 v-if="checkdata === false" class="text-white">You are a invalid User</h1>
    <a-form :layout="formLayout" @submit="handleSubmit" v-else>
    <h5 class="instruction">Please create a new password</h5>
     <a-form-item :wrapper-col="formItemLayout.wrapperCol">
     <a-input  size="large" class="password" v-model:value='resetemail'  readonly placeholder="mail" />
    </a-form-item>
         <a-form-item :wrapper-col="formItemLayout.wrapperCol">
     <a-input  size="large" type="password" class="password" v-model:value="resetrole" placeholder="PASSWORD"  readonly />
    </a-form-item>
         <a-form-item :wrapper-col="formItemLayout.wrapperCol">
             <i class="fa fa-lock icon" aria-hidden="true"></i>
     <a-input  size="large" class="password" placeholder="PASSWORD" v-model:value="password" />
    </a-form-item>
         <a-form-item :wrapper-col="formItemLayout.wrapperCol">
       <a-button html-type="Submit" size="large" block> Submit </a-button>
        </a-form-item>
     </a-form>
   </div>
</template>
<script>
/* eslint-disable */
export default {
  name: 'Password',
  props: {
    msg: String
  },
  created(){
 this.resetemail = localStorage.getItem('resetemail')
  this.resetrole = localStorage.getItem('resetrole')
  },
  mounted(){
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var ids = urlParams.get('id')
if(queryString === ''){
  this.checkdata = false
}
else{
  this.Ideas = ids
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "BrowserId=hliLB0jxEeu6r_2Vywr3ng");
var raw = JSON.stringify({});
var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch(`https://humanpixel-mawau.cs58.force.com/services/apexrest/LoginFormRestService?id=${this.Ideas}`, requestOptions)
  .then(response => response.text())
  .then(result => {
    var value =JSON.parse(result)
    if(value.StatusCode == 200){
        this.checkdata = true
    }
    console.log(result)
    })
  .catch(error => console.log('error', error));
}
  },
  data () {
    return {
      checkdata: false,
      formLayout: 'horizontal',
      resetemail: '',
      resetrole: '',
      password: '',
      Ideas: ''
    }
  },
  computed: {
    formItemLayout () {
      const { formLayout } = this
      return formLayout === 'horizontal'
        ? {
          wrapperCol: { span: 24 }
        }
        : {}
    }
  },
   methods: {
    handleSubmit(){
      var myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");
       myHeaders.append("Cookie", "BrowserId=zq7S9xj1Eeup-0MRJmmj8Q");
       var raw = JSON.stringify({"role":this.resetrole,"username":this.resetemail, "password": this.password });
       var requestOptions = {
       method: 'PUT',
       headers: myHeaders,
       body: raw,
       redirect: 'follow'
   };
   fetch(`https://humanpixel-mawau.cs58.force.com/services/apexrest/LoginFormRestService?id=${this.Ideas}`, requestOptions)
  .then(response => response.text())
  .then(result =>{
    var value =JSON.parse(result)
    console.log(value);
    if(value.StatusCode==200){
     alert('correct')
    }else{
       alert('Something wrong')
    }
     }
  )
  .catch(error => console.log('error', error));
    }
  },

}
</script>
<style scoped>
.linkColor .ant-anchor-link-title {
  color: #ffffff !important;
}

.ant-anchor-link{
  display: inline-flex;
}
.ant-form-item-control {
   zoom: 1.1!important;
}
.signup-button{
  background: inherit;
  border: none;
  box-shadow: none;
}
.ant-form-item{
    margin-bottom: 25px;
}
.signup-link{
display: inline-flex;
}
.box{
  background: #0055B7;
 width: 50%;
 margin: 21px auto;
padding: 70px 57px;
  box-sizing: border-box;
  text-align: center;
}
.Login-text{
   margin-bottom: 20px;
   color: white;
 }
.ant-input{
  width: 92%;
  padding: 6.5px 46px;
  border-radius: 3px;
}
.ant-btn-block{
  color: white;
   width: 92%;
 min-height: 41px;
 background:#EC6393;
 outline: none;
 border: none;
 border-radius: 26px;
}
.fa-envelope{
  font-size: 15px;
    position: absolute;
    top: 3px;
    left: 17px;
    z-index: 9;
    color: #0055B7;
}
.instruction{
    color: white;
    margin: 45px 0px 49px 0px;
}
</style>
