<template>
  <div class="create-conference"> 
    <HeaderAdmin/>
    <div class="create-conference-heading">
      <div>
      <h1> Create a Conference </h1>
      </div>
      </div>
      <div v-if="errors.length">
      Please correct the following error(s):
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
      <div class="form">
        <div>
        <form v-on:submit="checkForm">
          <label for="title"> Name </label> <br />
          <input v-model="event.title" type="text"> <br />
          <label for="body"> Description </label> <br />
          <p> {{event.title}}</p>
          <input v-model="event.body"  class="description" type="text"> <br />
          <label for="code"> User Entrance Code </label> <br />
          <input v-model="event.code" type="text"> <br />
            <input class="submit" type="submit" value="Create">
        </form>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import * as config from "../../../config";

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
      evt.preventDefault();

      this.errors = [];

      if (!this.event.title) {
        this.errors.push("Title required");
      }
      if (!this.event.body) {
        this.errors.push("Body required");
      }
      if (!this.event.code) {
        this.errors.push("Code required");
      }
      if (!this.errors.length) {
        this.createEvent();
        // if (isEdit) {
        //   this.updateArticle();
        // } else {
        //   this.createArticle();
        // }
      }
    },
    createEvent: function() {
      let userId = localStorage.getItem('userId')
      return axios
        .post(`${config.apiUrl}/users/${userId}/events`, this.event)
        .then(() => {
          this.$router.push({ path: "/conference-details" });
           localStorage.eventTitle = event.title
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    getEvent: function(eventId) {
      return axios
        .get(`${config.apiUrl}/events/${eventId}`)
        .then(function(response) {
          return response.data.event;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  created: async function() {
        const eventId = this.$route.params.eventId;
    if (eventId) {
      this.event = await this.getEventDetails(eventId);

    }
    
  }
}


</script>

<style scoped>
.create-conference {
    /* background-color: #454c45; */
    height: 100vh;
    color: #454c45;
    font-family: 'Open Sans', sans-serif;
}

.create-conference-heading {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    /* margin: 0% 50%; */
}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: 400; 
    margin: 0px 20px;
}

.back {
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 8px;
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
}

.submit a {
    color: white;
    text-decoration: none;
    font-size: 1.5em;
}

label {
  margin: 50px 0px;
}


.form {
  display: flex;
  justify-content: center;
  /* font-weight: 400; */
  /* padding-top: 0px; */
}

input {
  margin: 5px 0px 20px 0px;
  border: 1px solid #2b313f;
  padding: 10px 30px;
}

.description {
  padding: 40px 30px;
}

@media only screen and (min-width: 768px) {
  input {
    padding: 15px 200px;
    margin: 10px 0px 20px 0px;
  }

  .description {
    padding: 40px 200px;
  }

  h1 {
    font-size: 3em;
}

.form {
  padding-top: 0px;
}

.submit {
  font-size: 1.5em;
  /* padding: 10px 5px; */
}
}


</style>