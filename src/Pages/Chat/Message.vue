<template>
 <div class="chat">
   <div class="chat_header">
     <a-avatar src="https://avatars.dicebear.com/api/human/a23.svg" />
     <div class="chat_headerInfo">
       <h3> {{roomname}}</h3>
        </div>
        <div class="chat_headerRight">
          Icon,
          SearchOutlined,
          Attachfile
           </div>
   </div>
      <div class="chat_body">
         <div v-for="allmessage in Messages" :key="allmessage">
          <div v-for="message in allmessage" :key="message">
               <p v-bind:class="message.name == username ? 'chat_message':'chat_reciever'">
            <span class="chat_name">
        {{message.name}} </span>
          {{message.message}}
          <span class="chat_timestamp"> {{message.timestamp}}</span>
          </p>
             </div>
      </div>
      </div>
         <div class="chat_footer">
           <a-form @submit="sendMessage">
            <a-input type="text" v-model:value="input" placeholder="type a message..."  >
         <template #suffix>
         <button class="send"  type="submit">  <RightCircleOutlined /> </button>
      </template>
      </a-input>
           </a-form>
         </div>
    </div>
</template>

<script>
/* eslint-disable */
import db from "../../Firebase/Firebase.js";
import { RightCircleOutlined,SmileOutlined,AudioOutlined } from "@ant-design/icons-vue";
export default {
  name : 'Message',
  components : {
RightCircleOutlined,
SmileOutlined,
AudioOutlined
  },
  mounted() {
     var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 this.dateTime = date+' '+time;
   console.log(this.time)
     this.username = localStorage.getItem("loginname");
    this.roomId = this.$route.params.id
        if(this.roomId){
      db.collection('rooms').doc(this.roomId).onSnapshot(snapshot=>{
        this.roomname=snapshot.data().name
      })
      db.collection('rooms').doc(this.roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot=>{
        this.Messages.push(snapshot.docs.map((doc=>doc.data())))
      })
    }
  },
  data(){
return {
  isactive: true,
  input: '',
  roomId: '',
  roomname: '',
  Messages: [],
  username: '',
  dateTime: ''
}
  },
  methods: {
    sendMessage(){
       this.Messages= [],
       db.collection('rooms').doc(this.roomId).collection('messages').add({
         message: this.input,
         name: this.username,
         timestamp:this.dateTime
       })
        this.input = ''
    },
    change(){
      this.Messages =[]
       this.roomId = this.$route.params.id
        if(this.roomId){
      db.collection('rooms').doc(this.roomId).onSnapshot(snapshot=>{
        this.roomname=snapshot.data().name
      })
      db.collection('rooms').doc(this.roomId).collection("messages").orderBy('timestamp', 'asc').onSnapshot(snapshot=>{
        this.Messages.push(snapshot.docs.map((doc=>doc.data())))
      })
    }
    }
  },
  watch:{
    $route (to, from){
      this.change()
    }
}
}
</script>
<style scoped>
.chat {
  flex: .65;
  display: flex;
  flex-direction: column;
}
.chat_header {
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
.chat_headerInfo{
  flex: 1;
  padding-left: 20px;
}
.chat_name {
  position:absolute;
 top: -17px;
  font-size: 9px;
    font-weight: 700;
    color: black;
}
.chat_message{
  position: relative;
  margin-left: auto;
  background-color: #0055B7;
  font-size: 16px;
  padding: 9px 16px;
  color: white;
  border-radius: 10px;
  width: fit-content;
}
.chat_reciever {
  background-color: #ededed;
   width: fit-content;
    position: relative;
    color: black;
  font-size: 16px;
  padding: 10px;
    border-radius: 10px;
}
.chat_timestamp {
  margin-left: 10px;
  font-size: xx-small;
}
.chat_headerRight {
  display: flex;
  justify-content: space-between;
  min-width: 100px;
}
.chat_body {
background-repeat: repeat;
background-position: center;
padding: 30px;
overflow-y: scroll;
height: 85vh;
}
.chat_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 67px;
  padding: 2px 30px;
}
.chat_footer >form {
  flex: 1;
  display: flex;
}
.chat_footer >form >input {
  flex: 1;
  border-radius: 33px;
  padding: 10px ;
  border: none;
}
.chat_footer .anticon {
  padding: 10px;
  color: gray;
}
@media (max-width: 480px) {
  .chat_message{
    /* margin-left: 0; */
      font-size: 11px;
  }
  .chat_reciever {
    font-size: 11px;
  }
}
</style>