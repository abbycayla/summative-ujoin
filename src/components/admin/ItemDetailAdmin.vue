<template>
  <div class="reply-to-item"> 
    <HeaderConference/>
      <div class="reply-heading">
        <div class="heading-button">
          <router-link v-bind:to="'/all-items-admin'"> 
            <img class="back" src="@/assets/back-light.png"> 
          </router-link> 
        </div>
        <div class="heading-title">
          <h1> Question Asked By: </h1>
        </div>
      </div>
      <h2> Username </h2>
      <div class="textarea-wrapper">
        <p class="users-question"> {{item.body}}</p>
        <p class="users-reply"> Reply </p>
      </div>
      <button class="submit">   
        <router-link v-bind:to="'/all-items-admin'"> Submit </router-link> 
      </button>
      <NavBarAdmin/>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

import HeaderConference from "../user/HeaderConference"
import NavBarAdmin from "./NavBarAdmin"

export default {
    name: "ItemDetail",
    components: {
      NavBarAdmin,
      HeaderConference
    },

    data: function(){
        return {
            item: {}
        }
    },

    methods: {
        getItem: function(itemId) {
        let userId = localStorage.getItem('userId')
        let eventId = localStorage.getItem('eventId')
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items/${itemId}`)
        .then(function (response) {
          return response.data.item
        })
        .catch(function(error){
          console.log(error)
        })
    } 
    },
    created: async function(){
    const itemId = this.$route.params.itemId
        console.log('created', itemId)
      this.item = await this.getItem(itemId)
      console.log(this.item)
    }
}
</script>

<style scoped>
.reply-to-item {
    background-color: #454c45;
    height: 100vh;
    color: white;
    font-family: 'Open Sans', sans-serif;
}

.reply-heading {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.users-question {
  background-color: white;
  color: #454c45;
  padding: 20px;
  width: 250px;
  height: 120px;
  margin-bottom: 30px;
}

.users-reply {
  background-color: white;
  color: #454c45;
  padding: 20px;
  width: 250px;
  height: 120px;
  margin-bottom: 20px;
}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: lighter; 
    margin: 0px 10px;
}

h2 {
    font-size: 1.2em;
    font-weight: 400;
    text-align: center;
    padding-bottom: 10px;
}

.textarea-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

textarea {
    margin: 15px 0px;
    border: none;
    padding: 20px;
    width: 70%;
    outline: none;
}

.submit {
    padding: 5px 7px;
    border: none;
    background-color: #4baced;
    color: white;
    outline: none;
    font-size: 20px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10px;
}

.submit a {
    color: white;
    text-decoration: none;
}

.back {
    margin-top: 8px;
    width: 30px;
}

@media only screen and (min-width: 768px) {
h1 {
     font-size: 3em;
}

h2 {
    font-size: 1.5em;
}

.back {
    margin-top: 10px;
    margin-right: 10px;
    width: 50px;
}

.users-question {
  width: 400px;
  height: 100px;
}

.users-reply {
  width: 400px;
  height: 100px;
}

}

</style>