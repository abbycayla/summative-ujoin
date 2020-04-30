<template>
  <div class="reply-to-item"> 
      <HeaderConference/>
      <div class="reply-heading">
      <div class="heading-title">
      <h1> Question Asked By: </h1>
      </div>
      </div>
      <h2> Username </h2>
      <div class="textarea-wrapper">
      <textarea name="question" cols="460" rows="5"></textarea>
      <textarea name="reply" cols="30" rows="5"></textarea>
      </div>
      <button class="submit"> <router-link v-bind:to="'/all-items-admin'"> Submit </router-link> </button>
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
    },
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
    margin-bottom: 20px;
    /* margin: 0% 50%; */
}

h1 {
    text-align: center;
    font-size: 2em;
    font-weight: lighter; 
    margin: 0px 10px;
}

h2 {
    font-size: 1.2em;
    font-weight: 400;
    text-align: center;
    padding-bottom: 10px;
}

.textarea-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

textarea {
    margin: 15px 0px;
    border: none;
    padding: 20px;
    width: 70%;
    outline: none;
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
    margin-top: 10px;
}

.submit a {
    color: white;
    text-decoration: none;
}


/* .back {
    margin-top: 8px;
    width: 30px;
} */



@media only screen and (min-width: 768px) {

 textarea {
    width: 50%;
}

h1 {
     font-size: 3.2em;
}

h2 {
    font-size: 1.5em;
}

.back {
    margin-top: 10px;
    margin-right: 10px;
    width: 50px;
}

ul {
  bottom: 60px;
  left: 31%;
  /* right: 50%; */
}

li {
  padding: 1% 2%;
  margin: 0px 70px;
}

}

</style>