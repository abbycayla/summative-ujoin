<template>
 <div>
 <h1>New article</h1>
 <!-- Use case c4: Article form -->
 <form @submit="checkForm">
 
 <div v-if="errors.length">
 Please correct the following error(s):
 <ul>
 <li v-for="error in errors" :key="error">{{ error }}</li>
 </ul>
 </div>
 
 <div>
 <label for="name">Body</label>
 <input v-model="item.body" type="text" name="body" placeholder="Enter the article body">
 </div>
 
 <div>
 <input type="submit" value="Submit">
 </div>
 
 </form>
 </div>
</template>
 
<script>
import axios from "axios";
import * as config from "../../../config";
 
export default {
 name: "CreateItem",
 components: {
 
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
// createItem: function() {
// let userId = localStorage.getItem('userId')
// let eventId = this.event.id
// return axios
// .post(`${config.apiUrl}/users/${userId}/events/${eventId}/items`, this.item)
// .then((response) => {
// const item = response.data.item
// console.log(item);
// // this.getItemDetails(itemId)
// this.$router.push({ name:"questions", params: {itemId: item.id} });
// console.log(this.$route.params)
// })
// .catch(function(error) {
// // handle error
// console.log(error);
// });
// }, 
//     createEvent: function() {
//       let userId = localStorage.getItem('userId')
//       return axios
//         .post(`${config.apiUrl}/users/${userId}/events`, this.event)
//       .then((response) => {
//         const event = response.data.event
//         console.log(event)
//         if (event){
//           localStorage.eventId = event.id
//         }
//       // this.getEventDetails(eventId)
//     this.$router.push({ name: "details", params: {eventId: event.id} });
//     console.log(this.$route.params)
//  })
//         .catch(function(error) {
//           // handle error
//           console.log(error);
//         });
//     }, 

 createItem: function() {
 let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 return axios
 .post(`${config.apiUrl}/users/${userId}/events/${eventId}/items`, this.item)
 .then((response) => {
 const item = response.data.item
 console.log(item)
 // this.getEventDetails(eventId)
 this.$router.push({ path: "/my-items"});
 console.log(this.$route.params)
 })
 .catch(function(error) {
 // handle error
 console.log(error);
 });
 }, 
//  getEvent: function(eventId) {
//  let userId = localStorage.getItem('userId')
//  // const eventId = this.$route.params.eventId
//  return axios
//  .get(`${config.apiUrl}/users/${userId}/events/${eventId}`)
//  .then(function (response) {
//  return response.data.event;
//  // console.log(event)
//  })
//  .catch(function(error){
//  console.log(error)
//  })
//  }
 
 },
 // created: async function() {
 // const eventId = this.$route.params.eventId
 // console.log('created', eventId)
 // this.event = await this.getEvent(eventId)
 // this.item = await this.createItem(eventId)
 // console.log(this.event)
 // },
}
 
</script>