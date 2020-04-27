<template>
  <div> 
      <h1> All Questions </h1>
      <NavBarUser/>
  </div>
</template>

<script>
// import axios from "axios";
// import * as config from "../../../config";
import NavBarUser from "./NavBarUser"

export default {

    name: "AllItemsUser",
    components:{
        NavBarUser
    },
    data: function(){
        return {
            event: {},
            items: []
        }
    },
    // methods: {
    //  getAllItems: function(eventId) {
    //     let userId = localStorage.getItem('userId')
    //     // let eventId = localStorage.getItem('eventId')

    // // const eventId = this.$route.params.eventId
    //   return axios
    //     .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items`)
    //     .then(function (response) {
    //       return response.data.item;
    //       // console.log(event)
    //     })
    //     .catch(function(error){
    //       console.log(error)
    //     })
    // },
//     getEvent: function(eventId) {
//       let userId = localStorage.getItem('userId')
//     // const eventId = this.$route.params.eventId
//       return axios
//         .get(`${config.apiUrl}/users/${userId}/events/${eventId}`)
//         .then(function (response) {
//           return response.data.event;
          
//           // console.log(event)
//         })
//         .catch(function(error){
//           console.log(error)
//         })
//     }
//     },
//  created: async function() {
//     const eventId = this.$route.params.eventId
//     console.log('created', eventId)
//       this.event = await this.getEvent(eventId)
//       console.log(this.event)
//    },
// }
}

    

</script>

<style scoped>


</style>