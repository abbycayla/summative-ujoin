<template>

  <div> 
      <h1> Edit Conference </h1>
      
 <button> <router-link v-bind:to="'/conference-details/:eventId'"> Back </router-link> </button>
   <a href="#" @click.prevent="deleteEvent()"> Delete </a>
   
  <div class="body">
    <h1>Edit Details</h1>
    <div v-if="errors.length">
      Please correct the following error(s):
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form @submit="checkForm">
      <div class="box-one">
        <label for="title">Title</label>
        <input v-model="event.title" type="text" placeholder="Title" />
      </div>
      <div>
        <label for="body">Body</label>
        <textarea v-model="event.body" name="body" cols="30" rows="10"></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";
export default {
    name: "EditConference",
    data: function() {
    return {
      events: [],
       event: {
        title: '',
        body: ''
      },
      errors: []
    };
  },

  methods:{
     checkForm: function(evt) {
      evt.preventDefault();

      this.errors = [];

      if (!this.event.title) {
        this.errors.push("Title required");
      }
      if (!this.event.body) {
        this.errors.push("Body required");
      }
      if (!this.errors.length) {
        this.updateEvent()
      }
    },
    deleteEvent: function(){
  let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 debugger
      return axios
        .delete(`${config.apiUrl}/users/${userId}/events/${eventId}`)
       .then((response) => {
         debugger
     this.$router.push({ path: "/create-conference"});
     }
     },
    updateEvent: function() {
      let eventId = localStorage.getItem('eventId')
      let userId = localStorage.getItem('userId')
      return axios
        .put(`${config.apiUrl}/users/${userId}/events/${eventId}`, this.event)
        .then(() => {
          this.$router.push({ name: "details", params: {eventId: event.id} });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  }
    },
    getEvent: function(eventId) {
      let userId = localStorage.getItem('userId')
    // const eventId = this.$route.params.eventId
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}`)
        .then(function (response) {
          return response.data.event;
          // console.log(event)
        })
        .catch(function(error){
          console.log(error)
        })
    
    
  }
  }, created: async function() {
    const eventId = this.$route.params.eventId
    console.log('created', eventId)
      this.event = await this.getEvent(eventId)
      console.log(this.event)
   },
  

}

</script>

<style scoped>

.body {
  background-color: #454c59;
  height: 100vh;
}

h1 {
  color: #f2f2f2;
  text-align: center;
}

label {
  font-size: 1em;
  color: #f2f2f2;
  padding-bottom: 5%;
  padding-top: 5%;
  margin-left: 10%;
}

.button {
  background-color: #54a9de;
  text-align: center;
  margin-left: 40%;
  margin-right: 40%;
  padding-top: 5px;
  padding-bottom: 5px;
}

.box-one {
  padding-bottom: 10%;
}

@media only screen and (min-width: 768px) {

.button {
  margin-left: 45%;
  margin-right: 45%;
}
}

</style>