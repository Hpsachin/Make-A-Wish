<template>
  <div class="hello">
   <div v-if="$route.path == '/forms' || $route.path == '/newApplication' || $route.path == '/existingApplication'  || $route.path == '/newApplicationForm'  || $route.path == '/father' || $route.path == '/wishform' ||  $route.path == `/child/${$route.params.App_Number}` || $route.path == '/socialworker' || $route.path == '/caseworker' || $route.path == '/legalguardian' || $route.path == '/familymember'  "><MainForm/></div>
     <div v-else-if="$route.path == '/dashboard'|| $route.path == '/chat' ||  $route.path == `/chat/${$route.params.id}` || $route.path == '/appointments' || $route.path == `/detail/${$route.params.Application_Number}` || $route.path == `/child/${$route.params.Application_Number}`  "><Pages/></div>
     <div v-else-if="$route.path == '/loginform'|| $route.path == '/forgotform' || $route.path == '/loginotp' || $route.path == '/password' ||  $route.path == '/signup' ||  $route.path == '/footer' || $route.path == '/test' " ><Public/></div>
  </div>
</template>
<script>
import Pages from '../Pages/Pages'
import MainForm from '../components/MainForm/MainForm'
import Public from './Public/Public.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  components: {
    Pages,
    MainForm,
    Public
  },
  props: {
    msg: String
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
