<template>
  <div> 
      <h1> Edit Conference </h1>
      
 <button> <router-link v-bind:to="'/conference-details/:eventId'"> Back </router-link> </button>
   <a href="#" @click.prevent="deleteEvent()"> Delete </a>
    

  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";
export default {
    name: "EditConference",
    data: function() {
    return {
      events: []
    };
  },
  methods: {

deleteEvent: function(){
  let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 debugger
      return axios
        .delete(`${config.apiUrl}/users/${userId}/events/${eventId}`)
       .then((response) => {
         debugger
     this.$router.push({ path: "/create-conference"});
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
 
}

</script>

<style scoped>

</style>