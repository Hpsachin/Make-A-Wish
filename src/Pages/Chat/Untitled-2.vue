
<template>
<div>
  <!-- <div id="chat-container">
    <div id="search-container">
      <a-input type="text" placeholder="Search"/>
    </div>

    <div id="conversation-list">
      <div v-for="item in steps" :key="item" >
      <div class="conversation active" v-if="item.name !=collection.loginname "  @click="getmessage(item.Message,item.id)">
        <div class="title-text" >
          {{item.name}}</div>
          <div class="created-date">
         {{item.Date}}
          </div>
          <div class="conversation-message">
            {{item.Message}}
             </div>
      </div>
      </div>
    </div>
    <div id="new-message-container">
    </div>
       <div id="chat-title">
         ID:{{collection.id}}
        Login: {{collection.loginname}}
       </div>
    <div id="chat-message-list">
      <div class="message-row you-message">
        <div class="message-content" >
     <div class="message-text">{{}}
     </div>
        <div class="message-text">Apr 16</div>
        </div>
      </div>
      <div class="message-row other-message">
         <div class="message-content">

        <div class="message-text">{{}} </div>
        <div class="message-text">Apr 16</div>
         </div>
      </div>
      {{chatmessage}}
    </div>
    <div id="chat-form">
      3:56
      <a-input type="text" placeholder="type a message..." v-model:value="allmessages.yourmessage" >
         <template #suffix>
         <button class="send" @click="check">  <RightCircleOutlined /> </button>
      </template>
      </a-input>
    </div>
  </div> -->
</div>
</template>
<script>
/* eslint-disable */
import { RightCircleOutlined } from "@ant-design/icons-vue";
import { onMounted,reactive,ref } from 'vue'
import db  from '../../Firebase/Firebase'
const steps = [
  {
    id: 1,
    Login: false,
    name: "Kishan Singh",
    Message:
      "Hi Kishan asdfghjk jfijfin ijfijfifj ijfijfifj jfjijjrek jrjkrjrkjrij jrjjrfffn",
    Date: "Apr 4",
    image: "image1",
  },
  {
    id: 2,
    Login: false,
    name: "Vikas Singh",
    Message: "Hi Vikas",
    Date: "Apr 5",
    image: "image2",
  },
  {
    id: 3,
    Login: true,
    name: "Atul Rai",
    Message: "Hi Atul",
    Date: "Apr 6",
    image: "image3",
  },
];
const message = [
  {
    id: 1,
    Login: false,
    name: "Kishan",
    Message:
      "Hi Kishan",
    Messageother: 'Hello Kishan Bro',
    email: 'kishan@gmail.com',
    Date: "Apr 4",
    image: "image1",
  },
  {
    id: 2,
    Login: false,
    name: "Vikas",
    email: 'vikas@gmail.com',
    Messageme: "Hi Vikas",
    Messageother: 'Hello Bro Vikas',
    Date: "Apr 5",
    image: "image2",
  },
  {
    id: 3,
    Login: true,
    name: "Atul",
    email: 'atul@gmail.com',
    Message: "Hi Atul",
    Messageother: 'Hello Atul Sir',
    Date: "Apr 6",
    image: "image3",
  },
];
import "./Chat.css";

export default {
  components: {
    RightCircleOutlined,
  },
  mounted() {
    console.log('mounted')
    this.collection.loginemail = localStorage.getItem("loginemail")
      this.collection.loginname=localStorage.getItem("loginname");
      console.log(this.collection)
         var nameparts = this.collection.loginname.split(" ");
      this.collection.id =
        nameparts[0].charAt(0).toUpperCase()
  },
  data() {
    return {
      allmessages: {
         yourmessage: '',
         othermessage: ''
      },
      collection: {
      loginemail: '',
      loginname: '',
       chatmessage: "",
      id: ''
      },
      steps,
      name:  '',
      message
    };
  },
  methods: {
    check() {
    },
   getmessage(message,id) {
       this.collection.chatmessage = message;
       this.collection.id = id
       alert(this.collection.id)
      // this.name =name
    },
  },
};
</script>
<style scoped>
/* body {
    display: grid;
    place-items: center;
} */
#chat-container{
    display: grid;
    grid:
    'search-container chat-title' 71px
    'conversation-list chat-message-list' 1fr
    'new-message-container chat-form' 78px/275px 1fr;
    min-width: 800px;
    /* max-width: 1000px; */
    /* height: 95vh; */
    width: 100%;
    background-color: white;
    border-radius: 10px;
}
#search-container,#conversation-list,#new-message-container {
background-color: #0048AA;
}
#search-container {
    display: grid;
    align-items: center;
    padding: 0px 20px;
    grid-area: search-container;
    border-radius: 10px 0 0 0;
    box-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);
    z-index: 1;
}
#search-container input {
    /* color: #eee; */
    outline: none;
    font-weight: bold;
    border-radius: 2px;
    height: 30px;
    /* border: 0;
    padding-left: 48px;
    padding-right: 20px;
    font-size: 1.4rem;
    background-position: 15px center;
    background-size: 20px 20px; */

}
#search-container ::placeholder {
    color: #ddd;
    font-weight: bold;
}
#conversation-list {
    grid-area: conversation-list;
}
.conversation {
    display: grid;
    grid-template-columns:220px 1fr max-content;
    grid-gap: 10px;
    color: #ddd;
    font-size: 1rem;
    border-bottom: 1px solid #002C88;
    padding: 20px 20px 20px 15px;
}

.conversation:hover {
    background-color: #002C88;
}
.conversation:hover{
    cursor: pointer;
}
.conversation img {

}
.title-text {
    font-weight: bold;
    color: #eee;
    padding-left: 5px;
    white-space: nowrap;
    /* overflow-x: hidden; */
    text-overflow: ellipsis;
}
.created-date {
    font-size: 1rem;
    color:#ddd ;
}
.conversation-message {
    grid-column: span 2;
    padding-left: 5px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
}
#new-message-container {
    display: grid;
    grid: 40px/40px;
    align-content: center;
    grid-area: new-message-container;
    border-top: 1px solid rgba(0,0,0,.25);
    border-radius: 0 0 0 10px;
}
#new-message-container a {
    display: grid;
    place-content: center center;
    background-color: #eee;
    border-radius: 100%;
    color: #002C88;
    text-decoration: none;
    font-size: 1.6rem;
}
#chat-title,#chat-form {
    background-color: #eee;

}
#chat-title {
    /* display: grid; */
    grid:36px/1fr 36px;
    align-content: center;
    align-items: center;
    grid-area: chat-title;
    color: #0048AA;
    font-weight: bold;
    font-size: 2.0rem;
    border-radius: 0 10px 0 0;
    box-shadow: 0px 1px 3px -1px rgba(0,0,0,0.75);
    padding: 0px 20px;
}
#chat-message-list {
    grid-area: chat-message-list;
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    word-wrap: break-word;
}
.message-row {
    display: grid;
    grid-template-columns: 50%;
    margin-bottom: 20px;
}
.mesage-content {
    display: grid;

}
.you-message {
    justify-content: end;
    justify-items: end;
}
/* .you-message .message-content{
    justify-items: end;
} */
.other-message {
    justify-items: start;
}
/* .other-message .message-content {
    grid-template-columns: 48px 1fr;
    grid-column-gap: 15px;
} */
.message-row img {

}
.message-text {
    padding: 9px 14px;
    font-size: 1rem;
    margin-bottom: 5px;
}
.message-time {
    font-size: 1rem;
    color: #777;
}
.you-message .message-text {
    background-color: #0048AA;
    color: #eee;
    border: 1px solid #0048AA;
    border-radius:14px 14px 0px 14px ;
}
.other-message .message-text {
    background-color: #eee;
    color: #111;
    border: 1px solid #ddd;
    border-radius:14px 14px 0px 14px ;
}
#chat-form {
    display: grid;
    grid: 51px/ 32px 1fr;
    align-items: center;
    align-content: center;
    grid-gap: 15px;
    grid-area: chat-form;
    border-radius:  0 0 10px 0;
    border-top: 1px solid rgba(0,0,0,.25);
    padding-left: 42px;
    padding-right: 22px;

}
#chat-form input {
    outline: none;
    padding: 9px;
    /* border: 2px solid #ddd; */
    color: #330;
    border-radius: 6px;
    font-size: 1rem;
}
.anticon-right-circle{
    font-size: 22px;
}
.send {
    border: none;
    background: none;
}
</style>
