<template>
  <div class="sidebarChat" @click="createChat" v-if="title">
    <h1>{{ title }}</h1>
  </div>
  <div class="sidebarChat" v-else>
    <a-avatar src="https://avatars.dicebear.com/api/human/a23.svg" />

    <div class="sidebarChat_info">
      <router-link :to="`/chat/${id}`" >
        <h2 @click="check">{{name}}</h2>
        <!-- <p>Last Message...{{new Date(Messages[Messages.length-1]?.timestamp ?.toDate()).toUTCstring()}}</p> -->
      </router-link>
    </div>
    <!-- <h1> 1</h1>
    <h1> 1</h1>
    <h1> 1</h1>
    <h1> 1</h1> -->
    <!-- <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> -->
  </div>
</template>
<style scoped>
.sidebarChat {
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
}
.sidebarChat:hover {
  background-color: #ebebeb;
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
/* eslint-disable */
import db from "../../Firebase/Firebase";
export default {
  name: "Sidebarchat",
  props: {
    title: String,
    name: String,
    id: Object,

  },
  mounted() {
  },
  data() {
    return {
    Messages:[],
  roomId: '',
  roomname: '',
    };
  },
  methods: {
    details() {
      console.log("working");
    },
    SidebarChat(addNewChat, id, name) {},
    check(){
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
