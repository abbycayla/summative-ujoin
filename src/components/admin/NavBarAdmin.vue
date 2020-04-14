<template>
  <div> 
      <ul>
          <li class="all-questions"> <router-link v-bind:to="'/all-items-admin'"> All Questions </router-link> </li>
          <li class="end-conference"> <router-link v-bind:to="'/conference-details'"> End Conference  </router-link> </li>
      </ul>
  </div>
</template>

<script>

export default {
    name: "NavBarAdmin",
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
    padding: 10px 50px;
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

.all-questions {
    border-right: solid 1px grey;
}

.end-conference {
    background-color: #54a9da;
}

.end-conference a {
    color: white;
}

.router-link-exact-active {
  font-weight: bold;
  color: #54a9de;
}


</style>