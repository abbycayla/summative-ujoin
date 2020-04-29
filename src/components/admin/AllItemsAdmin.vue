<template>
  <div class="body">
    <HeaderConference/> 
    <div class="adminQuestions">
 <h1> Questions </h1>
    </div>
     
   <div  v-for="item in items" :key="item.id" :item="item">
       <div class="item-box">
          <div class="item-content">
        <h1>name</h1>
      <h2>  <router-link :to="{
              name: 'itemDetail',
              params: {itemId: item.id}
              }"> 
              <h3> {{item.body}} </h3>
          </router-link>  </h2>
      </div>
      <div class="item-options">
          <p class="reply">Replied</p>
          <p>Delete</p>
          </div> 
          </div>
    
      </div>
         <ul class="buttons-nav">
      <li class="edit"> <router-link v-bind:to="'/edit-conference'"> Edit <br/> Conference </router-link> </li>
         <li class="host"><router-link v-bind:to="{path: '/all-items-admin'}"> HOST</router-link></li>
      </ul>
       </div>
       
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

import NavBarAdmin from "./NavBarAdmin"
import HeaderConference from "../user/HeaderConference"

export default {
    name: "AllItemsAdmin",
     components: {
      HeaderConference,
      NavBarAdmin
    },

    data: function(){
        return {
            items: [],
            item: {},
            event: {}
        }
        
    },
      methods: {
     getMyItems: function() {
        let userId = localStorage.getItem('userId')
        let eventId = localStorage.getItem('eventId')
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items`)
        .then(function (response) {
          return response.data.items;
        })
        .catch(function(error){
          console.log(error)
        })
    } ,
   }, created: async function() {
      this.items = await this.getMyItems()
   }
}
</script>
 
<style scoped>
ul {
  
  width: 100%;
  display: flex;
  background-color: white;
}
li {
    padding: 5% 10px;
    text-align: center;
    outline: none;
    list-style-type: none;
    width: 220px;
}
li a {
    font-size: 1.2em;
    text-decoration: none;
    color: #28313f;
}
.host{
    background-color: #4baced;
    
}
.edit{
    background-color: white;
}
.host a, .edit a {
  color: #28313f;
}
.host {
  padding-top: 30px;
}

.adminQuestions h1{ 
  color: white;
}

div {
    font-family: 'Open Sans', sans-serif;
}
.body {
    background-color: #28313f;

    
}

ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  border: #f2f2f2 1px solid;
  margin-left: 40px;
  margin-right: 40px;
 margin-top: 40px;
 margin-bottom: 30px;
  }

li {
 padding: 5% 10px;
 text-align: center;
 outline: none;
 list-style-type: none;
 width: 220px;
}
li a {
 font-size: 1.2em;
 text-decoration: none;
 color: #28313f;
}
.host{
 background-color: #4baced;
 
}
.edit{
 background-color: white;
}
.host a, .edit a {
 color: #28313f;
}
.host {
 padding-top: 30px;
}
 
.adminQuestions h1{ 
 color: white;
}
 
.body {
 background-color: #28313f;
}
 
.item-box {
 display: flex;
 justify-content: space-between;
 background-color: #f2f2f2;
 border: #f2f2f2 1px solid;
 margin-left: 40px;
 margin-right: 40px;
 margin-top: 40px;
 margin-bottom: 30px;
 }
 
.item-options {
 padding-bottom: 10px;
 border-left: #454C59 2px solid;
 color: #454C59;
 padding-bottom: 10px;
}
 
.reply {
 border-bottom: #454C59 2px solid;
 background-color: #54a9de;
 padding-bottom: 10px;
}
 
h1 {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 8px;
    text-align: center;
    color: #454C59;
    font-size: 30px;
}

h2 {
 margin-bottom: 8px;
 text-align: center;
 color: #454C59;
 font-size: 30px;
}
 
h3 {
      color: #454C59;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
}
 
a {
 text-decoration: none;
 color: #454C59;
 font-size: 0.8em;
 font-weight: lighter;
}
 
p {
 padding-top: 10px;
}
 
@media only screen and (min-width: 768px) {
 
 .item-box {
 margin-left: 20%;
 margin-right: 20%;
 }
 
 .item-content {
 width: 80%;
 }
 
 .item-options{
 width: 40%;
 }
 
 p {
 padding-left: 20px;
 }
 
 h3 {
 padding-left: 20px;
 }
 
 h2 {
 padding-left: 20px;
 }
}
</style>