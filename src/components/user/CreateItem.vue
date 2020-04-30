<template>
 <div class="create-item">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
    <HeaderConference/>
    <div class="create-item-heading">
        <div class="heading-button">
            <router-link v-bind:to="'/all-items-user'"> 
                <img src="@/assets/back-light.png" alt="back-light" class="back"> 
            </router-link>
        </div>
        <div class="heading-title">
            <h1> Ask a Question </h1>
        </div>
    </div>

    <form @submit="checkForm">
        <div class="create-item-body">
            <div class="body-textarea">
                <input v-model="item.body" type="text" name="body" placeholder="Enter a question">
            </div>
        </div>

        <div> 
            <p> Questions are being monitored. If your question is inappropriate, it will be deleted.</p>
        </div>
 
        <div>
            <input  class="submit" type="submit" value="Submit">
        </div>

        <div v-if="errors.length" class="error">
            Please enter a question before submitting 
        </div>
    </form>
    <NavBarUser/>
 </div>
</template> 
 
<script>
import axios from "axios";
import * as config from "../../../config";

import NavBarUser from "./NavBarUser"
import HeaderConference from "./HeaderConference"

 
export default {
 name: "CreateItem",
 components: {
 NavBarUser,
 HeaderConference
 },
 data: function(){
 return{
 item: {
 body: ''
 },
 errors: []
 }
 },
 methods: {
 checkForm: function(evt) {
 evt.preventDefault();
 
 this.errors = [];
 
 if (!this.item.body) {
 this.errors.push("Body required");
 }
 if (!this.errors.length) {
 this.createItem();
 }
 },

 createItem: function() {
 let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 return axios
 .post(`${config.apiUrl}/users/${userId}/events/${eventId}/items`, this.item)
 .then((response) => {
 const item = response.data.item
 console.log(item)
 this.$router.push({ path: "/my-items"});
 console.log(this.$route.params)
 })
 .catch(function(error) {
 console.log(error);
 });
 }, 
 }
}
</script>

 
<style scoped>



.create-item-heading i {
  font-size: 40px;
  color: #f2f2f2;
  
}


 
.create-item {
    background-color: #2B313F;
    height: 100vh;
    color: white;
    font-family: 'Open Sans', sans-serif;
}
 
.create-item-heading {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    background-color: #2B313F;
    
}

input{
    height: 150px;
    width: 250px;
    border: none;
    outline: none;
    padding-left: 10px;
    padding-bottom: 100px;
}
 
h1 {
    text-align: center;
    font-size: 2em;
    font-weight: lighter; 
    margin: 0px 20px;
    margin-top: 10px;
}
 
button {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 13px;
   
}
 
.body-textarea {
    width: 100%;

    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
 
p {
    text-align: center;
    margin: 0px 15%;
    font-weight: lighter;
    font-size: .9em;
    margin-bottom: 25px;
}
 
.submit {
 height: 50px;
 width: 120px;
 border: none;
 background-color: #4baced;
 outline: none;
 display: block;
 margin-right: auto;
 margin-left: auto;
 margin-top: 20px;
 color: white;
 text-decoration: none;
 font-size: 1.5em;
 padding: 0;
}

.back {
    margin-top: 8px;
    width: 30px;
}

.error {
    font-size: .7em;
    font-weight: lighter;
    text-align: center;
    padding-top: 20px;
}

@media only screen and (min-width: 768px) {

.body-textarea {
    margin-bottom: 30px;
}

textarea {
    width: 50%;
}

input {
    height: 200px;
    width: 600px;
}
 
h1 {
    font-size: 3em;
    padding-bottom: 0px;
}
 
.back {
    margin-top: 10px;
    margin-right: 10px;
    width: 50px;
}
 
p {
    margin-bottom: 20px;
}
 
.submit a{
    font-size: 1.7em;
}
 
}

 
</style>
