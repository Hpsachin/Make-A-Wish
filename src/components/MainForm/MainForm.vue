<template>
  <!-- <router-link to='/loginform'>Login </router-link>|
         <router-link to='/forms'>forms </router-link> -->
  <a-layout><router-view name="Forms"></router-view></a-layout>
  <a-layout><router-view name="NewApplication"></router-view></a-layout>
  <a-layout><router-view name="ExistingApplication"></router-view></a-layout>
  <a-layout><router-view name="NewApplicationForm"></router-view></a-layout>
  <!-- <a-layout><router-view name="Test"></router-view></a-layout> -->
  <a-layout><router-view name="Father"></router-view></a-layout>
  <a-layout><router-view name="Mother"></router-view></a-layout>
    <a-layout><router-view name="Consent"></router-view></a-layout>
   <a-layout><router-view name="Child"></router-view></a-layout>
  <!-- <a-layout><router-view name="LegalGuardian"></router-view></a-layout> -->
  <!-- <a-layout><router-view name="SocialWorker"></router-view></a-layout> -->
  <!-- <a-layout><router-view name="CaseWorker"></router-view></a-layout> -->
  <!-- <a-layout><router-view name="FamilyMember"></router-view></a-layout> -->
</template>
<script>
/* eslint-disable */
import Forms from "./Forms/Forms";
export default {
  name: "MainForm",
  component: {
    Forms,
  },
};
/* eslint-enable */
</script>
