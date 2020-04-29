<template>
  <div> 
      <h1> My Questions </h1>
      <button> <router-link v-bind:to="'/all-items-user'"> Back </router-link> </button>
      <button> <router-link v-bind:to="'/edit-item'"> Edit </router-link> </button>
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
import axios from "axios";
import * as config from "../../../config";

import NavBarUser from "./NavBarUser"

export default {

    name: "MyItems",
    components:{
        NavBarUser
    },
    data: function(){
        return {
            items: [],
            item: {}
        }
        
    },
    methods: {
     getMyItems: function() {
        let userId = localStorage.getItem('userId')
        let eventId = localStorage.getItem('eventId')
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items`)
        .then(function (response) {
          return response.data.items;
        })
        .catch(function(error){
          console.log(error)
        })
    } 

    }, created: async function() {
    //   this.event = await this.getEvent(eventId)
      this.items = await this.getMyItems()
   },
}
</script>

<style scoped>

</style>