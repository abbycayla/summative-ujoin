<template>
  <div class="create-item"> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
      <!-- <HeaderAdmin/> -->
      <div class="create-item-heading">
            <div class="heading-button">
                <router-link > </router-link> 
            </div>
            <div class="heading-title">
                <h1> Ask a Question </h1>
            </div>
      </div>
      <div class="create-item-body " >
          <div class="body-textarea">
              <form  v-on:submit="checkForm">
            <!-- <textarea name="question" cols="30" rows="10" placeholder="Write question here..."></textarea> -->
            <input  v-model="event.body" value="stuff">
                        <input class="submit" type="submit" value="Submit">
 
            </form>
            </div>
            <div> 
            <p> Questions are being monitored. If your question is inappropriate, it will be deleted.</p>
            </div>
      </div>
   <NavBarUser/>
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
 errors: []
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

 createItem: function() {
 let userId = localStorage.getItem('userId')
 let eventId = localStorage.getItem('eventId')
 return axios
 .post(`${config.apiUrl}/users/${userId}/events/${eventId}/items`, this.item)
 .then((response) => {
 const item = response.data.item
 console.log(item)
 // this.getEventDetails(eventId)
 this.$router.push({ path: "/my-items"});
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
