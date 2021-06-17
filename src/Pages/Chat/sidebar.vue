/* eslint-disable */
<template>
  <div class="sidebar">
    <div class="sidebar_header">
      <h1>Chats</h1>
    </div>
    <div class="sidebar_chats">
      <div v-for="Room in rooms" :key="Room">
        <div v-for="room in rooms[0]" :key="room" class="sidechatslogin">
          <Sidebarchat v-bind:name="room.data.name" v-bind:id="room.id" />
        </div>

        <div class="sidebarmodal">
          <a-button type="primary" @click="showModal">Contact</a-button>
          <a-modal v-model:visible="visible" class="sidechatmodel">
            <div v-for="room in rooms[0]" :key="room">
              <Sidebarchat :callback="hidemodal" v-bind:name="room.data.name" v-bind:id="room.id" />
            </div>
          </a-modal>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { SearchOutlined } from "@ant-design/icons-vue";
import Sidebarchat from "./Sidebarchat";
import db from "../../Firebase/Firebase";
export default {
  name: "Sidebar",
  mounted() {
    this.Sidebar();
  },
  data() {
    return {
      rooms: [],
      visible: false,
    };
  },
  methods: {
    hidemodal() {
        this.visible= false
      },
    showModal() {
      this.visible = true;
    },
    Sidebar() {
      db.collection("rooms").onSnapshot(
        (snapshot) => (
          this.rooms.push(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          ),
          console.log(this.rooms)
        )
      );
    },
  },
  components: {
    SearchOutlined,
    Sidebarchat,
  },
};
</script>
<style >
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
}
.sidechatmodel .ant-modal-content{
  height: 100vh!important;
}
.sidebarmodal{
  display: none;
}
@media (max-width: 767px) {
  .sidebarmodal{
  display: block;
}
.sidechatslogin{
  display: none;
}
.sidechatmodel .ant-modal-content{
  background: white!important;
}
}
</style>