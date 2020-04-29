<template>
  <div> 
      <h1> Edit a Question </h1>
      <button> <router-link v-bind:to="'/my-items'"> Back </router-link> </button>
      <NavBarUser/>
  </div>
</template>

<script>
import NavBarUser from "./NavBarUser"
import axios from "axios";
import * as config from "../../../config";
export default {

    name: "EditItem",
    components:{
        NavBarUser
    },
    data: function() {
    return {
      items: []
    };
  },
  methods: {

deleteItem: function(){
  let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 
      return axios
        .delete(`${config.apiUrl}/users/${userId}/items/${itemId}`)
      .then(async () => {
          this.items = await this.getItems();
        })
        .catch(function(error) {
         
          console.log(error);
        });
    }
    }
  
}
</script>

<style scoped>

</style>