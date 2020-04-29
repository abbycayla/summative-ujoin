<template>
  <div class="conference-details"> 
    <HeaderAdmin/>
    <h1> Your Conference </h1>
    <div class="conference-details-content">
      <div class="conference-name">
        <h2> Conference Name </h2>
        <p> {{event.title}} </p>
      </div>
      <div class="conference-description">
        <h2> Conference Description </h2>
        <p >{{event.body}} </p>
      </div>
      <div class="conference-code">
        <h2> Event Entrance Code </h2>
        <p> {{event.code}} </p>
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

import HeaderAdmin from "./HeaderAdmin.vue"

export default {
    name: "ConferenceDetails",
    components: {
      HeaderAdmin
    }, 

    data: function(){
      return{
       event: {},
      }
    },

     methods: {
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
  }
   , created: async function() {
    const eventId = this.$route.params.eventId
    console.log('created', eventId)
      this.event = await this.getEvent(eventId)
      console.log(this.event)
   },
}
</script>

<style scoped>
.conference-details {
    height: 100vh;
    color: #454c45;
    font-family: 'Open Sans', sans-serif;
}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: 400; 
    margin: 0px 20px;
}

ul {
  position: absolute;
  bottom: 0;
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
    background-color: #454c45;
}

.host a, .edit a {
  color: white;
}

.host {
  padding-top: 30px;
}

.conference-details-content {
  margin: 0% 20%;
  padding-top: 30px;
  text-align: left;
}

.conference-details-content div {
  padding: 18px 0px;
}

h2 {
  font-size: 1.2em;
  padding-bottom: 10px;
}

p {
  font-size: 1.2em;
  font-weight: lighter;
}

.user-entrance-code {
  font-weight: bold;
}

@media only screen and (min-width: 768px) {
  input {
    padding: 15px 200px;
    margin: 10px 0px 20px 0px;
  }

  h1 {
      font-size: 3em;
}

.conference-details-content {
  margin: 0% 28%;
  padding-top: 0;
}

h2 {
    font-size: 1.5em;
}

.form {
  padding-top: 20px;
}

ul {
  bottom: 40px;
  left: 24%;
  width: 60%;
}

li {
  padding: 4px 7px;
  margin: 0px 70px;
  font-size: 1.5em;
}

.host {
  padding-top: 20px;
}
}
</style>