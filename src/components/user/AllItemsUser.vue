<template>
<div class="body">
    <HeaderConference/>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet">
    <h2> Asked Questions </h2>
  <div>
  <div class="item">
      <div class="item-content">
      <h1>Name</h1>
      <p>Question 1 blah blah blah</p>
      </div>
  <div class="reply">
      <p>Waiting for reply </p>
      </div>
      </div>
 
 <div class="item">
     <div class="item-content">
      <h1>Name</h1>
      <p>Question 2 blah blah blah</p>
      </div>
  <div class="replied">
      <p>Replied !</p>
      </div>
 </div>
 <div class="item">
     <div class="item-content">
      <h1>Name</h1>
      <p>Question 3 blah blah blah</p>
      </div>
  <div class="replied">
      <p>Replied !</p>
      </div>
 </div>
  </div>
      <NavBarUser/>
  </div>
</template>

<script>

import axios from "axios";
import * as config from "../../../config";
import NavBarUser from "./NavBarUser"
import HeaderConference from "./HeaderConference"


export default {

    name: "AllItemsUser",
    components:{
        NavBarUser,
        HeaderConference
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

     getEvent: function(eventId) {
      let userId = localStorage.getItem('userId')
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}`)
        .then(function (response) {
          return response.data.event;
        })
        .catch(function(error){
          console.log(error)
        })
    }
      }, created: async function() {
    const eventId = this.$route.params.eventId
    console.log('created', eventId)
      this.event = await this.getEvent(eventId)
      this.items = await this.getMyItems()
      console.log(this.event)
   },
}
</script>

<style scoped>

.body {
    Height: 100vh;
    background-color: #454C59; 
}

h2 {
    color: #F2F2F2;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding-bottom: 30px;
    font-size: 1.8em;
}

h1 {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5em;
}

p {
    font-family: 'Open Sans', sans-serif;
    font-weight: lighter;
}
.item {
    background: #F2F2F2;
    margin-bottom: 10%; 
    margin-left: 10%;
    margin-right: 10%;
    display: flex;
    padding-left: 2%;
}

.reply {
    width: 40%;
    border-left: #454C59 2px solid;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 35px;
}

.replied {
    width: 40%;
    border-left: #454C59 2px solid;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 35px;
    background-color: #54a9de;
}

@media only screen and (min-width: 768px) {
    .item {
        margin: 5% 20%;    
    }

    .replied {
        width: 40%;
    }

    .item-content {
        width: 80%;
    }
}
</style>