<template>
  <div> 
      <h1> {{item.body}}</h1>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";
export default {
    name: "ItemDetail",
    data: function(){
        return {
            item: {}
        }
    },

    methods: {
        getItem: function(itemId) {
        let userId = localStorage.getItem('userId')
        let eventId = localStorage.getItem('eventId')
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items/${itemId}`)
        .then(function (response) {
//  const item = response.data.item
            // console.log(item)
          return response.data.item
        })
        .catch(function(error){
          console.log(error)
        })
    } 
    },
    created: async function(){
    const itemId = this.$route.params.itemId
        console.log('created', itemId)
      this.item = await this.getItem(itemId)
      console.log(this.item)
    }

}
</script>

<style>

</style>