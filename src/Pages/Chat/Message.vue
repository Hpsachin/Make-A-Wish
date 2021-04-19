<template>
 <div class="chat">
   <div class="chat_header">
     <a-avatar src="https://avatars.dicebear.com/api/human/a23.svg" />
     <div class="chat_headerInfo">
       <!-- <div v-model:value="roomname">

       </div> -->
       <h3 > {{roomname}}</h3>
       <p>Last seen {{}} </p>
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
            <!-- {{message}} -->
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
           <SmileOutlined />
           <a-form>
            <a-input type="text" v-model:value="input" placeholder="type a message..."  >
         <template #suffix>
         <button class="send" @click="sendMessage" type="submit">  <RightCircleOutlined /> </button>
      </template>
      </a-input>
           </a-form>
           <AudioOutlined />
         </div>
    </div>
</template>

<script>
/* eslint-disable */
import db from "../../Firebase/Firebase.js";
// import { firebase } from '@firebase/app'
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
    console.log(this.roomId)
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
        
    }
  }
}
</script>
<style scoped>
.chat {
  flex: .65;
  display: flex;
  flex-direction: column;
  /* background: blue; */
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
 top: -20px;
  font-size: 9px;
    font-weight: 700;
}
.chat_message{
  position: relative;
  font-size: 16px;
  padding: 9px 16px;
  background-color: #ffff;
  border-radius: 10px;
  width: fit-content;
}
.chat_reciever {
  margin-left: auto;
  background-color: #dcf8c6;
   width: fit-content;
    position: relative;
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
  flex: 1;
background-image:url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png") ;
background-repeat: repeat;
background-position: center;
padding: 30px;
overflow: scroll;
}
.chat_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;
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
</style>