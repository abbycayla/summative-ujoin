import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//LOGIN
import EnterCode from './components/login/EnterCode.vue';
import AdminLogin from './components/login/AdminLogin.vue';

//USER
import AllItemsUser from './components/user/AllItemsUser.vue';
import MyItems from './components/user/MyItems.vue';
import CreateItem from './components/user/CreateItem.vue';
import EditItem from './components/user/EditItem.vue';

//ADMIN
import AllItemsAdmin from './components/admin/AllItemsAdmin.vue';
import CreateConference from './components/admin/CreateConference.vue';
import ConferenceDetails from './components/admin/ConferenceDetails.vue';
import EditConference from './components/admin/EditConference.vue';
import ReplyToItem from './components/admin/ReplyToItem.vue';





Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);


const routes = [
  {
    path: '/',
    component: EnterCode,
  },
  {
    path: '/admin-login',
    component: AdminLogin,
  },
  {
    path: '/all-items-user',
    component: AllItemsUser,
  },
  {
    path: '/my-items',
    component: MyItems,
  },
  {
    path: '/create-item',
    component: CreateItem,
  },
  {
    path: '/edit-item',
    component: EditItem,
  },
  {
    path: '/all-items-admin',
    component: AllItemsAdmin,
  },
  {
    path: '/create-conference',
    component: CreateConference,
  },
  {
    path: '/conference-details',
    component: ConferenceDetails,
  },
  {
    path: '/edit-conference',
    component: EditConference,
  },
  {
    path: '/reply-to-item',
    component: ReplyToItem,
  }
]


const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
