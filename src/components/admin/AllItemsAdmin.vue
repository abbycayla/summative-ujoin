<template>
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
      <NavBarAdmin/>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";
import NavBarAdmin from "./NavBarAdmin"

export default {

    name: "AllItemsAdmin",
    components:{
        NavBarAdmin
    },
    data: function(){
        return {
            items: [],
            item: {},
            event: {}
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
    } ,

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
      }, created: async function() {
    const eventId = this.$route.params.eventId
    console.log('created', eventId)
      this.event = await this.getEvent(eventId)
      this.items = await this.getMyItems()
      console.log(this.event)
   },
}
</script>

<style scoped>


</style>