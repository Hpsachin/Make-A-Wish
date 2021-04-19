
<template>
  <div class="view login">
    <div v-if="state.username" class="view chat">
      <h1>{{ state.username }}</h1>
      <section class="chat-box">
        <div
          v-for="message in state.messages"
          :key="message.key"
          :class="
            message.username == state.username
              ? 'message current-user'
              : 'message'
          "
        >
          <div class="message-inner">
            <div class="username">{{ message.username }}</div>
            <div class="content">{{ message.content }}</div>
          </div>
        </div>
      </section>
      <form @Submit.prevent="SendMessage">
        <input
          type="text"
          v-model="inputMessage"
          placeholder="Write a message..."
        />
        <input type="submit" value="send" />
      </form>
    </div>
    <div v-else>
      <router-link :to="'/loginform'"></router-link>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { RightCircleOutlined } from "@ant-design/icons-vue";
import { onMounted, reactive, ref } from "vue";
import db from "../../Firebase/Firebase.js";
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
    Message: "Hi Kishan",
    Messageother: "Hello Kishan Bro",
    email: "kishan@gmail.com",
    Date: "Apr 4",
    image: "image1",
  },
  {
    id: 2,
    Login: false,
    name: "Vikas",
    email: "vikas@gmail.com",
    Messageme: "Hi Vikas",
    Messageother: "Hello Bro Vikas",
    Date: "Apr 5",
    image: "image2",
  },
  {
    id: 3,
    Login: true,
    name: "Atul",
    email: "atul@gmail.com",
    Message: "Hi Atul",
    Messageother: "Hello Atul Sir",
    Date: "Apr 6",
    image: "image3",
  },
];

// const collection = reactive({
//     loginemail: '',
//     loginname: '',
//      chatmessage: "",
//     id: ''
//     })
import "./Chat.css";
export default {
  mounted() {
    console.log("mounted");
    this.state.username = localStorage.getItem("loginname");
    this.inputUsername = localStorage.getItem("loginname");
    console.log(this.state);
  const usersRef =  db.database().ref("allloginusers").set({
      Loginuser: this.state.username,
    });
    const usersRef1 =  db.database().ref("allloginusers/Loginuser/messages").push().set({
      content: 'Hello',
    });
  },
  setup() {
    const inputUsername = ref("");
    const check = reactive({
      example: "any value",
    });
    console.log(check);
    console.log(inputUsername);
    const inputMessage = ref("");
    const state = reactive({
      username: "",
      messages: [],
    });
    const SendMessage = () => {
      alert("working");
      const messagesRef = db.database().ref("users");
      console.log(db.database().ref("users"));
      if (inputMessage.value === "" || inputMessage.value === null) {
        return;
      }
      const message = {
        username: state.username,
        content: inputMessage.value,
      };
      messagesRef.push(message);
      inputMessage.value = "";
    };
    onMounted(() => {
      const messagesRef = db.database().ref("users");
      messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        let users = [];
        Object.keys(data).forEach((key) => {
          users.push({
            id: key,
            username: data[key].username,
            content: data[key].content,
          });
        });
        state.messages = users;
        console.log(users);
      });
    });
    return {
      state,
      inputUsername,
      SendMessage,
      inputMessage,
    };
  },
};
</script>
<style>
.view {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #ea526f;
}
.view.login {
  align-items: center;
}
.view.login .login-form {
  display: block;
  width: 100%;
  padding: 15px;
}
.view.login .login-form .form-inner {
  display: block;
  background-color: #fff;
  padding: 50px 15px;
  border-radius: 16px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
.view.login .login-form .form-inner h1 {
  color: #aaa;
  font-size: 28px;
  margin-bottom: 30px;
}
.view.login .login-form .form-inner label {
  display: block;
  margin-bottom: 5px;
  color: #aaa;
  font-size: 16px;
  transition: 0.4s;
}
.view.login .login-form .form-inner input[type="text"] {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  background-color: #f3f3f3;
  transition: 0.4s;
}
.view.login .login-form .form-inner input[type="text"]::placeholder {
  color: #888;
  transition: 0.4s;
}
.view.login .login-form .form-inner input[type="submit"] {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  background-color: #ea526f;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
.view.login .login-form .form-inner:focus-within label {
  color: #ea526f;
}
.view.login .login-form .form-inner:focus-within input[type="text"] {
  background-color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
}
.view.login
  .login-form
  .form-inner:focus-within
  input[type="text"]::placeholder {
  color: #666;
}
.view.chat {
  flex-direction: column;
  width: 40%;
}
/* .view.chat header {
	 position: relative;
	 display: block;
	 width: 100%;
	 padding: 50px 30px 10px;
} */
/* .view.chat header .logout {
	 position: absolute;
	 top: 15px;
	 right: 15px;
	 appearance: none;
	 border: none;
	 outline: none;
	 background: none;
	 color: #fff;
	 font-size: 18px;
	 margin-bottom: 10px;
	 text-align: right;
} */
.view h1 {
  color: #fff;
}
.view .chat-box {
  border-radius: 24px 24px 0px 0px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  flex: 1 1 100%;
  padding: 30px;
}
.view .message {
  display: flex;
  margin-bottom: 15px;
}
.message-inner .username {
  color: #888;
  font-size: 16px;
  margin-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
}
.message-inner .content {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f3f3f3;
  border-radius: 999px;
  color: #333;
  font-size: 18px;
  line-height: 1.2em;
  text-align: left;
}
.message.current-user {
  margin-top: 30px;
  justify-content: flex-end;
  text-align: right;
}
.message-inner {
  max-width: 75%;
}
.message-inner .content {
  color: #fff;
  font-weight: 600;
  background-color: #ea526f;
}
.view.chat footer {
  position: sticky;
  bottom: 0px;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
}
.view.chat footer form {
  display: flex;
}
.view form input[type="text"] {
  flex: 1 1 100%;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  padding: 10px 15px;
  border-radius: 8px 0px 0px 8px;
  color: #333;
  font-size: 18px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  background-color: #f3f3f3;
  transition: 0.4s;
}
.view form input[type="text"]::placeholder {
  color: #888;
  transition: 0.4s;
}
.view form input[type="submit"] {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  padding: 10px 15px;
  border-radius: 0px 8px 8px 0px;
  background-color: #ea526f;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
</style>
