<template>
  <div> 
      <HeaderConference/>
         
      <div class="edit-items">
      <div >
 <button> <router-link v-bind:to="'/my-items'"> <i class='fas fa-angle-left'></i> </router-link> </button>
      </div>
     
 <h1> Edit a Question </h1>
     <div class="form">
        <div>
        <form >
          <label for="body"> Question </label> <br />
          <input  class="Question" type="text"> <br />
      
          <div class="form-buttons" v-for="item in items" :key = "item.id">
            <div>
<button class="delete"><a href="#" @click.prevent="deleteItem(item.id)"> Delete </a></button>
            </div>

          <input class="submit" type="submit" value="Update">
          </div>
          
        </form>
     
        </div>
      </div>
        </div>

     
     
      <NavBarUser/>
  </div>
</template>

<script>
import HeaderConference from "./HeaderConference"
import NavBarUser from "./NavBarUser"
import axios from "axios"
import * as config from "../../../config"
export default {
 
 name: "EditItem",
 components:{
 NavBarUser,
 HeaderConference
 },
 data: function() {
 return {
 items: []

 };
 },
 methods: {
    // getItem: function(itemId) {
    //     let userId = localStorage.getItem('userId')
    //     let eventId = localStorage.getItem('eventId')
    //   return axios
    //     .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items/${itemId}`)
    //     .then(function (response) {
    //       return response.data.item
    //     })
    //     .catch(function(error){
    //       console.log(error)
    //     })
    // },
       getItems: function() {
        let userId = localStorage.getItem('userId')
        let eventId = localStorage.getItem('eventId')
      return axios
        .get(`${config.apiUrl}/users/${userId}/events/${eventId}/items`)
        .then(function (response) {
          return response.data.items
        })
        .catch(function(error){
          console.log(error)
        })
    }, 
deleteItem: function(itemId){
 let userId = localStorage.getItem('userId')
//  let itemId = localStorage.getItem('itemId')
  let eventId = localStorage.getItem('eventId')
 
 return axios
 .delete(`${config.apiUrl}/users/${userId}/events/${eventId}/items/${itemId}`)
 .then(async() => {
this.items = await this.getItems()
   this.$router.push({ path: "/my-items"})
    console.log('deleted')
 })
 .catch(function(error) {
 
 console.log(error)
 });
 }
 }, 
 created: async function(){
    // let itemId = localStorage.getItem('itemId')
// const itemId = this.$route.params.itemId
  this.items = await this.getItems()
      //  this.item = await this.deleteItem(itemId)
    }
 
}
</script>

<style scoped>
.edit-items-header{
  display: flex;
  justify-content: center;
}


.edit-items {
   background-color: #2B313F;
   padding-bottom: 300px;
}


.edit-items h1 {
  color: white;
    font-family: 'Open Sans', sans-serif;
}


.edit-items i {
  font-size: 40px;
  color: white;
   margin: 10px 0px 0px 10px;
   
}


.form-buttons {
  display: flex;
}

.form-buttons a {
   color: white;
    text-decoration: none;
    font-size: 20px;
}

.delete {
  height: 50px;
    width: 100px;
    border: none;
    background-color: #4baced;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
     color: white;
    text-decoration: none;
 
}


h1 {
    font-size: 2em;
    font-weight: 400; 
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    margin-bottom: 20px;
  
}

.back {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 8px;
}

.submit {
    height: 50px;
    width: 100px;
    border: none;
    background-color: #4baced;
    outline: none;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    margin-bottom: 50px;
     color: white;
    text-decoration: none;
     font-size: 20px;
}
.submit a {
    color: white;
    text-decoration: none;
    font-size: 20px;
}

.submit:hover {
cursor: pointer;
}

label {
  margin: 50px 0px;
  font-family: 'Open Sans', sans-serif;
  color: white;
}

.error {
    font-size: .9em;
    font-weight: lighter;
    text-align: center;
}

.form {
  display: flex;
  justify-content: center;
}

input[type=text] {
  margin: 5px 0px 20px 0px;
  border: 1px solid #2b313f;
  width: 250px;
  height: 30px;
  outline: none;
  padding-left: 10px;
  padding-bottom: 180px;
  padding-top: 20px;
}


@media only screen and (min-width: 768px) { 
.edit-items {
   background-color: #2B313F;
   padding-bottom: 400px;
}


.edit-items button {
 border: none;
   background-color:#2b313f ;
}

input[type=text] {
  margin: 5px 0px 20px 0px;
  padding-left: 40px;
    padding-right: 400px;
  padding-bottom: 200px;
  padding-top: 20px;
}

.delete {
  background-color:#4baced !important; 
   margin: 50px auto 150px auto;
}

.submit {
  margin: 50px auto 150px auto;
}



}




</style>