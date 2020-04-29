<template>
  <div class="body">
      <h1> Questions </h1>
      <div class="item-box">
          <div class="item-content">
        <h3>name</h3>
      <h2> <router-link v-bind:to="'/reply-to-item'"> Question jdnijksnvkd </router-link> </h2>
      </div>
      <div class="item-options">
          <p class="reply">Replied</p>
          <p>Delete</p>
          </div>
      </div>
      <div class="item-box">
          <div class="item-content">
        <h3>name</h3>
      <h2> <router-link v-bind:to="'/reply-to-item'"> Question jdnijksnvkd </router-link> </h2>
      </div>
      <div class="item-options">
          <p class="reply">Replied</p>
          <p>Delete</p>
          </div>
      </div>
      <div class="item-box">
          <div class="item-content">
        <h3>name</h3>
      <h2> <router-link v-bind:to="'/reply-to-item'"> Question jdnijksnvkd </router-link> </h2>
      </div>
      <div class="item-options">
          <p class="reply">Replied</p>
          <p>Delete</p>
          </div>
      </div>
      <NavBarAdmin/>
  </div>
</template>

<script>
import NavBarAdmin from "./NavBarAdmin"

export default {

    name: "AllItemsAdmin",
    components:{
        NavBarAdmin
    }
}
</script>

<style scoped>

.body {
    background-color: #454C59;
    height: 100vh;
}

.item-box {
  display: flex;
  background-color: #f2f2f2;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  }

.item-options {
  padding-bottom: 10px;
  border-left: #454C59 2px solid;
  width: 40%;
  font-family: 'Open Sans', sans-serif;
  color: #454C59;
  padding-bottom: 10px;
}

.reply {
  border-bottom: #454C59 2px solid;
  background-color: #54a9de;
  padding-bottom: 10px;
}

h1 {
    font-family: 'Open Sans', sans-serif;
    margin-bottom: 10%;
    text-align: center;
    color: #F2F2F2;
    font-size: 1.8em;
}

h3 {
  color: #454C59; 
  font-family: 'Open Sans', sans-serif;
  font-size: 1.3em;
}

a {
  text-decoration: none;
  color: #454C59;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
  font-weight: lighter;
}

p {
  padding-top: 10px;
}

@media only screen and (min-width: 768px) {

  .item-box {
    margin-left: 20%;
    margin-right: 20%;
  }

  .item-content {
    width: 80%;
  }

  .item-options{
    width: 40%;
  }

  p {
    padding-left: 20px;
  }

  h3 {
    padding-left: 20px;
  }

  h2 {
    padding-left: 20px;
  }
}
</style>