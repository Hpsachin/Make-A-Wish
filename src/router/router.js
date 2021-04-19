/* eslint-disable */
import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from '../Pages/Dashboard/Dashboard.vue'
import Chat from '../Pages/Chat/Chat'
import Appointments from '../Pages/Appointments/Appointments.vue'
import Forms from '../components/MainForm/Forms/Forms'
import Login from '../components/Public/Login/Login'
import Loginotp from '../components/Public/Login/Loginotp'
import Signup from '../components/Public/Signup/Signup'
import Password from  '../components/Public/Password/Password'
import Forgot from '../components/Public/ForgotPass/ForgotPass'
import MainForm from '../components/MainForm/MainForm'
import Details from '../Pages/Details/Details'
import store from '../store/store'
import Footer from '../components/Public/Footer/Footer'
import NewApplication from '../components/MainForm/Forms/NewApplication'
import ExistingApplication from '../components/MainForm/Forms/ExistingApplication'
import NewApplicationForm from '../components/MainForm/Forms/NewApplicationForm'
import Mother from '../components/MainForm/Forms/Mother'
import Father from '../components/MainForm/Forms/Father'
import Child from '../components/MainForm/Forms/Child'
import Consent from '../components/MainForm/Forms/Consent'
// import Doctor from '../components/MainForm/Forms/Doctor'
import LegalGuardian from '../components/MainForm/Forms/LegalGuardian'
// import SocialWorker from '../components/MainForm/Forms/SocialWorker'
import CaseWorker from '../components/MainForm/Forms/CaseWorker'
import FamilyMember from '../components/MainForm/Forms/FamilyMember'
import Test from '../components/Public/Test/Test.vue'

// import store from '../store/store'
// import { IS_USER_AUTHENTICATE_GETTER } from '../store/storeconstants'
// import Public from '../components/Public/Public'
// import Forms from '../components/MainForm/Forms/forms'
const routes = [
  {
    path: '/footer',
    name: 'Footer',
    components: {
      Footer
    }
  },
  {
    path: '/forms',
    name: 'MainForm',
    components: {
      default: MainForm,
      Forms: Forms
    }
  },
  {
    path: '/newApplication',
    components: {
      NewApplication
    }
  },
  {
    path: '/father',
    components: {
      Father
    }
  },
  {
    path: '/wishform',
    components: {
      Mother
    }
  },
  {
    path: '/child/:App_Number',
    components: {
      Child
    }
  },
  {
    path: '/consent',
    name: 'Consent',
    components: {
      Consent
    }
  },
  {
    path: '/legalguardian',
    components: {
      LegalGuardian
    }
  },
  {
    path: '/caseworker',
    components: {
      CaseWorker
    }
  },
  {
    path: '/familymember',
    components: {
      FamilyMember
    }
  },
  {
    path: '/newApplicationForm',
    components: {
      NewApplicationForm
    }
  },
  {
    path: '/existingApplication',
    components: {
      ExistingApplication
    }
  },
  {
    path: '/loginform',
    name: 'Login',
    components: {
      Login: Login
    }
  },
  {
    path: '/loginotp',
    name: 'Loginotp',
    components: {
       Loginotp
    }
  },
  {
    path: '/test',
    name: 'Test',
    components: {
      Test
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    components: {
      Signup
    }
  },
  {
    path: '/password',
    name: 'Password',
    components: {
      Password
    }
  },
  {
    path: '/forgotform',
    name: 'Forgot',
    components: {
      Forgot: Forgot
    },
    // beforeEnter: (to, from, next) => {
    //   if (store.state.authenticated === false) {
    //     next('/loginform')
    //   } else {
    //     next()
    //   }
    // }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    // beforeEnter: (to, from, next) => {
    //   if(to.meta.requiredAuth){
    //     const auth = store.getters["auth/isTokenActive"];
    //     if(!auth){
    //        return next({path: '/loginform'});
    //     }
    // }
    // return next();
    // }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,


  },
  {
    path: '/chat/:id',
    component: Chat,
    props:true

  },

  {
    path: '/appointments',
    name: 'Appointments',
    component: Appointments,

    // beforeEnter: (to, from, next) => {
    //   if (store.state.loggedIn === true) {
    //     next('/dashboard')
    //   } else {
    //     next('/loginform')
    //   }
    // }
  },
  {
    path: '/detail/:Application_Number',
    name: 'Details',
    component: Details,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
