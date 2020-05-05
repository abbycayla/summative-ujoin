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
  <div> 
     <h1> All Questions </h1>
      <h2> <router-link v-bind:to="'/reply-to-item'"> Question jdnijksnvkd </router-link> </h2>
       <div v-for="item in items" :key="item.id" :item="item">
          <router-link :to="{
              name: 'itemDetail',
              params: {itemId: item.id}
              }"> 
              <h1> {{item.body}} </h1>
          </router-link>
      </div>
      <NavBarUser/>
  </div>
</template>

<script>

import axios from "axios"
import * as config from "../../../config"
import NavBarUser from "./NavBarUser"
import HeaderConference from "./HeaderConference"


export default {

    name: "AllItemsUser",
    components:{
        NavBarUser,
        HeaderConference
    },
   
}
</script>

<style scoped>

.body {
    Height: 100vh;
    background-color: #2b313f; 
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