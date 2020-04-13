<template>
  <div class="conference-details"> 
    <HeaderAdmin/>
      <h1> Conference </h1>
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
      <button> <router-link v-bind:to="'/edit-conference'"> Edit </router-link> </button>
      <button> <router-link v-bind:to="'/all-items-admin'"> HOST </router-link> </button>
      <NavBarUser/>
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
    font-weight: 400; 
    margin: 0px 20px;
}

button {
    padding: 5px 10px;
    border: none;
    background-color: #54a9de;
    box-shadow: 3px 5px 5px rgb(49, 49, 49);
    outline: none;
    font-size: 1.2em;
    font-weight: lighter;
    
    margin-top: 30px;
}

.conference-details-content {
  /* margin: 0% 20%; */
  display: flex;
  padding-top: 30px;
  align-items: center;
  flex-direction: column ;
  text-align: left;
}

.conference-details-content div {
  padding: 15px 0px;
  /* margin: 10px 0px; */
}

h2 {
  font-size: 1.4em;
  font-weight: lighter;
}

p {
  font-size: .9em;
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

.form {
  padding-top: 20px;
}
}

</style>