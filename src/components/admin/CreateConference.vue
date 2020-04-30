<template>
  <div class="create-conference"> 
    <HeaderAdmin/>
    <div class="create-conference-heading">
      <div>
        <h1> Create a Conference </h1>
      </div>
    </div>

      <div class="form">
        <div>
        <form v-on:submit="checkForm">
          <label for="title"> Name </label> <br />
          <input v-model="event.title" type="text"> <br />
          <label for="body"> Description </label> <br />
          <input v-model="event.body"  class="description" type="text"> <br />
          <label for="code"> Event Entrance Code </label> <br />
          <input v-model="event.code" type="text"> <br />
          <input class="submit" type="submit" value="Create">
        </form>
        <div v-if="errors.length" class="error"> Please fill in the boxes </div>
        </div>
      </div>
  </div>
</template>
 
<script>
import axios from "axios"
import * as config from "../../../config"
import HeaderAdmin from "./HeaderAdmin.vue"
export default {
    name: "CreateConference",
    components: {
      HeaderAdmin
    },
    data: function(){
      return{
      event: {
        title: '',
        body: '',
        code: ''
      },
      errors:  []
      }
    },
    methods: {
    checkForm: function(evt) {
      evt.preventDefault()
      this.errors = []
      if (!this.event.title) {
        this.errors.push("Title required")
      }
      if (!this.event.body) {
        this.errors.push("Body required")
      }
      if (!this.event.code) {
        this.errors.push("Code required")
      }
      if (!this.errors.length) {
        this.createEvent()
      }
    },
    createEvent: function() {
      let userId = localStorage.getItem('userId')
      return axios
        .post(`${config.apiUrl}/users/${userId}/events`, this.event)
      .then((response) => {
        const event = response.data.event
        console.log(event)
        if (event){
          localStorage.eventId = event.id
        }
    this.$router.push({ name: "details", params: {eventId: event.id} });
    console.log(this.$route.params)
 })
        .catch(function(error) {
          console.log(error);
        });
    }, 
    }
}
</script>


<style scoped>
.create-conference {
    height: 100vh;
    color: #454c45;
    font-family: 'Open Sans', sans-serif;
}

.create-conference-heading {
    display: flex;
    justify-content: center;

}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: 400; 
    margin: 30px 20px 30px 20px;
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
     color: white;
    text-decoration: none;
    font-size: 1.5em;
}
.submit a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
}

.submit:hover {
cursor: pointer;
}

label {
  margin: 50px 0px;
  font-family: 'Open Sans', sans-serif;
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
}


.description {
  padding-bottom: 90px;
  padding-top: 20px;
}

.description {
  height: 60px;
}

@media only screen and (min-width: 768px) {
  input[type=text] {
    width: 500px;
    height: 50px;
  }

  .description {
    height: 100px;
  }

  h1 {
    font-size: 3em;
}

.form {
  padding-top: 0px;
}

.submit {
  font-size: 1.5em;
  width: 100px;
  padding: 0px;
}
}




 
</style>