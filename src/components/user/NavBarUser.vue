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

h1 {
    text-align: center;
    font-weight: lighter;
}


</style>