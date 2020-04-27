<template>
 <div> 
 <div class="login-code">
 <div>
<button> <router-link v-bind:to="'/'"> <i class='fas fa-angle-left'></i> </router-link> </button>
 </div>
 </div>
 
 <!-- <div class="code-info">
<h1> Enter Code </h1>
<p>Should be visible on screen </p>
 <input type="text" placeholder="Enter code" />
 <button class="join"> <router-link v-bind:to="'/all-items-user'"> Join </router-link> </button>
 </div> -->
 <form @submit="checkForm">
 <div class="code-info">
 <h1> Enter Code </h1>
 <p>Should be visible on screen </p>
 <input v-model="user.code" type="text" placeholder="Enter code" />
 
 <input class="join" type="submit" value="Join" />
 
 </div>
 <div>
 <label class="ohnohoney" for="name"> Name</label>
 <input class="ohnohoney" v-model="ohNoHoneyName" id="name" name="name" type="text" />
 </div>



 
 
</form>
<div v-if="errors.length">
<p>Please correct the errors</p>
<ul>
 <li v-for="error in errors" :key="error">{{ error }}</li>
</ul>
</div>
 
 </div>
 
 
</template>
 
<script>
import axios from "axios";
import * as config from "../../../config";
 
export default {
 name: "EnterCode",
 data: function() {
 return {
 user: {
 code: ''
 },
 ohNoHoneyName: '',
 errors: []
 };
 },
 methods: {
 checkForm: function(evt) {
 evt.preventDefault();
 
 this.errors = [];
 
 if (this.user.ohNoHoneyName) {
 this.errors.push("Ha ha got you");
 }
 if (!this.user.code) {
 this.errors.push("Code required");
 }
 
 if (!this.errors.length) {
 this.loginUser();
 }
 },
 loginUser: function() {
 console.log('Ok!')
 
 return axios
 .post(`${config.apiUrl}/users/enter-code`, this.user)
 .then((response) => {
 let user = response.data.user
 if (user){
 localStorage.userCode = user.code
 } else {
 //show message
 }
 
 // console.log('user', response.data.user)
 this.$router.push({ path: "/all-items-user" });
 })
 .catch(function(error) {
 // handle error
 console.log(error);
 });
 },
 }
 }
 
 
</script>