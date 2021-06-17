<template>
<a-layout id="1">
      <AppSider> </AppSider>
      <a-layout>
         <AppHeader/>
           <a-layout-content>
               <router-view >
             </router-view >
                 </a-layout-content>
      </a-layout>
    </a-layout>
</template>
<script>
import AppSider from '../Pages/AppSider/AppSider'
import AppHeader from '../Pages/AppHeader/AppHeader'
import './Pages.css'
export default {
  name: 'Pages',
  components: {
    AppSider,
    AppHeader
  }
}
</script>
