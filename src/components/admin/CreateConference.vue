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
        <form>
          <label> Name </label> <br />
          <input type="text"> <br />
          <label> Description </label> <br />
          <input type="text"> <br />
          <label> User Entrance Code </label> <br />
          <input type="text"> <br />
        </form>
          <button class="submit"> <router-link v-bind:to="'/conference-details'"> Create </router-link> </button>
        </div>
      </div>
  </div>
</template>

<script>

import HeaderAdmin from "./HeaderAdmin.vue"
export default {
    name: "CreateConference",
    components: {
      HeaderAdmin
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
    color: white;
    outline: none;
    font-size: 20px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 30px;
}

.submit a {
    color: white;
    text-decoration: none;
    font-weight: lighter;
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
  border: 1.3px solid #454c45;
  padding: 10px 0px;
}

@media only screen and (min-width: 768px) {
  input {
    padding: 15px 200px;
    margin: 10px 0px 20px 0px;
  }

  h1 {
    font-size: 3em;
}

.form {
  padding-top: 20px;
}
}

</style>