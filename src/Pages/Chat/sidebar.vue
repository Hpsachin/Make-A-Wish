/* eslint-disable */
<template>
  <div class="sidebar">
    <div class="sidebar_header">
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <div class="sidebar_headerRight">
        DonutLargeicon Chaticon moreverticon
      </div>
    </div>
    <div class="sidebar_search">
      <div class="sidebar_searchContainer">
        <SearchOutlined />
        <a-input placeholder="Search or start new chat" type="text" />
      </div>
    </div>
    <div class="sidebar_chats">
      <Sidebarchat title= "Add New Chat"/>

      <div v-for="Room in rooms" :key="Room">
        <div v-for="room in rooms[0]" :key="room">
         <Sidebarchat  v-bind:name="
        room.data.name" v-bind:id="room.id"/>
         </div>

      </div>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { SearchOutlined } from "@ant-design/icons-vue";
import Sidebarchat from "./Sidebarchat";
import db  from '../../Firebase/Firebase'
export default {
  name: "Sidebar",
    mounted(){
       this.Sidebar()
  },
  data() {
    return {
     rooms :[]
    }
  },
  methods: {
Sidebar(){
  db.collection('rooms').onSnapshot(snapshot => (
      this.rooms.push(snapshot.docs.map(doc=>({
      id: doc.id,
      data:doc.data(),

    }))),
    console.log(this.rooms)
  ))
}
  },
  components: {
    SearchOutlined,
    Sidebarchat,
  },

};
</script>
<style scoped>
.sidebar {
  flex: 0.35;
  flex-direction: column;
  display: flex;
}
.sidebar_search {
  display: flex;
  align-items: center;
  background: #f6f6f6;
  height: 39px;
  padding: 10px;
}
.sidebar_searchContainer {
  display: flex;
  align-items: center;
  background: white;
  width: 100%;
  height: 35px;
  border-radius: 20px;
}
.sidebar_searchContainer > input {
  border: none;
  margin-left: 10px;
}
.sidebar_header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px lightgray;
}
.sidebar_headerRight {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
}
.sidebar_chats {
  flex: 1;
  background: white;
  /* overflow: scroll; */
}
</style>