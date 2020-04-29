<template>
  <div> 
      <ul>
          <li class="my-questions"> <router-link v-bind:to="'/my-items'"> My Questions </router-link> </li>
          <li class="ask-question"> <router-link v-bind:to="'/create-item'"> Ask Question </router-link> </li> 
          <li class="exit-conference"> <router-link v-bind:to="'/'"> Exit Conference  </router-link> </li>
      </ul>
  </div>
</template>
 
<script>
 
export default {
    name: "NavBarUser",
}
</script>

<style scoped>

ul {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: white;
}

li {
    padding: 2% 5%;
    text-align: center;
    border: none;
    outline: none;
    list-style-type: none;
}

li a {
    font-size: 1.15em;
    text-decoration: none;
    color: #28313f;
    font-weight: lighter;
}

.ask-question {
    border-left: solid 1px grey;
    border-right: solid 1px grey;
}

.router-link-exact-active {
  font-weight: bold;
  color: #54a9de;
}


@media only screen and (min-width: 768px){
    ul {
        justify-content: center;
    }

    li {
        padding: 1% 12%;
        font-size: 1.3em;
        text-align: center;
    }
}

</style>