<template>
  <div>
        <HeaderAdmin/>
        <div class="edit-head"> 
        <button> <router-link v-bind:to="'/conference-details/:eventId'"> <i class='fas fa-angle-left'></i> </router-link> </button>
  
     
      
        </div>
          <h1> Edit Conference </h1>
  
  
  <div class="form">
        <div>
        <form >
          <label for="title"> Name </label> <br />
          <input  type="text"> <br />
          <label for="body"> Description </label> <br />
          <input  class="description" type="text"> <br />
          <label for="code"> Event Entrance Code </label> <br />
          <input  type="text"> <br />
          <div class="form-buttons">
<button class="delete"><a href="#" @click.prevent="deleteEvent()"> Delete </a></button>
          <input class="submit" type="submit" value="Update">
          </div>
          
        </form>
     
        </div>
      </div>
    
 
  </div>
</template>



<script>

import axios from "axios"
import * as config from "../../../config"
import HeaderAdmin from "./HeaderAdmin.vue"

export default {
    name: "EditConference",
     components:{
       
          HeaderAdmin
    },
    data: function() {
    return {
      events: []
    };
  },
  methods: {

deleteEvent: function(){
  let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 
      return axios
        .delete(`${config.apiUrl}/users/${userId}/events/${eventId}`)
       .then(() => {
       
     this.$router.push({ path: "/create-conference"})
        })
        .catch(function(error) {
          console.log(error)
        });
    }
  }
 
}

</script>




<style scoped>




.edit-head button {
  border: none;
  background-color: white;
}

.edit-head i {
  font-size: 40px;
  color: #2B313F;
   margin: 0px 0px 0px 10px;
   
}



.form-buttons {
  display: flex;
}

.form-buttons a {
   color: white;
    text-decoration: none;
    font-size: 20px;
}

.delete {
  height: 50px;
    width: 100px;
    border: none;
    background-color: #4baced;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
     color: white;
    text-decoration: none;
 
}


h1 {
    font-size: 2em;
    font-weight: 400; 
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    margin-bottom: 20px;
  
}

.back {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 8px;
}

.submit {
    height: 50px;
    width: 100px;
    border: none;
    background-color: #4baced;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
     color: white;
    text-decoration: none;
     font-size: 20px;
}
.submit a {
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.submit:hover {
cursor: pointer;
}

label {
  margin: 50px 0px;
  font-family: 'Open Sans', sans-serif;
}

.error {
    font-size: .9em;
    font-weight: lighter;
    text-align: center;
}

.form {
  display: flex;
  justify-content: center;
}

input[type=text] {
  margin: 5px 0px 20px 0px;
  border: 1px solid #2b313f;
  width: 250px;
  height: 30px;
  outline: none;
  padding-left: 10px;
}


.description {
  padding-bottom: 90px;
  padding-top: 20px;
}

.description {
  height: 60px;
}

@media only screen and (min-width: 768px) {
.edit-head i {
  font-size: 60px;
 margin-left: 30px;
 
}



  input {
    width: 500px;
    height: 50px;
  }

  .description {
    height: 100px;
  }

  h1 {
    font-size: 3em;
}

.form {
  padding-top: 0px;
}

.submit {
  font-size: 1.5em;
  width: 100px;
  padding: 0px;
}
}




 
</style>