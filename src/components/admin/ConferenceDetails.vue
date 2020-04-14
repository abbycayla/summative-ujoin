<template>
  <div class="conference-details"> 
    <HeaderAdmin/>
      <h1> Your Conference </h1>
      <div class="conference-details-content">
      <div class="conference-name">
        <h2> Conference Name </h2>
        <p> (name) </p>
      </div>
      <div class="conference-description">
        <h2> Conference Description </h2>
        <p> (description) </p>
      </div>
      <div class="conference-code">
        <h2> User Entrance Code </h2>
        <p class="user-entrance-code"> (code) </p>
      </div>
      </div>
      <ul class="buttons-nav">
      <li class="edit"> <router-link v-bind:to="'/edit-conference'"> Edit <br/> Conference </router-link> </li>
      <li class="host"> <router-link v-bind:to="'/all-items-admin'"> HOST </router-link> </li>
      </ul>
  </div>
</template>

<script>

import HeaderAdmin from "./HeaderAdmin.vue"

export default {
    name: "ConferenceDetails",
    components: {
      HeaderAdmin
    }
}
</script>

<style scoped>

.conference-details {
    /* background-color: #454c45; */
    height: 100vh;
    color: #454c45;
    font-family: 'Open Sans', sans-serif;
}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: lighter; 
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
    font-weight: lighter;
}

.host{
    background-color: #54a9de;
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
  /* display: flex; */
  padding-top: 30px;
  /* align-items: center; */
  /* flex-direction: column ; */
  text-align: left;
}

.conference-details-content div {
  padding: 18px 0px;
  /* margin: 10px 0px; */
}

h2 {
  font-size: 1.2em;
  /* font-weight: lighter; */
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
    font-size: 3.2em;
}

.conference-details-content {
  margin: 0% 28%;
}

h2 {
    font-size: 1.5em;
}

.form {
  padding-top: 20px;
}

ul {
  bottom: 60px;
  left: 31%;
  /* right: 50%; */
}

li {
  padding: 1% 2%;
  margin: 0px 70px;
}
}

</style>