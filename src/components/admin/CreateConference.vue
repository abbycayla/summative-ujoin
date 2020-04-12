<template>
  <div class="create-conference"> 
    <div class="create-conference-heading">
      <div>
      <button class="back"> <router-link v-bind:to="'/admin-login'"> Back </router-link> </button>
      </div>
      <div>
      <h1> Create a Conference </h1>
      </div>
      </div>
      <label> Name </label> <br />
      <input type="text"> <br />
      <label> Description </label> <br />
      <input type="text"> <br />
      <label> Code </label> <br />
      <input type="text"> <br />
      <button> <router-link v-bind:to="'/conference-details'"> Create </router-link> </button>
  </div>
</template>

<script>
export default {
    name: "CreateConference"
}
</script>

<style scoped>
.create-conference {
    background-color: #454c45;
    height: 100vh;
    color: white;
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

.body-textarea {
    width: 100%;
    /* height: 100%; */
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

textarea {
    border: none;
    padding: 20px;
    width: 70%;
    outline: none;
    /* height: 70%; */
    /* border-radius: 10%; */
}

p {
    text-align: center;
    margin: 0px 20%;
    font-weight: lighter;
    font-size: .9em;
    margin-bottom: 40px;
}

.submit {
    padding: 5px 10px;
    border: none;
    background-color: #54a9de;
    color: #f2f2f2;
    box-shadow: 3px 5px 5px rgb(49, 49, 49);
    outline: none;
    font-size: 1.2em;
    font-weight: lighter;
}

</style>