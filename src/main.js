import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//LOGIN
import EnterCode from './components/login/EnterCode.vue';
import AdminLogin from './components/login/AdminLogin.vue';
import UserLogin from './components/login/UserLogin.vue';


//USER
import AllItemsUser from './components/user/AllItemsUser.vue';
import MyItems from './components/user/MyItems.vue';
import CreateItem from './components/user/CreateItem.vue';
import EditItem from './components/user/EditItem.vue';
import ItemDetailUser from './components/user/ItemDetailUser.vue';

//ADMIN
import AllItemsAdmin from './components/admin/AllItemsAdmin.vue';
import CreateConference from './components/admin/CreateConference.vue';
import ConferenceDetails from './components/admin/ConferenceDetails.vue';
import EditConference from './components/admin/EditConference.vue';
import ItemDetailAdmin from './components/admin/ItemDetailAdmin.vue';






Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Router)

const routes = [
  {
    path: '/',
    component: UserLogin,
  },
  {
    path: '/enter-code',
    component: EnterCode,
    name: "enter code"
  },
  {
    path: '/admin-login',
    component: AdminLogin,
  },
  {
    // name: "allitems",
    // props: true,
    path: '/all-items-user',
    component: AllItemsUser,
    name: 'allItemsUser'
  },
  {
    // name: "newQuestion",
    path: '/my-items',
    component: MyItems,
    props: true,
  }, 
  {
    name: "itemDetailUser",
    path: '/item-detail-user/:itemId',
    component: ItemDetailUser,
    props: true,
  },
  {
    name: "itemDetailAdmin",
    path: '/item-detail-admin/:itemId',
    component: ItemDetailAdmin,
    props: true,
  },
  {
    path: '/create-item',
    component: CreateItem,
    
  },
  {
    path: '/edit-item/:itemId',
    name: "editItem",
    component: EditItem,
    props: true
  },
  {
    path: '/all-items-admin',
    component: AllItemsAdmin,
  },
  {
    path: '/create-conference',
    component: CreateConference,
    // params: true
  },
  {
    path: '/conference-details/:eventId',
    name: 'details',
    component: ConferenceDetails,
    props: true

  },
  {
    path: '/edit-conference',
    component: EditConference,
  },
]


const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
