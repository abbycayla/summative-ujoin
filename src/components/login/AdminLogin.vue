<template>
  <div> 
      <button> <router-link v-bind:to="'/'"> Back </router-link> </button>
      <h1> Log in as Admin </h1>
      <form @submit="checkForm">
 <div class="admin-info">
 <h1> Log in </h1>
 <label for="firstName">Email</label>
 <input v-model="user.email" type="text" placeholder="Email" />
 <input class="join" type="submit" value="Login" />
 
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
name: "Login",
 data: function() {
 return {
 user: {
 email: ''
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
 if (!this.user.email) {
 this.errors.push("Email required");
 }
 
 if (!this.errors.length) {
 this.loginUser();
 }
 },
 loginUser: function() {
 console.log('Ok!')
 
 return axios
 .post(`${config.apiUrl}/users/admin-login`, this.user)
 .then((response) => {
 let user = response.data.user
 if (user){
 localStorage.userEmail = user.email
 localStorage.userId = user.id

 } else {
 //show message?
 }
 
 // console.log('user', response.data.user)
 this.$router.push({ path: "/create-conference" });
 })
 .catch(function(error) {
 // handle error
 console.log(error);
 });
 },
 }
 
 }
</script>

<style scoped>


</style>