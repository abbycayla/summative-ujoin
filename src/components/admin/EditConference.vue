<template>
  <div class= "body"> 
      <h1> Edit Conference </h1>
      <p>Name:</p>
      <div></div>
      <p>Details:</p>
      <div></div>
      <p>User entrance code:</p>
  <div class="button">
    <p>Submit</p>
  </div>
      <button> <router-link v-bind:to="'/conference-details'"> Back </router-link> </button>
      <button> <router-link v-bind:to="'/create-conference'"> Delete </router-link> </button>
  </div>
</template>

<script>
export default {
    name: "EditConference",
}
</script>

<style scoped>

.body {
  background-color: #454c59;
  height: 100vh;
}

h1 {
  color: #f2f2f2;
  text-align: center;
}

p {
  font-size: 1em;
  color: #f2f2f2;
  padding-bottom: 5%;
  padding-top: 5%;
  margin-left: 10%;
}

.button {
  background-color: #54a9de;
  text-align: center;
  margin-left: 40%;
  margin-right: 40%;
  padding-top: 5px;
  padding-bottom: 5px;
}

@media only screen and (min-width: 768px) {

.button {
  margin-left: 45%;
  margin-right: 45%;
}
}

</style>