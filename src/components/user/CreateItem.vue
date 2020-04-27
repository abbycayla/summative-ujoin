<template>
    <div>
    <h1>New article</h1>
    <!-- Use case c4: Article form -->
    <form @submit="checkForm">

     <div v-if="errors.length">
      Please correct the following error(s):
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>

      <div>
        <label for="name">Body</label>
        <input v-model="item.body" type="text" name="body" placeholder="Enter the article body">
      </div>

      <div>
        <input type="submit" value="Submit">
      </div>

    </form>
  </div>
</template>
 
<script>
import axios from "axios";
import * as config from "../../../config";
 
export default {
    name: "CreateItem",
    components: {
  
    },
    data: function(){
      return{
      item: {
        body: ''
      },
      errors:  []
      }
    },
    methods: {
    checkForm: function(evt) {
      evt.preventDefault();
 
      this.errors = [];

      if (!this.item.body) {
        this.errors.push("Body required");
      }
      if (!this.errors.length) {
        this.createItem();
      }
    },
//     createItem: function() {
//       let userId = localStorage.getItem('userId')
//       let eventId = this.event.id
//       return axios
//         .post(`${config.apiUrl}/users/${userId}/events/${eventId}/items`, this.item)
//       .then((response) => {
//         const item = response.data.item
//         console.log(item);
//       // this.getItemDetails(itemId)
//     this.$router.push({ name:"questions", params: {itemId: item.id} });
//     console.log(this.$route.params)
//  })
//         .catch(function(error) {
//           // handle error
//           console.log(error);
//         });
//     }, 
 createItem: function() {
      let userId = localStorage.getItem('userId')
      let eventId = localStorage.getItem('eventId')
      return axios
       .post(`${config.apiUrl}/users/${userId}/events/${eventId}/items`,this.item)
      .then((response) => {
        const item = response.data.item
        console.log(item)
      // this.getEventDetails(eventId)
    this.$router.push({ name: "newQuestion", params: {itemId: item.id} });
    console.log(this.$route.params)
 })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }, 
    //  getEvent: function(eventId) {
    //   let userId = localStorage.getItem('userId')
    // // const eventId = this.$route.params.eventId
    //   return axios
    //     .get(`${config.apiUrl}/users/${userId}/events/${eventId}`)
    //     .then(function (response) {
    //       return response.data.event;
    //       // console.log(event)
    //     })
    //     .catch(function(error){
    //       console.log(error)
    //     })
    // }
  
    },
  //    created: async function() {
  //   const eventId = this.$route.params.eventId
  //   console.log('created', eventId)
  //     this.event = await this.getEvent(eventId)
  //       this.item = await this.createItem(eventId)
  //     console.log(this.event)
  //  },
}
 
</script>

 
<style scoped>
 
.create-item {
    background-color: #454c45;
    height: 100vh;
    color: white;
    font-family: 'Open Sans', sans-serif;
}
 
.create-item-heading {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    
}

 
h1 {
    text-align: center;
    font-size: 2em;
    font-weight: lighter; 
    margin: 0px 20px;
}
 
button {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 13px;
}
 
.body-textarea {
    width: 100%;

    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
 
textarea {
    border: none;
    padding: 20px;
    width: 70%;
    outline: none;
 
}
 
p {
    text-align: center;
    margin: 0px 15%;
    font-weight: lighter;
    font-size: .9em;
    margin-bottom: 25px;
}
 
.submit {
    padding: 5px 7px;
    border: none;
    background-color: #4baced;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
     color: white;
    text-decoration: none;
    font-size: 1.5em;
}


 
.back {
    margin-top: 8px;
    width: 30px;
}


 
@media only screen and (min-width: 768px) {
.body-textarea {
    margin-bottom: 50px;
}
 
    textarea {
    width: 50%;
}
 
h1 {
    font-size: 3em;
    padding-bottom: 10px;
}
 
.back {
    margin-top: 10px;
    margin-right: 10px;
    width: 50px;
}
 
p {
    margin-bottom: 40px;
}
 
.submit a{
    font-size: 1.7em;
}
 
}


 
</style>