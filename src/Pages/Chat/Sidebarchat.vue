<template>
  <div class="sidebarChat" @click="createChat" v-if="title">
    <h1>{{ title }}</h1>
  </div>
  <div class="sidebarChat" v-else>
    <a-avatar src="https://avatars.dicebear.com/api/human/a23.svg" />

    <div class="sidebarChat_info">
      <router-link :to="`/chat/${id}`">
        <h4 @click="execute">{{ name }}</h4>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.sidebarChat {
  display: flex;
  padding: 6px 12px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
}
.sidebarChat:hover {
  background-color: #ebebeb;
  border-left: 2px solid #ec6393;
}
.sidebarChat_info > h2 {
  font-size: 16px;
  margin-bottom: 8px;
}
.sidebarChat_info {
  margin-left: 15px;
}
</style>
<script>
// import NewApplicationVue from "../../components/MainForm/Forms/NewApplication.vue";
/* eslint-disable */
import db from "../../Firebase/Firebase";
export default {
  name: "Sidebarchat",
  props: {
    title: String,
    name: String,
    id: Object,
    callback: Function,
  },
  mounted() {
    this.lastmessage();
  },
  data() {
    return {
      Messages: [],
      roomId: "",
      roomname: "",
    };
  },
  methods: {
    execute() {
      if (this.callback) {
        this.callback();
      }
    },
    SidebarChat(addNewChat, id, name) {},
    lastmessage() {
      console.log("working");
      if (this.roomId) {
        db.collection("rooms")
          .doc(id)
          .collection("messages")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            this.lastmessage(snapshot.docs.map((doc) => doc.data()));
            console.log(this.lastmessage);
          });
      }
    },
    createChat() {
      const roomName = prompt("Please enter your name");
      console.log(roomName);
      if (roomName) {
        db.collection("rooms").add({
          name: roomName,
        });
      }
    },
  },
};
</script>
