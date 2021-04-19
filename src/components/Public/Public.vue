<template>
   <!-- <router-link to='/loginform'> Login</router-link>|
     <router-link to='/signup'> Signup</router-link>|
       <router-link to='/forgotform'> forgot </router-link>|
         <router-link to='/forms'>forms </router-link>
          <router-link to='/footer'>footer </router-link> -->
<a-layout><router-view name='Signup'></router-view></a-layout>
<a-layout><router-view name='Login'></router-view></a-layout>
<a-layout><router-view name='Forgot'></router-view></a-layout>
<a-layout><router-view name='Footer'></router-view></a-layout>
<a-layout><router-view name='Password'></router-view></a-layout>
<a-layout><router-view name='Test'></router-view></a-layout>
<a-layout><router-view name='Loginotp'></router-view></a-layout>
</template>
<script>
export default {
  name: 'Public'
}
</script>
