<template>
  <div class="reply-to-item"> 
      <HeaderConference/>
      <div class="reply-heading">
          <div class="heading-button">
        <router-link v-bind:to="'/all-items-user'"> <img class="back" src="@/assets/back-light.png"> </router-link> 
      </div>
      <div class="heading-title">
      <h1> Question Asked By: </h1>
      </div>
      </div>
      <button> <router-link v-bind:to="'/all-items-admin'"> Submit </router-link> </button>
      <NavBarAdmin/>
  </div>
</template>

<script>
import NavBarAdmin from "./NavBarAdmin"
import HeaderConference from "../user/HeaderConference"

export default {  
    name: "ReplyToItem",
    components:{
        NavBarAdmin,
        HeaderConference
    }
}
</script>

<style scoped>
.reply-to-item {
    background-color: #454c45;
    height: 100vh;
    color: white;
    font-family: 'Open Sans', sans-serif;
}

.reply-heading {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    /* margin: 0% 50%; */
}

h1 {
    text-align: center;
    font-size: 1.5em;
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

.back {
    margin-top: 8px;
    width: 30px;
}



@media only screen and (min-width: 768px) {
.body-textarea {
    margin-bottom: 60px;
}

    textarea {
    width: 50%;
}

h1 {
    font-size: 3em;
    padding-bottom: 20px;
}

.back {
    margin-top: 10px;
    margin-right: 10px;
    width: 50px;
}

}

</style>