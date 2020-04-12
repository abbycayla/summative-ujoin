<template>
  <div class="create-item"> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
      <HeaderConference/>
      <div class="create-item-heading">
            <div class="heading-button">
                <button> <router-link v-bind:to="'/all-items-user'"> back </router-link> </button>
            </div>
            <div class="heading-title">
                <h1> Ask a Question </h1>
            </div>
      </div>
      <div class="create-item-body">
          <div class="body-textarea">
            <textarea name="question" cols="30" rows="15" placeholder="Write question here..."></textarea>
            </div>
            <div>
            <p> Questions are being monitored. If your question is inappropriate, it will be deleted.</p>
            <button class="submit"> Submit </button>
            </div>
      </div>
      <NavBarUser/>
  </div>
</template>

<script>
import NavBarUser from "./NavBarUser"
import HeaderConference from "./HeaderConference"

export default {

    name: "CreateItem",
    components:{
        NavBarUser,
        HeaderConference
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
    /* margin: 0% 50%; */
}

.create-item-heading div {
    /* width: 20%; */
}

.heading-title {
    /* width: 100%; */
    /* width: 100%; */

}

.heading-button {
    /* width: 10%; */
}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: 400; 
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
    /* height: 50%; */
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