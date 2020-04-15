<template>
  <div class="create-item"> 
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
      <HeaderConference/>
      <!-- <HeaderAdmin/> -->
      <div class="create-item-heading">
            <div class="heading-button">
                <router-link v-bind:to="'/all-items-user'"> <img class="back" src="@/assets/back-light.png"> </router-link> 
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
// import HeaderAdmin from "../admin/HeaderAdmin"

export default {

    name: "CreateItem",
    components:{
        NavBarUser,
        HeaderConference
        // HeaderAdmin
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
    margin-bottom: 30px;
}

.submit {
    padding: 5px 7px;
    border: none;
    background-color: #4baced;
    color: white;
    outline: none;
    font-size: 20px;
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