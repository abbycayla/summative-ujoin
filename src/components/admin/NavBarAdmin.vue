<template>
  <div> 
      <ul>
          <li class="all-questions"> <router-link v-bind:to="'/all-items-admin'"> All <br /> Questions </router-link> </li>
          <li class="end-conference">  <router-link :to="{
              name: 'details',
              params: {eventId: event.id}
              }">  End  <br /> Conference  </router-link> </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

export default {
    name: "NavBarAdmin",
     data: function(){
      return{
       event: {
      
      },
      }
    }, methods: {
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

ul {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: white;
}

li {
    padding: 2% 12%;
    text-align: center;
    border: none;
    outline: none;
    list-style-type: none;
    width: 100%;
}

li a {
    font-size: 1.15em;
    text-decoration: none;
    color: #28313f;
    font-weight: lighter;
}

.all-questions {
    border-right: solid 1px grey;
    /* background-color: white; */
}

.end-conference {
    background-color: #54a9da;
}

.end-conference a {
    color: white;
}

.router-link-exact-active {
  font-weight: bold;
  color: #54a9de;
}

@media only screen and (min-width: 768px){
  ul {
        justify-content: center;
    }

    li {
        padding: 1.5% 20%;
        font-size: 1.3em;
        text-align: center;
    }
}


</style>