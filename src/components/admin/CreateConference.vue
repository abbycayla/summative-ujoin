<template>
  <div class="create-conference"> 
    <HeaderAdmin/>
    <div class="create-conference-heading">
      <div>
      <h1> Create a Conference </h1>
      </div>
      </div>
      <div v-if="errors.length">
      Please correct the following error(s):
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
      <div class="form">
        <div>
        <form v-on:submit="checkForm">
          <label for="title"> Name </label> <br />
          <input v-model="event.title" type="text"> <br />
          <label for="body"> Description </label> <br />
          <input v-model="event.body"  class="description" type="text"> <br />
          <label for="code"> event Entrance Code </label> <br />
          <input v-model="event.code" type="text"> <br />
            <input class="submit" type="submit" value="Create">
        </form>
        </div>
      </div>
  </div>
</template>
 
<script>
import axios from "axios";
import * as config from "../../../config";
 
export default {
    name: "CreateConference",
    components: {
  
    },
    data: function(){
      return{
      event: {
        title: '',
        body: '',
        code: ''
      },
      errors:  []
      }
    },
    methods: {
    checkForm: function(evt) {
      evt.preventDefault();
 
      this.errors = [];
 
      if (!this.event.title) {
        this.errors.push("Title required");
      }
      if (!this.event.body) {
        this.errors.push("Body required");
      }
      if (!this.event.code) {
        this.errors.push("Code required");
      }
      if (!this.errors.length) {
        this.createEvent();
      }
    },
 createEvent: function() {
      let userId = localStorage.getItem('userId')
      return axios
        .post(`${config.apiUrl}/users/${userId}/events`, this.event)
      .then((response) => {
        const event = response.data.event
        console.log(event)
      // this.getEventDetails(eventId)
    this.$router.push({ name: "details", params: {eventId: event.id} });
    if (event){
            localStorage.eventId = event.id
            } else {
                //show message?
            }
    console.log(this.$route.params)
 })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
           
    },

}
}
 
</script>